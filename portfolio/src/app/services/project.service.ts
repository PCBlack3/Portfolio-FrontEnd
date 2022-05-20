import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Project } from '../models/project.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:8080/api/project'

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  public getProject(page: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.URL + "/person/" + page);
  }

  public getProjectById(page: string): Observable<Project>{
    return this.http.get<Project>(this.URL + "/" + page);
  }

  public postProject(form: Project, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + "/person/" + page, form)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public deleteProject(id : any): Observable<ResponseI>{
    let direccion = (this.URL + '/' + id);
    return this.http.delete<ResponseI>(direccion)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}

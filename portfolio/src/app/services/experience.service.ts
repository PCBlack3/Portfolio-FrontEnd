import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Experience } from '../models/experience.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL = 'http://localhost:8080/api/experience'

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  public getExperience(page: number): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.URL + '/person/' + page);
  }

  public getExperienceById(page: string): Observable<Experience>{
    return this.http.get<Experience>(this.URL + "/" + page);
    
  }

  public postExperience(form: Experience, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + '/person/' + page, form)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public deleteExperience(id:any): Observable<ResponseI>{
    let direccion = (this.URL + '/' + id);
    return this.http.delete<ResponseI>(direccion)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  
}

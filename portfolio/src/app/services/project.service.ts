import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:8080/api/project'

  constructor(private http: HttpClient) { }

  public getProject(page: number): Observable<Project[]> {
    return this.http.get<Project[]>(this.URL + "/person/" + page);
  }

  public postProject(form: Project, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + "/person/" + page, form);
  }

  public deleteProject(id : any): Observable<ResponseI>{
    let direccion = (this.URL + '/' + id);
    return this.http.delete<ResponseI>(direccion);
  }
}

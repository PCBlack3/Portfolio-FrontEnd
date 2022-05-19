import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL = 'http://localhost:8080/api/experience'

  constructor(private http: HttpClient) { }

  public getExperience(page: number): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.URL + '/person/' + page);
  }

  public postExperience(form: Experience, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + '/person/' + page, form);
  }

  public deleteExperience(id:any): Observable<ResponseI>{
    let direccion = (this.URL + '/' + id);
    return this.http.delete<ResponseI>(direccion);
  }

  
}

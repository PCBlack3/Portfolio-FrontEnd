import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = 'http://localhost:8080/api/education';

  constructor(private http: HttpClient) { }

  public getEducation(page: number): Observable<Education[]> {
    return this.http.get<Education[]>(this.URL + '/person/' + page);
  }

  public postEducation(form: Education, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + '/person/' + page, form);
  }

  public deleteEducation(id: any): Observable<ResponseI>{
    return this.http.delete<ResponseI>(this.URL + '/person/' + id);
  }
}


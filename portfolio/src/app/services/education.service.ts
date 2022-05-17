import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = 'http://localhost:8080/api/education';

  constructor(private http: HttpClient) { }

  public getEducation(page: number): Observable<Education[]> {
    return this.http.get<Education[]>(this.URL + '/person/' + page);
  }

  
}


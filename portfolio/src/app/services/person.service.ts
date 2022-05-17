import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:8080/api/person';
  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.URL + '/1')
  }
}


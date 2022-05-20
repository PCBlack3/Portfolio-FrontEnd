import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Person } from '../models/person.model';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:8080/api/person';

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }



  public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.URL + '/1')
  }
}


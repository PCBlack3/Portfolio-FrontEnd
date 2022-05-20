import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Education } from '../models/education.model';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  

  URL = 'http://localhost:8080/api/education';

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  public getEducation(page: number): Observable<Education[]> {
    return this.http.get<Education[]>(this.URL + '/person/' + page);
  }

  public getEducationById(page: string): Observable<Education>{
    return this.http.get<Education>(this.URL + "/" + page);
  }

  public postEducation(form: Education, page: number): Observable<ResponseI>{
    return this.http.post<ResponseI>(this.URL + '/person/' + page, form)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  public deleteEducation(id: any): Observable<ResponseI>{
    let direccion = (this.URL + '/' + id);
    return this.http.delete<ResponseI>(direccion)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}


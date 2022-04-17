import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let urlApi = '';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(url: string): Observable<any> {
    return this.http.get(`${urlApi}/${url}`).pipe(catchError(this.handleError));
  }

  post(url: string, data: any, options: any = {}): Observable<any> {

    return this.http
      .post(`${urlApi}/${url}`, data, options)
      .pipe(catchError(this.handleError));
  }

  put(url: string, data: any): Observable<any> {
    return this.http
      .put(`${urlApi}/${url}`, data)
      .pipe(catchError(this.handleError));
  }

  delete(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    let options: any = {
      responseType: 'text',
    };
    return this.http
      .delete(url, options)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  handleError(error: any) {
    return throwError(() => error);
  }
}

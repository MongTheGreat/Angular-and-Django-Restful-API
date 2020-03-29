import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Injectable } from '@angular/core';
import {User} from '../models/user';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `http://127.0.0.1:8000/api/auth/users/`;  // URL to web api
  private handleError: HandleError;
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler)
     {
      this.handleError = httpErrorHandler.createHandleError('UserService');
     }

  /** POST: register a new user to the database */
  register (user: User): Observable<User> {
  return this.http.post<User>(`http://127.0.0.1:8000/api/auth/users/`,user)
    .pipe(
      catchError(this.handleError('registerUser', user))
    );
  }



   /** POST: login in a user  */
   login (email: string, password:string): Observable<any> {
    return this.http.post<any>(this.baseUrl, {email,password}, httpOptions)
      .pipe(
        catchError(this.handleError('login'))
      );
  }
}

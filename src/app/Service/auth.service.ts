import { Injectable } from '@angular/core';
import {LogginInfo} from '../model/loggin-info';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/jwt-response';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  isUserLoggedIn() {
     const user = this.cookieService.get('AuthToken');
     return !(user === '');
  }

  tryLoggin(credentials: LogginInfo) {
    return this.http.post<JwtResponse>('api/auth/signin', credentials, {observe: 'response'});
  }
}

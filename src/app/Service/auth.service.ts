import { Injectable } from '@angular/core';
import {LogginInfo} from '../model/loggin-info';
import {Observable} from 'rxjs';
import {JwtResponse} from '../model/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  isUserLoggedIn() {
    // const user = this.cookieService.get('AuthUsername');
    // return !(user === '');
  }

  getUserAuthority() {
    // return this.cookieService.get('AuthAuthorities') === '[{"authority":"ROLE_ADMIN"}]';
  }

  tryLoggin(credentials: LogginInfo) {
    // return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
}

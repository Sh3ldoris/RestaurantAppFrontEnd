import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];
  authorities: string;
  constructor(private router: Router,
              private cookieService: CookieService) { }

  signOut() {
    this.cookieService.deleteAll();
  }

  public saveToken(token: string) {
    this.cookieService.delete(TOKEN_KEY);
    this.cookieService.set(TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.cookieService.get(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    this.cookieService.delete(USERNAME_KEY);
    this.cookieService.set(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return this.cookieService.get(USERNAME_KEY);
  }

  public saveAuthRole(role: string) {
    this.cookieService.delete(AUTHORITIES_KEY);
    this.cookieService.set(AUTHORITIES_KEY, role);
  }

  public getAuthorities(): string {
    if (this.cookieService.get(TOKEN_KEY)) {
      return this.cookieService.get(AUTHORITIES_KEY);
    }
  }

  public delete() {
    this.cookieService.deleteAll();
  }
}

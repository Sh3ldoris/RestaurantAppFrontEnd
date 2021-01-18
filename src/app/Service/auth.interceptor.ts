import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {TokenService} from './token.service';
import {MatDialog} from '@angular/material/dialog';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private tokenSerice: TokenService,
              public dialog: MatDialog,
              private router: Router) {
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.tokenSerice.signOut();
      this.dialog.closeAll();
      this.router.navigate(['/']);
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.authService.isUserLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.cookieService.get('AuthToken')
        }
      });
    }

    return next.handle(request).pipe(catchError(x => this.handleAuthError(x)));
  }
}

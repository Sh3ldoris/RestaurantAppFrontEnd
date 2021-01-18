import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Menu} from '../model/menu';
import {CookieService} from 'ngx-cookie-service';

const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpClient,
              private cookieService: CookieService) { }

  public getCurrentMenu() {
      return this.httpService.get<Menu>('api/public/getCurrentMenu');
  }

  public saveMenu(menu: Menu) {
    return this.httpService.post<Menu>('api/secured/saveMenu', menu, this.httpOptions);
  }
}

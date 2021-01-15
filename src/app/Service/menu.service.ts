import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Menu} from '../model/menu';


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

  constructor(private httpService: HttpClient) { }

  public getCurrentMenu() {
      return this.httpService.get<Menu>('/public/getCurrentMenu');
  }

  public saveMenu(menu: Menu) {
      return this.httpService.post<Menu>('/secured/saveMenu', menu, this.httpOptions);
  }
}

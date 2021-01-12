import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Menu} from "../model/menu";


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpClient) { }

  public getCurrentMenu() {
      return this.httpService.get<Menu>('/public/getCurrentMenu');
  }
}

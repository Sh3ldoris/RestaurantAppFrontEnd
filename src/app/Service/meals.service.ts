import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainMeal} from '../model/main-meal';
import {Soup} from '../model/soup';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpClient) { }

  public getAllMainMeals() {
    return this.httpService.get<MainMeal[]>('api/secured/getAllMainMeals');
  }

  public getAllSoups() {
    return this.httpService.get<Soup[]>('api/secured/getAllSoups');
  }

  public deleteSoup(id: number) {
    return this.httpService.delete('api/secured/deleteSoup/' + id, this.httpOptions);
  }

  public saveSoup(soup: Soup) {
    return this.httpService.post('api/secured/saveSoup', soup);
  }

  public deleteMainMeal(id: number) {
    return this.httpService.delete('api/secured/deleteMainMeal/' + id);
  }

  public saveMainMeal(meal: MainMeal) {
    return this.httpService.post('api/secured/saveMainMeal', meal);
  }
}

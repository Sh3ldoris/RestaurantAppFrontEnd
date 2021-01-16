import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainMeal} from '../model/main-meal';
import {Soup} from '../model/soup';

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
    return this.httpService.get<MainMeal[]>('/secured/getAllMainMeals');
  }

  public getAllSoups() {
    return this.httpService.get<Soup[]>('/secured/getAllSoups');
  }

  public deleteSoup(id: number) {
    return this.httpService.delete('/secured/deleteSoup/' + id, this.httpOptions);
  }

  public saveSoup(soup: Soup) {
    return this.httpService.post('/secured/saveSoup', soup, this.httpOptions);
  }

  public deleteMainMeal(id: number) {
    return this.httpService.delete('/secured/deleteMainMeal/' + id, this.httpOptions);
  }

  public saveMainMeal(meal: MainMeal) {
    return this.httpService.post('/secured/saveMainMeal', meal, this.httpOptions);
  }
}

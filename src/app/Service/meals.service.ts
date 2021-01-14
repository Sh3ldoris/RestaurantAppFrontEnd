import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MainMeal} from '../model/main-meal';
import {Soup} from '../model/soup';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpClient) { }

  public getAllMainMeals() {
    return this.httpService.get<MainMeal[]>('/secured/getAllMainMeals');
  }

  public getAllSoups() {
    return this.httpService.get<Soup[]>('/secured/getAllSoups');
  }
}

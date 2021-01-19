import {EventEmitter, Injectable, Output} from '@angular/core';
import {Soup} from '../model/soup';
import {MainMeal} from '../model/main-meal';

@Injectable({
  providedIn: 'root'
})
export class AssignMealsService {

  @Output() assignedSoups: EventEmitter<Soup[]> = new EventEmitter();
  @Output() assignedMainMeal: EventEmitter<Soup[]> = new EventEmitter();

  private soups: Soup[];
  private meals: MainMeal[];

  constructor() { }

  public setSoupstoAssign(soups: Soup[]) {
    this.soups = soups;
    this.assignedSoups.emit(this.soups);
  }

  public setMainMealstoAssign(meals: MainMeal[]) {
    this.meals = meals;
    this.assignedMainMeal.emit(this.meals);
  }

}

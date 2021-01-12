import {MainMeal} from './main-meal';
import {Soup} from './soup';

export interface Menu {
  id: number;
  menuDate: string;
  mainMeals: MainMeal[];
  soups: Soup[];
}

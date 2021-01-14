import { Component, OnInit } from '@angular/core';
import {MainMeal} from '../../model/main-meal';
import {MealsService} from '../../Service/meals.service';
import {Soup} from '../../model/soup';
import {Menu} from '../../model/menu';
import {MenuService} from '../../Service/menu.service';

@Component({
  selector: 'app-add-meal-dialog-content',
  templateUrl: './add-meal-dialog-content.component.html',
  styleUrls: ['./add-meal-dialog-content.component.scss']
})
export class AddMealDialogContentComponent implements OnInit {

  meals: MainMeal[] = [];
  currentMenu: Menu;

  constructor(private mealsServie: MealsService,
              private menuService: MenuService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mealsServie.getAllSoups().subscribe(
      (data: Soup[]) => {
          this.meals = data;
      }, error => {
        console.error(error);
      }
    );

    this.menuService.getCurrentMenu().subscribe(
      (data: Menu) => {
          this.currentMenu = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {Soup} from '../../../model/soup';
import {MealsService} from '../../../Service/meals.service';
import {MatDialog} from '@angular/material/dialog';
import {UpdateSoupDialogComponent} from '../../../admin-components/update-soup-dialog/update-soup-dialog.component';
import {NewSoupDialogComponent} from '../../../admin-components/new-soup-dialog/new-soup-dialog.component';
import {MainMeal} from '../../../model/main-meal';
import {UpdateMainMealDialogComponent} from '../../../admin-components/update-main-meal-dialog/update-main-meal-dialog.component';
import {NewMainMealDialogComponent} from '../../../admin-components/new-main-meal-dialog/new-main-meal-dialog.component';

@Component({
  selector: 'app-main-meals-list',
  templateUrl: './main-meals-list.component.html',
  styleUrls: ['./main-meals-list.component.scss']
})
export class MainMealsListComponent implements OnInit {



  mainMeals: MainMeal[] = [];
  isLoading = true;
  constructor(private mealService: MealsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mealService.getAllMainMeals().subscribe(
      (data: Soup[]) => {
        this.mainMeals = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
      });
  }

  openUpdateDialog(meal: MainMeal) {
    const dialogRef = this.dialog.open(UpdateMainMealDialogComponent, {data: {share: meal}});
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      });
  }

  openNewMealDialog() {
    const dialogRef = this.dialog.open(NewMainMealDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      });
  }

  removeMainMeal(meal: MainMeal) {
    this.isLoading = true;
    this.mealService.deleteMainMeal(meal.id).subscribe(
      data => {
        console.log(data);
        this.loadData();
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

}

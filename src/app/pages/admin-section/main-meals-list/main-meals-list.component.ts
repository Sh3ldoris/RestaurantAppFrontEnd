import { Component, OnInit } from '@angular/core';
import {Soup} from '../../../model/soup';
import {MealsService} from '../../../Service/meals.service';
import {MatDialog} from '@angular/material/dialog';
import {MainMeal} from '../../../model/main-meal';
import {UpdateMainMealDialogComponent} from '../../../admin-components/update-main-meal-dialog/update-main-meal-dialog.component';
import {NewMainMealDialogComponent} from '../../../admin-components/new-main-meal-dialog/new-main-meal-dialog.component';
import {NotificationsService} from '../../../Service/notifications.service';

@Component({
  selector: 'app-main-meals-list',
  templateUrl: './main-meals-list.component.html',
  styleUrls: ['./main-meals-list.component.scss']
})
export class MainMealsListComponent implements OnInit {

  mainMeals: MainMeal[] = [];
  isLoading = true;
  constructor(private mealService: MealsService,
              private dialog: MatDialog,
              private notificateService: NotificationsService) { }

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
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      });
  }

  openUpdateDialog(meal: MainMeal) {
    const dialogRef = this.dialog.open(UpdateMainMealDialogComponent, {data: {share: meal}});
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
          this.notificateService.notificate('Jedlo bolo úspešne upravené!', 'Ok');
        }
      }, error => {
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      });
  }

  openNewMealDialog() {
    const dialogRef = this.dialog.open(NewMainMealDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
          this.notificateService.notificate('Jedlo bolo úspešne pridané!', 'Ok');
        }
      }, error => {
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      });
  }

  removeMainMeal(meal: MainMeal) {
    this.isLoading = true;
    this.mealService.deleteMainMeal(meal.id).subscribe(
      data => {
        this.loadData();
        this.notificateService.notificate('Jedlo bolo úspešne odstránené!', 'Ok');
      },
      error => {
        console.error(error);
        this.isLoading = false;
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      }
    );
  }

}

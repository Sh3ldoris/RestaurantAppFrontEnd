import { Component, OnInit } from '@angular/core';
import {MainMeal} from '../../../model/main-meal';
import {MatDialog} from '@angular/material/dialog';
import {Soup} from '../../../model/soup';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MenuService} from '../../../Service/menu.service';
import {AssignMainMealsComponent} from '../../../admin-components/assign-main-meals/assign-main-meals.component';
import {AssignSoupsComponent} from '../../../admin-components/assign-soups/assign-soups.component';
import {AssignMealsService} from '../../../Service/assign-meals.service';
import {NotificationsService} from '../../../Service/notifications.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.scss']
})
export class NewMenuComponent implements OnInit {

  myForm: FormGroup;
  mainMeals: MainMeal[] = [];
  soups: Soup[] = [];
  isLoading = true;

  private today = new Date('2021-1-23');

  constructor(private menuService: MenuService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private assignMeals: AssignMealsService,
              private notificateService: NotificationsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.soups = [];
    this.mainMeals = [];
    this.myForm = this.fb.group({
      dateVal: [null, [Validators.required]]
    });
    this.assignMeals.assignedSoups.subscribe(
      (data: Soup[]) => {
        this.soups = data;
      });

    this.assignMeals.assignedMainMeal.subscribe(
      (data: MainMeal[]) => {
        this.mainMeals = data;
      });
  }

  openNewMealDialog() {
    const dialogRef = this.dialog.open(AssignMainMealsComponent, {data: {meals: this.mainMeals}});
  }

  openNewSoupsDialog() {
    const dialogRef = this.dialog.open(AssignSoupsComponent, {data: {soups: this.soups}});
  }

  removeMainMeal(meal: MainMeal) {
    const index = this.mainMeals.indexOf(meal, 0);
    if (index > -1) {
      this.mainMeals.splice(index, 1);
    }
  }

  removeSoup(soup: Soup) {
    const index = this.soups.indexOf(soup, 0);
    if (index > -1) {
      this.soups.splice(index, 1);
    }
  }

  submitNewMenu() {
    const menu = {
      id: 0,
      menuDate: this.myForm.get('dateVal').value,
      mainMeals: this.mainMeals,
      soups: this.soups
    };
    this.menuService.saveMenu(menu).subscribe(
      data => {
        this.notificateService.notificate('Menu bolo úspešne pridané!', 'Ok');
        this.soups = [];
        this.mainMeals = [];
        this.myForm = this.fb.group({
          dateVal: [null, [Validators.required]]
        });
      }, error => {
        this.notificateService.notificate('Menu sa nepodarilo uložiť!', 'Ok');
      });
  }

  cancel() {
    this.soups = [];
    this.mainMeals = [];
    this.myForm = this.fb.group({
      dateVal: [null, [Validators.required]]
    });
  }

  myFilter  = (d: Date) => {
    const day = (d || new Date()).getDay();

    return day !== 0 && day !== 6;
  }

}

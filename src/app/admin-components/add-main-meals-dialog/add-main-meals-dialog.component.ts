import { Component, OnInit } from '@angular/core';
import {Soup} from '../../model/soup';
import {Menu} from '../../model/menu';
import {MealsService} from '../../Service/meals.service';
import {MenuService} from '../../Service/menu.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatListOption} from '@angular/material/list';
import {MainMeal} from '../../model/main-meal';

@Component({
  selector: 'app-add-main-meals-dialog',
  templateUrl: './add-main-meals-dialog.component.html',
  styleUrls: ['./add-main-meals-dialog.component.scss']
})
export class AddMainMealsDialogComponent implements OnInit {

  meals: MainMeal[] = [];
  currentMenu: Menu;
  rowHeight: string;
  isLoadingMeals = true;
  isLoadingMenu = true;


  constructor(private mealsService: MealsService,
              private menuService: MenuService,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.rowHeight = '10vh';
    this.detectBreakpoint();
    this.loadData();
  }

  loadData() {
    this.menuService.getCurrentMenu().subscribe(
      (data: Menu) => {
        this.currentMenu = data;
        this.isLoadingMenu = false;
      },
      error => {
        console.error(error);
        this.isLoadingMenu = false;
      });

    this.mealsService.getAllMainMeals().subscribe(
      (data: MainMeal[]) => {
        this.meals = data;
        this.isLoadingMeals = false;
      }, error => {
        console.error(error);
        this.isLoadingMeals = false;
      });
  }

  isSelected(id: number): boolean {
    return this.currentMenu.mainMeals.filter(s => s.id === id).length > 0;
  }

  onGroupsChange(options: MatListOption[]) {
    this.currentMenu.mainMeals = [];
    options.map(o => this.currentMenu.mainMeals.push(o.value));
  }

  private detectBreakpoint(): void {
    this.breakpointObserver.observe('(max-width: 376px)').subscribe( result => {
      this.rowHeight = result.matches ? '20vh' : '10vh';
    });
  }

  saveMenu() {
    this.menuService.saveMenu(this.currentMenu).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}

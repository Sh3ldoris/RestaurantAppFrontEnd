import {Component, Inject, OnInit} from '@angular/core';
import {MainMeal} from '../../model/main-meal';
import {Menu} from '../../model/menu';
import {MealsService} from '../../Service/meals.service';
import {MenuService} from '../../Service/menu.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatListOption} from '@angular/material/list';
import {AssignMealsService} from '../../Service/assign-meals.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-assign-main-meals',
  templateUrl: './assign-main-meals.component.html',
  styleUrls: ['./assign-main-meals.component.scss']
})
export class AssignMainMealsComponent implements OnInit {

  meals: MainMeal[] = [];
  selectedMeals: MainMeal[] = [];
  rowHeight: string;
  isLoadingMeals = true;
  isLoadingMenu = false;


  constructor(private mealsService: MealsService,
              private menuService: MenuService,
              private breakpointObserver: BreakpointObserver,
              private assings: AssignMealsService,
              @Inject(MAT_DIALOG_DATA) public data: {meals: MainMeal[]}) { }

  ngOnInit(): void {
    this.selectedMeals = this.data.meals;
    this.rowHeight = '10vh';
    this.detectBreakpoint();
    this.loadData();
  }

  loadData() {
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
    return this.selectedMeals.filter(s => s.id === id).length > 0;
  }

  onGroupsChange(options: MatListOption[]) {
    this.selectedMeals = [];
    options.map(o => this.selectedMeals.push(o.value));
  }

  private detectBreakpoint(): void {
    this.breakpointObserver.observe('(max-width: 376px)').subscribe( result => {
      this.rowHeight = result.matches ? '20vh' : '10vh';
    });
  }

  saveMenu() {
    this.assings.setMainMealstoAssign(this.selectedMeals);
  }

}

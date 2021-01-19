import {Component, Inject, OnInit} from '@angular/core';
import {Soup} from '../../model/soup';
import {Menu} from '../../model/menu';
import {MealsService} from '../../Service/meals.service';
import {MenuService} from '../../Service/menu.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatListOption} from '@angular/material/list';
import {AssignMealsService} from '../../Service/assign-meals.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MainMeal} from '../../model/main-meal';

@Component({
  selector: 'app-assign-soups',
  templateUrl: './assign-soups.component.html',
  styleUrls: ['./assign-soups.component.scss']
})
export class AssignSoupsComponent implements OnInit {



  meals: Soup[] = [];
  selectedMeals: Soup[] = [];
  rowHeight: string;
  isLoadingMeals = true;
  isLoadingMenu = false;


  constructor(private mealsService: MealsService,
              private menuService: MenuService,
              private breakpointObserver: BreakpointObserver,
              private assigns: AssignMealsService,
              @Inject(MAT_DIALOG_DATA) public data: {soups: Soup[]}) { }

  ngOnInit(): void {
    this.rowHeight = '8vh';
    this.detectBreakpoint();
    this.loadData();
  }

  loadData() {
    this.selectedMeals = this.data.soups;

    this.mealsService.getAllSoups().subscribe(
      (data: Soup[]) => {
        this.meals = data;
        this.isLoadingMeals = false;
      }, error => {
        console.error(error);
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
    this.breakpointObserver.observe('(max-width: 350px)').subscribe( result => {
      this.rowHeight = result.matches ? '12vh' : '8vh';
    });
  }

  saveMenu() {
    this.assigns.setSoupstoAssign(this.selectedMeals);
  }

}

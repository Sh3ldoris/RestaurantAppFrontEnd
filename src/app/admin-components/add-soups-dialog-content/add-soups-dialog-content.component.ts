import {Component, OnInit} from '@angular/core';
import {MealsService} from '../../Service/meals.service';
import {Soup} from '../../model/soup';
import {Menu} from '../../model/menu';
import {MenuService} from '../../Service/menu.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {MatListOption} from '@angular/material/list';

@Component({
  selector: 'app-add-meal-dialog-content',
  templateUrl: './add-soups-dialog-content.component.html',
  styleUrls: ['./add-soups-dialog-content.component.scss']
})
export class AddSoupsDialogContentComponent implements OnInit {

  meals: Soup[] = [];
  currentMenu: Menu;
  rowHeight: string;
  isLoadingMeals = true;
  isLoadingMenu = true;


  constructor(private mealsService: MealsService,
              private menuService: MenuService,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.rowHeight = '8vh';
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
      });

    this.mealsService.getAllSoups().subscribe(
      (data: Soup[]) => {
        this.meals = data;
        this.isLoadingMeals = false;
      }, error => {
        console.error(error);
      });
  }

  isSelected(id: number): boolean {
    return this.currentMenu.soups.filter(s => s.id === id).length > 0;
  }

  onGroupsChange(options: MatListOption[]) {
    this.currentMenu.soups = [];
    options.map(o => this.currentMenu.soups.push(o.value));
    console.log(this.currentMenu.soups);
  }

  private detectBreakpoint(): void {
    this.breakpointObserver.observe('(max-width: 350px)').subscribe( result => {
      this.rowHeight = result.matches ? '12vh' : '8vh';
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

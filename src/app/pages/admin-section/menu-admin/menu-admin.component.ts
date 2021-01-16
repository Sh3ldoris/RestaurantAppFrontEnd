import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../Service/menu.service';
import {Menu} from '../../../model/menu';
import {MatDialog} from '@angular/material/dialog';
import {AddSoupsDialogContentComponent} from '../../../admin-components/add-soups-dialog-content/add-soups-dialog-content.component';
import {Soup} from '../../../model/soup';
import {MainMeal} from '../../../model/main-meal';
import {AddMainMealsDialogComponent} from "../../../admin-components/add-main-meals-dialog/add-main-meals-dialog.component";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  navbarOpen = false;
  isLoading = true;
  menu: Menu;
  menuDate: Date = new Date();
  days = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];
  constructor(
    private menuService: MenuService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.menuService.getCurrentMenu().subscribe(
      (data: Menu) => {
        this.menu = data;
        this.menuDate = new Date(this.menu.menuDate);
        this.isLoading = false;
      },

      error => {
        console.error(error);
        this.isLoading = false;
      });
  }

  openSoupsDialog() {
    const dialogRef = this.dialog.open(AddSoupsDialogContentComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      });
  }

  openMainMealsDialog() {
    const dialogRef = this.dialog.open(AddMainMealsDialogComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === true) {
          this.isLoading = true;
          this.loadData();
        }
      }
    );
  }

  removeSoup(soup: Soup) {
    this.isLoading = true;
    const index = this.menu.soups.indexOf(soup, 0);
    if (index > -1) {
      this.menu.soups.splice(index, 1);
    }
    this.menuService.saveMenu(this.menu).subscribe(
      data => {
        console.log(data);
        this.loadData();
      }
    );
  }

  removeMainMeal(meal: MainMeal) {
    this.isLoading = true;
    const index = this.menu.mainMeals.indexOf(meal, 0);
    if (index > -1) {
      this.menu.mainMeals.splice(index, 1);
    }
    this.menuService.saveMenu(this.menu).subscribe(
      data => {
        console.log(data);
        this.loadData();
      }
    );
  }

  getNameOfADat(): string {
    return this.days[this.menuDate.getDay()];
  }

}

import { Component, OnInit } from '@angular/core';
import {MainMeal} from '../../../model/main-meal';
import {MealsService} from '../../../Service/meals.service';
import {MatDialog} from '@angular/material/dialog';
import {Soup} from '../../../model/soup';
import {UpdateMainMealDialogComponent} from '../../../admin-components/update-main-meal-dialog/update-main-meal-dialog.component';
import {NewMainMealDialogComponent} from '../../../admin-components/new-main-meal-dialog/new-main-meal-dialog.component';
import {MenuService} from '../../../Service/menu.service';
import {Menu} from '../../../model/menu';
import {NotificationsService} from '../../../Service/notifications.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  menus: Menu[] = [];
  isLoading = true;
  constructor(private menuService: MenuService,
              private notificateService: NotificationsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.menuService.getAllMenus().subscribe(
      (data: Menu[]) => {
        this.menus = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      });
  }


  removeMenu(meal: Menu) {
    this.isLoading = true;
    this.menuService.deleteMenu(meal.id).subscribe(
      data => {
        console.log(data);
        this.loadData();
        this.notificateService.notificate('Menu bolo úspešne odstránené!', 'Ok');
      },
      error => {
        console.error(error);
        this.isLoading = false;
        this.notificateService.notificate('Niečo je zle!', 'Ok');
      }
    );
  }

  getFormatedDate(date: string): string {
    const d = new Date(date);
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
  }

  isMenuOld(date: string): boolean {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today ;
  }

}

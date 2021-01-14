import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../Service/menu.service';
import {Menu} from '../../../model/menu';
import {MatDialog} from '@angular/material/dialog';
import {AddMealDialogContentComponent} from '../../../admin-components/add-meal-dialog-content/add-meal-dialog-content.component';

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

  constructor(
    private menuService: MenuService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.menuService.getCurrentMenu().subscribe(
      (data: Menu) => {
        this.menu = data;
        this.menuDate = new Date(this.menu.menuDate);
        this.isLoading = false;
      },

      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddMealDialogContentComponent);
  }


}

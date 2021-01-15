import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../Service/menu.service';
import {Menu} from '../../model/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  menu: Menu;
  menuDate: Date = new Date();
  isLoading = true;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getCurrentMenu().subscribe(
      (data: Menu) => {
            this.menu = data;
            this.menuDate = new Date(this.menu.menuDate);
            this.isLoading = false;
      }
    );
  }

}

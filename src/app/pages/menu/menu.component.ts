import { Component, OnInit } from '@angular/core';
import {Menu} from '../../model/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  private menu: Menu = new Menu();

  constructor() { }

  public getMenu(): Menu {
    return this.menu;
  }
}

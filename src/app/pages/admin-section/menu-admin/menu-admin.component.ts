import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  isColapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.isColapsed = !this.isColapsed;
  }

}

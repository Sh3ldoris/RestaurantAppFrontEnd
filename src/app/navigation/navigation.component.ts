import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  navbarOpen = false;

  constructor(public authservice: AuthService) { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

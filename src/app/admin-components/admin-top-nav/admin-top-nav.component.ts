import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../Service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-top-nav',
  templateUrl: './admin-top-nav.component.html',
  styleUrls: ['./admin-top-nav.component.scss']
})
export class AdminTopNavComponent implements OnInit {

  navbarOpen = false;
  constructor(private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  signout() {
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }

}

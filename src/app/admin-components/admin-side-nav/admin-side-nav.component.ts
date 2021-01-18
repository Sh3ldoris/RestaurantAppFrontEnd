import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../Service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss']
})
export class AdminSideNavComponent implements OnInit {

  constructor(private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signout() {
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }

}

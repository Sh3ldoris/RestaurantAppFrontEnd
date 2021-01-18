import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../Service/auth.service';
import {TokenService} from '../../Service/token.service';
import {errorObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isPasswordRight = true;
  isLoginInformationRight = true;
  isLoading = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authservice: AuthService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.isLoading = false;

    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });

    if (this.authservice.isUserLoggedIn()) {
      this.router.navigate(['/admin/menu']);
    }
  }

  submit() {
    // tslint:disable-next-line:forin
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }

    this.isLoading = true;

    this.authservice.tryLoggin({ username : this.form.get('username').value,  password : this.form.get('password').value}).subscribe(
     (data: any) => {
       this.tokenService.delete();
       this.tokenService.saveToken(data.body.token);
       this.tokenService.saveUsername(data.body.username);
       this.tokenService.saveAuthRole(data.body.role);

       this.router.navigate(['/admin/menu']);
    },
    (error: any) => {
      console.error(error);
      this.isLoading = false;
      window.location.reload();
    });
  }
}

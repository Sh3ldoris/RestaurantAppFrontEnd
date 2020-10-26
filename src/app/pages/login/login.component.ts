import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  isPasswordRight = true;
  isLoginInformationRight = true;

  constructor(private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit() {
  }

}

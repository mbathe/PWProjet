import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sigin: boolean = false;
  login: boolean = true;
  loginFailed: boolean = false;


  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordAgain: new FormControl('', Validators.required)
  });
  constructor(
    private dbService: NgxIndexedDBService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  onLoginSubmit() {
    const userName: string = this.loginForm.value.userName;
    const password: string = this.loginForm.value.password;

    this.dbService.getByIndex('user', 'userName', userName).then(
      user => {
        if (user !== undefined) {
          if (password === user.password) {
            console.log(user);
            this.loginSucces();
            this.router.navigate(['']);
          } else {
            console.log('error');
            console.log(user);
          }
        } else {
          this.loginFailed = true;
        }
      },
      error => {

        console.log(error);
      }
    );

    // this.dbService.getAll('user').then(
    //   people => {
    //     console.log(people);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

  }

  loginSucces() {
    this.loginFailed = false;
  }

  isSingin() {
    this.sigin = !this.sigin;
    this.login = !this.login;
  }
  onSignUpSubmit() {

    const firstName: string = this.signUpForm.value.firstName;
    const lastName: string = this.signUpForm.value.lastName;
    const userName: string = this.signUpForm.value.userName;
    const password: string = this.signUpForm.value.password;

    const user = {
      'firstName': firstName,
      'lastName': lastName,
      'userName': userName,
      'password': userName
    };

    this.dbService.add('user', user).then(
      () => {
        console.log('done');
      },
      error => {
        console.log(error);
      }
    );

  }
}

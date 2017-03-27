import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {RequestService} from "../../services/request.service";
import {SessionService} from "../../services/session.service";
import {UserFactory} from "../../models/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public loginData: any = {};
  public signupData: any = {};

  constructor(private request: RequestService, private session: SessionService,
              private userFactory: UserFactory, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.request.post('/login', this.loginData).then((res) => {
      this.session.set('user', res);
      this.router.navigateByUrl('/');
    }).catch((err) => {
      console.log(err);
    });
  }

  signup() {
    this.userFactory.signup(this.signupData).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';

import {RequestService} from "../../services/request.service";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private request: RequestService, private session: SessionService) { }

  ngOnInit() {
  }

  login() {
    this.request.post('/login', {username: this.username, password: this.password}).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}

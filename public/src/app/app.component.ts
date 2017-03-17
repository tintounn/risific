import { Component, OnInit } from '@angular/core';

import { SessionService } from './services/session.service';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private session: SessionService, private request: RequestService) { }

  ngOnInit() {
    this.request.get('/connected').then((res) => {
      this.session.set('user', res);
    }).catch((err) => {
      console.log('user not connected');
    });
  }
}

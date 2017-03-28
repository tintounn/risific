import { Component, OnInit } from '@angular/core';

import { SessionService } from './services/session.service';
import { RequestService } from './services/request.service';

import { StoryEditor } from './pages/story/story.component';
import {Story} from "./models/story";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private session: SessionService, private request: RequestService) { }

  storySaved(story: Story) {
    //Close le modal
  }

  ngOnInit() {
    this.request.get('/connected').then((res) => {
      this.session.set('user', res.json());
    }).catch((err) => {
      console.log('user not connected');
    });
  }
}

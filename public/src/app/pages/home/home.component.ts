import {Component, OnInit, ViewChild, Input} from '@angular/core';

import {StoryFactory, Story} from "../../models/story";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lastest: Array<Story> = [];

  constructor(private storyFactory: StoryFactory) { }

  ngOnInit() {
    this.getLastestStories();
    this.getMostViewedStories();
  }

  private getLastestStories() {
    this.storyFactory.lastest(4).then((stories: Story[]) => {
      this.lastest = stories;
    }).catch((err) => {
      console.log(err);
    });
  }

  private getMostViewedStories() {

  }
}

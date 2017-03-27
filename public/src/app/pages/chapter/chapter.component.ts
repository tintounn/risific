import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-chapter-editor',
  template: ''
})
export class ChapterEditor implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-chapter-card',
  template: `

    <a style="margin-top: 10px; margin-bottom: 10px" href="#" class="list-group-item list-group-item-action">Chapitre {{index+1}}: {{chapter.titre}}</a>

  `
})
export class ChapterCard implements OnInit {

  @Input('chapter') chapter: Chapter = null;
  @Input('index') index: number = null;

  constructor() { }

  ngOnInit() {

  }
}

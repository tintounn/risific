import { Component, OnInit, ViewChild } from '@angular/core';

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
  template: ''
})
export class ChapterCard implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}

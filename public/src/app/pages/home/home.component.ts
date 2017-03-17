import {Component, OnInit, ViewChild} from '@angular/core';

import { EditorComponent } from '../../component/editor/editor.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('editor') editor: EditorComponent;

  constructor() {
  }

  ngOnInit() {
  }

}

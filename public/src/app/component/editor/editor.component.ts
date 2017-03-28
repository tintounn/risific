import {Component, OnInit, OnDestroy, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('id') id: string;
  public editor: any;

  constructor() { }

  getContent(): string {
    return this.editor.getContent();
  }

  setContent(content: string): void {
    this.editor.setContent(content);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.id,
      plugin: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: (editor) => {
        this.editor = editor;
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

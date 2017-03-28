import {
  Component, OnInit, AfterViewInit, Output, Input, EventEmitter, ViewChild, PipeTransform, Pipe,
  ElementRef
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Chapter, ChapterFactory} from "../../models/chapter";
import {ActivatedRoute} from "@angular/router";
import {EditorComponent} from "../../component/editor/editor.component";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit, AfterViewInit {

  @ViewChild('dataContainer') dataContainer: ElementRef;
  public chapter: Chapter;

  constructor(private route: ActivatedRoute, private chapterFactory: ChapterFactory) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let storyId = this.route.snapshot.params['story'];
    let chapterId = this.route.snapshot.params['id'];

    this.chapterFactory.findOne(storyId, chapterId).then((chapter) => {
      this.chapter = chapter;
      this.dataContainer.nativeElement.innerHTML = this.chapter.text;
    }).catch((err) => {
      console.log(err);
    });
  }
}

@Component({
  selector: 'app-chapter-editor',
  template: `
    <form>
      <div class="form-group">
        <label for="chaptertitle">Titre</label>
        <input [(ngModel)]="chapter.titre" type="text" class="form-control" id="chaptertitle" name="chaptertitle" placeholder="Le titre du chapitre">
      </div>
      
      <div class="form-group">
        <app-editor #editorChapter [id]="'editorChapter'"></app-editor>
      </div>
    </form>
    
    
    
    <div class="row">
      <div class="col">
        <button style="width: 100%" class="btn btn-primary" (click)="save()">Enregistrer</button>
      </div>
    </div>
  `
})
export class ChapterEditor implements OnInit, AfterViewInit {

  @Input('chapter') chapter: Chapter = new Chapter({});
  @Input('storyId') storyId: number;
  @Output('saved') savedEvent: EventEmitter<Chapter> = new EventEmitter();
  @ViewChild('editorChapter') editor: EditorComponent;

  constructor(private chapterFactory: ChapterFactory) { }

  ngOnInit() { }

  ngAfterViewInit() {
    if(this.chapter.id) {
      this.editor.setContent(this.chapter.text);
    }
  }

  save() {
    this.chapter.text = this.editor.getContent();
    this.chapter.story = this.storyId;

    console.log(this.chapter);

    this.chapterFactory.createOrUpdate(this.chapter).then((res) => {
      this.savedEvent.emit(res);
    }).catch((err) => {
      console.log(err);
    });
  }
}

@Component({
  selector: 'app-chapter-card',
  template: `
    <div class="card" style="margin-top: 10px; margin-bottom: 10px;">
      <div class="card-block">
        <h4 class="card-title">Chapitre {{index+1}}: {{chapter.titre}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">Ecrit le {{chapter.createdAt.split('T')[0]}}</h6>
        <a [routerLink]="'/stories/' + chapter.story + '/chapters/' + chapter.id" class="btn btn-primary">Lire</a>
      </div>
    </div>
  `
})
export class ChapterCard implements OnInit {

  @Input('chapter') chapter: Chapter = null;
  @Input('index') index: number = null;

  constructor() { }

  ngOnInit() {}
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Story, StoryFactory } from '../../models/story';
import { EditorComponent } from '../../component/editor/editor.component';
import {SessionService} from "../../services/session.service";
import {Chapter} from "../../models/chapter";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story: Story;

  constructor(private route: ActivatedRoute, private storyFactory: StoryFactory, public session: SessionService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.storyFactory.findOne(id).then((res) => {
      this.story = res;
    }).catch((err) => {
      console.log(err);
    });
  }

  chapterSaved(chapter: Chapter) {
    this.story.chapters.push(chapter);
  }
}


@Component({
  selector: 'app-story-editor',
  template: `
    <form>
      <div class="form-group">
        <label for="storytitle">Titre</label>
        <input [(ngModel)]="story.titre" type="text" class="form-control" id="storytitle" name="storytitle" placeholder="Le titre de la risific">
      </div>
      <div class="form-group">
        <label for="storydescription">Description</label>
        <textarea [(ngModel)]="story.description" class="form-control" id="storydescription" name="storydescription" placeholder="Description de la risific"></textarea>
      </div>
      <div class="form-group">
        <label for="storyimg">Image</label>
        <input [(ngModel)]="story.image" type="text" class="form-control" id="storyimg" name="storyimg" placeholder="Lien vers l'image de la risific">
      </div>
    </form>
    
    <div class="row">
      <div class="col">
        <button style="width: 100%" class="btn btn-primary" (click)="save()">Enregistrer</button>
      </div>
    </div>
  `
})
export class StoryEditor implements OnInit {

  @Input('story') story: Story = new Story({});
  @Output('saved') savedEvent: EventEmitter<Story> = new EventEmitter();

  constructor(private storyFactory: StoryFactory, private session: SessionService) { }

  ngOnInit() {
  }

  save() {
    this.storyFactory.createOrUpdate(this.story).then((res) => {
      this.savedEvent.emit(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}


@Component({
  selector: 'app-story-card',
  template: `
    <div class="card">
      <img class="card-img-top" src="{{story.image}}" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title"><a [routerLink]="'/stories/' + story.id">{{story.titre}}</a></h4>
        <p class="card-text">{{story.description}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Creer le {{story.createdAt.split('T')[0]}} par {{story.owner.username}} </small>
      </div>
    </div>
  `
})
export class StoryCard implements OnInit {

  @Input('story') story: Story = null;

  constructor(private router: Router) { }

  ngOnInit() { }
}

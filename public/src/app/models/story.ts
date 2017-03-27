import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {RequestService} from "../services/request.service";
import {Chapter} from "./chapter";

export class Story {

  public id: number;
  public titre: string;
  public description: string;
  public image: string;
  public createdAt: string;
  public updatedAt: string;
  public owner: any;
  public chapters: Array<Chapter>;

  constructor(data: any) {
    if(data.id) this.id = data.id;
    this.titre = data.titre;
    this.description = data.description;
    this.image = data.image;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.owner = data.owner;
    this.chapters = data.chapters;
  }

}

@Injectable()
export class StoryFactory {
  constructor(private request: RequestService) { }

  find(): Promise<Story[]> {
    return this.request.get('/stories').then(response => response.json().map((elt) => {return new Story(elt)}));
  }

  remove(id: number): Promise<any> {
    return this.request.delete('/stories/' + id);
  }

  create(story: Story): Promise<Story> {
    return this.request.post('/stories', story).then(response => new Story(response.json()));
  }

  findOne(id: number): Promise<Story> {
    return this.request.get('/stories/' + id).then(response => new Story(response.json()));
  }

  update(story: Story): Promise<Story> {
    return this.request.put('/stories/' + story.id, story).then(response => new Story(response.json()));
  }

  lastest(limit: number): Promise<Story[]> {
    return this.request.get('/stories/lastest', "limit="+limit).then(response => response.json().map((elt) => {return new Story(elt)}));
  }

  mostViewed(limit: number): Promise<Story[]> {
    return this.request.get('/stories/mostviewed', "limit="+limit).then(response => response.json().map((elt) => {return new Story(elt)}));
  }

  createOrUpdate(story: Story): Promise<Story> {
    let promise: Promise<Story>;

    if(story.id) {
      promise = this.update(story);
    } else {
      promise = this.create(story);
    }

    return promise;
  }
}


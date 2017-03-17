import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {RequestService} from "../services/request.service";

export class Story {

  public id: number;
  public titre: string;
  public description: string;
  public image: string;

  constructor(data: any) {
    if(data.id) this.id = data.id;
    this.titre = data.titre;
    this.description = data.description;
    this.image = data.image;
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
}


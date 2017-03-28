import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {RequestService} from "../services/request.service";

export class Chapter {
  public id: number;
  public titre: string;
  public text: string;
  public createdAt: string;
  public updatedAt: string;
  public story: number;

  constructor(data: any) {
    if(data.id) this.id = data.id;
    this.titre = data.titre;
    this.text = data.text;
    this.story = data.story;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

@Injectable()
export class ChapterFactory {
  constructor(private request: RequestService) { }

  find(storyId: number): Promise<Chapter> {
    return this.request.get('/stories/' + storyId + '/chapters').then(response => response.json().map((elt) => {return new Chapter(elt)}));
  }

  remove(storyId: number, chapterId: number): Promise<any> {
    return this.request.delete('/stories/' + storyId + '/chapters/' + chapterId);
  }

  create(storyId: number, chapter: Chapter): Promise<Chapter> {
    return this.request.post('/stories/' + storyId + '/chapters', chapter).then(response => new Chapter(response.json()));
  }

  findOne(storyId: number, chapterId: number): Promise<Chapter> {
    return this.request.get('/stories/' + storyId + '/chapters/' + chapterId).then(response => new Chapter(response.json()));
  }

  update(storyId: number, chapter: Chapter): Promise<Chapter> {
    return this.request.put('/stories/' + storyId + '/chapters/' + chapter.id, chapter).then(response => new Chapter(response.json()));
  }

  createOrUpdate(chapter: Chapter): Promise<Chapter> {
    let promise;

    if(chapter.id) {
      promise = this.update(chapter.story, chapter);
    } else {
      promise = this.create(chapter.story, chapter);
    }

    return promise;
  }
}

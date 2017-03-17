import {Injectable} from "@angular/core";
import {RequestService} from "../services/request.service";
export class User {

  private username: string;
  private email: string;

  constructor(data: any) {
    this.username = data.username;
    if(data.email) this.email = data.email;
  }
}

@Injectable()
export class UserFactory {

  constructor(private request: RequestService) { }

  login(data: any): Promise<User> {
    return this.request.post('/login', data).then(response => new User(response.json()));
  }

  signup(data: any): Promise<User> {
    return this.request.post('/signup', data).then(response => new User(response.json()));
  }

  findOne(id: number): Promise<User> {
    return this.request.get('/users/' + id).then(response => new User(response.json()));
  }
}

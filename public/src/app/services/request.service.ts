import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {
  private apiUrl: string = "";
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  private generateUrl(route: string, query: string) {
    let url = this.apiUrl + route + "?";

    if(query != "") url+=query+"&";

    return url;
  }

  get(route: string, query: string = ""): Promise<any> {
    return this.http.get(this.generateUrl(route, query)).toPromise();
  }

  post(route: string, body: any, query: string = ""): Promise<any> {
    return this.http.post(this.generateUrl(route, query), JSON.stringify(body), this.options).toPromise();
  }

  delete(route: string, query: string = ""): Promise<any> {
    return this.http.delete(this.generateUrl(route, query)).toPromise();
  }

  put(route: string, body: any, query: string = ""): Promise<any> {
    return this.http.put(this.generateUrl(route, query), JSON.stringify(body), {headers:this.headers}).toPromise();
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private data: Associative = [];

  constructor() { }

  set(key: string, data: any): void {
    this.data[key] = data;
  }

  get(key: string): any {
    if(!this.data[key]) return null;

    return this.data[key];
  }
}

interface Associative {
  [key: string]: any;
}

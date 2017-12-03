import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private _messages: any[];

  constructor() {
    this._messages = [
      {
        author: 'Bruno Toffolo',
        date: new Date(),
        message: '1 2 3 Catorze'
      },
      {
        author: 'Bono Vox',
        date: new Date(),
        message: 'Im at a place called Vertigo'
      },
      {
        author: 'Daniel Boaventura',
        date: new Date(),
        message: 'Hello Detroit'
      }
    ];
  }

  public getMessages(): any[] {
    return this._messages;
  }

}

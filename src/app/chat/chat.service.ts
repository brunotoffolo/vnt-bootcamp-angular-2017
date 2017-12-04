import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private _messages: any[];
  public _backend: any;

  readonly CHAT_BACKEND_URL = 'http://localhost:3000/';

  constructor(private _userService: UserService) {
    this._backend = io(this.CHAT_BACKEND_URL);
    this._messages = [];
  }

  public getMessages(): any[] {
    return this._messages;
  }

  public sendMessage(messageText: any): void {
    let message = {
      author: this._userService.getUsername(),
      time: new Date(),
      message: messageText
    };

    this._backend.emit('messages', message);
  }

}

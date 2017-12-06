import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from './model/message.model';
import { ReplaySubject } from 'rxjs/Rx';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private _backend: any;
  private _messageList$: ReplaySubject<Message>;

  readonly CHAT_BACKEND_URL = 'http://localhost:3000/';

  constructor(private _userService: UserService) {
    this._messageList$ = new ReplaySubject();
    this._backend = io(this.CHAT_BACKEND_URL);
    this._backend.on(
      'messages',
      message => {
        this._messageList$.next(message);
      }
    );
  }

  public subscribeToNewMessages(callback: any): void {
    this._messageList$.subscribe(
      element => {
        let message = new Message(element['author'], element['message'], element['time']);
        callback(message);
      }
    );
  }

  public sendMessage(messageText: any): void {
    let message = new Message(
      this._userService.getUsername(),
      messageText,
      new Date()
    );
    this._backend.emit('messages', message);
  }

}

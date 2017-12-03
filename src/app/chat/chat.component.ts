import { ChatService } from './chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vnt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private _messageList: any[];

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._messageList = this._chatService.getMessages();
  }

}

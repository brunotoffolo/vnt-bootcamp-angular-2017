import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnt-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() private author: string;
  @Input() private date: Date;
  @Input() private message: string;

  constructor() { }

  ngOnInit() {
  }

}

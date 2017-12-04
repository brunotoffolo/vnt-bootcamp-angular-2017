import { UserService } from '../../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnt-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() private author: string;
  @Input() private time: Date;
  @Input() private message: string;

  private _chatItemClass: string = '';

  constructor(private _userService: UserService) { }

  ngOnInit() {
    if (this._userService.getUsername() == this.author) {
      this._chatItemClass = 'vnt-my-own-message';
    }
  }

}

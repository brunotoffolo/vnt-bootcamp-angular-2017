import { UserService } from '../../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'vnt-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent {

  constructor(private _userService: UserService) { }

}

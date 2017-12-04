import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vnt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, AfterViewInit {

  private _messageList: any[];
  private _unsentMessage: string = '';

  @ViewChild('autoScrollingArea') private _autoScrollingArea: ElementRef;

  constructor (private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService._backend.on(
      'messages',
      message => this._messageList.push(message)
    );
    this._messageList = this._chatService.getMessages();
  }
  
    public sendMessage(): void {
      this._chatService.sendMessage(this._unsentMessage);
      this._unsentMessage = '';
    }

    public ngAfterViewChecked(): void {
        this.scrollToLatestMessage();
    }

    public ngAfterViewInit(): void {
      this.scrollToLatestMessage();
    }

    private scrollToLatestMessage(): void {
      this._autoScrollingArea.nativeElement.scrollTop =
        this._autoScrollingArea.nativeElement.scrollHeight;
    }

}

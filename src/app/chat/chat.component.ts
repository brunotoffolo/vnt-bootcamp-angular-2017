import { Subscription } from 'rxjs/Rx';
import { Message } from './model/message.model';
import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'vnt-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  private _messageList: Message[] = [];
  private _unsentMessage: string = '';
  private _chatServiceSubscription: Subscription = null;

  readonly MAX_CHARACTER_COUNT: number = 300;

  @ViewChild('autoScrollingArea') private _autoScrollingArea: ElementRef;

  constructor (private _chatService: ChatService) { }

  ngOnInit() {
    this._chatServiceSubscription = this._chatService.subscribeToNewMessages(
      message => this._messageList.push(message)
    );
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

  private onKeyPressed(event: KeyboardEvent): void {
    if (event.key === 'Enter' &&
        event.shiftKey !== true &&
        this._unsentMessage.trim().length > 0) {
      this.sendMessage();
    }
  }

  ngOnDestroy() {
    if (this._chatServiceSubscription != null) {
      this._chatServiceSubscription.unsubscribe();
    }
  }

}

import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

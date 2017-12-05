import { AuthGuard } from './shared/auth.guard';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './shared/app.routes';
import { UserService } from './user.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatItemComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes
  ],
  providers: [
    ChatService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserService } from '../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'vnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _username: string = '';

  constructor(private _userService: UserService) { }

  private doLogin(): void {
    console.log(this._username);
    if (this._username.length > 0) {
      this._userService.login(this._username);
    }
  }

}

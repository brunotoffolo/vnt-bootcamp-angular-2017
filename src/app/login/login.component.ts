import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vnt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _username: string = '';

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }
  
  ngOnInit() {
    if (this._userService.isUserLoggedIn()) {
      this.goToChat();
    }
  }

  private doLogin(): void {
    console.log(this._username);
    if (this._username.length > 0) {
      this._userService.login(this._username);
      this.goToChat();
    }
  }

  private goToChat(): void {
    this._router.navigate(['chat']);
  }

}

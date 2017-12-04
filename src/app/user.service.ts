import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _username: string = null;
  private _loginDate: Date = null;

  constructor() {
    let username = sessionStorage.getItem('username');
    let loginDate = sessionStorage.getItem('loginDate');

    if (username != null) {
      this._username = username;
      this._loginDate = new Date(loginDate);
    }
  }

  public login(username: string): void {
    this._username = username;
    this._loginDate = new Date();

    sessionStorage.setItem('username', this._username);
    sessionStorage.setItem('loginDate', this._loginDate.toISOString());
  }
  
  public logout(): void {
    this._username = null;
    this._loginDate = null;

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('loginDate');
  }

  public isUserLoggedIn(): boolean {
    return (this._username != null && this._loginDate != null);
  }

  public getUsername(): string {
    return this._username;
  }

  public getLoginDate(): Date {
    return this._loginDate;
  }

}

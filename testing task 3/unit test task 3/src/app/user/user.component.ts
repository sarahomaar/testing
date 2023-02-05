import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isOn = false;
  welcome: string | undefined;
  text = 'Welcome to my world';
  name = 'Sarah omar';
  constructor(private _UserserviceService: UserService) {}

  ngOnInit(): void {
    this.welcome = this._UserserviceService.isLoggedIn
      ? 'Welcome, ' + this._UserserviceService.user.name
      : 'Please log in.';
  }
  clicked() {
    this.isOn = !this.isOn;
  }
  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}

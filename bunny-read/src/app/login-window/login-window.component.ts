import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {
  username: string;
  password: string;

  login() {
    console.log(this.username, this.password);
  }
  constructor() { }

  ngOnInit() {
  }

}

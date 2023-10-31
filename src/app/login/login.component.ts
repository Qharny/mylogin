import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hide = true;

  onSubmit(form: NgForm) {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
  }
}

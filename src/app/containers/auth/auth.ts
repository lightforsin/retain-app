import { Component } from '@angular/core';
@Component({
  selector: 'auth-container',
  templateUrl: 'app/containers/auth/auth.html',
  styleUrls: ['app/containers/auth/auth.css']
})
export class AuthComponent {
  user = {
    email: '',
    password: ''
  }

  mode: string = 'signin';
  linkText: string = 'Don\'t have an account?';

  changeMode() {
    if(this.mode === 'signin') {
      this.mode = 'signup';
      this.linkText = 'Already have an account?';
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }
}
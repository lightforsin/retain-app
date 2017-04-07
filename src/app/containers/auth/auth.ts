import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

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

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  changeMode() {
    if(this.mode === 'signin') {
      this.mode = 'signup';
      this.linkText = 'Already have an account?';
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  authenticate() {
    this._authService.authenticate(this.mode, this.user)
    .subscribe(() => this._router.navigate(['']));
  }
}
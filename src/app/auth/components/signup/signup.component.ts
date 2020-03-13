import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async signUpHandler(userInfo) {
    console.log(userInfo);
    const status: any = await this.authService.signup(userInfo.value);
    console.log(status);
    if (status && status.user) {
      alert('Signed up successfully!.. Redirecting to login page');
      this.router.navigate(['login']);
    }
  }
}

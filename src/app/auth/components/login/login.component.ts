import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async loginHandler(formData) {
    console.log(formData.value);
    const status: any  = await this.authService.login(formData.value);
    console.log(status);
    if(status && status.user) {
      alert('Logged in Successfully. Redirecting to Home Page');
      // storing it in session storage.
      sessionStorage.setItem('authToken', status.user.refreshToken);
      this.router.navigate(['/']);
    }
  }

}

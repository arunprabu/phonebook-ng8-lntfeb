import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ngFireAuth: AngularFireAuth) { }

  signup(userInfo) {
    console.log(userInfo);
    return this.ngFireAuth.auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log('signup over');
      });
  }

  login(creds) {
    console.log(creds);
    return this.ngFireAuth.auth.signInWithEmailAndPassword(creds.email, creds.password)
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log('It is over');
      });
  }

  isAuthenticated() {
    if (sessionStorage.getItem('authToken')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.ngFireAuth.auth.signOut();
    sessionStorage.removeItem('authToken');
  }
}

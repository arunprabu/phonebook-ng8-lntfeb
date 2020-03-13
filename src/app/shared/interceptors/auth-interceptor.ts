import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {
  // intercept http calls and manipulate http header with auth token

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log(req);
    // access the token from the storage
    const bearerToken = sessionStorage.getItem('authToken');

    console.log(bearerToken);
    // clone the req, in order to modify req header
    req = req.clone({ // and then, inside the cloned req, attach the token
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });

    console.log(req);
    return next.handle(req);
  }
}

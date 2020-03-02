import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createContact( contactData ) { // 1. get the data from component
    console.log(contactData);

    // 2. send the same data to rest api using post method
      // 2.1. identify the resp api endpoint -- http://jsonplaceholder.typicode.com/users
      // 2.2. hit the rest api using post method - HttpClient
    const addContactPromise = new Promise( (resolve, reject ) => {
      this.http.post(this.REST_API_URL, contactData)
        .toPromise() // converting the call to promise
        .then( ( res: any) => { // 3. get the resp from rest api
          console.log(res);
          resolve(res);
        })
        .catch( (err: any) => {
          console.log(err);
          reject(err);
        })
        .finally( () => {
          console.log( 'Its all over');
        });
    });
    return addContactPromise;
  }

  getContacts() {
    return this.http.get(this.REST_API_URL)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }
}

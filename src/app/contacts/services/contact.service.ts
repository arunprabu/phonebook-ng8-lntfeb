import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }

  createContact( contactData ): Promise<Contact>  { // 1. get the data from component
    console.log(contactData);

    // 2. send the same data to rest api using post method
      // 2.1. identify the resp api endpoint -- http://jsonplaceholder.typicode.com/users
      // 2.2. hit the rest api using post method - HttpClient
    const addContactPromise = new Promise( (resolve, reject ) => {
      this.http.post(this.REST_API_URL, contactData)
        .toPromise() // converting the call to promise
        .then( ( res: Contact ) => { // 3. get the resp from rest api
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
    return addContactPromise as Promise<Contact>;
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.REST_API_URL)
      .pipe( map( (res: Contact[]) => {
        console.log(res);
        // sort, filter, convert to json
        return res;
      }));
  }

  getContactById( contactId ): Observable<Contact> {
    console.log(contactId);
    return this.http.get(this.REST_API_URL + '/' + contactId)
      .pipe( map( (res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  updateContact( contactData): Observable<Contact> {
    return this.http.put(this.REST_API_URL + '/' + contactData.id, contactData)
      .pipe( map( (res: Contact) => {
        console.log(res);
        return res;
      }));
  }

  // todo: Delete contact
}

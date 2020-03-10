import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    // ideal place for any ajax calls

    this.contactsSubscription = this.contactService.getContacts()
      .subscribe((res: Contact[]) => {
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy() {
    console.log('Into ngOnDestroy');
    // unsubscribe
    this.contactsSubscription.unsubscribe();

    // clear the data
    if (this.contactList) {
      this.contactList.length = 0;
    }
  }



}

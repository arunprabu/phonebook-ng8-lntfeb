import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: any[];
  constructor( private contactService: ContactService) {

  }

  ngOnInit() {
    // ideal place for any ajax calls

    this.contactService.getContacts()
      .subscribe( (res: any) => {
        console.log(res);
        this.contactList = res;
      });
  }

}

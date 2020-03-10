import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('contactId');
    this.contactService.getContactById(contactId)
      .subscribe((res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  onEditModalOpen() {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  onUpdateHandler() {
    console.log(this.duplicateContactData); // submittable
    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: Contact) => {
        console.log(res);
        if (res) {
          this.isUpdated = true;
        } else {
          this.isUpdated = false;
        }
      });

  }
}

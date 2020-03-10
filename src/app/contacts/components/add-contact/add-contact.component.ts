import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  // Step 1: create form tag equivalent in ts -- FormGroup
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
        // Step 2:  create form control equivalent in ts -- FormControl
        name: new FormControl('john', Validators.required),  // step 5: setup validators
        phone: new FormControl('1231', Validators.required),
        email: new FormControl('j@k.com', [Validators.required, Validators.email])
    });

    // Step 3: ref comp.html form step 3
  }

  async addContactHandler() {
    console.log(this.contactForm.value); // entire form's state is available - but we need value

    // 1. send the data to service
      // 1.1. connect to service using dep inj
      // 1.2. pass the data to createContact method
    // async
    const status: Contact = await this.contactService.createContact(this.contactForm.value);
    console.log(status); // 2. get the resp from

    if (status && status.id ) {
      this.isSaved = true;
    } else {
      this.isSaved = false;
    }
  }

}

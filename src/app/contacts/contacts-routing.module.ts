import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AuthGuard } from '../shared/guards/auth.guard';

// configuring child routes
const routes: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'new', component: AddContactComponent, canActivate: [ AuthGuard ] },
      { path: ':contactId', component: ContactDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering child routes
  ],
  exports: [
    RouterModule // exporting after registering the routes
  ]
})
export class ContactsRoutingModule { }

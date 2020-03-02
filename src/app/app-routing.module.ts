import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsComponent } from './contacts/components/contacts.component';
import { AboutComponent } from './about/about.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/components/contact-details/contact-details.component';

// config the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts/new', component: AddContactComponent},
  { path: 'contacts/1', component: ContactDetailsComponent},
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }

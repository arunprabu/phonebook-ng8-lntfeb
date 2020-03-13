import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// firebase setup
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ColorizerDirective } from './shared/directives/colorizer.directive';
import { ContactsModule } from './contacts/contacts.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDI7mYVzSBR_xSdoPtkDq_D4E1_4pzmLno', // this key will not work after a few days
  authDomain: 'hexa-ng-auth-b2.firebaseapp.com',
  databaseURL: 'https://hexa-ng-auth-b2.firebaseio.com',
  projectId: 'hexa-ng-auth-b2',
  storageBucket: '',
  messagingSenderId: '333443086726',
  appId: '1:333443086726:web:a30008031375ca88c05407'
};

// Main switching box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,  // for ngModel
    HttpClientModule, // for http calls
    ContactsModule,
    ProductsModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(firebaseConfig),   // will help us connect to firebase app 
    AngularFireAuthModule, // login
    AngularFirestoreModule, // signup

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ], // intercept the http calls
  bootstrap: [AppComponent]
  // step 3: AppModule should bootstrap a comp -- AppComponent
})
export class AppModule { }

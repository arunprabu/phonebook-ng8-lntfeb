import { Component } from '@angular/core';

// @Component Decorator unifies the html, css, ts of comp -- and exposes in a selector
// the entire comp's html, css, ts are exposed
@Component({
  selector: 'app-root', // element selector -- mandatory -- only one
  templateUrl: './app.component.html', // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional and can be multiple also
})
export class AppComponent {
  // ts
  title = 'phonebook-ng8-lntfeb';
}

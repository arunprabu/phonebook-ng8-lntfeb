import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .redText{
        color: red;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // string interpolation related
  appName = 'Phone Book!';
  isLoggedIn = false;
  exp = 20;
  skillsList: Array<string> = [
    'html', 'ts', 'ng'
  ];

  // property binding related
  devName = 'Arun';

  // two way binding related
  courseName = 'ng';

  // custom prop binding
  myAge = 60;

  // custom event related
  dataReceivedFromChildComp: string;

  // Parent can access data from Child using @ViewChild()
  @ViewChild(CebComponent, { static: false }) cebData;
  // todo: @ViewChildren()

  constructor() { }

  ngOnInit() {
    console.log(this.cebData);
  }

  ngAfterViewInit() {
    console.log(this.cebData);
  }

  // custom methods should go here
  getExp() {
    return this.exp;
  }

  // property binding related
  isAuth() {
    return this.isLoggedIn;
  }

  // event binding related
  btnClickHandler(evt) {
    console.log(evt);
    alert('clicked-- check console for event obj');
  }

  // custom event binding related
  // Step4: defining event handler
  profileLoadedHandler( evt) {
   this.dataReceivedFromChildComp = evt;
  }
}

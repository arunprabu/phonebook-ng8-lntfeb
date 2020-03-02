import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button type='button' (click)='loadProfileHandler()'>Load Profile...</button>
    </div>
  `,
  styles: []
})
export class CebComponent implements OnInit {

  // step1: Create Custom Event
  @Output() profileLoaded = new EventEmitter(); // @Output() --makes it a custom event

  data = 'Testing ViewChild';

  constructor() {
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('Inside ngOnInit');
  }

  loadProfileHandler() {
    // step 2: emit the event
    this.profileLoaded.emit('Arun'); // passing data from child comp
    // sTep3: ref- concepts.comp.html -- for event handler
  }


}

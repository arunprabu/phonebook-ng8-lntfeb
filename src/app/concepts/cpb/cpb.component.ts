import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // step1: defining a variable and will make it a custom property
  @Input() age = 20; // @Input() will make the var as custom property

  constructor() { }

  ngOnInit() {
  }

}

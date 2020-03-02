import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class='copyright'>Copyright 2020 - L&T Construction</p>
    </div>
  `,
  styles: [
    `
      .copyright{
        color: green;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

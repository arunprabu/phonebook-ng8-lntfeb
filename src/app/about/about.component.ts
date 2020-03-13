import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  today = new Date();

  dymmyText = 'Lorem eum, vel facilis maxime tenetur!';

  myProfile = {
    name: 'Arun',
    city: 'Chennai'
  };

  loremIpsum = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus qui tenetur reiciendis culpa non. Perferendis, ut distinctio quis deserunt consectetur sit explicabo architecto! Perferendis ex ipsum delectus ipsam vitae.';

  constructor() { }

  ngOnInit() {
  }

}

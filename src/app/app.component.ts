import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'card header';
  title = 'title';
  footer = 'footer';
  summery = 'card summery';
  // tslint:disable-next-line:max-line-length
  path = 'https://www.royalcaribbean.com/content/dam/royal/ports-and-destinations/destinations/thailand/thailand-phuket-island-boat-landscape.jpg';

}

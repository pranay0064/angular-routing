import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  routes=[
    {linkName:'Home',url:'home'},
    {linkName:'Settings',url:'settings'},
  ]
}

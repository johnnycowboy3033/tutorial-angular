import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template : `
    <div id="child">
      <h1>Child</h1>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message : string = `Howdy`;
}

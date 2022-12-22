import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div id="parent">
      <h1>Parent</h1>
      <app-child [message]="message"></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message = "Hello World"

}

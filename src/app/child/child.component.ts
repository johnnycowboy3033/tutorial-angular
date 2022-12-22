import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template : `
    <div id="child">
      <h1>Child</h1>
      Say {{ message }}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() message: string = '';
}

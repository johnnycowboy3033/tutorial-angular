import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div id="parent">
      <h1>Parent</h1>
      Say {{message}}
      <app-child (messageEvent)="receiveMessage($event)"></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message = '';

  receiveMessage($event: any){
      this.message = $event;
  }

}

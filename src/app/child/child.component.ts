import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template : `
    <div id="child">
      <h1>Child</h1>
      <button (click)="sendMessage()" class="btn btn-success">Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hola Mundo!";

  @Output() messageEvent  = new EventEmitter<string>();

  constructor() {
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }


}

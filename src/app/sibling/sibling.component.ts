import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-sibling',
  template:  `
    <div id="sibling">
      <h1>Sibling</h1>
      Message: {{ message }}
      <br><br>
      <button (click)="newMessage()" class="btn btn-success">New Message</button>
    </div>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit{

  message:string = '';

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this.data.changeMessage("Hello from Sibling");
  }

}

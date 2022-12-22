import {Component, OnInit} from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child',
  template : `
    <div id="child">
      <h1>Child</h1>
       Message: {{ message }}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  message:string = '';

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
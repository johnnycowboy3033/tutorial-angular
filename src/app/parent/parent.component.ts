import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-parent',
  template: `
    <div id="parent">
      <h1>Parent</h1>
      Message: {{ message }}
      <app-child></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  message:string = '';

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}

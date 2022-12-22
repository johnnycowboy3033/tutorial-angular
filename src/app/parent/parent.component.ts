import { Component,  ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    <div id="parent">
      <h1>Parent</h1>
      Message : {{ message }}
      <app-child></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

  @ViewChild(ChildComponent) child: any;

  message :string = '';

  constructor() {
  }

  ngAfterViewInit(): void {
    this.message = this.child.message;
  }


}

import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-js';

  name: string = 'Hello';



  Testing(){
    let nameForm= $("#txtName").val();
    alert(nameForm);
  }
}

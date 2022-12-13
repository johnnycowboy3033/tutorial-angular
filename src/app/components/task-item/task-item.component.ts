import { Component,OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements  OnInit{

  @Input()  task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit():void {
  }

  onDelete(task: Task) {
    console.log("Delete Task Button has been clicked. For task: " + JSON.stringify( task ) );

    this.onDeleteTask.emit(task);
  }

  toToggle(task: Task) {
    console.log("Toggle Reminder has been clicked. For task: " + JSON.stringify( task ) );

    this.onToggleReminder.emit(task);
  }

}

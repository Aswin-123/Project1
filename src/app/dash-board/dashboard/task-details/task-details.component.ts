import { Component, Input, OnInit } from '@angular/core';
import { fade, slide } from 'src/app/Animation';
import { TODO } from 'src/app/todo/TODO';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  animations:[slide ,fade]
})
export class TaskDetailsComponent implements OnInit {
  @Input() task:TODO ;  
    constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { TODO } from 'src/app/todo/TODO';
import { fade, slide } from 'src/app/Animation';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  animations: [
    fade ,slide
  ]
})
export class TaskDetailsComponent implements OnInit {
  @Input() task: TODO ;
    constructor() { }

  ngOnInit(): void {
  }

}

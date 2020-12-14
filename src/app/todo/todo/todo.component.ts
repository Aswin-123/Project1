import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { isTemplateSpan } from 'typescript';
import { TODO } from '../TODO';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TODO[] = [];
  todosCom: TODO[] = [];

  constructor(private service: TodoService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getTodo();
    this.getTodoCompleate();
  }
  private getTodo()
  {  this.service.getToDo().subscribe((items) => {
    items.forEach((items) => {
      this.todos.push({...items, autoCloseVM: items.autoClose ? 'Yes' : 'No',
      startDateVM: this.datepipe.transform(items.startDate, 'longDate'),
      endDateVM: this.datepipe.transform(items.endDate, 'longDate')
    });
    });
  });
  }

  private getTodoCompleate()
  {  this.service.getToDoCompleate().subscribe((items) => {
    items.forEach((items) => {
      this.todosCom.push({...items, autoCloseVM: items.autoClose ? 'Yes' : 'No',
      startDateVM: this.datepipe.transform(items.startDate, 'longDate'),
      endDateVM: this.datepipe.transform(items.endDate, 'longDate')
    });
    });
  });
  }
}

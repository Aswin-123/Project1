import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TODO } from 'src/app/todo/TODO';
import { TodoService } from 'src/app/todo/todo.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() status : string ;  
  tasks:TODO[] = [];
  todosCom:TODO[] = [];
  todosUp:TODO[] = [];
  status1 : string ;  

 


  constructor(private service:TodoService,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.status1 = "Completed";
    this.getTodo();
    this.getTodoCompleate();
    this.getToDoUpcoming();
    console.warn("status",this.status);
    console.warn("status1",this.status1);
  }
  private getTodo()
  {  this.service.getToDo().subscribe((items)=>{
    items.forEach((items)=>{
      this.tasks.push({...items,autoCloseVM:items.autoClose? "Yes":"No",
      startDateVM:this.datepipe.transform(items.startDate,"longDate"),
      endDateVM:this.datepipe.transform(items.endDate,"longDate"),
      status: this.getStatus(items.endDate? new Date (items.endDate):null,new Date(items.startDate)),
      buttonText: this.getButtonText(items.endDate? new Date (items.endDate):null,new Date(items.startDate))
    })   
    })
  })
  }
  private getTodoCompleate()
  {  this.service.getToDoCompleate().subscribe((items)=>{
    items.forEach((items)=>{
      this.todosCom.push({...items,autoCloseVM:items.autoClose? "Yes":"No",
      startDateVM:this.datepipe.transform(items.startDate,"longDate"),
      endDateVM:this.datepipe.transform(items.endDate,"longDate"),
      status: this.getStatus(items.endDate? new Date (items.endDate):null,new Date(items.startDate)),
      buttonText: this.getButtonText(items.endDate? new Date (items.endDate):null,new Date(items.startDate))
    }) 
    })
  })
  }

  private getToDoUpcoming()
  {  this.service.getToDoUpcoming().subscribe((items)=>{
    items.forEach((items)=>{
      this.todosUp.push({...items,autoCloseVM:items.autoClose? "Yes":"No",
      startDateVM:this.datepipe.transform(items.startDate,"longDate"),
      endDateVM:this.datepipe.transform(items.endDate,"longDate"),
      status: this.getStatus(items.endDate? new Date (items.endDate):null,new Date(items.startDate)),
      buttonText: this.getButtonText(items.endDate? new Date (items.endDate):null,new Date(items.startDate))
    }) 
    })
  })
  }
  private getStatus(endDate:Date ,startDate: Date){
      const currentDate = new Date();
      if(!endDate)
      {
          return 'Constant';
      }
      else if(endDate < currentDate)
      {
        return 'Completed';
      }
      else if (startDate > currentDate)
      {
      return 'Upcoming';
      }
      else {
        return 'Ongoing';
      }
  }
  private getButtonText(endDate:Date ,startDate: Date){
    const currentDate = new Date();
    if(!endDate)
    {
        return 'Mark it as Done';
    }
    else if(endDate < currentDate)
    {
      return 'Re-Open';
    }
    else if (startDate > currentDate)
    {
    return 'Mark it as Done';
    }
    else {
      return 'Mark it as Done';
    }
  }

}

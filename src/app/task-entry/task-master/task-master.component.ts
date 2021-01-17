

import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { fade, slide } from 'src/app/Animation';
import { EmployeTaskServiceService } from 'src/app/shared/employe-task-service.service';
import { TaskServiceService } from 'src/app/shared/task-service.service';



@Component({
  selector: 'app-task-master',
  templateUrl: './task-master.component.html',
  styleUrls: ['./task-master.component.css'],
  animations: [
    fade ,slide
  ]
})
export class TaskMasterComponent implements OnInit {

   taskMasterForms: FormArray = this.fb.array([]);
   TaskList = [];
   notification = null;

   constructor(private fb: FormBuilder,
               private taskServiceService: TaskServiceService,
               private employeTaskServiceService: EmployeTaskServiceService ){}

  ngOnInit() {
    this.taskServiceService.getTaskList()
    .subscribe(res => this.TaskList = res as[]);

    this.employeTaskServiceService.getTaskDetailslist().subscribe(
      res => {
        if (res == []) {
          this.addtaskMasterForm();
        }
        else {
          (res as []).forEach((taskmaster: any) => {
            this.taskMasterForms.push(this.fb.group({
              task_Id: [taskmaster.task_Id],
              emp_Id : [taskmaster.emp_Id],
              id : [taskmaster.id, Validators.min(1)],
              emp_Name : [taskmaster.emp_Name , Validators.required],
              isComplete : [taskmaster.isComplete , Validators.required]
            }));
          });
        }
      }
    );
  }

  addtaskMasterForm(){
    this.taskMasterForms.push(this.fb.group({
      task_Id: [0],
      emp_Id : [''],
	    id : [0 , Validators.min(1)],
	    emp_Name : ['', Validators.required],
	    isComplete : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.task_Id == 0) {
      this.employeTaskServiceService.postTaskList(fg.value).subscribe((res: any) => {
      fg.patchValue({ task_Id: res.task_Id});
      this.showNotification('insert');
      });
    }
    else {
      this.employeTaskServiceService.putTaskList(fg.value).subscribe((res: any) => {
        this.showNotification('update');
    });
    }
  }
    onDelete(task_Id, i){
      if (task_Id == 0) {
        this.taskMasterForms.removeAt(i);
      }
      else if (confirm('Are you sure to delete this record ?')) {
     this.employeTaskServiceService.deleteTaskList(task_Id).subscribe(
        res => {
          this.taskMasterForms.removeAt(i);
          this.showNotification('delete');
        }
      );
 }

      }

      showNotification(category){
        switch (category) {
          case 'insert':
            this.notification = {class: 'text-success', message: 'saved!'};
            break;
          case 'update':
            this.notification = {class: 'text-primary', message: 'updated!'};
            break;
          case 'delete':
              this.notification = {class: 'text-danger', message: 'deleted!'};
              break;
          default:
            break;

        }
        setTimeout(() => {
          this.notification = null;
        }, 3000);

      }
}

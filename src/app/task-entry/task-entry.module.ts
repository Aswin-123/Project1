import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskMasterComponent } from './task-master/task-master.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path : '',
    component : TaskMasterComponent,
  },
];

@NgModule({
  declarations: [TaskMasterComponent],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]

})
export class TaskEntryModule { }

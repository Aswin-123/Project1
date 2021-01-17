import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeSalaryComponent } from './employe-salary/employe-salary.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
const routes: Routes = [
  {
    path : '',
    component : EmployeSalaryComponent,
  },
];


@NgModule({
  declarations: [EmployeSalaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    NgbModule
  ]
})
export class EmployeeDetailsModule { }

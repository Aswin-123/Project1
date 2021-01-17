import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeDetails } from './employe-salary/EmployeDetails';

@Injectable({
  providedIn: 'root'
}
)
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  public saveEmployee( employeForm: EmployeeDetails): Observable<EmployeeDetails>{
    return this.httpClient.post<EmployeeDetails>(environment.apiBaseURL + '/EmpDetails', employeForm);
  }
}

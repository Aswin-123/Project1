import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeTaskServiceService {

  constructor(private http: HttpClient) { }

  postTaskList(formData){
    return this.http.post(environment.apiBaseURL + '/Employes', formData);

  }

  getTaskDetailslist(){
    return this.http.get(environment.apiBaseURL + '/Employes');

  }
  putTaskList(formData){
    return this.http.put(environment.apiBaseURL + '/Employes/' + formData.task_Id, formData);

  }
  deleteTaskList(id){
    return this.http.delete(environment.apiBaseURL + '/Employes/' + id );

  }
}

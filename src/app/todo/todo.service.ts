import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TODO } from './TODO';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private httpClient: HttpClient) { }

  public getToDo(): Observable<TODO[]>{
    return this.httpClient.get<TODO[]>(environment.apiBaseURL + '/TODOTasks' );
  }
  public getToDoCompleate(): Observable<TODO[]>{
    return this.httpClient.get<TODO[]>(environment.apiBaseURL + '/TODOTasks/TODOTasksCompleate' );
  }
  public getToDoUpcoming(): Observable<TODO[]>{
    return this.httpClient.get<TODO[]>(environment.apiBaseURL + '/TODOTasks/TODOTasksUpcoming' );
  }

  public saveToDo(userForm: TODO): Observable<TODO>{
    return this.httpClient.post<TODO>(environment.apiBaseURL + '/TODOTasks', userForm );
  }
}

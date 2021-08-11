import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountModule } from './account.module';
import { Register } from './register/register';
@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient){}
    public getUserEmail(): Observable<string[]>{
        return this.httpClient.get<string[]>(environment.apiBaseURL+'/UserDetails/UserEmails' );
    }  
    public saveUserRegistration(userForm: Register): Observable<Register>{
        return this.httpClient.post<Register>(environment.apiBaseURL+'/UserDetails',userForm);

    }
}

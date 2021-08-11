import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../account/login/Login';
import { SecurityModel } from './securityModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private httpClient: HttpClient){}

 private _securityModel:SecurityModel;

 get securityModel(){
   return this._securityModel;
 }
 set securityModel(value: SecurityModel){
  this._securityModel = value ;
}
  public logout(){
    this.clearSecurityModel();
    sessionStorage.removeItem("todoBearerToken");
  }
  public clearSecurityModel() {
      this.securityModel = {
        userName:"",
        isAuthenticated: false ,
        bearerToken: "",
        canAccessTODO: false ,
        canAccessDashboard: false ,
        canAccessAdmin: false ,
      };
  }

  public Login(userForm: Login): Observable<SecurityModel>{
    const httpOptions ={
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.httpClient.post<SecurityModel>(environment.apiBaseURL+'/UserDetails/Login',userForm ,httpOptions)
    .pipe(
      tap(result=>{
        this.clearSecurityModel();
        Object.assign(this.securityModel,result);
        if(this.securityModel.isAuthenticated)
        {
          sessionStorage.setItem("todoBearerToken" , this.securityModel.bearerToken)
        }
        else {
          this.clearSecurityModel();
        }
      })
    )
  }
  public getUserDetails(): Observable<any[]>{
    return this.httpClient.get<any[]>(environment.apiBaseURL+'/UserDetails' );
  }
}

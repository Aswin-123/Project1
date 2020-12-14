import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from 'src/app/Security/security.service';
import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router ,
              private securityService: SecurityService,
              private activatedRoute: ActivatedRoute
    ) { }
  loginViewModel: Login;
  Login(): void{
    this.securityService.Login(this.loginViewModel).subscribe
    (item => {
      if (this.activatedRoute.snapshot.queryParams.returnUrl){
        this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams.returnUrl);
      }
      else{
        this.router.navigate(['Home', {name: item.userName}]);
      }
    },
    (error) => {
      alert('invalide user or password');
    }
    );
  }
  ngOnInit(): void {
    this.loginViewModel = {email: '', password: ''};
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { fade, slide } from 'src/app/Animation';
import { AccountService } from '../account.service';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [slide, fade]
})
export class RegisterComponent implements OnInit {
  registrationViewModel: Register;
  records: Observable<string[]>;
  alert = { type: '', isShowAlert: false, message: '' };
  @ViewChild('registrationForm') form: FormControl;
  constructor(private service: AccountService) {
    this.registrationViewModel = new Register();
  }

  ngOnInit(): void {
    // const service =new AccountService();
    this.records = this.service.getUserEmail();
  }
  closeAlert(): void{
    this.alert.isShowAlert = false;
  }
  submitRegistration(): void {
    this.service.saveUserRegistration(this.registrationViewModel).subscribe((item) => {
      this.alert.isShowAlert = true;
      this.alert.message = 'Saved Success';
      this.alert.type = 'success';
      this.form.reset();

    },
      error => {
        this.alert.isShowAlert = true;
        this.alert.message = 'Error Occoured';
        this.alert.type = 'danger';
      }
    );
  }

}

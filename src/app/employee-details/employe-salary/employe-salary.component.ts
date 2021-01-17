import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { fade, slide } from 'src/app/Animation';
import { EmployeeService } from '../employee.service';
import { EmployeeDetails } from './EmployeDetails';

@Component({
  selector: 'app-employe-salary',
  templateUrl: './employe-salary.component.html',
  styleUrls: ['./employe-salary.component.css'],
  animations: [
    fade ,slide
  ]
})
export class EmployeSalaryComponent implements OnInit {
  employeeDetailsViewModel: EmployeeDetails;
  records: Observable<string[]>;
  alert = {type: '', isShowAlert: false , message: ''};
 employeeForm: FormGroup;
 validatorObj = {
  employee_Name: {
    required: 'employee Name is required',
    minlength: 'Name should be grater than 3 char',
    errorMessage: '',
  },
  passport_Number: { required: 'Please select Passport Number', errorMessage: ''},
  passport_Place_Issue: { required: 'Please select Passport issue place', errorMessage: ''},
  passport_Nationality: { required: 'Please select Nationality', errorMessage: ''},
  passport_Date_Issue: { required: 'Passport issue date is required', errorMessage: ''},
  passport_Expiry_Date: { required: 'Passport Expiry date is required', errorMessage: ''},
  place_Birth: {  required: ' Birth place name is required', errorMessage: ''},
  visa_ID: { required: 'Please enter Visa ID', errorMessage: ''},
  visa_Type: { required: 'Please enter Visa Type', errorMessage: ''},
  place_Visa_Issued: { required: 'Please enter place from where Visa Issued', errorMessage: ''},
  visa_Nationality: {required: 'Please enter Visa Nationality', errorMessage: ''},
  visa_Expiry_Date: {required: 'Please enter Visa Expiry Date', errorMessage: ''},
  basic_Salary: {required: 'Please enter Basic Salary', errorMessage: ''},
  allowance: {required: 'Please enter Allowance', errorMessage: ''},
  salary_Deductions: {required: 'Please enter Salary Deductions', errorMessage: ''},
  net_Salary: {required: 'Please enter Net Salary', errorMessage: ''},
  status: {required: 'Please enter status', errorMessage: ''},

};
  constructor(private fb: FormBuilder, private service: EmployeeService ) {
    this.employeeDetailsViewModel = new EmployeeDetails();
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group ({
      employee_Name: [ '', [Validators.required , Validators.minLength(3)]],
      place_Birth: [ '', [Validators.required]],
      passportGroup: this.fb.group({
        passport_Number:  ['', Validators.required],
        passport_Nationality: ['', Validators.required],
        passport_Place_Issue: ['', Validators.required],
        passport_Date_Issue: ['', Validators.required],
        passport_Expiry_Date: ['', Validators.required],
      }, ),
      VisaGroup: this.fb.group({
        visa_ID: ['', Validators.required],
        visa_Type: ['', Validators.required],
        place_Visa_Issued: ['', Validators.required],
        visa_Nationality: ['', Validators.required],
        visa_Expiry_Date: ['', Validators.required],
      }, ),
      SalaryGroup: this.fb.group({
        basic_Salary: ['', Validators.required],
        allowance: ['', Validators.required],
        salary_Deductions: ['', Validators.required],
        net_Salary: ['', Validators.required],
      }, ),

      status: [true],
  });
  this.employeeForm.valueChanges.pipe(debounceTime(2000)).subscribe((item) => {
    Object.keys(this.employeeForm.controls).forEach((key) => {
      if (this.employeeForm.get(key) instanceof FormGroup)
      {
        const passportGroup: FormGroup = this.employeeForm.get(key) as FormGroup;
    
        Object.keys(passportGroup.controls).forEach((childkey) => {
             this.setEmployeeValidations(passportGroup.get(childkey), childkey);
        });
      }
      else
      {
        this.setEmployeeValidations(this.employeeForm.get(key), key);
      }
    });
  });
}
 saveEmployeDetails(){
const EmployeeDetailsModel: EmployeeDetails = {...this.employeeForm.value }; 
let empData = new EmployeeDetails()
empData.allowance = parseInt(this.employeeForm.value.SalaryGroup.allowance);
empData.place_Birth = this.employeeForm.value.place_Birth;
empData.basic_Salary = parseInt(this.employeeForm.value.SalaryGroup.basic_Salary);
empData.net_Salary = parseInt(this.employeeForm.value.SalaryGroup.net_Salary);
empData.salary_Deductions = parseInt(this.employeeForm.value.SalaryGroup.salary_Deductions);
empData.employee_Name = this.employeeForm.value.employee_Name;
empData.passport_Date_Issue = this.employeeForm.value.passportGroup.passport_Date_Issue;
empData.passport_Expiry_Date = this.employeeForm.value.passportGroup.passport_Expiry_Date;
empData.passport_Nationality = this.employeeForm.value.passportGroup.passport_Nationality;
empData.passport_Number = this.employeeForm.value.passportGroup.passport_Number;
empData.passport_Place_Issue = this.employeeForm.value.passportGroup.passport_Place_Issue;
empData.visa_Expiry_Date = this.employeeForm.value.VisaGroup.visa_Expiry_Date;
empData.visa_Nationality = this.employeeForm.value.VisaGroup.visa_Nationality;
empData.visa_ID = this.employeeForm.value.VisaGroup.visa_ID;
empData.visa_Type = this.employeeForm.value.VisaGroup.visa_Type;
empData.place_Visa_Issued = this.employeeForm.value.VisaGroup.place_Visa_Issued;
empData.status = this.employeeForm.value.status;


this.service.saveEmployee(empData).subscribe((item) => {
        this.employeeForm.reset();
        this.alert.isShowAlert = true ;
        this.alert.type = 'success';
        this.alert.message = 'Saved Success';

      },
      error => {
        this.alert.isShowAlert = true;
        this.alert.type = 'danger';
        this.alert.message = 'Error Occoured';

      }
);
}

  private setEmployeeValidations(control: AbstractControl, key: string){
    if (control.pristine || control.valid )
    {
      this.validatorObj[key].errorMessage = '';
     }
     else{
      Object.keys(control.errors).forEach((errorKey) => {
         this.validatorObj[key].errorMessage =  this.validatorObj[key][errorKey] ;
       });
    }
}


}

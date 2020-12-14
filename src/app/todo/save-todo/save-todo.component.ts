import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CustomDateValidator } from '../custom-date.validator';
import { TODO } from '../TODO';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-save-todo',
  templateUrl: './save-todo.component.html',
  styleUrls: ['./save-todo.component.css']
})
export class SaveTodoComponent implements OnInit {
  alert = {type: '', isShowAlert: false , message: ''};
  todoForm: FormGroup;
  validatorObj = {
    taskName: {
      required: 'task name is required',
      minlength: 'Task Name should be grater than 3 char',
      errorMessage: '',
    },
    category: { required: 'Please select category', errorMessage: ''},
    startDate: { required: 'start date is required', errorMessage: ''},
    endDate: { required: 'end date is required', errorMessage: ''},
    autoClose: {  errorMessage: ''},

  };
  constructor(private fb: FormBuilder, private service: TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group ({
      taskName: [ '', [Validators.required, Validators.minLength(3)]],
      category:  ['', Validators.required],
      dateGroup: this.fb.group({
        startDate:  ['', Validators.required],
        endDate: ['', Validators.required],
      }, { validators: CustomDateValidator.dateValidator}),
      autoClose: [true],

    });
    this.todoForm.get('autoClose').valueChanges.subscribe((item) => this.isAutoClose(item));
    this.todoForm.valueChanges.pipe(debounceTime(3000)).subscribe((item) => {
      Object.keys(this.todoForm.controls).forEach((key) => {
        if (this.todoForm.get(key) instanceof FormGroup)
        {
          const dateGroup: FormGroup = this.todoForm.get(key) as FormGroup;

          Object.keys(dateGroup.controls).forEach((childkey) => {
               this.setTodoValidations(dateGroup.get(childkey), childkey);
          });
          if (dateGroup.errors?.dateValidator){
            this.validatorObj.endDate.errorMessage = 'end date should be greater than or equal to startDate';
          }
        }
        else
        {
          this.setTodoValidations(this.todoForm.get(key), key);
        }

      });
    });
  }
  saveTodo(){
    const todoModel: TODO = {...this.todoForm.value,
      startDate: this.todoForm.value.dateGroup.startDate,
      endDate: this.todoForm.value.dateGroup.endDate, };
    todoModel.endDate = toString() === '' ? null : todoModel.endDate;
    this.service.saveToDo(todoModel).subscribe((item) => {
            this.todoForm.reset();
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

  private setTodoValidations(control: AbstractControl, key: string){
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
  TestData()
  {
    this.todoForm.patchValue({
     // taskName: "Angular Task",
      // category:  "Personal",
      startDate:  formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
      endDate: formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
      autoClose: false,

    });
  }
  isAutoClose(isAutoClose: boolean){
    const endDate = this.todoForm.get('dateGroup.endDate');
    if (isAutoClose)
    {
      endDate.clearValidators();
      endDate.setValidators([Validators.required])  ;
      endDate.updateValueAndValidity();
    }
    else{

      endDate.clearValidators();
      endDate.updateValueAndValidity();
    }
  }

  closeAlert(){
    this.alert.isShowAlert = false;
  }
}

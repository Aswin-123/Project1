import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appCustomFieldValidator]',
  providers: [{ provide: NG_VALIDATORS , useExisting: CustomFieldValidatorDirective , multi: true }]
})
export class CustomFieldValidatorDirective implements Validator {

  constructor() { }
  @Input('firstField') firstField: string;
  @Input('secondField') secondField: string;

  validate(form: FormGroup): ValidationErrors {
    if (!form.controls[this.firstField] || !form.controls[this.secondField])
    {
      return null ;
    }
    if (Object.keys( form.controls[this.firstField].errors || []).filter(
      (u) => u !== 'compairFieldValidator'
    ).length > 0 ||
     Object.keys( form.controls[this.secondField].errors || []).filter(
      (u) => u !== 'compairFieldValidator'
    ).length > 0
    ){
      return null ;
    }
    if (form.controls[this.firstField].value !== form.controls[this.secondField].value)
    {
      form.controls[this.firstField].setErrors({compairFieldValidator : true  });
      form.controls[this.secondField].setErrors({compairFieldValidator : true  });
      return {compairFieldValidator : true };
    }

    if (form.controls[this.firstField].hasError('compairFieldValidator'))
    {
      delete form.controls[this.firstField].errors.compairFieldValidator;
      form.controls[this.firstField].setErrors(null);
    }
    if (form.controls[this.secondField].hasError('compairFieldValidator'))
    {
      delete form.controls[this.secondField].errors.compairFieldValidator;
      form.controls[this.secondField].setErrors(null);
    }
    return null ;
  }


}

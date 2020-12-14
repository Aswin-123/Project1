import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class CustomFieldValidatorDirective {
    constructor() { }
    validate(form) {
        if (!form.controls[this.firstField] || !form.controls[this.secondField]) {
            return null;
        }
        if (Object.keys(form.controls[this.firstField].errors || []).filter((u) => u !== "compairFieldValidator").length > 0 ||
            Object.keys(form.controls[this.secondField].errors || []).filter((u) => u !== "compairFieldValidator").length > 0) {
            return null;
        }
        if (form.controls[this.firstField].value !== form.controls[this.secondField].value) {
            form.controls[this.firstField].setErrors({ compairFieldValidator: true });
            form.controls[this.secondField].setErrors({ compairFieldValidator: true });
            return { compairFieldValidator: true };
        }
        if (form.controls[this.firstField].hasError('compairFieldValidator')) {
            delete form.controls[this.firstField].errors['compairFieldValidator'];
            form.controls[this.firstField].setErrors(null);
        }
        if (form.controls[this.secondField].hasError('compairFieldValidator')) {
            delete form.controls[this.secondField].errors['compairFieldValidator'];
            form.controls[this.secondField].setErrors(null);
        }
        return null;
    }
}
CustomFieldValidatorDirective.ɵfac = function CustomFieldValidatorDirective_Factory(t) { return new (t || CustomFieldValidatorDirective)(); };
CustomFieldValidatorDirective.ɵdir = i0.ɵɵdefineDirective({ type: CustomFieldValidatorDirective, selectors: [["", "appCustomFieldValidator", ""]], inputs: { firstField: "firstField", secondField: "secondField" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_VALIDATORS, useExisting: CustomFieldValidatorDirective, multi: true }])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomFieldValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[appCustomFieldValidator]',
                providers: [{ provide: NG_VALIDATORS, useExisting: CustomFieldValidatorDirective, multi: true }]
            }]
    }], function () { return []; }, { firstField: [{
            type: Input,
            args: ["firstField"]
        }], secondField: [{
            type: Input,
            args: ["secondField"]
        }] }); })();
//# sourceMappingURL=custom-field-validator.directive.js.map
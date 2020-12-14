import { Component, ViewChild } from '@angular/core';
import { Register } from './register';
import * as i0 from "@angular/core";
import * as i1 from "../account.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "./custom-field-validator.directive";
import * as i5 from "./already-exists-validator.directive";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
const _c0 = ["registrationForm"];
function RegisterComponent_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngb-alert", 29);
    i0.ɵɵlistener("close", function RegisterComponent_ngb_alert_2_Template_ngb_alert_close_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.closeAlert(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dismissible", true)("type", ctx_r0.alert.type);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alert.message, " ");
} }
function RegisterComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} }
function RegisterComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function RegisterComponent_i_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} }
function RegisterComponent_i_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function RegisterComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, " Email Already Exists");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_i_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} }
function RegisterComponent_i_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function RegisterComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, " Field doesn't match");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_i_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} }
function RegisterComponent_i_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 31);
} }
function RegisterComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, " Field doesn't match");
    i0.ɵɵelementEnd();
} }
export class RegisterComponent {
    constructor(service) {
        this.service = service;
        this.alert = { type: '', isShowAlert: false, message: '' };
        this.registrationViewModel = new Register();
    }
    ngOnInit() {
        // const service =new AccountService();
        this.records = this.service.getUserEmail();
    }
    closeAlert() {
        this.alert.isShowAlert = false;
    }
    submitRegistration() {
        this.service.saveUserRegistration(this.registrationViewModel).subscribe((item) => {
            this.alert.isShowAlert = true;
            this.alert.message = "Saved Success";
            this.alert.type = "success";
            this.form.reset();
        }, error => {
            this.alert.isShowAlert = true;
            this.alert.message = "Error Occoured";
            this.alert.type = "danger";
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(i0.ɵɵdirectiveInject(i1.AccountService)); };
RegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
    } }, decls: 61, vars: 21, consts: [[1, "card", "logPanel"], [1, "card-body"], [3, "dismissible", "type", "close", 4, "ngIf"], [1, "card-title", "text-center", "mb-4", "mt-1"], ["ngNativeValidate", "true", "appCustomFieldValidator", "", 3, "firstField", "secondField", "ngSubmit"], ["registrationForm", "ngForm"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user-md"], ["name", "fName", "placeholder", "First Name", "required", "required", "maxlength", "50", 1, "form-control", "col-md-10", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "fa fa-times smile font-red-color", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-check smile font-yellow-color ", "aria-hidden", "true", 4, "ngIf"], ["name", "lName", "placeholder", "Last Name", "maxlength", "50", 1, "form-control", "col-md-10", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-user"], ["name", "email", "placeholder", "Email or login", "type", "email", "required", "required", "pattern", "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", "appAlreadyExistsValidator", "", 1, "form-control", "col-md-10", 3, "ngModel", "records", "ngModelChange"], ["email", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "fa", "fa-lock"], ["name", "password", "placeholder", "******", "type", "password", "required", "required", "minlength", "3", "maxlength", "50", 1, "form-control", "col-md-10", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["name", "confirmPassword", "placeholder", "******", "type", "password", "required", "required", "minlength", "3", "maxlength", "50", 1, "form-control", "col-md-10", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], [1, "text-center"], ["href", "/", 1, "register"], [3, "dismissible", "type", "close"], ["aria-hidden", "true", 1, "fa", "fa-times", "smile", "font-red-color"], ["aria-hidden", "true", 1, "fa", "fa-check", "smile", "font-yellow-color"], [1, "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "article", 1);
        i0.ɵɵtemplate(2, RegisterComponent_ngb_alert_2_Template, 2, 3, "ngb-alert", 2);
        i0.ɵɵelementStart(3, "h4", 3);
        i0.ɵɵtext(4, "Sign up");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "hr");
        i0.ɵɵelementStart(6, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.submitRegistration(); });
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵelementStart(11, "span", 9);
        i0.ɵɵelement(12, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "input", 11, 12);
        i0.ɵɵlistener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.registrationViewModel.fName = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, RegisterComponent_i_15_Template, 1, 0, "i", 13);
        i0.ɵɵtemplate(16, RegisterComponent_i_16_Template, 1, 0, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 6);
        i0.ɵɵelementStart(18, "div", 7);
        i0.ɵɵelementStart(19, "div", 8);
        i0.ɵɵelementStart(20, "span", 9);
        i0.ɵɵelement(21, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "input", 15);
        i0.ɵɵlistener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.registrationViewModel.lName = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 6);
        i0.ɵɵelementStart(24, "div", 7);
        i0.ɵɵelementStart(25, "div", 8);
        i0.ɵɵelementStart(26, "span", 9);
        i0.ɵɵelement(27, "i", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "input", 17, 18);
        i0.ɵɵlistener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) { return ctx.registrationViewModel.email = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(30, RegisterComponent_i_30_Template, 1, 0, "i", 13);
        i0.ɵɵtemplate(31, RegisterComponent_i_31_Template, 1, 0, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(32, RegisterComponent_span_32_Template, 2, 0, "span", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 6);
        i0.ɵɵelementStart(34, "div", 7);
        i0.ɵɵelementStart(35, "div", 8);
        i0.ɵɵelementStart(36, "span", 9);
        i0.ɵɵelement(37, "i", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "input", 21, 22);
        i0.ɵɵlistener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_38_listener($event) { return ctx.registrationViewModel.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(40, RegisterComponent_i_40_Template, 1, 0, "i", 13);
        i0.ɵɵtemplate(41, RegisterComponent_i_41_Template, 1, 0, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(42, RegisterComponent_span_42_Template, 2, 0, "span", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "div", 6);
        i0.ɵɵelementStart(44, "div", 7);
        i0.ɵɵelementStart(45, "div", 8);
        i0.ɵɵelementStart(46, "span", 9);
        i0.ɵɵelement(47, "i", 20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "input", 23, 24);
        i0.ɵɵlistener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_48_listener($event) { return ctx.registrationViewModel.confirmPassword = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(50, RegisterComponent_i_50_Template, 1, 0, "i", 13);
        i0.ɵɵtemplate(51, RegisterComponent_i_51_Template, 1, 0, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(52, RegisterComponent_span_52_Template, 2, 0, "span", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(53, "div", 6);
        i0.ɵɵelementStart(54, "button", 25);
        i0.ɵɵtext(55, " Register ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "button", 26);
        i0.ɵɵtext(57, " Clear ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "p", 27);
        i0.ɵɵelementStart(59, "a", 28);
        i0.ɵɵtext(60, "Login");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        const _r2 = i0.ɵɵreference(14);
        const _r5 = i0.ɵɵreference(29);
        const _r9 = i0.ɵɵreference(39);
        const _r13 = i0.ɵɵreference(49);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.alert.isShowAlert);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("firstField", "password")("secondField", "confirmPassword");
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.registrationViewModel.fName);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r2.touched && _r2.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r2.touched && _r2.valid);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.registrationViewModel.lName);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.registrationViewModel.email)("records", ctx.records);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r5.touched && _r5.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r5.touched && _r5.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r5.touched && _r5.invalid && (_r5.errors == null ? null : _r5.errors.alreadyExist));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.registrationViewModel.password);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r9.touched && _r9.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r9.touched && _r9.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r9.touched && _r9.invalid && (_r9.errors == null ? null : _r9.errors.compairFieldValidator));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.registrationViewModel.confirmPassword);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r13.touched && _r13.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r13.touched && _r13.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r13.touched && _r13.invalid && (_r13.errors == null ? null : _r13.errors.compairFieldValidator));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", _r1.invalid);
    } }, directives: [i2.NgIf, i3.NgControlStatusGroup, i3.NgForm, i4.CustomFieldValidatorDirective, i3.DefaultValueAccessor, i3.RequiredValidator, i3.MaxLengthValidator, i3.NgControlStatus, i3.NgModel, i3.PatternValidator, i5.AlreadyExistsValidatorDirective, i3.MinLengthValidator, i6.NgbAlert], styles: [".logPanel[_ngcontent-%COMP%] {\r\n    margin: 50px 30%;\r\n  }\r\n  .register[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    color: blue;\r\n  }\r\n  \r\n  .register[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: blue;\r\n  }\r\n  .font-yellow-color[_ngcontent-%COMP%]{\r\n      color: rgb(48, 167, 83);\r\n  }\r\n  .font-red-color[_ngcontent-%COMP%]{\r\n    color: rgb(202, 69, 69);\r\n}\r\n  .smile[_ngcontent-%COMP%] {\r\n      font-weight: bold;\r\n     font-size : 30px;\r\n      margin-left: 5px;\r\n      margin-top: 5px;\r\n\r\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: i1.AccountService }]; }, { form: [{
            type: ViewChild,
            args: ["registrationForm"]
        }] }); })();
//# sourceMappingURL=register.component.js.map
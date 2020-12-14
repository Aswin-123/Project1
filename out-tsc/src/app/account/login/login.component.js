import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "src/app/Security/security.service";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, "Please enter userName");
    i0.ɵɵelementEnd();
} }
function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, "Invalid Email,Please enter valid email");
    i0.ɵɵelementEnd();
} }
function LoginComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, "Please enter password");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor(router, securityService, activatedRoute) {
        this.router = router;
        this.securityService = securityService;
        this.activatedRoute = activatedRoute;
    }
    Login() {
        this.securityService.Login(this.loginViewModel).subscribe(item => {
            if (this.activatedRoute.snapshot.queryParams.returnUrl) {
                this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams.returnUrl);
            }
            else {
                this.router.navigate(["Home", { name: item.userName }]);
            }
        }, (error) => {
            alert("invalide user or password");
        });
    }
    ngOnInit() {
        this.loginViewModel = { email: "", password: "" };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.SecurityService), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 6, consts: [[1, "card", "logPanel"], [1, "card-body"], [1, "card-title", "text-center", "mb-4", "mt-1"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user"], ["name", "email", "placeholder", "Email or login", "type", "email", "required", "required", "pattern", "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "fa", "fa-lock"], ["name", "password", "placeholder", "******", "type", "password", "required", "required", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], [1, "text-center"], ["href", "/Register", 1, "register"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "article", 1);
        i0.ɵɵelementStart(2, "h4", 2);
        i0.ɵɵtext(3, " Sign in ");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "hr");
        i0.ɵɵelementStart(5, "form", 3, 4);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.Login(); });
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "span", 8);
        i0.ɵɵelement(11, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "input", 10, 11);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginViewModel.email = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, LoginComponent_span_14_Template, 2, 0, "span", 12);
        i0.ɵɵtemplate(15, LoginComponent_span_15_Template, 2, 0, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 5);
        i0.ɵɵelementStart(17, "div", 6);
        i0.ɵɵelementStart(18, "div", 7);
        i0.ɵɵelementStart(19, "span", 8);
        i0.ɵɵelement(20, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "input", 14, 15);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.loginViewModel.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(23, LoginComponent_span_23_Template, 2, 0, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "div", 5);
        i0.ɵɵelement(25, "input", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "p", 17);
        i0.ɵɵelementStart(27, "a", 18);
        i0.ɵɵtext(28, "Register");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(6);
        const _r1 = i0.ɵɵreference(13);
        const _r4 = i0.ɵɵreference(22);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngModel", ctx.loginViewModel.email);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r1.touched && _r1.invalid && (_r1.errors == null ? null : _r1.errors.required));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r1.touched && _r1.invalid && (_r1.errors == null ? null : _r1.errors.pattern));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.loginViewModel.password);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r4.touched && _r4.invalid && (_r4.errors == null ? null : _r4.errors.required));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", _r0.invalid);
    } }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i3.DefaultValueAccessor, i3.RequiredValidator, i3.PatternValidator, i3.NgControlStatus, i3.NgModel, i4.NgIf, i3.MaxLengthValidator], styles: [".logPanel[_ngcontent-%COMP%] {\r\n    margin: 50px 30%;\r\n  }\r\n  .register[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    color: blue;\r\n  }\r\n  \r\n  .register[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    color: blue;\r\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.SecurityService }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=login.component.js.map
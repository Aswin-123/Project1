import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CustomDateValidator } from '../custom-date.validator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../todo.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
function SaveTodoComponent_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngb-alert", 28);
    i0.ɵɵlistener("close", function SaveTodoComponent_ngb_alert_2_Template_ngb_alert_close_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.closeAlert(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dismissible", true)("type", ctx_r0.alert.type);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.alert.message, " ");
} }
const _c0 = function (a0) { return { "invalid-control": a0 }; };
export class SaveTodoComponent {
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.alert = { type: '', isShowAlert: false, message: '' };
        this.validatorObj = {
            taskName: {
                required: "task name is required",
                minlength: "Task Name should be grater than 3 char",
                errorMessage: "",
            },
            category: { required: "Please select category", errorMessage: "" },
            startDate: { required: "start date is required", errorMessage: "" },
            endDate: { required: "end date is required", errorMessage: "" },
            autoClose: { errorMessage: "" },
        };
    }
    ngOnInit() {
        this.todoForm = this.fb.group({
            taskName: ["", [Validators.required, Validators.minLength(3)]],
            category: ["", Validators.required],
            dateGroup: this.fb.group({
                startDate: ["", Validators.required],
                endDate: ["", Validators.required],
            }, { validators: CustomDateValidator.dateValidator }),
            autoClose: [true],
        });
        this.todoForm.get('autoClose').valueChanges.subscribe((item) => this.isAutoClose(item));
        this.todoForm.valueChanges.pipe(debounceTime(3000)).subscribe((item) => {
            Object.keys(this.todoForm.controls).forEach((key) => {
                var _a;
                if (this.todoForm.get(key) instanceof FormGroup) {
                    const dateGroup = this.todoForm.get(key);
                    Object.keys(dateGroup.controls).forEach((childkey) => {
                        this.setTodoValidations(dateGroup.get(childkey), childkey);
                    });
                    if ((_a = dateGroup.errors) === null || _a === void 0 ? void 0 : _a.dateValidator) {
                        this.validatorObj.endDate.errorMessage = "end date should be greater than or equal to startDate";
                    }
                }
                else {
                    this.setTodoValidations(this.todoForm.get(key), key);
                }
            });
        });
    }
    saveTodo() {
        const todoModel = Object.assign(Object.assign({}, this.todoForm.value), { startDate: this.todoForm.value.dateGroup.startDate, endDate: this.todoForm.value.dateGroup.endDate });
        todoModel.endDate = toString() === "" ? null : todoModel.endDate;
        this.service.saveToDo(todoModel).subscribe((item) => {
            this.todoForm.reset();
            this.alert.isShowAlert = true;
            this.alert.type = "success";
            this.alert.message = "Saved Success";
        }, error => {
            this.alert.isShowAlert = true;
            this.alert.type = "danger";
            this.alert.message = "Error Occoured";
        });
    }
    setTodoValidations(control, key) {
        if (control.pristine || control.valid) {
            this.validatorObj[key].errorMessage = "";
        }
        else {
            Object.keys(control.errors).forEach((errorKey) => {
                this.validatorObj[key].errorMessage = this.validatorObj[key][errorKey];
            });
        }
    }
    TestData() {
        this.todoForm.patchValue({
            // taskName: "Angular Task",
            //category:  "Personal",
            startDate: formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
            endDate: formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
            autoClose: false,
        });
    }
    isAutoClose(isAutoClose) {
        const endDate = this.todoForm.get('dateGroup.endDate');
        if (isAutoClose) {
            endDate.clearValidators();
            endDate.setValidators([Validators.required]);
            endDate.updateValueAndValidity();
        }
        else {
            endDate.clearValidators();
            endDate.updateValueAndValidity();
        }
    }
    closeAlert() {
        this.alert.isShowAlert = false;
    }
}
SaveTodoComponent.ɵfac = function SaveTodoComponent_Factory(t) { return new (t || SaveTodoComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.TodoService)); };
SaveTodoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SaveTodoComponent, selectors: [["app-save-todo"]], decls: 54, vars: 19, consts: [[1, "card", "logPanel"], [1, "card-body"], [3, "dismissible", "type", "close", 4, "ngIf"], [1, "card-title", "text-center", "mb-4", "mt-1"], [1, "page-header"], ["routerLink", "/Home/todo", 1, "btn", "btn-success", "pull-right"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "taskName"], ["type", "text", "formControlName", "taskName", "id", "taskName", 1, "form-control", 3, "ngClass"], [1, "text-danger"], ["for", "category"], ["id", "category", "formControlName", "category", 1, "form-control", 3, "ngClass"], ["value", ""], ["value", "Personal"], ["value", "Office"], ["value", "Social"], ["value", "One Time"], ["formGroupName", "dateGroup"], ["for", "startDate"], ["type", "date", "formControlName", "startDate", "id", "startDate", 1, "form-control", 3, "ngClass"], ["for", "endDate"], ["type", "date", "formControlName", "endDate", "id", "endDate", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-check"], ["for", "autoClose", 1, "form-check-label"], ["type", "checkbox", "formControlName", "autoClose", "id", "autoClose", 1, "form-check-input"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "dismissible", "type", "close"]], template: function SaveTodoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "article", 1);
        i0.ɵɵtemplate(2, SaveTodoComponent_ngb_alert_2_Template, 2, 3, "ngb-alert", 2);
        i0.ɵɵelementStart(3, "h4", 3);
        i0.ɵɵtext(4, "Save TODO");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6, "Save Todo ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵtext(8, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "hr");
        i0.ɵɵelementStart(10, "form", 6);
        i0.ɵɵlistener("ngSubmit", function SaveTodoComponent_Template_form_ngSubmit_10_listener() { return ctx.saveTodo(); });
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementStart(12, "label", 8);
        i0.ɵɵtext(13, "Task Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 9);
        i0.ɵɵelementStart(15, "span", 10);
        i0.ɵɵtext(16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵelementStart(18, "label", 11);
        i0.ɵɵtext(19, "Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "select", 12);
        i0.ɵɵelementStart(21, "option", 13);
        i0.ɵɵtext(22, "select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 14);
        i0.ɵɵtext(24, "Personal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 15);
        i0.ɵɵtext(26, "Office");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "option", 16);
        i0.ɵɵtext(28, "Social");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "option", 17);
        i0.ɵɵtext(30, "One Time");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "span", 10);
        i0.ɵɵtext(32);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 18);
        i0.ɵɵelementStart(34, "div", 7);
        i0.ɵɵelementStart(35, "label", 19);
        i0.ɵɵtext(36, "Start Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(37, "input", 20);
        i0.ɵɵelementStart(38, "span", 10);
        i0.ɵɵtext(39);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 7);
        i0.ɵɵelementStart(41, "label", 21);
        i0.ɵɵtext(42, "End Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(43, "input", 22);
        i0.ɵɵelementStart(44, "span", 10);
        i0.ɵɵtext(45);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "div", 23);
        i0.ɵɵelementStart(47, "label", 24);
        i0.ɵɵtext(48, "Auto Close ");
        i0.ɵɵelement(49, "input", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "button", 26);
        i0.ɵɵtext(51, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "button", 27);
        i0.ɵɵlistener("click", function SaveTodoComponent_Template_button_click_52_listener() { return ctx.TestData(); });
        i0.ɵɵtext(53, "Test Data");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.alert.isShowAlert);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("formGroup", ctx.todoForm);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c0, ctx.validatorObj.taskName.errorMessage));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.validatorObj.taskName.errorMessage, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx.validatorObj.category.errorMessage));
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate1(" ", ctx.validatorObj.category.errorMessage, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, ctx.validatorObj.startDate.errorMessage));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.validatorObj.startDate.errorMessage, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx.validatorObj.endDate.errorMessage));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.validatorObj.endDate.errorMessage, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("disabled", ctx.todoForm.invalid);
    } }, directives: [i3.NgIf, i4.RouterLink, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i3.NgClass, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i1.FormGroupName, i1.CheckboxControlValueAccessor, i5.NgbAlert], styles: [".form-check-input[_ngcontent-%COMP%] {\r\n    margin: 7px 10px;\r\n    }\r\n    .logPanel[_ngcontent-%COMP%] {\r\n    margin: 50px 30%;\r\n    }\r\n    .invalid-control[_ngcontent-%COMP%] {\r\n    border: solid red 1px;\r\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SaveTodoComponent, [{
        type: Component,
        args: [{
                selector: 'app-save-todo',
                templateUrl: './save-todo.component.html',
                styleUrls: ['./save-todo.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.TodoService }]; }, null); })();
//# sourceMappingURL=save-todo.component.js.map
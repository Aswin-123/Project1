import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "src/app/shared/task-service.service";
import * as i3 from "src/app/shared/employe-task-service.service";
import * as i4 from "@angular/common";
function TaskMasterComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵelement(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fan fa-check-circle ", ctx_r0.notification.class, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.notification.message, " ");
} }
function TaskMasterComponent_form_18_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r5.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function TaskMasterComponent_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 10);
    i0.ɵɵlistener("submit", function TaskMasterComponent_form_18_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r7); const fg_r2 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.recordSubmit(fg_r2); });
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "select", 12);
    i0.ɵɵelementStart(5, "option", 13);
    i0.ɵɵtext(6, "Select");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, TaskMasterComponent_form_18_option_7_Template, 2, 2, "option", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 3);
    i0.ɵɵelement(9, "input", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 3);
    i0.ɵɵelement(11, "input", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 3);
    i0.ɵɵelementStart(13, "button", 17);
    i0.ɵɵelement(14, "i", 18);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 19);
    i0.ɵɵlistener("click", function TaskMasterComponent_form_18_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r7); const fg_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onDelete(fg_r2.get("task_Id").value, i_r3); });
    i0.ɵɵelement(17, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fg_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", fg_r2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.TaskList);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", fg_r2.invalid)("ngClass", fg_r2.get("task_Id").value == 0 ? "btn-success" : "btn-outline-dark");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", fg_r2.get("task_Id").value == 0 ? "Submit" : "Update", " ");
} }
export class TaskMasterComponent {
    constructor(fb, taskServiceService, employeTaskServiceService) {
        this.fb = fb;
        this.taskServiceService = taskServiceService;
        this.employeTaskServiceService = employeTaskServiceService;
        this.taskMasterForms = this.fb.array([]);
        this.TaskList = [];
        this.notification = null;
    }
    ngOnInit() {
        this.taskServiceService.getTaskList()
            .subscribe(res => this.TaskList = res);
        this.employeTaskServiceService.getTaskDetailslist().subscribe(res => {
            if (res == [])
                this.addtaskMasterForm();
            else {
                res.forEach((taskmaster) => {
                    this.taskMasterForms.push(this.fb.group({
                        task_Id: [taskmaster.task_Id],
                        emp_Id: [taskmaster.emp_Id],
                        id: [taskmaster.id, Validators.min(1)],
                        emp_Name: [taskmaster.emp_Name, Validators.required],
                        isComplete: [taskmaster.isComplete, Validators.required]
                    }));
                });
            }
        });
    }
    addtaskMasterForm() {
        this.taskMasterForms.push(this.fb.group({
            task_Id: [0],
            emp_Id: [''],
            id: [0, Validators.min(1)],
            emp_Name: ['', Validators.required],
            isComplete: ['']
        }));
    }
    recordSubmit(fg) {
        if (fg.value.task_Id == 0)
            this.employeTaskServiceService.postTaskList(fg.value).subscribe((res) => {
                fg.patchValue({ task_Id: res.task_Id });
                this.showNotification('insert');
            });
        else
            this.employeTaskServiceService.putTaskList(fg.value).subscribe((res) => {
                this.showNotification('update');
            });
    }
    onDelete(task_Id, i) {
        if (task_Id == 0)
            this.taskMasterForms.removeAt(i);
        else if (confirm('Are you sure to delete this record ?'))
            this.employeTaskServiceService.deleteTaskList(task_Id).subscribe(res => {
                this.taskMasterForms.removeAt(i);
                this.showNotification('delete');
            });
    }
    showNotification(category) {
        switch (category) {
            case 'insert':
                this.notification = { class: 'text-success', message: 'saved!' };
                break;
            case 'update':
                this.notification = { class: 'text-primary', message: 'updated!' };
                break;
            case 'delete':
                this.notification = { class: 'text-danger', message: 'deleted!' };
                break;
            default:
                break;
        }
        setTimeout(() => {
            this.notification = null;
        }, 3000);
    }
}
TaskMasterComponent.ɵfac = function TaskMasterComponent_Factory(t) { return new (t || TaskMasterComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.TaskServiceService), i0.ɵɵdirectiveInject(i3.EmployeTaskServiceService)); };
TaskMasterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TaskMasterComponent, selectors: [["app-task-master"]], decls: 19, vars: 2, consts: [[1, "grid-table"], [1, "thead"], [1, "tr"], [1, "td"], [1, "btn", "btn-outline-success", 3, "click"], [1, "fa", "fa-plus"], ["class", "elementToFadeInAndOut", 4, "ngIf"], [1, "tbody"], ["class", "tr", 3, "formGroup", "submit", 4, "ngFor", "ngForOf"], [1, "elementToFadeInAndOut"], [1, "tr", 3, "formGroup", "submit"], ["formControlName", "emp_Id", 1, "form-control"], ["formControlName", "id", 1, "form-control"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "emp_Name", 1, "form-control"], ["formControlName", "isComplete", 1, "form-control"], ["type", "submit", 1, "btn", "testclass", 3, "disabled", "ngClass"], [1, "fas", "fa-save", "fa-lg"], [1, "btn", "btn-light", "ml-1", 3, "click"], [1, "far", "fa-trash-alt", "fa-lg", "text-danger"], [3, "value"]], template: function TaskMasterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4, "Task No");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtext(6, "Task Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵtext(8, "Employee Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵtext(10, "Remark");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 3);
        i0.ɵɵelementStart(12, "button", 4);
        i0.ɵɵlistener("click", function TaskMasterComponent_Template_button_click_12_listener() { return ctx.addtaskMasterForm(); });
        i0.ɵɵelement(13, "i", 5);
        i0.ɵɵtext(14, " New Account ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 3);
        i0.ɵɵtemplate(16, TaskMasterComponent_span_16_Template, 3, 4, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵtemplate(18, TaskMasterComponent_form_18_Template, 18, 5, "form", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("ngIf", ctx.notification);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.taskMasterForms.controls);
    } }, directives: [i4.NgIf, i4.NgForOf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i4.NgClass], styles: [".button[_ngcontent-%COMP%] {\r\n    background-color: #4CAF50; \r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TaskMasterComponent, [{
        type: Component,
        args: [{
                selector: 'app-task-master',
                templateUrl: './task-master.component.html',
                styleUrls: ['./task-master.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.TaskServiceService }, { type: i3.EmployeTaskServiceService }]; }, null); })();
//# sourceMappingURL=task-master.component.js.map
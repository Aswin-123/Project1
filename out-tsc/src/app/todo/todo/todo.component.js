import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../todo.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "primeng/table";
import * as i5 from "primeng/api";
function TodoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "span", 9);
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵelementStart(3, "input", 11);
    i0.ɵɵlistener("input", function TodoComponent_ng_template_8_Template_input_input_3_listener($event) { i0.ɵɵrestoreView(_r5); i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(7); return _r0.filterGlobal($event.target.value, "contains"); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TodoComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "th", 12);
    i0.ɵɵtext(2, "Task Name ");
    i0.ɵɵelement(3, "p-sortIcon", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 14);
    i0.ɵɵtext(5, "Category ");
    i0.ɵɵelement(6, "p-sortIcon", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 16);
    i0.ɵɵtext(8, "Start Date ");
    i0.ɵɵelement(9, "p-sortIcon", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 18);
    i0.ɵɵtext(11, "End Date ");
    i0.ɵɵelement(12, "p-sortIcon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 20);
    i0.ɵɵtext(14, "Is Auto Close ");
    i0.ɵɵelement(15, "p-sortIcon", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "tr");
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵelement(18, "p-columnFilter", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵelement(20, "p-columnFilter", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵelement(22, "p-columnFilter", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵelement(24, "p-columnFilter", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵelement(26, "p-columnFilter", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TodoComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const todo_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(todo_r6.taskName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(todo_r6.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(todo_r6.startDateVM);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 5, todo_r6.endDateVM, "longDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(todo_r6.autoCloseVM);
} }
const _c0 = function () { return ["taskName", "category", "startDateVM", "endDateVM", "autoCloseVM"]; };
export class TodoComponent {
    constructor(service, datepipe) {
        this.service = service;
        this.datepipe = datepipe;
        this.todos = [];
        this.todosCom = [];
    }
    ngOnInit() {
        this.getTodo();
        this.getTodoCompleate();
    }
    getTodo() {
        this.service.getToDo().subscribe((items) => {
            items.forEach((items) => {
                this.todos.push(Object.assign(Object.assign({}, items), { autoCloseVM: items.autoClose ? "Yes" : "No", startDateVM: this.datepipe.transform(items.startDate, "longDate"), endDateVM: this.datepipe.transform(items.endDate, "longDate") }));
            });
        });
    }
    getTodoCompleate() {
        this.service.getToDoCompleate().subscribe((items) => {
            items.forEach((items) => {
                this.todosCom.push(Object.assign(Object.assign({}, items), { autoCloseVM: items.autoClose ? "Yes" : "No", startDateVM: this.datepipe.transform(items.startDate, "longDate"), endDateVM: this.datepipe.transform(items.endDate, "longDate") }));
            });
        });
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(i0.ɵɵdirectiveInject(i1.TodoService), i0.ɵɵdirectiveInject(i2.DatePipe)); };
TodoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TodoComponent, selectors: [["app-todo"]], decls: 11, vars: 3, consts: [[1, "col-md-12"], [1, "page-header"], ["routerLink", "/Home/todo/0", 1, "btn", "btn-success", "pull-right"], [3, "value", "globalFilterFields"], ["todoTable", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "p-d-flex"], [1, "p-input-icon-left", "p-ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Global TODO Search", 3, "input"], ["pSortableColumn", "taskName"], ["field", "taskName"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "startDateVM"], ["field", "startDateVM"], ["pSortableColumn", "endDateVM"], ["field", "endDateVM"], ["pSortableColumn", "autoCloseVM"], ["field", "autoCloseVM"], ["type", "text", "field", "taskName"], ["type", "text", "field", "category"], ["type", "text", "field", "startDateVM"], ["type", "text", "field", "endDateVM"], ["type", "text", "field", "autoCloseVM"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2, "TODO");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵtext(4, "Add Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵelementStart(6, "p-table", 3, 4);
        i0.ɵɵtemplate(8, TodoComponent_ng_template_8_Template, 4, 0, "ng-template", 5);
        i0.ɵɵtemplate(9, TodoComponent_ng_template_9_Template, 27, 0, "ng-template", 6);
        i0.ɵɵtemplate(10, TodoComponent_ng_template_10_Template, 12, 8, "ng-template", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("value", ctx.todos)("globalFilterFields", i0.ɵɵpureFunction0(2, _c0));
    } }, directives: [i3.RouterLink, i4.Table, i5.PrimeTemplate, i4.SortableColumn, i4.SortIcon, i4.ColumnFilter], pipes: [i2.DatePipe], styles: [".p-input-icon-left[_ngcontent-%COMP%], .p-input-right[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\nspan.p-input-icon-left[_ngcontent-%COMP%]   input[\r\n    type=\"text\"][_ngcontent-%COMP%]{\r\n        padding:  0px 25px;;\r\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TodoComponent, [{
        type: Component,
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.css']
            }]
    }], function () { return [{ type: i1.TodoService }, { type: i2.DatePipe }]; }, null); })();
//# sourceMappingURL=todo.component.js.map
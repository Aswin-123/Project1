import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "src/app/todo/todo.service";
import * as i2 from "@angular/common";
import * as i3 from "./task-details/task-details.component";
function TaskListComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-task-details", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("task", task_r4);
} }
function TaskListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TaskListComponent_div_1_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tasks);
} }
function TaskListComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-task-details", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("task", task_r6);
} }
function TaskListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TaskListComponent_div_2_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.todosUp);
} }
function TaskListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-task-details", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("task", task_r8);
} }
function TaskListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TaskListComponent_div_3_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.todosCom);
} }
export class TaskListComponent {
    constructor(service, datepipe) {
        this.service = service;
        this.datepipe = datepipe;
        this.tasks = [];
        this.todosCom = [];
        this.todosUp = [];
    }
    ngOnInit() {
        this.status1 = "Completed";
        this.getTodo();
        this.getTodoCompleate();
        this.getToDoUpcoming();
        console.warn("status", this.status);
        console.warn("status1", this.status1);
    }
    getTodo() {
        this.service.getToDo().subscribe((items) => {
            items.forEach((items) => {
                this.tasks.push(Object.assign(Object.assign({}, items), { autoCloseVM: items.autoClose ? "Yes" : "No", startDateVM: this.datepipe.transform(items.startDate, "longDate"), endDateVM: this.datepipe.transform(items.endDate, "longDate"), status: this.getStatus(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)), buttonText: this.getButtonText(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)) }));
            });
        });
    }
    getTodoCompleate() {
        this.service.getToDoCompleate().subscribe((items) => {
            items.forEach((items) => {
                this.todosCom.push(Object.assign(Object.assign({}, items), { autoCloseVM: items.autoClose ? "Yes" : "No", startDateVM: this.datepipe.transform(items.startDate, "longDate"), endDateVM: this.datepipe.transform(items.endDate, "longDate"), status: this.getStatus(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)), buttonText: this.getButtonText(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)) }));
            });
        });
    }
    getToDoUpcoming() {
        this.service.getToDoUpcoming().subscribe((items) => {
            items.forEach((items) => {
                this.todosUp.push(Object.assign(Object.assign({}, items), { autoCloseVM: items.autoClose ? "Yes" : "No", startDateVM: this.datepipe.transform(items.startDate, "longDate"), endDateVM: this.datepipe.transform(items.endDate, "longDate"), status: this.getStatus(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)), buttonText: this.getButtonText(items.endDate ? new Date(items.endDate) : null, new Date(items.startDate)) }));
            });
        });
    }
    getStatus(endDate, startDate) {
        const currentDate = new Date();
        if (!endDate) {
            return 'Constant';
        }
        else if (endDate < currentDate) {
            return 'Completed';
        }
        else if (startDate > currentDate) {
            return 'Upcoming';
        }
        else {
            return 'Ongoing';
        }
    }
    getButtonText(endDate, startDate) {
        const currentDate = new Date();
        if (!endDate) {
            return 'Mark it as Done';
        }
        else if (endDate < currentDate) {
            return 'Re-Open';
        }
        else if (startDate > currentDate) {
            return 'Mark it as Done';
        }
        else {
            return 'Mark it as Done';
        }
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(i0.ɵɵdirectiveInject(i1.TodoService), i0.ɵɵdirectiveInject(i2.DatePipe)); };
TaskListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TaskListComponent, selectors: [["app-task-list"]], inputs: { status: "status" }, decls: 4, vars: 3, consts: [[1, "detailsList"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "task"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TaskListComponent_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵtemplate(2, TaskListComponent_div_2_Template, 2, 1, "div", 1);
        i0.ɵɵtemplate(3, TaskListComponent_div_3_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.status === "all");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.status === "upcoming");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.status === "completed");
    } }, directives: [i2.NgIf, i2.NgForOf, i3.TaskDetailsComponent], styles: [".detailsList[_ngcontent-%COMP%]{\r\n    display:  flow-root;\r\n    width: 100%;\r\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TaskListComponent, [{
        type: Component,
        args: [{
                selector: 'app-task-list',
                templateUrl: './task-list.component.html',
                styleUrls: ['./task-list.component.css']
            }]
    }], function () { return [{ type: i1.TodoService }, { type: i2.DatePipe }]; }, { status: [{
            type: Input
        }] }); })();
//# sourceMappingURL=task-list.component.js.map
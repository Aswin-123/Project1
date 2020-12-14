import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TaskDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaskDetailsComponent.ɵfac = function TaskDetailsComponent_Factory(t) { return new (t || TaskDetailsComponent)(); };
TaskDetailsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TaskDetailsComponent, selectors: [["app-task-details"]], inputs: { task: "task" }, decls: 24, vars: 6, consts: [[1, "taskwrapper"], [1, "taskRow"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "taskButton"]], template: function TaskDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "b");
        i0.ɵɵtext(3, " Task Name :");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelementStart(6, "b");
        i0.ɵɵtext(7, " Category :");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelementStart(10, "b");
        i0.ɵɵtext(11, " Status :");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 1);
        i0.ɵɵelementStart(14, "b");
        i0.ɵɵtext(15, " Start Date :");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 1);
        i0.ɵɵelementStart(18, "b");
        i0.ɵɵtext(19, " End Date :");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(20);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 2);
        i0.ɵɵtext(23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.task.taskName);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.task.category);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.task.status);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.task.startDateVM);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.task.endDateVM);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.task.buttonText, " ");
    } }, styles: [".taskwrapper[_ngcontent-%COMP%]{\r\n    width:  300px;\r\n    margin: 15px 30px;\r\n    border: solid black 1px;\r\n    border-radius: 10px;\r\n    float: left;\r\n    color: crimson ;\r\n    background-color:antiquewhite;\r\n}\r\n.taskRow[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    padding: 1px 10px;\r\n}\r\n.taskButton[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    vertical-align: middle;\r\n    margin-left: 75px;\r\n    margin-top: 2px;\r\n    margin-bottom: 5px;\r\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TaskDetailsComponent, [{
        type: Component,
        args: [{
                selector: 'app-task-details',
                templateUrl: './task-details.component.html',
                styleUrls: ['./task-details.component.css']
            }]
    }], function () { return []; }, { task: [{
            type: Input
        }] }); })();
//# sourceMappingURL=task-details.component.js.map
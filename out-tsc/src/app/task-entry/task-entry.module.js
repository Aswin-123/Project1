import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskMasterComponent } from './task-master/task-master.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: "",
        component: TaskMasterComponent,
    },
];
export class TaskEntryModule {
}
TaskEntryModule.ɵmod = i0.ɵɵdefineNgModule({ type: TaskEntryModule });
TaskEntryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TaskEntryModule_Factory(t) { return new (t || TaskEntryModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes),
            HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TaskEntryModule, { declarations: [TaskMasterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.RouterModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TaskEntryModule, [{
        type: NgModule,
        args: [{
                declarations: [TaskMasterComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule.forChild(routes),
                    HttpClientModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=task-entry.module.js.map
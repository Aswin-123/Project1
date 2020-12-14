import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { TaskListComponent } from './dashboard/task-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: "",
        component: DashboardComponent,
    },
];
export class DashBoardModule {
}
DashBoardModule.ɵmod = i0.ɵɵdefineNgModule({ type: DashBoardModule });
DashBoardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DashBoardModule_Factory(t) { return new (t || DashBoardModule)(); }, imports: [[
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DashBoardModule, { declarations: [DashboardComponent, TaskDetailsComponent, TaskListComponent], imports: [CommonModule, i1.RouterModule, NgbModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashBoardModule, [{
        type: NgModule,
        args: [{
                declarations: [DashboardComponent, TaskDetailsComponent, TaskListComponent],
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes),
                    NgbModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=dash-board.module.js.map
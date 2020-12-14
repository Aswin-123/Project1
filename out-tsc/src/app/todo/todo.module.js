import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaveTodoComponent } from './save-todo/save-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmSaveTodoGuard } from './confirm-save-todo.guard';
import { TableModule } from "primeng/table";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: "",
        component: TodoComponent,
    },
    {
        path: ":id",
        component: SaveTodoComponent,
        canDeactivate: [ConfirmSaveTodoGuard]
    },
];
export class TodoModule {
}
TodoModule.ɵmod = i0.ɵɵdefineNgModule({ type: TodoModule });
TodoModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TodoModule_Factory(t) { return new (t || TodoModule)(); }, imports: [[
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            TableModule,
            NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TodoModule, { declarations: [TodoComponent, SaveTodoComponent], imports: [CommonModule, i1.RouterModule, ReactiveFormsModule,
        TableModule,
        NgbModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TodoModule, [{
        type: NgModule,
        args: [{
                declarations: [TodoComponent, SaveTodoComponent],
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes),
                    ReactiveFormsModule,
                    TableModule,
                    NgbModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=todo.module.js.map
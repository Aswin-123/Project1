import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ConfirmSaveTodoGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (component.todoForm.dirty) {
            return confirm('do you want to navigate from save TODO page?');
        }
        return true;
    }
}
ConfirmSaveTodoGuard.ɵfac = function ConfirmSaveTodoGuard_Factory(t) { return new (t || ConfirmSaveTodoGuard)(); };
ConfirmSaveTodoGuard.ɵprov = i0.ɵɵdefineInjectable({ token: ConfirmSaveTodoGuard, factory: ConfirmSaveTodoGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfirmSaveTodoGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=confirm-save-todo.guard.js.map
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./security.service";
import * as i2 from "@angular/router";
export class AuthGuard {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
    }
    canActivateChild(next, state) {
        if (this.securityService.securityModel && this.securityService.securityModel.isAuthenticated && this.securityService.securityModel[next.data.routeAccess]) {
            return true;
        }
        else {
            if (this.securityService.securityModel && !this.securityService.securityModel[next.data.routeAccess]) {
                alert('not authorize to access this url');
                return this.router.createUrlTree([""]);
            }
            else
                return this.router.createUrlTree([""], {
                    queryParams: { returnUrl: state.url },
                });
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.SecurityService), i0.ɵɵinject(i2.Router)); };
AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SecurityService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=auth.guard.js.map
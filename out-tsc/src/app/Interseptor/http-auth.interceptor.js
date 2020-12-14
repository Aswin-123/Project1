import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class HttpAuthInterceptor {
    constructor() { }
    intercept(request, next) {
        if (sessionStorage.getItem("todoBearerToken")) {
            request = request.clone({
                setHeaders: {
                    Authorization: `bearer ${sessionStorage.getItem("todoBearerToken")}`,
                }
            });
        }
        return next.handle(request);
    }
}
HttpAuthInterceptor.ɵfac = function HttpAuthInterceptor_Factory(t) { return new (t || HttpAuthInterceptor)(); };
HttpAuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: HttpAuthInterceptor, factory: HttpAuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpAuthInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=http-auth.interceptor.js.map
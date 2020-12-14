import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SecurityService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get securityModel() {
        return this._securityModel;
    }
    set securityModel(value) {
        this._securityModel = value;
    }
    logout() {
        this.clearSecurityModel();
        sessionStorage.removeItem("todoBearerToken");
    }
    clearSecurityModel() {
        this.securityModel = {
            userName: "",
            isAuthenticated: false,
            bearerToken: "",
            canAccessTODO: false,
            canAccessDashboard: false,
            canAccessAdmin: false,
        };
    }
    Login(userForm) {
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        return this.httpClient.post(environment.apiBaseURL + '/UserDetails/Login', userForm, httpOptions)
            .pipe(tap(result => {
            this.clearSecurityModel();
            Object.assign(this.securityModel, result);
            if (this.securityModel.isAuthenticated) {
                sessionStorage.setItem("todoBearerToken", this.securityModel.bearerToken);
            }
            else {
                this.clearSecurityModel();
            }
        }));
    }
    getUserDetails() {
        return this.httpClient.get(environment.apiBaseURL + '/UserDetails');
    }
}
SecurityService.ɵfac = function SecurityService_Factory(t) { return new (t || SecurityService)(i0.ɵɵinject(i1.HttpClient)); };
SecurityService.ɵprov = i0.ɵɵdefineInjectable({ token: SecurityService, factory: SecurityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SecurityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=security.service.js.map
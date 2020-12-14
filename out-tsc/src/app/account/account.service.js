import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AccountService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getUserEmail() {
        return this.httpClient.get(environment.apiBaseURL + '/UserDetails/UserEmails');
    }
    saveUserRegistration(userForm) {
        return this.httpClient.post(environment.apiBaseURL + '/UserDetails', userForm);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(i0.ɵɵinject(i1.HttpClient)); };
AccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=account.service.js.map
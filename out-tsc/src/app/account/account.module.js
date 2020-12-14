import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomFieldValidatorDirective } from './register/custom-field-validator.directive';
import { AlreadyExistsValidatorDirective } from './register/already-exists-validator.directive';
import { AccountService } from './account.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export class AccountModule {
}
AccountModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountModule });
AccountModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, providers: [AccountService], imports: [[
            CommonModule,
            FormsModule,
            NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountModule, { declarations: [LoginComponent, RegisterComponent, CustomFieldValidatorDirective, AlreadyExistsValidatorDirective], imports: [CommonModule,
        FormsModule,
        NgbModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountModule, [{
        type: NgModule,
        args: [{
                declarations: [LoginComponent, RegisterComponent, CustomFieldValidatorDirective, AlreadyExistsValidatorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    NgbModule
                ],
                providers: [AccountService],
            }]
    }], null, null); })();
//# sourceMappingURL=account.module.js.map
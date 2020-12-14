import { Directive, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
export class AlreadyExistsValidatorDirective {
    constructor() { }
    validate(control) {
        if (!control || Object.keys(control.errors || []).filter(u => u !== 'alreadyExists').length > 0) {
            return of(null);
        }
        return this.records.pipe(map((item) => {
            return item.indexOf(control.value) > -1
                ? { alreadyExist: true }
                : null;
        }));
    }
}
AlreadyExistsValidatorDirective.ɵfac = function AlreadyExistsValidatorDirective_Factory(t) { return new (t || AlreadyExistsValidatorDirective)(); };
AlreadyExistsValidatorDirective.ɵdir = i0.ɵɵdefineDirective({ type: AlreadyExistsValidatorDirective, selectors: [["", "appAlreadyExistsValidator", ""]], inputs: { records: "records" }, features: [i0.ɵɵProvidersFeature([{ provide: NG_ASYNC_VALIDATORS, useExisting: AlreadyExistsValidatorDirective, multi: true }])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlreadyExistsValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[appAlreadyExistsValidator]',
                providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AlreadyExistsValidatorDirective, multi: true }]
            }]
    }], function () { return []; }, { records: [{
            type: Input,
            args: ['records']
        }] }); })();
//# sourceMappingURL=already-exists-validator.directive.js.map
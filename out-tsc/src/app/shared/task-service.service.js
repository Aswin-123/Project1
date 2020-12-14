import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TaskServiceService {
    constructor(http) {
        this.http = http;
    }
    getTaskList() {
        return this.http.get(environment.apiBaseURL + '/TodoItems');
    }
}
TaskServiceService.ɵfac = function TaskServiceService_Factory(t) { return new (t || TaskServiceService)(i0.ɵɵinject(i1.HttpClient)); };
TaskServiceService.ɵprov = i0.ɵɵdefineInjectable({ token: TaskServiceService, factory: TaskServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TaskServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=task-service.service.js.map
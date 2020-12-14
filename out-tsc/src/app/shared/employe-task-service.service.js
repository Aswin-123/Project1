import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EmployeTaskServiceService {
    constructor(http) {
        this.http = http;
    }
    postTaskList(formData) {
        return this.http.post(environment.apiBaseURL + '/Employes', formData);
    }
    getTaskDetailslist() {
        return this.http.get(environment.apiBaseURL + '/Employes');
    }
    putTaskList(formData) {
        return this.http.put(environment.apiBaseURL + '/Employes/' + formData.task_Id, formData);
    }
    deleteTaskList(id) {
        return this.http.delete(environment.apiBaseURL + '/Employes/' + id);
    }
}
EmployeTaskServiceService.ɵfac = function EmployeTaskServiceService_Factory(t) { return new (t || EmployeTaskServiceService)(i0.ɵɵinject(i1.HttpClient)); };
EmployeTaskServiceService.ɵprov = i0.ɵɵdefineInjectable({ token: EmployeTaskServiceService, factory: EmployeTaskServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EmployeTaskServiceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=employe-task-service.service.js.map
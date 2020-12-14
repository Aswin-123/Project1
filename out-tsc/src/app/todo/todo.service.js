import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TodoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getToDo() {
        return this.httpClient.get(environment.apiBaseURL + '/TODOTasks');
    }
    getToDoCompleate() {
        return this.httpClient.get(environment.apiBaseURL + '/TODOTasks/TODOTasksCompleate');
    }
    getToDoUpcoming() {
        return this.httpClient.get(environment.apiBaseURL + '/TODOTasks/TODOTasksUpcoming');
    }
    saveToDo(userForm) {
        return this.httpClient.post(environment.apiBaseURL + '/TODOTasks', userForm);
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(i0.ɵɵinject(i1.HttpClient)); };
TodoService.ɵprov = i0.ɵɵdefineInjectable({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TodoService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=todo.service.js.map
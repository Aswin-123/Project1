import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "src/app/Security/security.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "./task-list.component";
const _c0 = ["tabs"];
function DashboardComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-task-list", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r1.aaaa);
} }
function DashboardComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-task-list", 9);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r2.aaaa);
} }
function DashboardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-task-list", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r3.aaaa);
} }
export class DashboardComponent {
    constructor(route, securityService) {
        this.route = route;
        this.securityService = securityService;
    }
    ngOnInit() {
        this.onchangeName('1');
        this.securityService.getUserDetails().subscribe(item => this.userDetails = item);
    }
    ngAfterViewInit() {
        this.aaaa = this.tabs.activeId;
    }
    onTabChange() {
        this.aaaa = this.tabs.activeId;
    }
    activeTab() {
        return 'ngb-tab-0';
    }
    onchangeName(I) {
        if (I == '0') {
            this.aaaa = 'All';
        }
        else if (I == '2') {
            this.aaaa = 'Completed';
        }
        else if (I == '1') {
            this.aaaa = 'Upcoming';
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SecurityService)); };
DashboardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabs = _t.first);
    } }, decls: 13, vars: 1, consts: [[1, "cart"], [1, "col-md-12"], [1, "page-header"], [3, "activeId", "tabChange"], ["tabs", ""], ["title", "All", "id", "all"], ["ngbTabContent", ""], ["title", "Upcoming", "id", "upcoming"], ["title", "Completed", "id", "completed"], [3, "status"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3, "DASHBOARD");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "ngb-tabset", 3, 4);
        i0.ɵɵlistener("tabChange", function DashboardComponent_Template_ngb_tabset_tabChange_5_listener() { return ctx.onTabChange(); });
        i0.ɵɵelementStart(7, "ngb-tab", 5);
        i0.ɵɵtemplate(8, DashboardComponent_ng_template_8_Template, 1, 1, "ng-template", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ngb-tab", 7);
        i0.ɵɵtemplate(10, DashboardComponent_ng_template_10_Template, 1, 1, "ng-template", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "ngb-tab", 8);
        i0.ɵɵtemplate(12, DashboardComponent_ng_template_12_Template, 1, 1, "ng-template", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("activeId", ctx.activeTab);
    } }, directives: [i3.NgbTabset, i3.NgbTab, i3.NgbTabContent, i4.TaskListComponent], styles: [".nav-tabs[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 30px 30px;\r\n  }\r\n  .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #e0e0e0;\r\n    color: black;\r\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.SecurityService }]; }, { tabs: [{
            type: ViewChild,
            args: ['tabs']
        }] }); })();
//# sourceMappingURL=dashboard.component.js.map
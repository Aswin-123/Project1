import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./Security/security.service";
import * as i3 from "@angular/common";
const _c0 = function () { return { exact: true }; };
function HomeComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵtext(2, "Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
} }
const _c1 = function () { return { exact: false }; };
function HomeComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵtext(2, "TODO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c1));
} }
function HomeComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 4);
    i0.ɵɵtext(2, "Task Entry");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
} }
export class HomeComponent {
    constructor(activatedRoute, securityService) {
        this.activatedRoute = activatedRoute;
        this.securityService = securityService;
        this.securityModel = securityService.securityModel;
        console.log(`From snapshot ${activatedRoute.snapshot.paramMap.get("name")}`);
        activatedRoute.paramMap.subscribe((item) => {
            console.log(`From ParamMap ${item.get("name")} `);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SecurityService)); };
HomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 3, consts: [[1, "flex-list"], [4, "ngIf"], ["routerLink", "/Home", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/Home/todo", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/Home/task-entry", "routerLinkActive", "active", 3, "routerLinkActiveOptions"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "ul");
        i0.ɵɵtemplate(2, HomeComponent_li_2_Template, 3, 2, "li", 1);
        i0.ɵɵtemplate(3, HomeComponent_li_3_Template, 3, 2, "li", 1);
        i0.ɵɵtemplate(4, HomeComponent_li_4_Template, 3, 2, "li", 1);
        i0.ɵɵelementStart(5, "li");
        i0.ɵɵelementStart(6, "a");
        i0.ɵɵtext(7, "Logout");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div");
        i0.ɵɵelement(9, "router-outlet");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.securityModel.canAccessDashboard);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.securityModel.canAccessTODO);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.securityModel.canAccessTODO);
    } }, directives: [i3.NgIf, i1.RouterOutlet, i1.RouterLinkWithHref, i1.RouterLinkActive], styles: ["ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #5e2d2d;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    float:left;\r\n}\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n   background-color:  #5e2d2d;\r\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"]
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.SecurityService }]; }, null); })();
//# sourceMappingURL=Home.component.js.map
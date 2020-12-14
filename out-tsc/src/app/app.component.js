import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppComponent {
    constructor() {
        this.title = 'AngularTaskCrud';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "header"], [1, "sub-header"], [1, "layout"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Task Manager ");
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵtext(3, "Angular 10");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelement(5, "router-outlet");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵtext(7, "\u00A9 By Aswin");
        i0.ɵɵelementEnd();
    } }, directives: [i1.RouterOutlet], styles: [".header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #252b4d;\r\n    font-size: 45px;\r\n    color: rgb(201, 94, 94);\r\n    height: 100px;\r\n    line-height: 100px;\r\n  }\r\n  .sub-header[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n  .layout[_ngcontent-%COMP%] {\r\n    min-height: 300px;\r\n  }\r\n  .footer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #151933;\r\n    text-align: center;\r\n    color: rgb(155, 87, 87);\r\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map
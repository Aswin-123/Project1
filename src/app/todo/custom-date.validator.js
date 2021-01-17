"use strict";
exports.__esModule = true;
exports.CustomDateValidator = void 0;
var CustomDateValidator = /** @class */ (function () {
    function CustomDateValidator() {
    }
    CustomDateValidator.dateValidator = function (form) {
        var startDate = form.get('startDate');
        var endDate = form.get('endDate');
        if (startDate.pristine || endDate.pristine) {
            return null;
        }
        if (new Date(startDate.value) > new Date(endDate.value)) {
            return { dateValidator: true };
        }
        return null;
    };
    return CustomDateValidator;
}());
exports.CustomDateValidator = CustomDateValidator;

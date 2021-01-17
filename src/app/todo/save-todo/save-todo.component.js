"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SaveTodoComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var custom_date_validator_1 = require("../custom-date.validator");
var SaveTodoComponent = /** @class */ (function () {
    function SaveTodoComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.alert = { type: '', isShowAlert: false, message: '' };
        this.validatorObj = {
            taskName: {
                required: 'task name is required',
                minlength: 'Task Name should be grater than 3 char',
                errorMessage: ''
            },
            category: { required: 'Please select category', errorMessage: '' },
            startDate: { required: 'start date is required', errorMessage: '' },
            endDate: { required: 'end date is required', errorMessage: '' },
            autoClose: { errorMessage: '' }
        };
    }
    SaveTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoForm = this.fb.group({
            taskName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            category: ['', forms_1.Validators.required],
            dateGroup: this.fb.group({
                startDate: ['', forms_1.Validators.required],
                endDate: ['', forms_1.Validators.required]
            }, { validators: custom_date_validator_1.CustomDateValidator.dateValidator }),
            autoClose: [true]
        });
        this.todoForm.get('autoClose').valueChanges.subscribe(function (item) { return _this.isAutoClose(item); });
        this.todoForm.valueChanges.pipe(operators_1.debounceTime(3000)).subscribe(function (item) {
            Object.keys(_this.todoForm.controls).forEach(function (key) {
                var _a;
                if (_this.todoForm.get(key) instanceof forms_1.FormGroup) {
                    var dateGroup_1 = _this.todoForm.get(key);
                    Object.keys(dateGroup_1.controls).forEach(function (childkey) {
                        _this.setTodoValidations(dateGroup_1.get(childkey), childkey);
                    });
                    if ((_a = dateGroup_1.errors) === null || _a === void 0 ? void 0 : _a.dateValidator) {
                        _this.validatorObj.endDate.errorMessage = 'end date should be greater than or equal to startDate';
                    }
                }
                else {
                    _this.setTodoValidations(_this.todoForm.get(key), key);
                }
            });
        });
    };
    // tslint:disable-next-line:typedef
    SaveTodoComponent.prototype.saveTodo = function () {
        var _this = this;
        var todoModel = __assign(__assign({}, this.todoForm.value), { startDate: this.todoForm.value.dateGroup.startDate, endDate: this.todoForm.value.dateGroup.endDate });
        todoModel.endDate = toString() === '' ? null : todoModel.endDate;
        this.service.saveToDo(todoModel).subscribe(function (item) {
            _this.todoForm.reset();
            _this.alert.isShowAlert = true;
            _this.alert.type = 'success';
            _this.alert.message = 'Saved Success';
        }, function (error) {
            _this.alert.isShowAlert = true;
            _this.alert.type = 'danger';
            _this.alert.message = 'Error Occoured';
        });
    };
    // tslint:disable-next-line:typedef
    SaveTodoComponent.prototype.setTodoValidations = function (control, key) {
        var _this = this;
        if (control.pristine || control.valid) {
            this.validatorObj[key].errorMessage = '';
        }
        else {
            Object.keys(control.errors).forEach(function (errorKey) {
                _this.validatorObj[key].errorMessage = _this.validatorObj[key][errorKey];
            });
        }
    };
    SaveTodoComponent.prototype.TestData = function () {
        this.todoForm.patchValue({
            // taskName: "Angular Task",
            // category:  "Personal",
            startDate: common_1.formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
            endDate: common_1.formatDate(new Date(Date.now()), 'yyyy-MM-dd', 'en'),
            autoClose: false
        });
    };
    SaveTodoComponent.prototype.isAutoClose = function (isAutoClose) {
        var endDate = this.todoForm.get('dateGroup.endDate');
        if (isAutoClose) {
            endDate.clearValidators();
            endDate.setValidators([forms_1.Validators.required]);
            endDate.updateValueAndValidity();
        }
        else {
            endDate.clearValidators();
            endDate.updateValueAndValidity();
        }
    };
    SaveTodoComponent.prototype.closeAlert = function () {
        this.alert.isShowAlert = false;
    };
    SaveTodoComponent = __decorate([
        core_1.Component({
            selector: 'app-save-todo',
            templateUrl: './save-todo.component.html',
            styleUrls: ['./save-todo.component.css']
        })
    ], SaveTodoComponent);
    return SaveTodoComponent;
}());
exports.SaveTodoComponent = SaveTodoComponent;

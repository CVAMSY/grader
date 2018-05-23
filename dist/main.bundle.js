webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Grader</h1>\n<app-table-component [list]=\"studentList\"></app-table-component>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_StudentList_model__ = __webpack_require__("./src/models/StudentList.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.studentList = new __WEBPACK_IMPORTED_MODULE_1__models_StudentList_model__["a" /* StudentList */]();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_component_table_component_component__ = __webpack_require__("./src/app/table-component/table-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__row_component_row_component_component__ = __webpack_require__("./src/app/row-component/row-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inline_edit_component_inline_edit_component_component__ = __webpack_require__("./src/app/inline-edit-component/inline-edit-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__table_component_table_component_component__["a" /* TableComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__row_component_row_component_component__["a" /* RowComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__inline_edit_component_inline_edit_component_component__["a" /* InlineEditComponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/inline-edit-component/inline-edit-component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inline-edit-component/inline-edit-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"editMode\"><p (dblclick)=\"enterEditMode()\">{{value}}</p></div>\n<div [hidden]=\"!editMode\"><input type=\"text\" [(ngModel)]=\"editValue\" (keypress)=\"exitEditMode($event)\" autofocus/></div>\n\n\n"

/***/ }),

/***/ "./src/app/inline-edit-component/inline-edit-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineEditComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InlineEditComponentComponent = /** @class */ (function () {
    function InlineEditComponentComponent() {
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    InlineEditComponentComponent.prototype.ngOnInit = function () {
    };
    InlineEditComponentComponent.prototype.enterEditMode = function () {
        if (!this.disableEdit) {
            this.editValue = this.value;
            this.editMode = true;
        }
    };
    InlineEditComponentComponent.prototype.exitEditMode = function (ev) {
        console.log(ev);
        if (ev.key === 'Enter') {
            this.editMode = false;
            this.update.emit(this.editValue);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], InlineEditComponentComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], InlineEditComponentComponent.prototype, "disableEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])('update'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], InlineEditComponentComponent.prototype, "update", void 0);
    InlineEditComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-inline-edit-component',
            template: __webpack_require__("./src/app/inline-edit-component/inline-edit-component.component.html"),
            styles: [__webpack_require__("./src/app/inline-edit-component/inline-edit-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InlineEditComponentComponent);
    return InlineEditComponentComponent;
}());



/***/ }),

/***/ "./src/app/row-component/row-component.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: table-row;\r\n}\r\ntd {\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/row-component/row-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<tr>-->\n<td><app-inline-edit-component [value]=\"student.name\" (update)=\"student.name = $event;\" [disableEdit]=\"disableEdit\"></app-inline-edit-component></td>\n<td><app-inline-edit-component [value]=\"student.english\" (update)=\"updateSubject('english', $event);\" [disableEdit]=\"disableEdit\"></app-inline-edit-component></td>\n<td><app-inline-edit-component [value]=\"student.science\" (update)=\"updateSubject('science', $event);\" [disableEdit]=\"disableEdit\"></app-inline-edit-component></td>\n<td><app-inline-edit-component [value]=\"student.maths\" (update)=\"updateSubject('maths', $event);\" [disableEdit]=\"disableEdit\"></app-inline-edit-component></td>\n<td><app-inline-edit-component [value]=\"student.social\" (update)=\"updateSubject('social', $event);\" [disableEdit]=\"disableEdit\"></app-inline-edit-component></td>\n<td>{{student.total}}</td>\n<td><button class=\"btn btn-primary\" (click)=\"this.delete.emit(student.id);\">Delete</button></td>\n<!--</tr>-->\n"

/***/ }),

/***/ "./src/app/row-component/row-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Student_model__ = __webpack_require__("./src/models/Student.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RowComponentComponent = /** @class */ (function () {
    function RowComponentComponent() {
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    RowComponentComponent.prototype.ngOnInit = function () {
    };
    RowComponentComponent.prototype.updateSubject = function (subject, $event) {
        this.student.updateMarks(subject, $event);
        this.update.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Student_model__["a" /* Student */])
    ], RowComponentComponent.prototype, "student", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RowComponentComponent.prototype, "disableEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], RowComponentComponent.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], RowComponentComponent.prototype, "delete", void 0);
    RowComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-row-component',
            template: __webpack_require__("./src/app/row-component/row-component.component.html"),
            styles: [__webpack_require__("./src/app/row-component/row-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RowComponentComponent);
    return RowComponentComponent;
}());



/***/ }),

/***/ "./src/app/table-component/table-component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-component/table-component.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <td>Name</td>\n      <td>English</td>\n      <td>Science</td>\n      <td>Maths</td>\n      <td>Social</td>\n      <td>Total</td>\n    </tr>\n  </thead>\n  <tbody>\n    <app-row-component *ngFor=\"let student of list.list\" [student]=\"student\" (update)=\"list.calculate();\" (delete)=\"list.delete($event);\"></app-row-component>\n    <tr></tr>\n    <app-row-component [student]=\"list.min\" [disableEdit]=\"true\"></app-row-component>\n    <app-row-component [student]=\"list.max\" [disableEdit]=\"true\"></app-row-component>\n    <app-row-component [student]=\"list.avg\" [disableEdit]=\"true\"></app-row-component>\n  </tbody>\n  <tfoot>\n    <button class=\"btn btn-primary\" (click)=\"list.add()\">Add</button>\n  </tfoot>\n</table>\n"

/***/ }),

/***/ "./src/app/table-component/table-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_StudentList_model__ = __webpack_require__("./src/models/StudentList.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponentComponent = /** @class */ (function () {
    function TableComponentComponent() {
    }
    TableComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_StudentList_model__["a" /* StudentList */])
    ], TableComponentComponent.prototype, "list", void 0);
    TableComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table-component',
            template: __webpack_require__("./src/app/table-component/table-component.component.html"),
            styles: [__webpack_require__("./src/app/table-component/table-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponentComponent);
    return TableComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/Student.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
        this.english = 0;
        this.maths = 0;
        this.science = 0;
        this.social = 0;
    }
    Object.defineProperty(Student.prototype, "total", {
        get: function () {
            return this.english + this.maths + this.science + this.social;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.updateMarks = function (subject, value) {
        var marks = new Number(value);
        if (!isNaN(marks.valueOf())) {
            this[subject] = marks.valueOf();
        }
        else {
            alert("Invalid value");
        }
    };
    return Student;
}());



/***/ }),

/***/ "./src/models/StudentList.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Student_model__ = __webpack_require__("./src/models/Student.model.ts");

var StudentList = /** @class */ (function () {
    function StudentList() {
        this.min = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-1, 'Min');
        this.max = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-2, 'Max');
        this.avg = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-3, 'Avg');
        this.list = [];
        this.add();
        this.add();
    }
    StudentList.prototype.add = function () {
        var index = this.list.length ? this.list[this.list.length - 1].id + 1 : 0;
        this.list.push(new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](index, "Student " + index));
    };
    StudentList.prototype.calculate = function () {
        var _this = this;
        this.min = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-1, 'Min');
        this.max = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-2, 'Max');
        this.avg = new __WEBPACK_IMPORTED_MODULE_0__Student_model__["a" /* Student */](-3, 'Avg');
        var subjects = ['english', 'maths', 'social', 'science'];
        this.list.forEach(function (student) {
            subjects.forEach(function (subject) {
                if (_this.min[subject] > student[subject]) {
                    _this.min[subject] = student[subject];
                }
                if (_this.max[subject] < student[subject]) {
                    _this.max[subject] = student[subject];
                }
                _this.avg[subject] += student[subject];
            });
        });
        subjects.forEach(function (subject) {
            _this.avg[subject] /= _this.list.length;
        });
    };
    StudentList.prototype.delete = function (id) {
        this.list = this.list.filter(function (item) { return item.id !== id; });
    };
    return StudentList;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
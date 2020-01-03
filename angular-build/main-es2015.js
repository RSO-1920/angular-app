(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <span>RSO-1920</span>\r\n            <span class=\"spacer\"></span>\r\n            <span style=\"margin-right: 1em\"><small>{{ String() }}</small></span>\r\n            <button mat-raised-button color=\"warn\" (click)=\"logOut()\">Logout</button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <mat-sidenav-container class=\"sidebar-container\">\r\n        <mat-sidenav  mode=\"side\" opened class=\"sidebar-container-side\">\r\n            <div style=\"margin: 0.5em\">\r\n                <mat-list>\r\n                    <h3 mat-subheader>Channels</h3>\r\n                    <div *ngFor=\"let channel of this.channels \" (click)=\"changeChannel(channel.channelId)\">\r\n                        <mat-list-item >\r\n                            <!--<mat-icon mat-list-icon>folder</mat-icon>-->\r\n                            <h4 mat-line>{{channel.channelName}}</h4>\r\n                            <p mat-line> {{channel.channelId}} </p>\r\n                        </mat-list-item>\r\n                        <mat-divider></mat-divider>\r\n                    </div>\r\n                </mat-list>\r\n            </div>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content>\r\n            <div *ngIf=\"currentChannel\">\r\n                <div style=\"margin: 0.5em\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-11\">\r\n                            <h3>{{this.currentChannel.bucketName}} <small>[{{this.currentChannel.channelId}}]</small></h3>\r\n                            <p><small>{{this.currentChannel.bucketName}} / {{this.currentChannel.channelType.typeName}}</small></p>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"file\"\r\n                                       id=\"file\"\r\n                                       (change)=\"uploadFile($event.target.files)\">\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-9\"\r\n                             fxLayout=\"row wrap\"\r\n                             fxLayout.xs=\"column\"\r\n                             fxLayoutAlign=\"space-evenly center\"\r\n                             fxLayoutGap=\"10px grid\"\r\n                             fxLayoutGap.xs=\"0\"\r\n                        >\r\n\r\n                            <div *ngIf=\"this.channelFiles\">\r\n                                <div *ngFor=\"let file of this.channelFiles\" style=\"display: inline-block; width: 50%; max-width: 50%; margin-top: 3%\">\r\n                                    <app-file-card [file]=\"file\"  ></app-file-card>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                            <p *ngFor=\"let message of this.channelMessages\">\r\n                                {{message.userName}}: {{message.message}}\r\n                            </p>\r\n                            <input (keyup.enter)=\"postMessage($event.target.value)\" id=\"post\" type=\"text\" style=\"width:400px; \"/>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>PAGE NOT FOUND</h1>\n<p>error 404</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-credentials/user-credentials.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-credentials/user-credentials.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-3\"></div>\n        <div class=\"col-6\">\n            <h1>Login</h1>\n            <mat-form-field class=\"fullwidth\">\n                <input matInput type=\"text\" placeholder=\"user name\" [(ngModel)]=\"username\">\n                <button mat-button *ngIf=\"username\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"username=''\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-form-field>\n            <br>\n            <mat-form-field class=\"fullwidth\">\n                <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n                <button mat-button *ngIf=\"password\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"password=''\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-form-field>\n            <br>\n            <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n            <p>New user?  <a [routerLink]=\"['/register']\"> Register </a></p>\n        </div>\n        <div class=\"col-3\"></div>\n    </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/utils/file-card/file-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/utils/file-card/file-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n        <mat-card-title>{{this.file.fileName}}</mat-card-title>\r\n        <mat-card-subtitle>{{this.file.fileType}} | file id: {{this.file.fileId}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <span *ngFor=\"let word of this.file.keywords\">\r\n            {{word}}\r\n        </span>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-button (click)=\"openFile()\">OPEN</button>\r\n        <button mat-button (click)=\"downloadFile()\">DOWNLOAD</button>\r\n        <button mat-button *ngIf=\"file.fileType === 'mp4'\" (click)=\"stream()\">STREAM VIDEO</button>\r\n    </mat-card-actions>\r\n\r\n    <button class=\"block2\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" color=\"warn\">\r\n        <mat-icon>close</mat-icon>\r\n    </button>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_user_credentials_user_credentials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-credentials/user-credentials.component */ "./src/app/components/user-credentials/user-credentials.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _guarts_login_activate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guarts/login-activate.guard */ "./src/app/guarts/login-activate.guard.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _guarts_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guarts/is-logged-in.guard */ "./src/app/guarts/is-logged-in.guard.ts");








const routes = [
    { path: '', pathMatch: 'full', component: _components_user_credentials_user_credentials_component__WEBPACK_IMPORTED_MODULE_3__["UserCredentialsComponent"], canActivate: [_guarts_is_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["IsLoggedInGuard"]] },
    { path: 'main', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"], canActivate: [_guarts_login_activate_guard__WEBPACK_IMPORTED_MODULE_5__["LoginActivateGuard"]] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_credentials_user_credentials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-credentials/user-credentials.component */ "./src/app/components/user-credentials/user-credentials.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _components_utils_file_card_file_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/utils/file-card/file-card.component */ "./src/app/components/utils/file-card/file-card.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/channel.service */ "./src/app/services/channel.service.ts");




/** Modules * */




/** Components* */







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_user_credentials_user_credentials_component__WEBPACK_IMPORTED_MODULE_9__["UserCredentialsComponent"],
            _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_10__["LandingPageComponent"],
            _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_11__["Page404Component"],
            _components_utils_file_card_file_card_component__WEBPACK_IMPORTED_MODULE_12__["FileCardComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        ],
        providers: [_services_channel_service__WEBPACK_IMPORTED_MODULE_14__["ChannelService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n  flex: 1 1 auto;\n}\n\n.sidebar-container {\n  position: absolute;\n  top: 8%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidebar-container-side {\n  background: ghostwhite;\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvQzpcXFVzZXJzXFx1cm9zelxcT25lRHJpdmVcXFpJTVNLSV9TRU1FU1RFUlxcUlNPXFxzZW1pbmFyc2thXFxhbmd1bGFyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLnNpZGViYXItY29udGFpbmVyLXNpZGUge1xyXG4gICAgYmFja2dyb3VuZDogZ2hvc3R3aGl0ZTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuIiwiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlYmFyLWNvbnRhaW5lci1zaWRlIHtcbiAgYmFja2dyb3VuZDogZ2hvc3R3aGl0ZTtcbiAgd2lkdGg6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/oath.service */ "./src/app/services/oath.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/channel.service */ "./src/app/services/channel.service.ts");





let LandingPageComponent = class LandingPageComponent {
    constructor(oathService, changeDetector, router, channelService) {
        this.oathService = oathService;
        this.changeDetector = changeDetector;
        this.router = router;
        this.channelService = channelService;
    }
    ngOnInit() {
        this.oathService.receiveUserData().subscribe((data) => {
            this.userDataLanding = data;
            // TODO  IF NULL GET USER ID FROM LOCALSTORAGE AND CALL SERVICE FOR GETTING USER DETAILED DATA
            this.changeDetector.markForCheck();
        });
        this.getChannelsOfUser();
    }
    logOut() {
        this.oathService.deleteUserLocalStorageData();
        this.router.navigate(['']);
    }
    String() {
        if (!this.userDataLanding) {
            return 'NO USER';
        }
        return this.userDataLanding.toString();
    }
    getChannelsOfUser() {
        return this.channelService.getChannels(1).subscribe((success) => {
            this.channels = success.data;
            this.currentChannel = this.channels[0];
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.channels.length; i++) {
                if (this.channels[i].channelType.typeId === 1) {
                    this.currentChannel = this.channels[i];
                    break;
                }
            }
            this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (success1) => {
                this.channelFiles = success1.data;
                this.channelService.getMessagesOfChannel(this.currentChannel.channelId).subscribe((messagesRsp) => {
                    this.channelMessages = messagesRsp.data;
                    this.changeDetector.markForCheck();
                }, error => {
                    console.log('error: ', error);
                });
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });
    }
    changeChannel(channelId) {
        this.channelService.getFilesOfChannel(channelId).subscribe((success) => {
            this.channelFiles = success.data;
            this.channelService.getMessagesOfChannel(channelId).subscribe((success1) => {
                this.channelMessages = success1.data;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < this.channels.length; i++) {
                    if (this.channels[i].channelId === channelId) {
                        this.currentChannel = this.channels[i];
                        break;
                    }
                }
                this.changeDetector.markForCheck();
            }, (error) => {
                console.log(error);
            });
        }, (error) => {
            console.log(error);
        });
    }
    deleteFile(fileId, channelId) {
        this.channelService.deleteFile(fileId, channelId);
    }
    uploadFile(files) {
        // TODO: kaj se pošlje?
        let fileToUpload = null;
        fileToUpload = files.item(0);
        console.log(fileToUpload);
        this.channelService.uploadFile(fileToUpload, 1, this.currentChannel.channelId).subscribe((rsp) => {
            console.log('FILE UPLOAD: ', rsp);
            this.channelService.getFilesOfChannel(this.currentChannel.channelId).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (success1) => {
                this.channelFiles = success1.data;
                this.changeDetector.markForCheck();
            }, (error) => {
                console.log(error);
            });
        }, error => console.log(error));
    }
    postMessage(value) {
        console.log('SENDING MESSAGE ' + value);
        console.log('channel: ' + this.currentChannel.channelId);
        // TODO: NASTAVI USERJA
        if (value !== '') {
            this.channelService.postMessage(value, 'uros', this.currentChannel.channelId).subscribe((rsp) => {
                console.log('RSP: ', rsp);
            }, error => {
                console.log(error);
            });
        }
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _services_oath_service__WEBPACK_IMPORTED_MODULE_2__["OathService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/components/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/components/page404/page404.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.scss */ "./src/app/components/page404/page404.component.scss")).default]
    })
], Page404Component);



/***/ }),

/***/ "./src/app/components/user-credentials/user-credentials.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-credentials/user-credentials.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1jcmVkZW50aWFscy91c2VyLWNyZWRlbnRpYWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-credentials/user-credentials.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-credentials/user-credentials.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCredentialsComponent", function() { return UserCredentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/oath.service */ "./src/app/services/oath.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserCredentialsComponent = class UserCredentialsComponent {
    constructor(oathService, router) {
        this.oathService = oathService;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        // TODO call real login services
        this.oathService.setUserLocalStorageData(this.username);
        this.oathService.setUserData(this.username);
        this.router.navigate(['/main']);
    }
};
UserCredentialsComponent.ctorParameters = () => [
    { type: _services_oath_service__WEBPACK_IMPORTED_MODULE_2__["OathService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserCredentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-credentials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-credentials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-credentials/user-credentials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-credentials.component.scss */ "./src/app/components/user-credentials/user-credentials.component.scss")).default]
    })
], UserCredentialsComponent);



/***/ }),

/***/ "./src/app/components/utils/file-card/file-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/utils/file-card/file-card.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block2 {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91dGlscy9maWxlLWNhcmQvQzpcXFVzZXJzXFx1cm9zelxcT25lRHJpdmVcXFpJTVNLSV9TRU1FU1RFUlxcUlNPXFxzZW1pbmFyc2thXFxhbmd1bGFyLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXRpbHNcXGZpbGUtY2FyZFxcZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL2ZpbGUtY2FyZC9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3V0aWxzL2ZpbGUtY2FyZC9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2syIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG4iLCIuYmxvY2syIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/utils/file-card/file-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/utils/file-card/file-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: FileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCardComponent", function() { return FileCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



let FileCardComponent = class FileCardComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.file);
    }
    openFile() {
        const filePath = this.file.filePath.split('/');
        if (filePath.length === 2) {
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'filedownloader/v1/file/showInBrowser/' + filePath[0] + '/' + filePath[1], '_blank');
        }
    }
    downloadFile() {
        console.log('downloading file');
        const filePath = this.file.filePath.split('/');
        if (filePath.length === 2) {
            window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'filedownloader/v1/file/download/' + filePath[0] + '/' + filePath[1]);
        }
    }
    stream() {
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + 'streamer/v1/stream/' + this.file.fileId, '_blank');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileCardComponent.prototype, "file", void 0);
FileCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/utils/file-card/file-card.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-card.component.scss */ "./src/app/components/utils/file-card/file-card.component.scss")).default]
    })
], FileCardComponent);



/***/ }),

/***/ "./src/app/guarts/is-logged-in.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guarts/is-logged-in.guard.ts ***!
  \**********************************************/
/*! exports provided: IsLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInGuard", function() { return IsLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/oath.service */ "./src/app/services/oath.service.ts");




let IsLoggedInGuard = class IsLoggedInGuard {
    constructor(oathService, router) {
        this.oathService = oathService;
        this.router = router;
    }
    canActivate(next, state) {
        // TODO get real access token and so on
        console.log('TOKEN: ', this.oathService.getUserAccessToken());
        if (this.oathService.getUserAccessToken()) {
            return this.router.navigate(['main']);
        }
        return true;
    }
};
IsLoggedInGuard.ctorParameters = () => [
    { type: _services_oath_service__WEBPACK_IMPORTED_MODULE_3__["OathService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IsLoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IsLoggedInGuard);



/***/ }),

/***/ "./src/app/guarts/login-activate.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guarts/login-activate.guard.ts ***!
  \************************************************/
/*! exports provided: LoginActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActivateGuard", function() { return LoginActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_oath_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/oath.service */ "./src/app/services/oath.service.ts");




let LoginActivateGuard = class LoginActivateGuard {
    constructor(oathService, router) {
        this.oathService = oathService;
        this.router = router;
    }
    canActivate(next, state) {
        // TODO get real access token and so on
        if (!this.oathService.getUserAccessToken()) {
            return this.router.navigate(['']);
        }
        return true;
    }
};
LoginActivateGuard.ctorParameters = () => [
    { type: _services_oath_service__WEBPACK_IMPORTED_MODULE_3__["OathService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginActivateGuard);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
        ],
        exports: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_33__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/services/channel.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/channel.service.ts ***!
  \*********************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ChannelService = class ChannelService {
    constructor(http) {
        this.http = http;
    }
    // MANAGE CHANNELS
    getChannels(id) {
        // const url = environment.url.concat('channels/v1/channels/userChannels/2');
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'channels/v1/channels/userChannels/1');
    }
    getFilesOfChannel(id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'catalog/v1/catalog/channel/' + id);
    }
    getMessagesOfChannel(id) {
        // TODO: This
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'incomingmsg/v1/msg/' + id);
    }
    // MANAGE FILES
    /*  HANDLED IN PRIMITIWE WAY WITH WINDOWS REDIRECTS
    downloadFile(fileName: string, channelName: string) {
        //
        return this.http.get(environment.url + 'v1/fileTransfer/' +
            channelName + '/' + fileName);
    }

    openFile(fileName: string, channelName: string) {
        return this.http.get(environment.url + 'filedownloader/v1/file/showInBrowser/' + channelName + '/' + fileName );
    }*/
    deleteFile(fileId, channelId) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url +
            'file-manager/v1/file/delete/?fileId=' + fileId +
            '&channelId=' + channelId);
    }
    uploadFile(fileToUpload, userId, channelId) {
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append('integerUser', userId.toString());
        formData.append('integerChannel', channelId.toString());
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'file-manager/v1/file/upload', formData);
    }
    postMessage(msg, uName, chId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'incomingmsg/v1/msg/' + chId, { message: msg, userName: uName, channelId: chId });
    }
};
ChannelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChannelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChannelService);



/***/ }),

/***/ "./src/app/services/oath.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/oath.service.ts ***!
  \******************************************/
/*! exports provided: OathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OathService", function() { return OathService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let OathService = class OathService {
    constructor() {
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    setUserLocalStorageData(userToken) {
        localStorage.setItem('accessToken', userToken);
    }
    deleteUserLocalStorageData() {
        localStorage.clear();
    }
    getUserAccessToken() {
        return localStorage.getItem('accessToken');
    }
    setUserData(userData) {
        this.userData.next(userData);
    }
    receiveUserData() {
        return this.userData.asObservable();
    }
};
OathService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OathService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: 'http://34.65.1.34/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\urosz\OneDrive\ZIMSKI_SEMESTER\RSO\seminarska\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animation/forms.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formsTransition;
/* unused harmony export FslideToRight */
/* unused harmony export FslideToLeft */
/* unused harmony export FslideToBottom */
/* unused harmony export FslideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function formsTransition() {
    return FslideToLeft();
}
function FslideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('formsTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function FslideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('formsTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function FslideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('formsTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function FslideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('formsTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=forms.animations.js.map

/***/ }),

/***/ "../../../../../src/app/animation/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

function routerTransition() {
    return slideToTop();
    // return slideToRight();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard_glavni__ = __webpack_require__("../../../../../src/app/guards/auth.guard.glavni.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard_glavni__["a" /* AuthGuardGlavni */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'not-found' }
    // {
    //     path: '',
    //     loadChildren: './layout/layout.module#LayoutModule',
    //     canActivate: [AuthGuard]
    // }
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // {path:'register', component: RegisterComponent},
    // {path:'login', component: LoginComponent},
    //  { path: 'not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: 'not-found' }
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n\r\n</app-navbar>\r\n<div class=\"content-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"container-fluid\"> \r\n             <div class='body-content'> \r\n                <flash-messages></flash-messages> \r\n                <router-outlet></router-outlet> \r\n            </div>\r\n        \r\n        </div>\r\n      \r\n    </div>\r\n    <footer class=\"sticky-footer\">\r\n            <div class=\"text-center\">\r\n                <small>derrad © Omladinska zadruga 2017</small>\r\n            </div>\r\n    </footer>\r\n</div> \r\n\r\n\r\n<!-- col-xs-12 col-sm-12 col-md-11 -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Omladinske zadruge';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_frmDatum_DateValueAccessorModule___ = __webpack_require__("../../../../../src/app/shared/frmDatum/DateValueAccessorModule .ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_left_navbar_left_component__ = __webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_validate_service__ = __webpack_require__("../../../../../src/app/services/auth/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard_glavni__ = __webpack_require__("../../../../../src/app/guards/auth.guard.glavni.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_pipeapp_keys_pipe__ = __webpack_require__("../../../../../src/app/shared/pipeapp/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_zanimanja_zanimanja_module__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_drzave_drzave_module__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_opstine_opstine_module__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_fond_sati_fond_sati_module__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_mesta_mesta_module__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_radnik_radnik_module__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_posao_posao_module__ = __webpack_require__("../../../../../src/app/components/posao/posao.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_parametar_parametar_module__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_vlasnik_vlasnik_module__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_konstanta_konstanta_module__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_partner_partner_module__ = __webpack_require__("../../../../../src/app/components/partner/partner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_banke_banke_module__ = __webpack_require__("../../../../../src/app/components/banke/banke.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_zadrugar_zadrugar_module__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Meni and app komponente







// Service





// import { DashboardService } from '. ./dashboard/dashboard.service';

// Komponente


// Pipe

// Module














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_left_navbar_left_component__["a" /* NavbarLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shared_pipeapp_keys_pipe__["a" /* KeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8__shared_frmDatum_DateValueAccessorModule___["a" /* DateValueAccessorModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SidebarModule"],
            __WEBPACK_IMPORTED_MODULE_27__components_drzave_drzave_module__["a" /* DrzaveModule */],
            __WEBPACK_IMPORTED_MODULE_28__components_opstine_opstine_module__["a" /* OpstineModule */],
            __WEBPACK_IMPORTED_MODULE_26__components_zanimanja_zanimanja_module__["a" /* ZanimanjaModule */],
            __WEBPACK_IMPORTED_MODULE_29__components_fond_sati_fond_sati_module__["a" /* FondSatiModule */],
            __WEBPACK_IMPORTED_MODULE_30__components_mesta_mesta_module__["a" /* MestaModule */],
            __WEBPACK_IMPORTED_MODULE_31__components_radnik_radnik_module__["a" /* RadnikModule */],
            __WEBPACK_IMPORTED_MODULE_32__components_posao_posao_module__["a" /* PosaoModule */],
            __WEBPACK_IMPORTED_MODULE_33__components_parametar_parametar_module__["a" /* ParametarModule */],
            __WEBPACK_IMPORTED_MODULE_34__components_vlasnik_vlasnik_module__["a" /* VlasnikModule */],
            __WEBPACK_IMPORTED_MODULE_35__components_konstanta_konstanta_module__["a" /* KonstantaModule */],
            __WEBPACK_IMPORTED_MODULE_36__components_partner_partner_module__["a" /* PartnerModule */],
            __WEBPACK_IMPORTED_MODULE_37__components_banke_banke_module__["a" /* BankeModule */],
            __WEBPACK_IMPORTED_MODULE_38__components_zadrugar_zadrugar_module__["a" /* ZadrugarModule */],
            __WEBPACK_IMPORTED_MODULE_25__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard_glavni__["a" /* AuthGuardGlavni */], __WEBPACK_IMPORTED_MODULE_18__services_service_validate_shared__["a" /* ServiceValidateShared */], __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_service__["a" /* DashboardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke-form/banke-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: absolute;\r\n  z-index: 2;\r\n  opacity: 0;\r\n  background: rgba(39, 42, 43, 0.8);\r\n  transition: opacity 200ms ease-in-out;\r\n  border-radius: 4px;\r\n  margin: -15px 0 0 -15px; }\r\n  .overlay button {\r\n    margin: 5px; }\r\n  .overlay:hover {\r\n    opacity: 1; }\r\n/* \r\n  .overlay {\r\n      position: fixed; /* Sit on top of the page content */\r\n      /* display: none; /* Hidden by default */\r\n      /* width: 100%; Full width (cover the whole page) */\r\n      /* height: 100%; Full height (cover the whole page) */\r\n     /* top: 0; \r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0; */\r\n      /* background-color: rgba(0,0,0,0.5); Black background with opacity */\r\n      /* z-index: 2; Specify a stack order in case you're using a different order for other elements */\r\n      /* cursor: pointer; Add a pointer on hover */\r\n /* }    \r\n  \r\n  */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banke/banke-form/banke-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mainpanel\" >\r\n\r\n<div class=\"panel panel-primary\"  [@formsTransition] >\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n              <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"frmBank\" (ngSubmit)=\"save()\" novalidate>\r\n\r\n         <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"bankaN._id\"   type=\"hidden\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n                  <label class=\"center-block\">Naziv:\r\n                    <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"bankaN.Naziv\"  required>\r\n                  </label>\r\n                  <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"Naziv.errors.required\">\r\n                          <strong>Naziv je obavezan podatak !!!</strong>\r\n                      </div>\r\n                     <div *ngIf=\"Naziv.errors.maxlength\">\r\n                          <strong>Predugačak naziv !!!</strong>\r\n                     </div>\r\n                  </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n                <label class=\"center-block\">Racun:\r\n                  <input class=\"form-control\" formControlName=\"Racun\"  [(ngModel)]=\"bankaN.Racun\" required>\r\n                </label>\r\n                <div *ngIf=\"Racun.invalid && (Racun.dirty || Racun.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"Racun.errors.required\">\r\n                        <strong>Racun je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"Racun.errors.minlength\">\r\n                        <strong>Racun mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                      </div>\r\n                    <div *ngIf=\"Racun.errors.maxlength\">\r\n                        <strong>Predugačak racun !!!</strong>\r\n                   </div>\r\n                </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"center-block\">\r\n                    <input type=\"checkbox\" formControlName=\"Aktivan\" [(ngModel)]=\"bankaN.Aktivan\">Aktivan\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Opis:\r\n                <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"bankaN.Opis\">\r\n                </textarea>\r\n              </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!frmBank.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                         Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"frmBank.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n    <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n      <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n      Back\r\n    </button>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/banke/banke-form/banke-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banke_model__ = __webpack_require__("../../../../../src/app/components/banke/banke-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banke_service__ = __webpack_require__("../../../../../src/app/components/banke/banke.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import * as $ from 'jquery';
var BankeFormComponent = (function () {
    function BankeFormComponent(bankeService, router, route, formBuilder, _location, serValidate, flashMessage) {
        this.bankeService = bankeService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.serValidate = serValidate;
        this.flashMessage = flashMessage;
        this.bankaN = new __WEBPACK_IMPORTED_MODULE_3__banke_model__["a" /* BankeModel */]();
        this.saveTemp = true;
        this.frmBank = formBuilder.group({
            _id: [],
            Racun: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
            Aktivan: [],
            Naziv: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
            Opis: []
        });
    }
    Object.defineProperty(BankeFormComponent.prototype, "Racun", {
        get: function () { return this.frmBank.get('Racun'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankeFormComponent.prototype, "Naziv", {
        get: function () { return this.frmBank.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    BankeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje banke' : 'NOVA BANKA';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.bankeService.getBanka(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.bankaN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    BankeFormComponent.prototype.save = function () {
        var _this = this;
        //  this.sizeTheOverlays();
        // $('#mainpanel').addClass('overlay');
        // $('.panel').addClass('overlay');
        //  let i: number;
        //  for (i = 0; i < 10000 ; i++) {
        //    console.log(i);
        //  }
        var frmValue = this.frmBank.value;
        // frmValue.Naziv = null;
        if (frmValue._id) {
            this.bankeService.updateBanka(frmValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['banke']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                console.log('greska je');
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.bankeService.addBanke(frmValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['banke']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        // $('#mainpanel').removeClass('overlay');
        // $('.panel').removeClass('overlay');
    };
    // sizeTheOverlays() {
    // $('#mainpanel').addClass('overlay');
    // $('.overlay').resize().each(function() {
    //   const h: any = $(this).parent().outerHeight();
    //   const w: any = $(this).parent().outerWidth();
    //   $(this).css('height', h);
    //   $(this).css('width', w);
    // });
    // }
    BankeFormComponent.prototype.loadTempData = function () {
        var valuetemp = JSON.parse(localStorage.getItem('data_banka'));
        if (valuetemp) {
            this.bankaN = valuetemp;
        }
    };
    BankeFormComponent.prototype.setTempData = function () {
        var fsValue = JSON.stringify(this.frmBank.value);
        if (fsValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_banka', fsValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    BankeFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_banka');
    };
    BankeFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
    };
    BankeFormComponent.prototype.revert = function () { this.clearFormData(); };
    BankeFormComponent.prototype.clearFormData = function () {
        this.frmBank.reset({
            Racun: '',
            Naziv: '',
            Aktivan: '',
            Opis: ''
        });
    };
    BankeFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return BankeFormComponent;
}());
BankeFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-banke-form',
        template: __webpack_require__("../../../../../src/app/components/banke/banke-form/banke-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/banke/banke-form/banke-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__banke_service__["a" /* BankeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__banke_service__["a" /* BankeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object])
], BankeFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=banke-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeModel; });
var BankeModel = (function () {
    function BankeModel() {
    }
    return BankeModel;
}());

//# sourceMappingURL=banke-model.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banke_component__ = __webpack_require__("../../../../../src/app/components/banke/banke.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banke_form_banke_form_component__ = __webpack_require__("../../../../../src/app/components/banke/banke-form/banke-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var bankeRoutes = [
    { path: 'banke', component: __WEBPACK_IMPORTED_MODULE_3__banke_component__["a" /* BankeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'banke/new', component: __WEBPACK_IMPORTED_MODULE_4__banke_form_banke_form_component__["a" /* BankeFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'banke/:id', component: __WEBPACK_IMPORTED_MODULE_4__banke_form_banke_form_component__["a" /* BankeFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];
var BankeRoutingModule = (function () {
    function BankeRoutingModule() {
    }
    return BankeRoutingModule;
}());
BankeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(bankeRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], BankeRoutingModule);

//# sourceMappingURL=banke-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banke/banke.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"bankeL;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"bankeL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedBank\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Naziv\" header=\"Naziv\"></p-column>\r\n      <p-column field=\"Racun\" header=\"Racun\"></p-column> \r\n      \r\n      <p-column field=\"Aktivan\" header=\"Aktivan\"   styleClass=\"text-center\" >\r\n        <ng-template let-col let-bank=\"rowData\" pTemplate=\"body\">\r\n                <span [hidden]=\"bank[col.field]==false\">DA</span> \r\n                <span [hidden]=\"bank[col.field]==true\">NE</span> \r\n                \r\n        </ng-template> \r\n      </p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n       \r\n          <ng-template let-bank=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\r\n\r\n              <button type=\"button\" pButton (click)=\"selectItem(bank)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateBanke(bank._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteBank(bank)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n       <p-footer *ngIf=\"bankeL.length > 0\">\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addBanke()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <!-- Custom content goes here -->\r\n            <div class=\"row\">\r\n                 <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                    <div class=\"hidden-xs dtempty_message_h1\">\r\n                        Još niste kreirali podatak.\r\n                    </div>\r\n                    <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                    <br/>\r\n                    <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                    <h3 class=\" hidden-xs dtempty_message\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite: \r\n                        <a  class=\"dtempty_message_text\" (click)=\"addBanke()\">\r\n                             Kreiraj podatak\r\n                        </a>\r\n                    </h3>\r\n\r\n                    <h5 class=\"visible-xs\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite : \r\n                        <a   (click)=\"addBanke()\">\r\n                             Kreiraj podatak\r\n                        </a>\r\n                    </h5>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"BANKA\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\" >\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                          ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{bankaShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                        NAZIV\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                        {{bankaShow.Naziv}} \r\n                        </dd>\r\n                        <dt>\r\n                        RAČUN\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.Racun}}\r\n                        </dd>\r\n                        <dt>\r\n                          AKTIVAN\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.Aktivan}}\r\n                        </dd>\r\n                       <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{bankaShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer> \r\n             \r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n            \r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n \r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/banke/banke.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banke_service__ = __webpack_require__("../../../../../src/app/components/banke/banke.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__banke_model__ = __webpack_require__("../../../../../src/app/components/banke/banke-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BankeComponent = (function () {
    function BankeComponent(router, bankService, confirmationService, flashMessage) {
        this.router = router;
        this.bankService = bankService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.bankaShow = new __WEBPACK_IMPORTED_MODULE_6__banke_model__["a" /* BankeModel */]();
        this.Title = 'PREGLED BANAKA';
    }
    BankeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bankService.getBanke()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.bankeL = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            _this.bankeL = [];
            return false;
        });
    };
    BankeComponent.prototype.selectItem = function (work) {
        this.displayDetals = true;
        this.bankaShow = this.cloneData(work);
    };
    BankeComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_6__banke_model__["a" /* BankeModel */]();
        // tslint:disable-next-line:forin
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    BankeComponent.prototype.addBanke = function () {
        this.router.navigate(['/banke/new']);
    };
    BankeComponent.prototype.updateBanke = function (id) {
        this.router.navigate(['/banke/', id]);
    };
    BankeComponent.prototype.deleteBank = function (tbanka) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ? ",
            header: "" + tbanka.Naziv,
            accept: function () {
                var index = _this.bankeL.indexOf(tbanka);
                _this.bankeL.splice(index, 1);
                _this.bankService.delBanka(tbanka._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    _this.bankeL.splice(index, 0, tbanka);
                });
            }
        });
    };
    return BankeComponent;
}());
BankeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-banke',
        template: __webpack_require__("../../../../../src/app/components/banke/banke.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/banke/banke.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__banke_service__["a" /* BankeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__banke_service__["a" /* BankeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], BankeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=banke.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__banke_component__ = __webpack_require__("../../../../../src/app/components/banke/banke.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banke_form_banke_form_component__ = __webpack_require__("../../../../../src/app/components/banke/banke-form/banke-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__banke_service__ = __webpack_require__("../../../../../src/app/components/banke/banke.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__banke_routing_module__ = __webpack_require__("../../../../../src/app/components/banke/banke-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BankeModule = (function () {
    function BankeModule() {
    }
    return BankeModule;
}());
BankeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__banke_routing_module__["a" /* BankeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__banke_component__["a" /* BankeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__banke_form_banke_form_component__["a" /* BankeFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__banke_service__["a" /* BankeService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], BankeModule);

//# sourceMappingURL=banke.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/banke/banke.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BankeService = (function () {
    function BankeService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    BankeService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    BankeService.prototype.getBanke = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/banke');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    BankeService.prototype.getBanka = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/banke/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    BankeService.prototype.addBanke = function (tbanke) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/banke/');
        return this.http.post(ep, JSON.stringify(tbanke), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BankeService.prototype.updateBanka = function (tbanke) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/banke/' + tbanke._id);
        return this.http.put(ep, JSON.stringify(tbanke), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    BankeService.prototype.delBanka = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/banke/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    BankeService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return BankeService;
}());
BankeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BankeService);

var _a;
//# sourceMappingURL=banke.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div  [@routerTransition]>\r\n      \r\n        <div class=\"row\">\r\n\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12\">\r\n                        <div class=\"panel panel-info\">\r\n                                <div class=\"panel-heading\">\r\n                                        <div class=\"row\">\r\n                                                <div class=\"col-xs-12 text-center\">\r\n                                                    <h3>UPUTI</h3>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12 text-left\">\r\n                                                <h4 >26</h4>\r\n                                                <div>Ukupno</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-center\">\r\n                                                    <h4>15</h4>\r\n                                                <div><strong>Fakturisanih</strong></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-right\">\r\n                                                    <h4>0</h4>\r\n                                                <div>Stornirani</div>\r\n                                            </div>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12\">\r\n                        <div class=\"panel panel-warning\">\r\n                                <div class=\"panel-heading\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12 text-center\">\r\n                                                <h3>FAKTURE</h3>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12 text-left\">\r\n                                                    <h4>26</h4>\r\n                                                <div>Faktura</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-center\">\r\n                                                <h4>15</h4>\r\n                                                <div><strong>Uplaćenih</strong></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-right\">\r\n                                                    <h4>12</h4>\r\n                                                <div>Isplaćenih</div>\r\n                                            </div>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12\">\r\n                    <div class=\"panel panel-success\">\r\n                            <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 text-center\">\r\n                                            <h3>UPLATE</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-12 text-left\">\r\n                                                <h4>26</h4>\r\n                                            <div>Ukupno</div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-12 text-center\">\r\n                                            <h4>15</h4>\r\n                                            <div><strong>U celosti</strong></div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-12 text-right\">\r\n                                                <h4>12</h4>\r\n                                            <div>Deo uplaćen</div>\r\n                                        </div>\r\n                                    </div>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-3 col-xs-12\">\r\n                        <div class=\"panel panel-danger\">\r\n                                <div class=\"panel-heading\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12 text-center\">\r\n                                                <h3>ISPLATE</h3>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-xs-12 text-left\">\r\n                                                    <h4>26</h4>\r\n                                                <div>Ukupno</div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-center\">\r\n                                                <h4>15</h4>\r\n                                                <div><strong>Samo po uplatama</strong></div>\r\n                                            </div>\r\n                                            <div class=\"col-xs-12 text-right\">\r\n                                                    <h4>12</h4>\r\n                                                <div>Samo po Fakturama</div>\r\n                                            </div>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-xs-12\">\r\n                    <div class=\"panel panel-primary\">\r\n                            <div class=\"panel-heading\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-3\">\r\n                                        <i class=\"fa fa-users fa-5x\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-9 text-right\">\r\n                                        <div class=\"badge\">26</div>\r\n                                        <div>Unetih zadrugara</div>\r\n                                    </div>\r\n                                    <div class=\"col-xs-9 text-right\">\r\n                                        <div class=\"badge\">15</div>\r\n                                        <div>Aktivnih zadrugara</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <a href=\"#\">\r\n                                <div class=\"panel-footer\">\r\n                                        <span class=\"pull-left\">Pogledaj detaljnije</span>\r\n                                        <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right fa-2x\"></i></span>\r\n                                    <div class=\"clearfix\"></div>\r\n                                </div>\r\n                            </a>\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-xs-12\">\r\n                        <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-3\">\r\n                                            <i class=\"fa fa-address-card fa-5x\"></i>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"form-group col-xs-9 text-right\">\r\n                                                <div>Kupaca ukupno\r\n                                                    <span class=\"badge\">{{CkupacAll}}</span>\r\n                                                </div>\r\n                                        </div>\r\n                                        \r\n                                        <div class=\"form-group col-xs-9 text-right\">\r\n                                            <div>Aktivnih kupaca\r\n                                                <span class=\"badge\">15</span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <a [routerLink]=\"['/partner']\">\r\n                                    <div class=\"panel-footer\">\r\n                                            <span class=\"pull-left\">Pogledaj detaljnije</span>\r\n                                            <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right fa-2x\"></i></span>\r\n                                        <div class=\"clearfix\"></div>\r\n                                    </div>\r\n                                </a>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-xs-12\">\r\n                        <div class=\"panel panel-primary\">\r\n                                <div class=\"panel-heading\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-3\">\r\n                                            <i class=\"fa fa-list-alt fa-5x\"></i>\r\n                                        </div>\r\n                                        <div class=\"form-group col-xs-9 text-right\">\r\n                                                <div>Poslova ukupno\r\n                                                    <span class=\"badge\">{{CposaoAll}}</span>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group col-xs-9 text-right\">\r\n                                                 <div>Aktivnih poslova\r\n                                                    <span class=\"badge\">15</span>\r\n                                                 </div>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                                <a [routerLink]=\"['/posao']\">\r\n                                    <div class=\"panel-footer\">\r\n                                        <span class=\"pull-left\">Pogledaj detaljnije</span>\r\n                                        <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right fa-2x\"></i></span>\r\n                                        <div class=\"clearfix\"></div>\r\n                                    </div>\r\n                                </a>\r\n                        </div>\r\n                </div>\r\n                    \r\n               \r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(dashService) {
        this.dashService = dashService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashService.getPosaoCount().subscribe(function (profile) {
            if (profile.success === true) {
                _this.CposaoAll = profile.number;
            }
        }, function (err) {
            console.log(err);
            _this.CposaoAll = 0;
            return false;
        });
        this.dashService.getKupciCount().subscribe(function (profile) {
            if (profile.success === true) {
                _this.CkupacAll = profile.number;
            }
        }, function (err) {
            console.log(err);
            _this.CkupacAll = 0;
            return false;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    DashboardService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    DashboardService.prototype.getPosaoCount = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/countposaoall');
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DashboardService.prototype.getKupciCount = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/countkupciall');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DashboardService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave-form/drzave-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave-form/drzave-form.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"panel panel-primary\" [@formsTransition]>\r\n    <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n        <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n          <h5>{{title}}</h5> \r\n        </div>\r\n        <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n          <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- fa-2x -->\r\n  <div class=\"panel-body\">\r\n        <form [formGroup]=\"formDR\" (ngSubmit)=\"save()\">\r\n          <div class=\"form-group\" >\r\n                <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"drzavaN._id\"  type=\"hidden\">\r\n          </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Kod:\r\n                <input class=\"form-control \" formControlName=\"KodDrzave\"  [(ngModel)]=\"drzavaN.KodDrzave\"   \r\n               required>\r\n              </label>\r\n              <div *ngIf=\"KodDrzave.invalid && (KodDrzave.dirty || KodDrzave.touched)\" class=\"alert alert-danger\">\r\n\r\n                <div *ngIf=\"KodDrzave.errors.required\">\r\n                    <strong>Kod drzave je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"KodDrzave.errors.minlength\">\r\n                  <strong>Kod drzave mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"KodDrzave.errors.maxlength\">\r\n                  <strong>Predugački kod drzave (max 3) !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"KodDrzave.errors.validateSifru\">\r\n                  <strong>Kod drzave nije u dobrom formatu, ima nedozvoljene karaktere !!!</strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Naziv:\r\n                  <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"drzavaN.Naziv\"   required  >\r\n                </label>\r\n                <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"Naziv.errors.required\">\r\n                      <strong>Naziv je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Naziv.errors.maxlength\">\r\n                    <strong>Predugački naziv !!!</strong>\r\n                  </div>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"checkbox\">\r\n                <label class=\"center-block\">\r\n                    <input type=\"checkbox\" formControlName=\"EuClan\" [(ngModel)]=\"drzavaN.EuClan\"  value=\"1\">EuClan\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"drzavaN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formDR.valid\"\r\n                            class=\"btn btn-success\">\r\n                            <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formDR.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n            </div>\r\n        </form>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n      <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n          <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n          Back\r\n      </button>\r\n  </div>\r\n    \r\n</div>\r\n       \r\n"

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_model__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drzave_service__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DrzaveFormComponent = (function () {
    function DrzaveFormComponent(drzaveService, router, route, formBuilder, _location, serValidate, flashMessage) {
        this.drzaveService = drzaveService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.serValidate = serValidate;
        this.flashMessage = flashMessage;
        this.drzavaN = new __WEBPACK_IMPORTED_MODULE_3__drzave_model__["a" /* Drzave */]();
        this.titleAlertNaziv = 'This field is required !!!';
        this.titleAlertKod = 'KOD-ima jos, This field is required !!!';
        this.saveTemp = true;
        this.formDR = formBuilder.group({
            _id: [],
            KodDrzave: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(3), serValidate.validateRegExpSifru]],
            EuClan: [],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)
                ]],
            Opis: []
        });
    }
    Object.defineProperty(DrzaveFormComponent.prototype, "KodDrzave", {
        get: function () { return this.formDR.get('KodDrzave'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrzaveFormComponent.prototype, "Naziv", {
        get: function () { return this.formDR.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    DrzaveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje Države' : 'NOVA Država';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.drzaveService.getDrzava(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.drzavaN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    DrzaveFormComponent.prototype.save = function () {
        var _this = this;
        var drzaveValue = this.formDR.value;
        if (drzaveValue._id) {
            this.drzaveService.updateDrzava(drzaveValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['drzave']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.drzaveService.addDrzava(drzaveValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['drzave']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    DrzaveFormComponent.prototype.loadTempData = function () {
        var valuetemp = JSON.parse(localStorage.getItem('data_drzava'));
        if (valuetemp) {
            this.drzavaN = valuetemp;
        }
    };
    DrzaveFormComponent.prototype.setTempData = function () {
        var fsValue = JSON.stringify(this.formDR.value);
        if (fsValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_drzava', fsValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    DrzaveFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_drzava');
    };
    DrzaveFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
    };
    DrzaveFormComponent.prototype.revert = function () { this.clearFormData(); };
    DrzaveFormComponent.prototype.clearFormData = function () {
        this.formDR.reset({
            KodDrzave: '',
            Naziv: '',
            EuClan: 0,
            Opis: ''
        });
    };
    DrzaveFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return DrzaveFormComponent;
}());
DrzaveFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drzave-form',
        template: __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__drzave_service__["a" /* DrzaveService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"]) === "function" && _g || Object])
], DrzaveFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=drzave-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drzave_form_drzave_form_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var drzaveRoutes = [
    { path: 'drzave', component: __WEBPACK_IMPORTED_MODULE_3__drzave_component__["a" /* DrzaveComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'drzave/new', component: __WEBPACK_IMPORTED_MODULE_4__drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'drzave/:id', component: __WEBPACK_IMPORTED_MODULE_4__drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var DrzaveRoutingModule = (function () {
    function DrzaveRoutingModule() {
    }
    return DrzaveRoutingModule;
}());
DrzaveRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(drzaveRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], DrzaveRoutingModule);

//# sourceMappingURL=drzave-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .ui-column-title{\r\n    font-size:15px ;\r\n} */\r\n\r\n/* .centerWait { */\r\n    /* width: 500px; */\r\n  \r\n    /* position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); */\r\n  \r\n    /* background-color: rgb(241, 241, 241); */\r\n/* } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n    <div *ngIf=\"drzave; else  waiting\" [@routerTransition]>\r\n      <!-- <h3 class=\"first\">TABELA DRZAVA</h3> class=\"col-lg-9 col-md-9 col-xs-10\"\r\n      <input #gb type=\"text\" placeholder=\"Global search\" pInputText focus>\r\n      <p></p> -->\r\n\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n       <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n    </div>\r\n      <p-dataTable [value]=\"drzave\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedDrzave\" dataKey=\"_id\"  \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false >\r\n\r\n    <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n                                                                                         \r\n      <p-column field=\"KodDrzave\" header=\"Kod\" sortable=\"true\"></p-column>                               \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n      <p-column field=\"EuClan\" header=\"EuClan\" sortable=\"true\" styleClass=\"text-center\">\r\n            <ng-template let-col let-drz=\"rowData\" pTemplate=\"body\">\r\n                    <span [hidden]=\"drz[col.field]==false\"> DA</span> \r\n                    <span [hidden]=\"drz[col.field]==true\"> NE</span> \r\n            </ng-template> \r\n\r\n      </p-column>\r\n      <p-column field=\"Opis\" header=\"Opis\" sortable=\"true\"></p-column>\r\n      <!-- <p-column field=\"NameUser\" header=\"User\" sortable=\"true\"></p-column> -->\r\n      \r\n      <p-column styleClass=\"col-button text-center\" heder=\"Opcije\">\r\n          <ng-template let-drz=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\"  > \r\n              <button type=\"button\" pButton (click)=\"selectDrzavu(drz)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateDrzavu(drz._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteDrzavu(drz)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n     </p-column>\r\n      <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addDrzave()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n<!-- </div> -->\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n     </p-footer>\r\n</p-confirmDialog>\r\n\r\n\r\n\r\n<p-dialog header=\"DRŽAVA\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n\r\n    <div>\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                 ID\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                   {{drzShow._id}}\r\n                </dd>\r\n              \r\n                <dt>\r\n                  KOD DRŽAVE\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{drzShow.KodDrzave}} \r\n                </dd>\r\n                <dt>\r\n                NAZIV DRŽAVE\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{drzShow.Naziv}}\r\n                </dd>\r\n                <dt>\r\n                 EU CLAN\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.EuClan}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                OPIS\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.Opis}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM UNOSA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.created_at}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM AŽURIRANJA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.updatedAt}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                KORISNIK\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.NameUser}}\r\n                    \r\n                </dd>\r\n        \r\n            </dl>                        \r\n    </div>\r\n                    \r\n\r\n    <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n        <p-footer>\r\n             <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drzave_service__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_model__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DrzaveComponent = (function () {
    function DrzaveComponent(drzaveService, router, confirmationService, flashMessage) {
        this.drzaveService = drzaveService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.drzShow = new __WEBPACK_IMPORTED_MODULE_3__drzave_model__["a" /* Drzave */]();
        this.Title = "PREGLED DRŽAVA";
    }
    DrzaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drzaveService.getDrzave()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.drzave = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            //  console.log(error.message);
            _this.drzave = [];
            return false;
        });
    };
    DrzaveComponent.prototype.selectDrzavu = function (tdrz) {
        this.displayDetals = true;
        this.drzShow = this.cloneData(tdrz);
    };
    DrzaveComponent.prototype.cloneData = function (c) {
        var drzava = new __WEBPACK_IMPORTED_MODULE_3__drzave_model__["a" /* Drzave */]();
        for (var prop in c) {
            drzava[prop] = c[prop];
        }
        return drzava;
    };
    DrzaveComponent.prototype.addDrzave = function () {
        this.router.navigate(['drzave/new']);
    };
    DrzaveComponent.prototype.updateDrzavu = function (id) {
        this.router.navigate(['drzave/', id]);
    };
    DrzaveComponent.prototype.deleteDrzavu = function (tdrzava) {
        var _this = this;
        // console.log(tdrzava);
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ? ",
            header: "" + tdrzava.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.drzave.indexOf(tdrzava);
                // console.log("index je " + index);
                _this.drzave.splice(index, 1);
                _this.drzaveService.delDrzava(tdrzava._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.drzave.splice(index, 0, tdrzava);
                });
            }
        });
    };
    return DrzaveComponent;
}());
DrzaveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drzave',
        template: __webpack_require__("../../../../../src/app/components/drzave/drzave.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/drzave/drzave.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__drzave_service__["a" /* DrzaveService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DrzaveComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=drzave.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drzave; });
var Drzave = (function () {
    function Drzave() {
    }
    return Drzave;
}());

//# sourceMappingURL=drzave.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drzave_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drzave_form_drzave_form_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drzave_service__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drzave_routing_module__ = __webpack_require__("../../../../../src/app/components/drzave/drzave-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DrzaveModule = (function () {
    function DrzaveModule() {
    }
    return DrzaveModule;
}());
DrzaveModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__drzave_routing_module__["a" /* DrzaveRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__drzave_component__["a" /* DrzaveComponent */],
            __WEBPACK_IMPORTED_MODULE_5__drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__drzave_service__["a" /* DrzaveService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], DrzaveModule);

//# sourceMappingURL=drzave.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DrzaveService = (function () {
    function DrzaveService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    DrzaveService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    DrzaveService.prototype.getDrzave = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // let ep = this.prepEndpoint('api/drzave'); 
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/drzave/');
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
        ;
    };
    DrzaveService.prototype.getDrzava = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('api/drzave/'+id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/drzave/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.addDrzava = function (drzava) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // let ep = this.prepEndpoint('api/drzave');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/drzave/');
        return this.http.post(ep, JSON.stringify(drzava), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.updateDrzava = function (drzava) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('api/drzave/' + drzava._id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/drzave/' + drzava._id);
        return this.http.put(ep, JSON.stringify(drzava), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.delDrzava = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // let ep = this.prepEndpoint('api/drzave/'+id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/drzave/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    DrzaveService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return DrzaveService;
}());
DrzaveService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DrzaveService);

var _a;
//# sourceMappingURL=drzave.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  radnik-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n        <h5>{{title}}</h5> \r\n      </div>\r\n      <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n        <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n      </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formFSAT\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"fnsatN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"center-block\">Godina:\r\n              <input class=\"form-control\" formControlName=\"Godina\"  [(ngModel)]=\"fnsatN.Godina\"  (keypress)=\"serValidate.validateOnlyDigit($event)\" required>\r\n            </label>\r\n            <div *ngIf=\"Godina.invalid && (Godina.dirty || Godina.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Godina.errors.required\">\r\n                    <strong>Godina je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Godina.errors.maxValue\">\r\n                  <strong>Godina nije pravilno uneta (>2040)  !!!</strong>\r\n                </div>\r\n              <div *ngIf=\"Godina.errors.minValue\">\r\n                  <strong>Godina nije pravilno uneta (<2000)  !!!</strong>\r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Mesec:\r\n                <input class=\"form-control\" formControlName=\"Mesec\"  [(ngModel)]=\"fnsatN.Mesec\"  (keypress)=\"serValidate.validateOnlyDigit($event)\" required>\r\n              </label>\r\n              <div *ngIf=\"Mesec.invalid && (Mesec.dirty || Mesec.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"Mesec.errors.required\">\r\n                      <strong>Mesec je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Mesec.errors.maxValue\">\r\n                      <strong>Mesec nije pravilno unet(>12)  !!!</strong>\r\n                    </div>\r\n                  <div *ngIf=\"Mesec.errors.minValue\">\r\n                      <strong>Mesec nije pravilno unet(<1)  !!!</strong>\r\n                    </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Sati:\r\n                <input class=\"form-control\" formControlName=\"Sati\"  [(ngModel)]=\"fnsatN.Sati\"  (keypress)=\"serValidate.validateOnlyDigit($event)\" required>\r\n              </label>\r\n              <div *ngIf=\"Sati.invalid && (Sati.dirty || Sati.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"Sati.errors.required\">\r\n                      <strong>Sati je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Sati.errors.maxValue\">\r\n                      <strong>Sati nisu pravilno uneti(>248)  !!!</strong>\r\n                    </div>\r\n                  <div *ngIf=\"Sati.errors.minValue\">\r\n                      <strong>Sati nisu pravilno uneti(<1)  !!!</strong>\r\n                    </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Minimalna osnovica:\r\n                  <input  class=\"form-control\" formControlName=\"MinOsnov\"  [(ngModel)]=\"fnsatN.MinOsnov\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                </label>\r\n                <div *ngIf=\"MinOsnov.invalid && (MinOsnov.dirty || MinOsnov.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"MinOsnov.errors.required\">\r\n                        <strong>Minimalna osnovica je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"MinOsnov.errors.minValue\">\r\n                        <strong>Minimalna osnovica nije pravilno uneta(<1)  !!!</strong>\r\n                      </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Maksimalna osnovica:\r\n                  <input class=\"form-control\" formControlName=\"MaxOsnov\"  [(ngModel)]=\"fnsatN.MaxOsnov\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                </label>\r\n                \r\n                <div *ngIf=\"MaxOsnov.invalid && (MaxOsnov.dirty || MaxOsnov.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"MaxOsnov.errors.required\">\r\n                        <strong>Maksimalna osnovica je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"MaxOsnov.errors.minValue\">\r\n                        <strong>Maksimalna osnovica nije pravilno uneta(<1)  !!!</strong>\r\n                      </div>\r\n                </div>\r\n              </div>\r\n\r\n              \r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"fnsatN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formFSAT.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formFSAT.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fondsati_model__ = __webpack_require__("../../../../../src/app/components/fond-sati/fondsati.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Message } from 'primeng/components/common/api';









var FondSatiFormComponent = (function () {
    function FondSatiFormComponent(fnsatService, router, route, formBuilder, _location, flashMessage, serValidate) {
        this.fnsatService = fnsatService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.fnsatN = new __WEBPACK_IMPORTED_MODULE_6__fondsati_model__["a" /* FondSati */]();
        this.saveTemp = true;
        this.formFSAT = formBuilder.group({
            _id: [],
            Mesec: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.maxValue(12), serValidate.minValue(1)]],
            Godina: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.maxValue(2040), serValidate.minValue(2000)
                ]],
            Sati: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.maxValue(248), serValidate.minValue(0)
                ]],
            MinOsnov: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            MaxOsnov: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            Opis: []
        });
    }
    Object.defineProperty(FondSatiFormComponent.prototype, "Mesec", {
        get: function () { return this.formFSAT.get('Mesec'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FondSatiFormComponent.prototype, "Godina", {
        get: function () { return this.formFSAT.get('Godina'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FondSatiFormComponent.prototype, "Sati", {
        get: function () { return this.formFSAT.get('Sati'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FondSatiFormComponent.prototype, "MinOsnov", {
        get: function () { return this.formFSAT.get('MinOsnov'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FondSatiFormComponent.prototype, "MaxOsnov", {
        get: function () { return this.formFSAT.get('MaxOsnov'); },
        enumerable: true,
        configurable: true
    });
    FondSatiFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje fonda sati' : 'Novi fond sati';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.fnsatService.getFondSati(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.fnsatN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    FondSatiFormComponent.prototype.save = function () {
        var _this = this;
        var FSValue = this.formFSAT.value;
        if (FSValue._id) {
            this.fnsatService.updateFondSati(FSValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['fondsati']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // console.log(" forma UPDATE  " + error);
            });
        }
        else {
            this.fnsatService.addFondSati(FSValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['fondsati']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
            });
        }
    };
    FondSatiFormComponent.prototype.loadTempData = function () {
        var wdata = JSON.parse(localStorage.getItem('data_fnsati'));
        if (wdata) {
            this.fnsatN = wdata;
        }
    };
    FondSatiFormComponent.prototype.setTempData = function () {
        var fsValue = JSON.stringify(this.formFSAT.value);
        if (fsValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_fnsati', fsValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    FondSatiFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_fnsati');
    };
    FondSatiFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
        //event.stopPropagation();
    };
    FondSatiFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    FondSatiFormComponent.prototype.ngOnChanges = function () {
        this.formFSAT.reset({
            Mesec: "",
            Godina: "",
            Sati: "",
            MinOsnov: 0,
            MaxOsnov: 0,
            Opis: ""
        });
    };
    FondSatiFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return FondSatiFormComponent;
}());
FondSatiFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fond-sati-form',
        template: __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__["a" /* FondSatiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__["a" /* FondSatiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], FondSatiFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=fond-sati-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  fond-sati works!\r\n</p> -->\r\n\r\n\r\n<div *ngIf=\"fnsati;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"fnsati\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedFnSati\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Godina\" header=\"Godina\" sortable=\"true\" styleClass=\"text-center\"></p-column>\r\n      <p-column field=\"Mesec\" header=\"Mesec\" sortable=\"true\"  styleClass=\"text-center\" ></p-column> \r\n      <p-column field=\"Sati\" header=\"Sati\" sortable=\"true\" styleClass=\"text-right\"></p-column>   \r\n      <p-column field=\"MinOsnov\" header=\"MinOsnov\" sortable=\"true\" styleClass=\"text-right\" >\r\n        <ng-template let-col let-fsati=\"rowData\" pTemplate=\"body\">\r\n            <span>{{fsati[col.field] | number:'1.2-6'}}</span>\r\n        </ng-template>\r\n\r\n      </p-column>\r\n      <p-column field=\"MaxOsnov\" header=\"MaxOsnov\" sortable=\"true\" styleClass=\"text-right\">\r\n        <ng-template let-col let-fsati=\"rowData\" pTemplate=\"body\">\r\n            <span>{{fsati[col.field] | number:'1.2-6'}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n          <ng-template let-fsat=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectItem(fsat)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateFSati(fsat._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteFSati(fsat)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n       <p-footer *ngIf=\"fnsati.length > 0\">\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addFSati()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <!-- Custom content goes here -->\r\n           \r\n            <div class=\"row\">\r\n                 <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                  <h2>No records found</h2>\r\n                  <i class=\"fa fa-file-text-o fa-5x cursorpointer\" aria-hidden=\"true\"></i>\r\n                 \r\n                  <!-- <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addFSati()\" label=\"Add\"></button> -->\r\n                  <h3>\r\n                  <a   (click)=\"addFSati()\">\r\n                    Add records       \r\n                  </a>\r\n                </h3>\r\n\r\n                </div>\r\n              \r\n            </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n                <!-- Custom content goes here -->\r\n                <div class=\"row\">\r\n                     <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                        <div class=\"hidden-xs dtempty_message_h1\">\r\n                            Još niste kreirali podatak.\r\n                        </div>\r\n                        <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                        <br/>\r\n                        <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                         <h3 class=\" hidden-xs dtempty_message\" >\r\n                             Da biste ručno dodali podatak kliknite: \r\n                            <a  class=\"dtempty_message_text\" (click)=\"addFSati()\">\r\n                                    Kreiraj podatak\r\n                            </a>\r\n                        </h3>\r\n                        <h5 class=\"visible-xs\" >\r\n                            Da biste ručno dodali podatak kliknite : \r\n                            <a   (click)=\"addFSati()\">\r\n                                    Kreiraj podatak\r\n                            </a>\r\n                        </h5>\r\n    \r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"FOND SATI\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{fsatiShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                          GODINA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                             {{fsatiShow.Godina}} \r\n                        </dd>\r\n                        <dt>\r\n                            MESEC\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{fsatiShow.Mesec}}\r\n                        </dd>\r\n                          \r\n                        <dt>\r\n                            SATI\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{fsatiShow.Sati}} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                         MINIMALNA OSNOVICA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.MinOsnov}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                           MAKSIMALNA OSNOVICA\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{fsatiShow.MaxOsnov}}\r\n                               \r\n                           </dd>\r\n                        \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n \r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n    \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fondsati_model__ = __webpack_require__("../../../../../src/app/components/fond-sati/fondsati.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FondSatiComponent = (function () {
    function FondSatiComponent(router, fnsatiService, confirmationService, flashMessage) {
        this.router = router;
        this.fnsatiService = fnsatiService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.fsatiShow = new __WEBPACK_IMPORTED_MODULE_6__fondsati_model__["a" /* FondSati */]();
        this.Title = "PREGLED FONDA SATI";
    }
    FondSatiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fnsatiService.getFondSate()
            .subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(" subscribe funkcije " + profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                //this.fnsati = profile.data;
                _this.fnsati = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            console.log(error.message);
            _this.fnsati = [];
            return false;
        });
    };
    FondSatiComponent.prototype.selectItem = function (work) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        this.fsatiShow = this.cloneData(work);
    };
    FondSatiComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_6__fondsati_model__["a" /* FondSati */]();
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    FondSatiComponent.prototype.addFSati = function () {
        this.router.navigate(['/fondsati/new']);
    };
    FondSatiComponent.prototype.updateFSati = function (id) {
        this.router.navigate(['/fondsati/', id]);
    };
    FondSatiComponent.prototype.deleteFSati = function (tfnsati) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ?   ",
            header: tfnsati.Godina + " - " + tfnsati.Mesec,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.fnsati.indexOf(tfnsati);
                // console.log("index je " + index);
                _this.fnsati.splice(index, 1);
                _this.fnsatiService.delFondSati(tfnsati._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.fnsati.splice(index, 0, tfnsati);
                });
            }
        });
    };
    return FondSatiComponent;
}());
FondSatiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fond-sati',
        template: __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__["a" /* FondSatiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fond_sati_service__["a" /* FondSatiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], FondSatiComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fond-sati.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fond_sati_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fond_sati_form_fond_sati_form_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fond_sati_service__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fondsati_routing_module__ = __webpack_require__("../../../../../src/app/components/fond-sati/fondsati-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FondSatiModule = (function () {
    function FondSatiModule() {
    }
    return FondSatiModule;
}());
FondSatiModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__fondsati_routing_module__["a" /* FondSatiRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__fond_sati_component__["a" /* FondSatiComponent */],
            __WEBPACK_IMPORTED_MODULE_5__fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__fond_sati_service__["a" /* FondSatiService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], FondSatiModule);

//# sourceMappingURL=fond-sati.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FondSatiService = (function () {
    function FondSatiService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    FondSatiService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    FondSatiService.prototype.getFondSate = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.getFondSati = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.addFondSati = function (fsati) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/');
        return this.http.post(ep, JSON.stringify(fsati), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.updateFondSati = function (fsati) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + fsati._id);
        return this.http.put(ep, JSON.stringify(fsati), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.delFondSati = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    //   prepEndpoint(ep){
    //      return ServiceConfig.PrepareHost(this.isDev,ep);
    //  }
    FondSatiService.prototype.handleError = function (error) {
        //let greska =error.status + "  " + error.statusText;
        //  let myerror = new Animal('Pera');
        //  console.log(myerror.move(5));
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        //  console.log(myerror.getPorukaG());
        //  console.log(myerror.getTextP());
        //  console.log( "samo status text " + myerror.message);
        //console.log('error.json' + JSON.stringify(error.json()));
        //  myerror.fillFromJSON(JSON.parse(JSON.stringify(error)));
        //console.log("Moj error " + myerror._body.message);
        //   myerror=<IErrorReq> Response;
        // if(myerror._body){
        //   greska =error.status + "  " + error._body.message;
        // }
        // let texterror:string= JSON.stringify(error);
        // console.log('moj text error' + texterror);
        //console.log(JSON.parse(JSON.stringify(error)));
        //return Observable.throw(error.statusText || 'Server error');
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return FondSatiService;
}());
FondSatiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FondSatiService);

var _a;
//# sourceMappingURL=fond-sati.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fondsati-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fond_sati_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fond_sati_form_fond_sati_form_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var fondsatiRoutes = [
    { path: 'fondsati', component: __WEBPACK_IMPORTED_MODULE_3__fond_sati_component__["a" /* FondSatiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fondsati/new', component: __WEBPACK_IMPORTED_MODULE_4__fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fondsati/:id', component: __WEBPACK_IMPORTED_MODULE_4__fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var FondSatiRoutingModule = (function () {
    function FondSatiRoutingModule() {
    }
    return FondSatiRoutingModule;
}());
FondSatiRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(fondsatiRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], FondSatiRoutingModule);

//# sourceMappingURL=fondsati-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fondsati.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSati; });
var FondSati = (function () {
    function FondSati() {
    }
    return FondSati;
}());

// export interface IFondSati {
//     _id:string;
//     SifraRad: string;
//     Ime:string;
//     Prezime:string;
//     Jmbg:string;
//     Aktivan:boolean;
//     Opis?: string;
//     NameUser?: string;
//     created_at?:Date;
//     updatedAt?:Date;
//  }
// export class FondSati  implements IFondSati{
//     _id:string;
//     SifraRad: string;
//     Ime:string;
//     Prezime:string;
//     Jmbg:string;
//     Aktivan:boolean;
//     Opis?: string;
//     NameUser?: string;
//     created_at?:Date;
//     updatedAt?:Date;
// }
//# sourceMappingURL=fondsati.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n  <!-- <div class=\"jumbotron text-center \">\r\n    <h1>MEAN Authentication App</h1>\r\n    <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch</p>\r\n    <div>\r\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n    </div>\r\n  </div> -->\r\n<!-- </div> -->\r\n\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"6000\">\r\n  <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item active\">\r\n         <img src=\"assets\\img\\Home.jpg\" alt=\"Home \" class=\"img-thumbnail\" />\r\n         \r\n      </div>\r\n      <div class=\"item\">\r\n         <img src=\"assets\\img\\Banners1.jpg\"  alt=\"Skills\" class=\"img-thumbnail\"/>\r\n      </div>\r\n \r\n      <div class=\"item\">\r\n        \r\n          <img src=\"assets\\img\\Banners2.jpg\"  alt=\"Group\" class=\"img-thumbnail\"/>\r\n      </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  konstanta-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n        <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n          <h5>{{title}}</h5> \r\n        </div>\r\n        <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n          <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formKonst\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"konstN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"center-block\">Važe od datuma:\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group\">\r\n                            <input [ngModel]=\"konstN.Datum | date:'yyyy-MM-dd'\"  type=\"date\" formControlName=\"Datum\" name=\"Datum\" class=\"form-control\" required>\r\n                         \r\n                        </div>\r\n                        <!-- [(ngModel)]=\"konstN.Datum\"    | date:'yyyy-MM-dd'\"   -->\r\n                    </div>\r\n            </label>\r\n            <div *ngIf=\"Datum.invalid && (Datum.dirty || Datum.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Datum.errors.required\">\r\n                    <strong>Datum je obavezan podatak !!!</strong>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                Zadruga\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"form-group col-md-6\" > <!-- PDV porez -->\r\n                    <label class=\"center-block\">Stopa poreza(Pdv):\r\n                        <div class=\"input-group\">   \r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control text-right\" formControlName=\"Pdv\"  [(ngModel)]=\"konstN.Pdv\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                <span class=\"input-group-addon\">%</span>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"Pdv.invalid && (Pdv.dirty || Pdv.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"Pdv.errors.required\">\r\n                            <strong>Pdv je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"Pdv.errors.minValue\">\r\n                            <strong>Pdv nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        \r\n                <div class=\"form-group col-md-3\" > <!-- Članarina zadruzi -->\r\n                    <label class=\"center-block\">Članarina(zadruzi):\r\n                            <div class=\"input-group\"> \r\n                                <div class=\"input-group\"> \r\n                                    <input class=\"form-control text-right\" formControlName=\"Clanarin\"  [(ngModel)]=\"konstN.Clanarin\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\"required>\r\n                                    <span class=\"input-group-addon\">RSD</span>\r\n                                </div>\r\n                            </div>\r\n                    </label>\r\n                    \r\n                    <div *ngIf=\"Clanarin.invalid && (Clanarin.dirty || Clanarin.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"Clanarin.errors.required\">\r\n                            <strong>Članarina je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"Clanarin.errors.minValue\">\r\n                            <strong>Članarina nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n        </div>\r\n\r\n  \r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            Učenici\r\n        </div>\r\n        <div class=\"panel-body\">\r\n\r\n        <div class=\"row\">\r\n        \r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"center-block\">Doprinosi penziono:\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"UcPenz\"  [(ngModel)]=\"konstN.UcPenz\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <div *ngIf=\"UcPenz.invalid && (UcPenz.dirty || UcPenz.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"UcPenz.errors.required\">\r\n                        <strong>Učenički doprinosi za penziono su obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"UcPenz.errors.minValue\">\r\n                        <strong>Učenički doprinosi za penziono nisu pravilno uneti (<0)  !!!</strong>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"center-block\">Doprinosi za zdravstveno:\r\n                    <div class=\"input-group\"> \r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"UcZdrav\"  [(ngModel)]=\"konstN.UcZdrav\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <div *ngIf=\"UcZdrav.invalid && (UcZdrav.dirty || UcZdrav.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"UcZdrav.errors.required\">\r\n                        <strong>Doprinosi za zdravstveno su obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"UcZdrav.errors.minValue\">\r\n                        <strong>Učenički doprinosi za zdravstveno nisu pravilno uneti (<0)  !!!</strong>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n                \r\n            <div class=\"form-group col-md-3\">\r\n                    <label class=\"center-block\">Normirani troškovi:\r\n                        <div class=\"input-group\"> \r\n                            <div class=\"input-group\">\r\n                                <input  class=\"form-control text-right\" formControlName=\"UcNormTr\"  [(ngModel)]=\"konstN.UcNormTr\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                <span class=\"input-group-addon\">%</span>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"UcNormTr.invalid && (UcNormTr.dirty || UcNormTr.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"UcNormTr.errors.required\">\r\n                            <strong>Normirani troškovi su obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"UcNormTr.errors.minValue\">\r\n                            <strong>Normirani troškovi nisu pravilno uneti (<0)  !!!</strong>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div> <!-- kraj prve grupe-->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                <label class=\"center-block\">Stopa olakšice:\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"UcOlak\"  [(ngModel)]=\"konstN.UcOlak\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                \r\n                <div *ngIf=\"UcOlak.invalid && (UcOlak.dirty || UcOlak.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"UcOlak.errors.required\">\r\n                        <strong>Stopa olakšice je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"UcOlak.errors.minValue\">\r\n                        <strong>Stopa olakšice nije pravilno uneta (<0) !!!</strong>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-3\"> <!-- učenička stopa poreza -->\r\n                <label class=\"center-block\">Stopa poreza:\r\n                    <div class=\"input-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"UcPorez\"  [(ngModel)]=\"konstN.UcPorez\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <div *ngIf=\"UcPorez.invalid && (UcPorez.dirty || UcPorez.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"UcPorez.errors.required\">\r\n                        <strong>Stopa poreza je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"UcPorez.errors.minValue\">\r\n                        <strong>Stopa poreza nije pravilno uneta (<0) !!!</strong>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div><!-- Kraj druge grupe-->\r\n    \r\n    </div>\r\n\r\n  \r\n\r\n    <div class=\"panel panel-default\">   \r\n        <div class=\"panel-heading\">\r\n            Osiguranici\r\n        </div>  \r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">  <!-- Osnovica poreza -->\r\n                        <label class=\"center-block\">OsPorez:\r\n                            <div class=\"input-group\"> \r\n                                <div class=\"input-group\"> \r\n                                <input class=\"form-control text-right\" formControlName=\"OsPorez\"  [(ngModel)]=\"konstN.OsPorez\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                <span class=\"input-group-addon\">RSD</span>\r\n                                </div>\r\n                            </div>\r\n                        </label>\r\n                        \r\n                        <div *ngIf=\"OsPorez.invalid && (OsPorez.dirty || OsPorez.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"OsPorez.errors.required\">\r\n                                <strong>OsPorez je obavezan podatak !!!</strong>\r\n                            </div>\r\n                            <div *ngIf=\"OsPorez.errors.minValue\">\r\n                                <strong>OsPorez nije dobar podatak (<0) !!!</strong>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">  <!-- Umanjenje osnovice poreza za osiguranika -->\r\n                    <label class=\"center-block\">Umanjene poreske osnovice:\r\n                        <div class=\"input-group\"> \r\n                            <div class=\"input-group\"> \r\n                                <input class=\"form-control text-right\" formControlName=\"OsUmanjen\"  [(ngModel)]=\"konstN.OsUmanjen\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                <span class=\"input-group-addon\">RSD</span>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsUmanjen.invalid && (OsUmanjen.dirty || OsUmanjen.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsUmanjen.errors.required\">\r\n                            <strong>Umanjenje poreske osnovice je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsUmanjen.errors.minValue\">\r\n                            <strong>Umanjenje poreske osnovice nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">  <!-- Stopa pio prema radniku-->\r\n                    <label class=\"center-block\">Stopa pio(prema radniku):\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group\">\r\n                                <input  class=\"form-control text-right\"  formControlName=\"OsPio1\"  [(ngModel)]=\"konstN.OsPio1\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                <span class=\"input-group-addon\">%</span>\r\n                            </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsPio1.invalid && (OsPio1.dirty || OsPio1.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsPio1.errors.required\">\r\n                            <strong>Stopa pio je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsPio1.errors.minValue\">\r\n                            <strong>Stopa pio nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">  <!-- Stopa pio prema poslodavcu  -->\r\n                    <label class=\"center-block\">Stopa pio(prema poslodavcu):\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"OsPio2\"  [(ngModel)]=\"konstN.OsPio2\"  (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                                </div>\r\n                            </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsPio2.invalid && (OsPio2.dirty || OsPio2.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsPio2.errors.required\">\r\n                            <strong>Stopa pio je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsPio2.errors.minValue\">\r\n                            <strong>Stopa pio nije dobar podatak (<0) !!!</strong>\r\n                            </div>\r\n                    </div>\r\n                </div> \r\n            </div> <!--Kraj rowa za stopu pio -->\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">  <!-- Stopa zdravstveno prema radniku  -->\r\n                    <label class=\"center-block\">Stopa zdravstveno(prema radniku):\r\n                        <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"OsZdrav1\"  [(ngModel)]=\"konstN.OsZdrav1\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                                </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsZdrav1.invalid && (OsZdrav1.dirty || OsZdrav1.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsZdrav1.errors.required\">\r\n                            <strong>Stopa zdravstveno je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsZdrav1.errors.minValue\">\r\n                            <strong>Stopa zdravstveno nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\"> <!-- Stopa zdravstvo prema poslodavcu  -->\r\n                    <label class=\"center-block\">Stopa zdravstveno(prema poslodavcu):\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"OsZdrav2\"  [(ngModel)]=\"konstN.OsZdrav2\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                                </div>\r\n                            </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsZdrav2.invalid && (OsZdrav2.dirty || OsZdrav2.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsZdrav2.errors.required\">\r\n                            <strong>Stopa zdravstveno je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsZdrav2.errors.minValue\">\r\n                            <strong>Stopa zdravstveno nije dobar podatak (<0) !!!</strong>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!--Kraj rowa za stopu zdravstvenog -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\"><!-- Stopa nezaposlenost prema radniku  -->\r\n                    <label class=\"center-block\">Stopa nezaposlenost(prema radniku):\r\n                        <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                            <input class=\"form-control text-right\" formControlName=\"OsNez1\"  [(ngModel)]=\"konstN.OsNez1\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                            <span class=\"input-group-addon\">%</span>\r\n                                </div>\r\n                        </div>\r\n                    </label>\r\n                    <div *ngIf=\"OsNez1.invalid && (OsNez1.dirty || OsNez1.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsNez1.errors.required\">\r\n                            <strong>Stopa nezaposlenost je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsNez1.errors.minValue\">\r\n                            <strong>Stopa nezaposlenost nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\"><!-- Stopa nezaposlenost prema poslodavcu  -->\r\n                        <label class=\"center-block\">Stopa nezaposlenost(prema poslodavcu):\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control text-right\" formControlName=\"OsNez2\"  [(ngModel)]=\"konstN.OsNez2\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                    <span class=\"input-group-addon\">%</span>\r\n                                </div>\r\n                            </div>\r\n                        </label>\r\n                            <div *ngIf=\"OsNez2.invalid && (OsNez2.dirty || OsNez2.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"OsNez2.errors.required\">\r\n                                <strong>Stopa nezaposlenost je obavezan podatak !!!</strong>\r\n                            </div>\r\n                            <div *ngIf=\"OsNez2.errors.minValue\">\r\n                                <strong>Stopa nezaposlenost nije dobar podatak (<0) !!!</strong>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div> <!--Kraj rowa za stopu nezaposlenosti osiguranici  -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-md-6\"> <!-- Minimalna osnovica za placanje doprinosa  -->\r\n                    <label class=\"center-block\">Minimalna osnovica doprinosa:\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control text-right\" formControlName=\"OsMinOsDop\"  [(ngModel)]=\"konstN.OsMinOsDop\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                                    <span class=\"input-group-addon\">RSD</span>\r\n                                </div>\r\n                            </div>\r\n                    </label>\r\n                    \r\n                    <div *ngIf=\"OsMinOsDop.invalid && (OsMinOsDop.dirty || OsMinOsDop.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsMinOsDop.errors.required\">\r\n                            <strong>Minimalna osnovica doprinosa je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsMinOsDop.errors.minValue\">\r\n                            <strong>Minimalna osnovica doprinosa nije dobar podatak (<0) !!!</strong>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\"> <!--Maksimalna osnovica za placanje doprinosa  -->\r\n                    <label class=\"center-block\">Maksimalna osnovica doprinosa:\r\n                            <div class=\"input-group\">\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control text-right\" formControlName=\"OsMaxOsDop\"  [(ngModel)]=\"konstN.OsMaxOsDop\" (keypress)=\"serValidate.validateOnlyNumbers($event)\"  required>\r\n                                        <span class=\"input-group-addon\">RSD</span>\r\n\r\n                                    </div>\r\n                            </div>\r\n                    </label>\r\n                    \r\n                    <div *ngIf=\"OsMaxOsDop.invalid && (OsMaxOsDop.dirty || OsMaxOsDop.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"OsMaxOsDop.errors.required\">\r\n                            <strong>Maksimalna osnovica doprinosa je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"OsMaxOsDop.errors.minValue\">\r\n                            <strong>Maksimalna osnovica doprinosa nije dobar podatak (<0) !!!</strong>\r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!--Kraj rowa za osnovice osiguranici  -->\r\n        </div>\r\n    </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"center-block\">Opis:\r\n                <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"konstN.Opis\">\r\n                </textarea>\r\n            </label>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-5 col-md-12\">\r\n                    <button type=\"submit\" [disabled]=\"!formKonst.valid\"\r\n                        class=\"btn btn-success\">\r\n                    <span class=\"glyphicon glyphicon-saved\"></span>\r\n                       Save\r\n                    </button>\r\n\r\n                <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formKonst.pristine\"  (click)=\"revert()\">\r\n                    <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                    Clear data\r\n                </button>\r\n                \r\n            </div>\r\n        </div>\r\n          \r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__konstanta_service__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__konstanta_model__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import {MyDateInput} from '../../../shared/frmDatum/date.input';
var KonstantaFormComponent = (function () {
    function KonstantaFormComponent(konstService, router, route, formBuilder, _location, flashMessage, serValidate) {
        this.konstService = konstService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.konstN = new __WEBPACK_IMPORTED_MODULE_6__konstanta_model__["a" /* KonstantaModel */]();
        this.formKonst = formBuilder.group({
            _id: [],
            Datum: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            UcPenz: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            UcZdrav: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            UcNormTr: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            UcOlak: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            UcPorez: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            Pdv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            Clanarin: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsPorez: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsUmanjen: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsPio1: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsPio2: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsZdrav1: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsZdrav2: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsNez1: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsNez2: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsMinOsDop: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            OsMaxOsDop: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0)
                ]],
            Opis: []
        });
    }
    Object.defineProperty(KonstantaFormComponent.prototype, "Datum", {
        get: function () { return this.formKonst.get('Datum'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "UcPenz", {
        // set Datum(value:Date) { 
        //     this.formKonst.setValue(value); 
        // }
        get: function () { return this.formKonst.get('UcPenz'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "UcZdrav", {
        get: function () { return this.formKonst.get('UcZdrav'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "UcNormTr", {
        get: function () { return this.formKonst.get('UcNormTr'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "UcOlak", {
        get: function () { return this.formKonst.get('UcOlak'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "UcPorez", {
        get: function () { return this.formKonst.get('UcPorez'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "Pdv", {
        get: function () { return this.formKonst.get('Pdv'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "Clanarin", {
        get: function () { return this.formKonst.get('Clanarin'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsPorez", {
        get: function () { return this.formKonst.get('OsPorez'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsUmanjen", {
        get: function () { return this.formKonst.get('OsUmanjen'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsPio1", {
        get: function () { return this.formKonst.get('OsPio1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsPio2", {
        get: function () { return this.formKonst.get('OsPio2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsZdrav1", {
        get: function () { return this.formKonst.get('OsZdrav1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsZdrav2", {
        get: function () { return this.formKonst.get('OsZdrav2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsNez1", {
        get: function () { return this.formKonst.get('OsNez1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsNez2", {
        get: function () { return this.formKonst.get('OsNez2'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsMinOsDop", {
        get: function () { return this.formKonst.get('OsMinOsDop'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KonstantaFormComponent.prototype, "OsMaxOsDop", {
        get: function () { return this.formKonst.get('OsMaxOsDop'); },
        enumerable: true,
        configurable: true
    });
    KonstantaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje Konstante' : 'Nova konstanta';
            if (!id) {
                return;
            }
            _this.konstService.getKonstanta(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.konstN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    KonstantaFormComponent.prototype.validateOnlyNumbers = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    KonstantaFormComponent.prototype.save = function () {
        var _this = this;
        var FormValue = this.formKonst.value;
        if (FormValue._id) {
            this.konstService.updateKonstanta(FormValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['konstanta']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.konstService.addKonstanta(FormValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['konstanta']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    KonstantaFormComponent.prototype.backClicked = function (event) {
        this._location.back();
    };
    KonstantaFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    KonstantaFormComponent.prototype.ngOnChanges = function () {
        this.formKonst.reset({
            Datum: "",
            UcPenz: 0,
            UcZdrav: 0,
            UcNormTr: 0,
            UcOlak: 0,
            UcPorez: 0,
            Pdv: 0,
            Clanarin: 0,
            OsPorez: 0,
            OsUmanjen: 0,
            OsPio1: 0,
            OsPio2: 0,
            OsZdrav1: 0,
            OsZdrav2: 0,
            OsNez1: 0,
            OsNez2: 0,
            OsMinOsDop: 0,
            OsMaxOsDop: 0,
            Opis: ""
        });
    };
    KonstantaFormComponent.prototype.getExcatDate = function (string) {
        //let year=new Date(this.konstN.Datum.toString()).getFullYear();
        // let month=new Date(this.konstN.Datum.toString()).getMonth();
        //let date=new Date(this.konstN.Datum.toString()).getDate();
        //  let year= this.konstN.Datum.getFullYear();
        //  let month= this.konstN.Datum.getMonth();
        var date = new Date().getDay();
        // console.log(" datum iz konstante " + date);
        var year = new Date().getFullYear(); //date.getFullYear();
        var month = new Date().getMonth();
        var local = (date.toString().length === 1 ? '0' + date : date) + '/' +
            (month.toString().length === 1 ? '0' + month : month)
            + '/' + year.toString().substring(0);
        console.log(" proba local " + local);
        this.konstN.Datum = new Date(local);
        return local;
    };
    return KonstantaFormComponent;
}());
KonstantaFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-konstanta-form',
        template: __webpack_require__("../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__konstanta_service__["a" /* KonstantaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__konstanta_service__["a" /* KonstantaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], KonstantaFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=konstanta-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaModel; });
var KonstantaModel = (function () {
    function KonstantaModel() {
    }
    return KonstantaModel;
}());

//# sourceMappingURL=konstanta-model.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__konstanta_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__konstanta_form_konstanta_form_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var konstantaRoutes = [
    { path: 'konstanta', component: __WEBPACK_IMPORTED_MODULE_3__konstanta_component__["a" /* KonstantaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'konstanta/new', component: __WEBPACK_IMPORTED_MODULE_4__konstanta_form_konstanta_form_component__["a" /* KonstantaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'konstanta/:id', component: __WEBPACK_IMPORTED_MODULE_4__konstanta_form_konstanta_form_component__["a" /* KonstantaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];
var KonstantaRoutingModule = (function () {
    function KonstantaRoutingModule() {
    }
    return KonstantaRoutingModule;
}());
KonstantaRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(konstantaRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], KonstantaRoutingModule);

//# sourceMappingURL=konstanta-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/* img {\r\n   display: block;\r\n   width:100%;\r\n  }\r\n\r\ndtempty_pic {\r\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n    height:50%;\r\n    width:50%;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n */\r\n\r\n/*\r\nimg.center_pic {\r\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    \r\n    margin-top: 2%;\r\n    /*\r\n    Nope =(\r\n    margin-left: -25%;\r\n    margin-top: -25%;\r\n    */\r\n  \r\n    /* \r\n    Yep!\r\n    */\r\n  /*  transform: translate(-50%, -50%);\r\n    \r\n    /*\r\n    Not even necessary really. \r\n    e.g. Height could be left out!\r\n    */\r\n    /*width: 50%;\r\n    height: 50%;\r\n  }*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  konstanta works!\r\n</p> -->\r\n\r\n\r\n<div *ngIf=\"konstL;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"konstL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedKonst\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Datum\" header=\"Datum\"  styleClass=\"text-center\">\r\n            <ng-template let-col let-konst=\"rowData\" pTemplate=\"body\">\r\n                <span>{{konst[col.field] | date: 'dd.MM.yyyy'}}</span>\r\n            </ng-template>\r\n        \r\n      </p-column>\r\n      <p-column field=\"UcPenz\" header=\"Porez Učenici\"   styleClass=\"text-right\" >\r\n            <ng-template let-col let-konst=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{konst[col.field] | number:'1.2-2'}}</span>\r\n            </ng-template> \r\n      </p-column> \r\n\r\n      <p-column field=\"OsPorez\" header=\"Porez osiguranici\"  styleClass=\"text-right\">\r\n            <ng-template let-col let-konst=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{konst[col.field] | number:'1.2-2'}}</span>\r\n            </ng-template>\r\n      </p-column>   \r\n      <p-column field=\"Clanarin\" header=\"Članarina\"  styleClass=\"text-right\" >\r\n        <ng-template let-col let-konst=\"rowData\" pTemplate=\"body\">\r\n            <span>{{konst[col.field] | number:'1.2-2'}}</span>\r\n        </ng-template>\r\n\r\n      </p-column>\r\n      <p-column field=\"Pdv\" header=\"Pdv\" styleClass=\"text-right\">\r\n        <ng-template let-col let-konst=\"rowData\" pTemplate=\"body\">\r\n            <span>{{konst[col.field] | number:'1.2-4'}}</span>\r\n        </ng-template>\r\n\r\n\r\n      </p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n       \r\n          <ng-template let-konst=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\r\n\r\n              <button type=\"button\" pButton (click)=\"selectItem(konst)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateKonst(konst._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteKonst(konst)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n       <!-- <p-footer *ngIf=\"konstL.length == 0\">\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addKonst()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer> -->\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <!-- Custom content goes here -->\r\n            <div class=\"row\">\r\n                 <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                    <div class=\"hidden-xs dtempty_message_h1\">\r\n                        <!-- You Haven't Created A Konstant Yet. -->\r\n                        Još niste kreirali podatak.\r\n                    </div>\r\n                    \r\n                    <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                    <br/>\r\n                    <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                    <!-- <div >\r\n                        <img src=\"./assets/images/wrench.svg\" alt=\"Malo malo\" class=\"center_pic\"/> \r\n                     </div> -->\r\n                    <h3 class=\" hidden-xs dtempty_message\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite: \r\n                        <a  class=\"dtempty_message_text\" (click)=\"addKonst()\">\r\n                                <!-- Create konstant       -->\r\n                                <!--  konstantu -->\r\n                                Kreiraj podatak\r\n                        </a>\r\n                    </h3>\r\n\r\n                    <h5 class=\"visible-xs\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite : \r\n                        <a   (click)=\"addKonst()\">\r\n                                <!-- Create konstant       -->\r\n                                Kreiraj podatak\r\n                        </a>\r\n                    </h5>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"KONSTANTA\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\" >\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                          ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{konstShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                        VAŽE OD DATUMA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                        {{konstShow.Datum | date}} \r\n                        </dd>\r\n                        <hr id=\"zadzad\">\r\n                        <dt>\r\n                        STOPA POREZA(Pdv)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.Pdv |  number:'1.2-2'}}\r\n                        </dd>\r\n                        <dt>\r\n                        ČLANARINA(zadruzi)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.Clanarin |  number:'1.2-4'}}\r\n                        </dd>\r\n                        <hr>\r\n                        <dt>\r\n                            Doprinosi penziono\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{konstShow.UcPenz |  number:'1.2-2'}}\r\n                        </dd>\r\n                        \r\n                        <dt>\r\n                          Doprinosi za zdravstveno\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                            {{konstShow.UcZdrav |  number:'1.2-2' }} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                         Normirani troškovi\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.UcNormTr |  number:'1.2-2' }}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        Stopa olakšice\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.UcOlak |  number:'1.2-2'}}\r\n                            \r\n                        </dd>\r\n                    \r\n                        <dt>\r\n                          Stopa poreza\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.UcPorez |  number:'1.2-2'}}\r\n                            \r\n                        </dd>\r\n                        <hr>\r\n                        <dt>\r\n                            OsPorez-ovo treba pogledati\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsPorez |  number:'1.2-4'}}\r\n                            \r\n                        </dd>\r\n      \r\n                        <dt>\r\n                        Umanjene poreske osnovice\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{konstShow.OsUmanjen |  number:'1.2-4'}}\r\n                        </dd>\r\n\r\n                        <dt>\r\n                         Stopa pio(prema radniku)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsPio1 |  number:'1.2-2'}}\r\n                        </dd>\r\n                          \r\n                        <dt>\r\n                         Stopa pio(prema poslodavcu)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsPio2 |  number:'1.2-2'}}\r\n                        </dd>\r\n                        <dt>\r\n                        Stopa zdravstveno(prema radniku)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsZdrav1 |  number:'1.2-2'}}\r\n                        </dd>\r\n                        <dt>\r\n                        Stopa zdravstveno(prema poslodavcu)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsZdrav2 |  number:'1.2-2'}}\r\n                        </dd>      \r\n                        <dt>\r\n                        Stopa nezaposlenost(prema radniku)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsNez1 |  number:'1.2-2'}}\r\n                        </dd>      \r\n                        <dt>\r\n                        Stopa nezaposlenost(prema poslodavcu)\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsNez2 |  number:'1.2-2'}}\r\n                        </dd>   \r\n\r\n                        <dt>\r\n                        Minimalna osnovica doprinosa\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsMinOsDop |  number:'1.2-4'}}\r\n                        </dd>\r\n                        <dt>\r\n                        Maksimalna osnovica doprinosa\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.OsMaxOsDop |  number:'1.2-4'}}\r\n                        </dd>\r\n                        <hr>\r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{konstShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer> \r\n             \r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n            \r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n \r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__konstanta_service__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__konstanta_model__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KonstantaComponent = (function () {
    function KonstantaComponent(router, konstService, confirmationService, flashMessage) {
        this.router = router;
        this.konstService = konstService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.konstShow = new __WEBPACK_IMPORTED_MODULE_6__konstanta_model__["a" /* KonstantaModel */]();
        this.Title = 'PREGLED KONSTANTE';
    }
    KonstantaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.konstService.getKonstante()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.konstL = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            _this.konstL = [];
            return false;
        });
    };
    KonstantaComponent.prototype.selectItem = function (work) {
        this.displayDetals = true;
        this.konstShow = this.cloneData(work);
    };
    KonstantaComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_6__konstanta_model__["a" /* KonstantaModel */]();
        // tslint:disable-next-line:forin
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    KonstantaComponent.prototype.addKonst = function () {
        this.router.navigate(['/konstanta/new']);
    };
    KonstantaComponent.prototype.updateKonst = function (id) {
        this.router.navigate(['/konstanta/', id]);
    };
    KonstantaComponent.prototype.deleteKonst = function (tkonst) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ? ",
            header: "KONSTANTA",
            accept: function () {
                var index = _this.konstL.indexOf(tkonst);
                _this.konstL.splice(index, 1);
                _this.konstService.delKonstanta(tkonst._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    _this.konstL.splice(index, 0, tkonst);
                });
            }
        });
    };
    return KonstantaComponent;
}());
KonstantaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-konstanta',
        template: __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__konstanta_service__["a" /* KonstantaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__konstanta_service__["a" /* KonstantaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], KonstantaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=konstanta.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__konstanta_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__konstanta_form_konstanta_form_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta-form/konstanta-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__konstanta_service__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__konstanta_routing_module__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var KonstantaModule = (function () {
    function KonstantaModule() {
    }
    return KonstantaModule;
}());
KonstantaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__konstanta_routing_module__["a" /* KonstantaRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__konstanta_component__["a" /* KonstantaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__konstanta_form_konstanta_form_component__["a" /* KonstantaFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__konstanta_service__["a" /* KonstantaService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], KonstantaModule);

//# sourceMappingURL=konstanta.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var KonstantaService = (function () {
    function KonstantaService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    KonstantaService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    KonstantaService.prototype.getKonstante = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstantaService.prototype.getKonstanta = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstantaService.prototype.addKonstanta = function (konst) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/');
        return this.http.post(ep, JSON.stringify(konst), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    KonstantaService.prototype.updateKonstanta = function (konst) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + konst._id);
        return this.http.put(ep, JSON.stringify(konst), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstantaService.prototype.delKonstanta = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstantaService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return KonstantaService;
}());
KonstantaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], KonstantaService);

var _a;
//# sourceMappingURL=konstanta.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-lg-9 col-md-9 col-xs-10\"> -->\r\n\r\n    <div class=\"panel panel-default \">\r\n        <div class=\"panel-heading\">\r\n            <h3>Login</h3>\r\n        </div>\r\n      <div class=\"panel-body panel-info\">\r\n        <form (submit)=\"onLoginSubmit()\" novalidate>\r\n          \r\n          <div>\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"username\" name=\"username\">\r\n          </div>\r\n          \r\n          <div>\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n          </div>\r\n\r\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n        </form>\r\n\r\n      </div>\r\n\r\n    </div>\r\n<!-- </div> -->\r\n<!-- \r\n<p-growl [(value)]=\"msgs\" class=\"zindex\"></p-growl>  -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta-form/mesta-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta-form/mesta-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n              <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formMEST\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"mesto._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Opština:\r\n                <select  formControlName=\"Opstina\" class=\"form-control\" \r\n                    placeholder=\"Select Opštinu\"  name=\"Select Opštinu\" [(ngModel)]=\"mesto.Opstina\" >\r\n                  <option *ngFor=\"let list of opstine\" [value]=\"list._id\"   >\r\n                    {{ list.Naziv }}\r\n                  </option>\r\n                </select>\r\n              </label>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv mesta:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"mesto.Naziv\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formMEST.controls['Naziv'].valid && formMEST.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div> \r\n              \r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Ptt:\r\n                  <input class=\"form-control\" formControlName=\"Ptt\"  [(ngModel)]=\"mesto.Ptt\" >\r\n                </label>\r\n              </div>\r\n              \r\n             \r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"mesto.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formMEST.valid\"\r\n                            class=\"btn btn-default\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formMEST.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear Data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesta_model__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesta_service__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opstine_opstine_service__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { LoginComponent } from './../../login/login.component';








var MestaFormComponent = (function () {
    function MestaFormComponent(opstService, mestaService, router, route, formBuilder, _location) {
        this.opstService = opstService;
        this.mestaService = mestaService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.mesto = new __WEBPACK_IMPORTED_MODULE_3__mesta_model__["a" /* Mesta */]();
        this.titleAlertNaziv = "Naziv,This field is required !!!";
        this.formMEST = formBuilder.group({
            _id: [],
            Opstina: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Ptt: [],
            Opis: []
        });
    }
    MestaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opstService.getOpstine().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                // console.log(" data je " + profile.data);
                _this.opstine = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje mesta' : 'Novo mesto';
            if (!id)
                return;
            _this.mestaService.getMesto(id)
                .subscribe(function (mesto) {
                if (mesto.success) {
                    _this.mesto = mesto.data[0];
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    MestaFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    MestaFormComponent.prototype.save = function () {
        var _this = this;
        var result, mestaValue = this.formMEST.value;
        console.log(mestaValue.Opstine);
        if (mestaValue._id) {
            result = this.mestaService.updateMesto(mestaValue);
        }
        else {
            result = this.mestaService.addMesto(mestaValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['mesta']); });
    };
    MestaFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    MestaFormComponent.prototype.ngOnChanges = function () {
        this.formMEST.reset({
            Naziv: "",
            Ptt: "",
            Opis: ""
        });
    };
    return MestaFormComponent;
}());
MestaFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mesta-form',
        template: __webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__opstine_opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__opstine_opstine_service__["a" /* OpstineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__mesta_service__["a" /* MestaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mesta_service__["a" /* MestaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _f || Object])
], MestaFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mesta-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesta_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesta_form_mesta_form_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var drzaveRoutes = [
    { path: 'mesta', component: __WEBPACK_IMPORTED_MODULE_3__mesta_component__["a" /* MestaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mesta/new', component: __WEBPACK_IMPORTED_MODULE_4__mesta_form_mesta_form_component__["a" /* MestaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mesta/:id', component: __WEBPACK_IMPORTED_MODULE_4__mesta_form_mesta_form_component__["a" /* MestaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var MestaRoutingModule = (function () {
    function MestaRoutingModule() {
    }
    return MestaRoutingModule;
}());
MestaRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(drzaveRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], MestaRoutingModule);

//# sourceMappingURL=mesta-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mestaL;else  waiting\"  [@routerTransition]>\r\n\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"mestaL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n              selectionMode=\"single\" [(selection)]=\"selectedMesto\" dataKey=\"_id\"  \r\n              styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n              <p-header><strong>{{Title}}</strong></p-header>   \r\n        \r\n    <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n    <p-column field=\"Opstina.Drzava.Naziv\" header=\"Država\" sortable=\"true\"></p-column>   \r\n     <p-column field=\"Opstina.Naziv\" header=\"Opština\" sortable=\"true\"></p-column> \r\n    <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n    <p-column field=\"Ptt\" header=\"Ptt\" sortable=\"true\" styleClass=\"text-center\"></p-column>\r\n\r\n    <p-column styleClass=\"col-button text-center\" heder=\"Opcije\">\r\n        <ng-template let-mes=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <button type=\"button\" pButton (click)=\"selectMesto(mes)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n            <button type=\"button\" pButton (click)=\"updateMesta(mes._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n            <button type=\"button\" pButton (click)=\"deleteMesto(mes)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\" *ngIf=\"mestaL.length > 0\">\r\n                <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addMesta()\" label=\"Add\"></button>\r\n            </div>\r\n    </p-footer>\r\n    <ng-template pTemplate=\"emptymessage\">\r\n            <!-- Custom content goes here -->\r\n        <div class=\"row\">\r\n                 <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                    <div class=\"hidden-xs dtempty_message_h1\">\r\n                       Još niste kreirali podatak.\r\n                    </div>\r\n                    \r\n                    <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                    <br/>\r\n                    <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                   <h3 class=\" hidden-xs dtempty_message\" >\r\n                        Da biste ručno dodali podatak kliknite: \r\n                        <a  class=\"dtempty_message_text\" (click)=\"addMesta()\">\r\n                             Kreiraj podatak\r\n                        </a>\r\n                    </h3>\r\n  \r\n                    <h5 class=\"visible-xs\" >\r\n                       Da biste ručno dodali podatak kliknite : \r\n                        <a   (click)=\"addMesta()\">\r\n                            Kreiraj podatak\r\n                        </a>\r\n                    </h5>\r\n  \r\n                </div>\r\n        </div>\r\n    </ng-template>\r\n    </p-dataTable>\r\n  </div>\r\n  \r\n  \r\n  <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n     </p-footer>\r\n</p-confirmDialog>\r\n  \r\n  \r\n  \r\n  <p-dialog header=\"MESTO\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n  \r\n          <div>\r\n                  <dl class=\"dl-horizontal\">\r\n                      <dt>\r\n                       ID\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                         {{mesShow._id}}\r\n                      </dd>\r\n                      <dt>\r\n                      NAZIV MESTA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                           {{mesShow.Naziv}}\r\n                      </dd>\r\n                      <dt>\r\n                       PTT\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.Ptt}}\r\n                          \r\n                      </dd>\r\n                      \r\n                      <dt>\r\n                      OPIS\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.Opis}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      DATUM UNOSA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.created_at}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      DATUM AŽURIRANJA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.updatedAt}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      KORISNIK\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.NameUser}}\r\n                          \r\n                      </dd>\r\n              \r\n                  </dl>                        \r\n          </div>\r\n          <p-footer>\r\n                  <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n         </p-footer>\r\n  </p-dialog>\r\n  \r\n  \r\n  <ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mesta_service__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesta_model__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MestaComponent = (function () {
    function MestaComponent(router, mestaService, confirmationService, flashMessage) {
        this.router = router;
        this.mestaService = mestaService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.mesShow = new __WEBPACK_IMPORTED_MODULE_3__mesta_model__["a" /* Mesta */]();
        this.Title = "PREGLED MESTA";
    }
    MestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mestaService.getMesta().subscribe(function (profile) {
            if (profile.success === true) {
                //console.log(profile.data);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.mestaL = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MestaComponent.prototype.selectMesto = function (mesto) {
        this.displayDetals = true;
        this.mesShow = this.cloneData(mesto);
    };
    MestaComponent.prototype.cloneData = function (c) {
        var mesto = new __WEBPACK_IMPORTED_MODULE_3__mesta_model__["a" /* Mesta */]();
        for (var prop in c) {
            mesto[prop] = c[prop];
        }
        return mesto;
    };
    MestaComponent.prototype.addMesta = function () {
        this.router.navigate(['/mesta/new']);
    };
    MestaComponent.prototype.updateMesta = function (id) {
        this.router.navigate(['/mesta/', id]);
    };
    // deleteMesto(tmesto){
    //   // console.log(tdrzava);
    //   this.confirmationService.confirm({
    //     message: 'Are you sure that you want to perform this action?',
    //       accept: () => {
    //         //Actual logic to perform a confirmation
    //         var index = this.mestaL.indexOf(tmesto);
    //        // console.log("index je " + index);
    //         this.mestaL.splice(index, 1);
    //         this.mestaService.delMesto(tmesto._id)
    //           .subscribe(null,
    //             err => {
    //               alert("Could not delete mesto.");
    //               // Revert the view back to its original state
    //               this.mestaL.splice(index, 0, tmesto);
    //             });
    //       }
    //     });
    // }
    MestaComponent.prototype.deleteMesto = function (tmesto) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrano mesto ?   ",
            header: "" + tmesto.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.mestaL.indexOf(tmesto);
                // console.log("index je " + index);
                _this.mestaL.splice(index, 1);
                _this.mestaService.delMesto(tmesto._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (err) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show('Could not delete mesto !!!', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.mestaL.splice(index, 0, tmesto);
                });
            }
        });
    };
    return MestaComponent;
}());
MestaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mesta',
        template: __webpack_require__("../../../../../src/app/components/mesta/mesta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/mesta/mesta.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mesta_service__["a" /* MestaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mesta_service__["a" /* MestaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], MestaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mesta.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesta; });
//import { Drzave } from './../drzave/drzave.model';
var Mesta = (function () {
    function Mesta() {
    }
    return Mesta;
}());

//# sourceMappingURL=mesta.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesta_service__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mesta_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mesta_form_mesta_form_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mesta_routing_module__ = __webpack_require__("../../../../../src/app/components/mesta/mesta-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MestaModule = (function () {
    function MestaModule() {
    }
    return MestaModule;
}());
MestaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__mesta_routing_module__["a" /* MestaRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__mesta_component__["a" /* MestaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mesta_form_mesta_form_component__["a" /* MestaFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__mesta_service__["a" /* MestaService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], MestaModule);

//# sourceMappingURL=mesta.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MestaService = (function () {
    function MestaService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    MestaService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    MestaService.prototype.getMesta = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/'); //this.prepEndpoint('api/mesta'); 
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        ;
    };
    MestaService.prototype.getMesto = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.addMesto = function (mesto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/');
        return this.http.post(ep, JSON.stringify(mesto), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.updateMesto = function (mesto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + mesto._id);
        return this.http.put(ep, JSON.stringify(mesto), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.delMesto = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + id); // this.prepEndpoint('api/drzave/'+id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    MestaService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return MestaService;
}());
MestaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], MestaService);

var _a;
//# sourceMappingURL=mesta.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        console.log("Modal show");
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        console.log("Hide show");
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    return ModalComponent;
}());
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
        styles: ["\n    .modal {\n      background: rgba(0,0,0,0.6);\n    }\n  "]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar-left/navbar-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-icon {\r\n    font-size: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar-left/navbar-left.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"  styleClass=\"ui-sidebar-sm\"  > -->\r\n    \r\n        <h2>TEST MENU</h2>\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                <a [routerLink]=\"['/zadrugar']\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-users\" aria-hidden=\"true\" ></i>&nbsp;Zadrugari</a>\r\n                </li>\r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\" \r\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a [routerLink]=\"['/partner']\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"  ></i>&nbsp;Kupci</a>\r\n                </li> \r\n\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\" \r\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a [routerLink]=\"['/banke']\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"  ></i>&nbsp;Banke</a>\r\n                </li> \r\n\r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/zanimanja']\" ><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Zanimanja</a>\r\n                </li>\r\n               \r\n                <li role=\"presentation\" (click)=\"OnClickMenu()\"  *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a  [routerLink]=\"['/posao']\" >\r\n                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp; \r\n                        Poslovi\r\n                    </a>\r\n                </li>\r\n             \r\n                <li role=\"presentation\" (click)=\"OnClickMenu()\" *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/mesta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Mesta\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\"\r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/opstine']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Opštine\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\" *ngIf=\"authService.loggedIn()\" (click)=\"OnClickMenu()\"\r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/drzave']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Države\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"OnClickMenu()\"\r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/vlasnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Vlasnik\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"OnClickMenu()\"\r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/konstanta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Konstante\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"OnClickMenu()\"\r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/fondsati']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Fond sati\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"OnClickMenu()\"\r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" > \r\n                        <a [routerLink]=\"['/radnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Radnik\r\n                        </a>\r\n                  </li>\r\n                  \r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"OnClickMenu()\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/parametar']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Parametri\r\n                    </a>\r\n                 </li>\r\n                 <li *ngIf=\"authService.loggedIn()\"   role=\"presentation\" (click)=\"OnClickMenu()\"  \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/profile']\">Profile\r\n                      <i class=\" menu-icon pull-left hidden-xs showopacity fa fa-user-md\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \r\n                        [routerLinkActiveOptions] = \"{exact:true}\"  role=\"presentation\" (click)=\"OnClickMenu()\">\r\n                    <a [routerLink]=\"['/register']\">Register</a>\r\n                  </li>\r\n        </ul>\r\n \r\n     \r\n  <!-- <h1 style=\"font-weight:normal\">Left Sidebar</h1>\r\n  <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n  <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button> -->\r\n\r\n\r\n\r\n<!-- </p-sidebar> -->"

/***/ }),

/***/ "../../../../../src/app/components/navbar-left/navbar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SidebarModule} from 'primeng/primeng';
var NavbarLeftComponent = (function () {
    function NavbarLeftComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.visibleSidebar1 = false;
        this.closeSB = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavbarLeftComponent.prototype.ngOnInit = function () {
    };
    NavbarLeftComponent.prototype.OnClickMenu = function () {
        //  console.log('on click menu i emitujem ;');
        this.visibleSidebar1 = false;
        this.closeSB.emit(this.visibleSidebar1);
    };
    return NavbarLeftComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NavbarLeftComponent.prototype, "closeSB", void 0);
NavbarLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-left',
        template: __webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
], NavbarLeftComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar-left.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse  fixed-top\">\r\n  <!-- <div class=\"container\"> navbar-default -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <!-- <a class=\"navbar-brand navbar-left\" href=\"#\">GLAVNI</a> -->\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n         <li>\r\n          <a (click)=\"visibleSidebar1 = true\">\r\n            <i class=\"fa fa-sliders fa-2x\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </li>\r\n        <!-- &nbsp;&nbsp; -->\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">\r\n          <i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i>\r\n          OMLADINSKA ZADRUGA</a>\r\n        </li>\r\n          \r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        \r\n        <!-- (click)=\"onClickQuickMenu()\" -->\r\n        <li *ngIf=\"authService.loggedIn()\" >\r\n          <a (click)=\"modal1.show()\">\r\n            <span class=\"glyphicon glyphicon-plus-sign fa-2x\" aria-hidden=\"true\" title=\"Quick add\"></span>\r\n          </a>\r\n        </li>\r\n              \r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n                \r\n        <li><a (click)=\"onClickHelp()\" href=\"#\">\r\n            <span class=\"glyphicon glyphicon-question-sign fa-2x\" aria-hidden=\"true\" title=\"Help\"></span>\r\n          \r\n        </a></li>\r\n        \r\n\r\n      </ul>\r\n    </div>\r\n   \r\n  <!-- </div> -->\r\n</nav>\r\n\r\n\r\n <app-modal #modal1>\r\n  <div class=\"app-modal-header\">\r\n    <a (click)=\"modal1.hide()\">\r\n     <span class=\"text-right\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" title=\"Close\"></span>\r\n    </a>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n      <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n                <h3 class=\"text-primary\">Dokumenti</h3>\r\n                <ul class=\"nav nav-pills nav-stacked\" >\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Uputi</a></li>\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Fakture</a></li>\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Uplate</a></li>        \r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Isplate</a></li>        \r\n                </ul>\r\n            </div>\r\n             <div class=\"col-xs-6\">\r\n                <h3 class=\"text-primary\">Šifarnici</h3>\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"><a href=\"#\">\r\n                            <i class=\"menu-icon hidden-xs fa fa-neuter\" aria-hidden=\"true\"></i>&nbsp;Zadrugari</a></li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"><a href=\"#\">\r\n                            <i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"></i>&nbsp;Kupci</a></li> \r\n\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Zanimanja</a></li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a  [routerLink]=\"['/posao/new']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp; \r\n                                Poslovi\r\n                            </a>\r\n                        </li>\r\n                     \r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/mesta/new']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Mesta\r\n                                </a>\r\n                        </li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/opstine/new']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Opštine\r\n                                </a>\r\n                        </li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a [routerLink]=\"['/drzave/new']\" >\r\n                                <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Države\r\n                            </a>\r\n                        </li>\r\n                </ul>\r\n             </div>\r\n          \r\n      </div>\r\n       \r\n\r\n  </div>\r\n\r\n  <!-- <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n  </div> -->\r\n</app-modal>\r\n\r\n<p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"  styleClass=\"ui-sidebar-sm\" >\r\n    <app-navbar-left (closeSB)=\"getNotification($event)\"></app-navbar-left>\r\n</p-sidebar> \r\n\r\n<!-- <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"  styleClass=\"ui-sidebar-sm\"  >\r\n        <h1></h1>\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                <a href=\"#\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-users\" aria-hidden=\"true\" ></i>&nbsp;Zadrugari</a>\r\n                </li>\r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a [routerLink]=\"['/partner']\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"  ></i>&nbsp;Kupci</a>\r\n                </li> \r\n\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a [routerLink]=\"['/banke']\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"  ></i>&nbsp;Banke</a>\r\n                </li> \r\n\r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/zanimanja']\" ><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Zanimanja</a>\r\n                </li>\r\n               \r\n                <li role=\"presentation\" (click)=\"visibleSidebar1 = false\"  *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a  [routerLink]=\"['/posao']\" >\r\n                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp; \r\n                        Poslovi\r\n                    </a>\r\n                </li>\r\n             \r\n                <li role=\"presentation\" (click)=\"visibleSidebar1 = false\" *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/mesta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Mesta\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/opstine']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Opštine\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\" *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/drzave']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Države\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/vlasnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Vlasnik\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/konstanta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Konstante\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/fondsati']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Fond sati\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" > \r\n                        <a [routerLink]=\"['/radnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Radnik\r\n                        </a>\r\n                  </li>\r\n                  \r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/parametar']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Parametri\r\n                    </a>\r\n                 </li>\r\n                 <li *ngIf=\"authService.loggedIn()\"   role=\"presentation\" (click)=\"visibleSidebar1 = false\"  \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/profile']\">Profile\r\n                      <i class=\" menu-icon pull-left hidden-xs showopacity fa fa-user-md\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \r\n                        [routerLinkActiveOptions] = \"{exact:true}\"  role=\"presentation\" (click)=\"visibleSidebar1 = false\">\r\n                    <a [routerLink]=\"['/register']\">Register</a>\r\n                  </li>\r\n        </ul>\r\n</p-sidebar> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // console.log("pozvao sam fukciju za meni");
        // Configure tooltips for collapsed side navigation
        //  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
        // tslint:disable-next-line:max-line-length
        // template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        //  })
        // Toggle the side navigation
        // $("#sidenavToggler").click(function(e) {
        //   e.preventDefault();
        //   $("body").toggleClass("sidenav-toggled");
        //   $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
        //   $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
        // });
        // Force the toggled class to be removed when a collapsible nav link is clicked
        // $(".navbar-sidenav .nav-link-collapse").click(function(e) {
        //   e.preventDefault();
        //   $("body").removeClass("sidenav-toggled");
        // });
        // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        // tslint:disable-next-line:max-line-length
        // $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
        //   var e0 = e.originalEvent,
        //     delta = e0.wheelDelta || -e0.detail;
        //   this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        //   e.preventDefault();
        // });
        // // Scroll to top button appear
        // $(document).scroll(function() {
        //   var scrollDistance = $(this).scrollTop();
        //   if (scrollDistance > 100) {
        //     $('.scroll-to-top').fadeIn();
        //   } else {
        //     $('.scroll-to-top').fadeOut();
        //   }
        // });
        // // Configure tooltips globally
        //    $('[data-toggle="tooltip"]').tooltip();
        // Smooth scrolling using jQuery easing
        // $(document).on('click', 'a.scroll-to-top', function(event) {
        //   var $anchor = $(this);
        //   $('html, body').stop().animate({
        //     scrollTop: ($($anchor.attr('href')).offset().top)
        //   }, 1000, 'easeInOutExpo');
        //   event.preventDefault();
        // });
    };
    NavbarComponent.prototype.getNotification = function (evt) {
        // Do something with the notification (evt) sent by the child!
        console.log('"getNotification u  navbaru');
        this.visibleSidebar1 = false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.onClickHelp = function () {
        // alert("Provera help-a");
        this.flashMessage.show('Trebalo bi help da prikazemo', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
        return false;
    };
    NavbarComponent.prototype.onClickQuickMenu = function () {
        // alert("Provera help-a");
        this.flashMessage.show('Trebalo quick menu da prikazemo', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
        return false;
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "visibleSidebar1", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block; }\r\n\r\n.welcome-page {\r\n  /* position: absolute; */\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  overflow: auto;\r\n  background: #222;\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 10em; }\r\n  .welcome-page .col-lg-8 {\r\n    padding: 0; }\r\n  .welcome-page .rounded-btn {\r\n    border-radius: 50px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    background: #222;\r\n    border: 2px solid rgba(255, 255, 255, 0.8);\r\n    font-size: 18px;\r\n    line-height: 40px;\r\n    padding: 0 25px; }\r\n  .welcome-page .rounded-btn:hover, .welcome-page .rounded-btn:focus, .welcome-page .rounded-btn:active, .welcome-page .rounded-btn:visited {\r\n    color: white;\r\n    border: 2px solid white;\r\n    outline: none; }\r\n  .welcome-page h1 {\r\n    font-weight: 300;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    font-size: 36px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  not-found works! class=\"welcome-page\"\r\n</p> -->\r\n\r\n<div class=\"welcome-page\" [@routerTransition]>\r\n  <!-- <div class=\"row\"> -->\r\n      <!-- <div class=\"col-md-10 push-md-1\"> -->\r\n          <h1>404 - Page Not Found</h1>\r\n          <!-- <p >This page does not exist</p> -->\r\n          <p class=\"lead\">This page does not exist</p>\r\n          <!-- <p class=\"lead\">\r\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/']\">Restart</a>\r\n          </p> -->\r\n\r\n          <button type=\"reset\" class=\"btn btn-default rounded-btn\"  [routerLink]=\"['/']\">\r\n            Restart\r\n           </button>\r\n\r\n      <!-- </div> -->\r\n  <!-- </div> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine-form/opstine-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine-form/opstine-form.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"panel panel-primary\"  [@formsTransition]>\r\n      <div class=\"panel-heading\">\r\n          <div class=\"row\">\r\n              <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n                  <h5>{{title}}</h5> \r\n                </div>\r\n                <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n                  <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n                </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n          <form [formGroup]=\"formOPST\" (ngSubmit)=\"save()\" novalidate>\r\n              <div class=\"form-group\" >\r\n                  <!-- <label class=\"center-block\">ID: -->\r\n                    <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"opstina._id\"   type=\"hidden\">\r\n                  <!-- <label> -->\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"center-block\">Država:\r\n                    <select  formControlName=\"Drzava\" class=\"form-control\" placeholder=\"Select Državu\"  name=\"Select Državu\" [(ngModel)]=\"opstina.Drzava\" >\r\n                      <option *ngFor=\"let list of drzave\" [value]=\"list._id\"   >\r\n                        {{ list.Naziv }}\r\n                      </option>\r\n                    </select>\r\n                  </label>\r\n              </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">Kod opštine:\r\n                      <input  class=\"form-control\" formControlName=\"RegOzn\"  [(ngModel)]=\"opstina.RegOzn\" >\r\n                    </label>\r\n                    <div class=\"text-danger\" *ngIf=\"!formOPST.controls['RegOzn'].valid && formOPST.controls['RegOzn'].touched\">{{ titleAlertRegOzn }}</div>\r\n                    \r\n                  </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"center-block\">Naziv opštine:\r\n                    <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"opstina.Naziv\" >\r\n                  </label>\r\n                  <div class=\"text-danger\" *ngIf=\"!formOPST.controls['Naziv'].valid && formOPST.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">Šifra poreza opštine:\r\n                      <input class=\"form-control\" formControlName=\"SifPorez\"  [(ngModel)]=\"opstina.SifPorez\" >\r\n                    </label>\r\n                  </div>\r\n                  \r\n                  <div class=\"form-group\">\r\n                      <label class=\"center-block\">Kontrolni broj opštine:\r\n                        <input class=\"form-control\" formControlName=\"KontBr\"  [(ngModel)]=\"opstina.KontBr\" >\r\n                      </label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"center-block\">Poziv na broj opštine:\r\n                          <input class=\"form-control\" formControlName=\"PozivNaBr\"  [(ngModel)]=\"opstina.PozivNaBr\" >\r\n                        </label>\r\n                      </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"center-block\">Opis:\r\n                      <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"opstina.Opis\">\r\n\r\n                      </textarea>\r\n                    </label>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                        <div class=\"col-md-offset-5 col-md-12\">\r\n                            <button type=\"submit\" [disabled]=\"!formOPST.valid\"\r\n                                class=\"btn btn-default\">\r\n                            <span class=\"glyphicon glyphicon-saved\"></span>\r\n                            Save\r\n                            </button>\r\n\r\n                          <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formOPST.pristine\"  (click)=\"revert()\">\r\n                              <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                              Clear data\r\n                          </button>\r\n                          \r\n                        </div>\r\n                  \r\n                        \r\n              </div>\r\n                  \r\n\r\n\r\n          </form>\r\n      </div>\r\n     \r\n      <div class=\"panel-footer\">\r\n          <!-- <div class=\"col-md-offset-2 col-md-9\"> -->\r\n              <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n                <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n                Back\r\n            </button>\r\n          <!-- </div> -->\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n    <!-- </div>   coll -->\r\n <!--   </div>  row -->\r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_drzave_service__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opstine_service__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opstine_model__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpstineFormComponent = (function () {
    function OpstineFormComponent(opstService, drzaveService, router, route, formBuilder, _location) {
        this.opstService = opstService;
        this.drzaveService = drzaveService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.opstina = new __WEBPACK_IMPORTED_MODULE_5__opstine_model__["a" /* Opstine */]();
        this.titleAlertNaziv = 'Naziv,This field is required !!!';
        this.titleAlertRegOzn = 'Regionalna oznaka, This field is required !!!';
        this.formOPST = formBuilder.group({
            _id: [],
            Drzava: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            RegOzn: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)
                ]],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            SifPorez: [],
            KontBr: [],
            PozivNaBr: [],
            Opis: []
        });
    }
    OpstineFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drzaveService.getDrzave().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                // console.log(" data je " + profile.data);
                _this.drzave = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje opštine' : 'Nova opština';
            if (!id)
                return;
            _this.opstService.getOpstina(id)
                .subscribe(function (opstina) {
                if (opstina.success) {
                    _this.opstina = opstina.data[0];
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (response) {
                if (response.status == 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        });
    };
    OpstineFormComponent.prototype.save = function () {
        var _this = this;
        var result, opstineValue = this.formOPST.value;
        console.log(opstineValue.Drzava);
        if (opstineValue._id) {
            result = this.opstService.updateOpstine(opstineValue);
        }
        else {
            result = this.opstService.addOpstine(opstineValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['opstine']); });
    };
    OpstineFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    OpstineFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    OpstineFormComponent.prototype.ngOnChanges = function () {
        this.formOPST.reset({
            Naziv: "",
            RegOzn: "",
            SifPorez: "",
            KontBr: "",
            PozivNaBr: "",
            Opis: ""
        });
    };
    return OpstineFormComponent;
}());
OpstineFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-opstine-form',
        template: __webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_7__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__opstine_service__["a" /* OpstineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__drzave_drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__drzave_drzave_service__["a" /* DrzaveService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _f || Object])
], OpstineFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=opstine-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opstine_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opstine_form_opstine_form_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var opstineRoutes = [
    { path: 'opstine', component: __WEBPACK_IMPORTED_MODULE_3__opstine_component__["a" /* OpstineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine/new', component: __WEBPACK_IMPORTED_MODULE_4__opstine_form_opstine_form_component__["a" /* OpstineFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine/:id', component: __WEBPACK_IMPORTED_MODULE_4__opstine_form_opstine_form_component__["a" /* OpstineFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var OpstineRoutingModule = (function () {
    function OpstineRoutingModule() {
    }
    return OpstineRoutingModule;
}());
OpstineRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(opstineRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], OpstineRoutingModule);

//# sourceMappingURL=opstine-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  opstine works!\r\n</p> -->\r\n\r\n<!-- <div class=\"row\"> -->\r\n    <div *ngIf=\"opstineL;else  waiting\" >\r\n      <!-- <h3 class=\"first\">PREGLED OPŠTINA</h3>\r\n      <input #gb type=\"text\" placeholder=\"Global search\" pInputText focus>\r\n      <p></p> -->\r\n\r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n         <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"opstineL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedOpstina\" dataKey=\"_id\" \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  \r\n                [immutable]=false resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n                <p-header><strong>{{Title}}</strong></p-header>         \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n      <p-column field=\"Drzava.Naziv\" header=\"Drzava\" sortable=\"true\"></p-column>  \r\n      <p-column field=\"RegOzn\" header=\"Oznaka\" sortable=\"true\"></p-column>                               \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n      <p-column field=\"SifPorez\" header=\"SifPorez\" sortable=\"true\"></p-column>\r\n     \r\n\r\n      <p-column styleClass=\"col-button text-center\" heder=\"Opcije\">\r\n          <ng-template let-opst=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectOpstina(opst)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateOpstinu(opst._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteOpstinu(opst)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n     </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addOpstine()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n\r\n<!-- </div> -->\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n     </p-footer>\r\n</p-confirmDialog>\r\n\r\n<p-dialog header=\"OPŠTINA\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n\r\n        <div>\r\n                <dl class=\"dl-horizontal\">\r\n                    <dt>\r\n                     ID\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                       {{opstShow._id}}\r\n                    </dd>\r\n                  \r\n                    <dt>\r\n                      KOD OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                         {{opstShow.RegOzn}} \r\n                    </dd>\r\n                    <dt>\r\n                    NAZIV OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                         {{opstShow.Naziv}}\r\n                    </dd>\r\n                    <dt>\r\n                     ŠIFRA POREZA OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.SifPorez}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    KONTROLNI BROJ OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.KontBr}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    POZIV NA BROJ OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.PozivNaBr}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    OPIS\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.Opis}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    DATUM UNOSA\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.created_at}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    DATUM AŽURIRANJA\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.updatedAt}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    KORISNIK\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.NameUser}}\r\n                        \r\n                    </dd>\r\n            \r\n                </dl>                        \r\n        </div>\r\n                        \r\n\r\n        <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n            <p-footer>\r\n                 <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n            </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opstine_service__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opstine_model__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpstineComponent = (function () {
    function OpstineComponent(router, opstService, confirmationService, flashMessage) {
        this.router = router;
        this.opstService = opstService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.opstShow = new __WEBPACK_IMPORTED_MODULE_3__opstine_model__["a" /* Opstine */]();
        this.Title = '"PREGLED OPŠTINA';
    }
    OpstineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opstService.getOpstine().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                //       console.log(" data je " + profile.data[0].Drzava.Naziv);
                _this.opstineL = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    OpstineComponent.prototype.selectOpstina = function (opstina) {
        this.displayDetals = true;
        this.opstShow = this.cloneData(opstina);
    };
    OpstineComponent.prototype.cloneData = function (c) {
        var opstina = new __WEBPACK_IMPORTED_MODULE_3__opstine_model__["a" /* Opstine */]();
        for (var prop in c) {
            opstina[prop] = c[prop];
        }
        return opstina;
    };
    OpstineComponent.prototype.addOpstine = function () {
        this.router.navigate(['opstine/new']);
    };
    OpstineComponent.prototype.updateOpstinu = function (id) {
        this.router.navigate(['opstine/', id]);
    };
    //deleteOpstinu(topstina){
    // console.log(tdrzava);
    // this.confirmationService.confirm({
    //   message: 'Are you sure that you want to perform this action?',
    //     accept: () => {
    //       //Actual logic to perform a confirmation
    //       var index = this.opstine.indexOf(topstina);
    //       console.log("index je " + index);
    //       this.opstine.splice(index, 1);
    //       this.opstService.delOpstine(topstina._id)
    //         .subscribe(null,
    //           err => {
    //             alert("Could not delete drzavu.");
    //             // Revert the view back to its original state
    //             this.opstine.splice(index, 0, topstina);
    //           });
    //     }
    //   });
    OpstineComponent.prototype.deleteOpstinu = function (tOpstine) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabranu op\u0161tinu ?   ",
            header: "" + tOpstine.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.opstineL.indexOf(tOpstine);
                // console.log("index je " + index);
                _this.opstineL.splice(index, 1);
                _this.opstService.delOpstine(tOpstine._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (err) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show('Could not delete opštinu !!!', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.opstineL.splice(index, 0, tOpstine);
                });
            }
        });
    };
    return OpstineComponent;
}());
OpstineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-opstine',
        template: __webpack_require__("../../../../../src/app/components/opstine/opstine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/opstine/opstine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__opstine_service__["a" /* OpstineService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], OpstineComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=opstine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opstine; });
var Opstine = (function () {
    function Opstine() {
    }
    return Opstine;
}());

//# sourceMappingURL=opstine.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opstine_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opstine_form_opstine_form_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opstine_service__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opstine_routing_module__ = __webpack_require__("../../../../../src/app/components/opstine/opstine-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OpstineModule = (function () {
    function OpstineModule() {
    }
    return OpstineModule;
}());
OpstineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__opstine_routing_module__["a" /* OpstineRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__opstine_component__["a" /* OpstineComponent */],
            __WEBPACK_IMPORTED_MODULE_5__opstine_form_opstine_form_component__["a" /* OpstineFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__opstine_service__["a" /* OpstineService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], OpstineModule);

//# sourceMappingURL=opstine.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpstineService = (function () {
    function OpstineService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    OpstineService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    OpstineService.prototype.getOpstine = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/opstine/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        ;
    };
    OpstineService.prototype.getOpstina = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/opstine/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.addOpstine = function (opstina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/opstine/');
        return this.http.post(ep, JSON.stringify(opstina), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.updateOpstine = function (opstina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/opstine/' + opstina._id);
        return this.http.put(ep, JSON.stringify(opstina), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.delOpstine = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/opstine/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json() || 'Server error');
    };
    return OpstineService;
}());
OpstineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], OpstineService);

var _a;
//# sourceMappingURL=opstine.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parametar_component__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parmetar_form_parmetar_form_component__ = __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var parametarRoutes = [
    { path: 'parametar', component: __WEBPACK_IMPORTED_MODULE_3__parametar_component__["a" /* ParametarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'parametar/new', component: __WEBPACK_IMPORTED_MODULE_4__parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'parametar/:id', component: __WEBPACK_IMPORTED_MODULE_4__parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var ParametarRoutingModule = (function () {
    function ParametarRoutingModule() {
    }
    return ParametarRoutingModule;
}());
ParametarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(parametarRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], ParametarRoutingModule);

//# sourceMappingURL=parametar-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <div *ngIf=\"params;else  waiting\"  [@routerTransition]>\r\n\r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n         <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"params\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedParam\" dataKey=\"_id\"\r\n                styleClass=\"table  table-striped \" [immutable]=false [responsive]=\"true\"  >\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>             \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\" ></p-column>\r\n      <p-column field=\"Koristi\" header=\"Koristi\" sortable=\"true\" styleClass=\"text-center\">\r\n        <ng-template let-col let-param=\"rowData\" pTemplate=\"body\">\r\n            <span [hidden]=\"param[col.field]==false\">DA</span> \r\n            <span [hidden]=\"param[col.field]==true\">NE</span> \r\n        </ng-template> \r\n      </p-column>\r\n      <p-column field=\"VredString\" header=\"STRING\" sortable=\"true\"></p-column> \r\n      <p-column field=\"VredNumeric\" header=\"NUMERIC\" sortable=\"true\" styleClass=\"text-right\">\r\n            <ng-template let-col let-param=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{param[col.field] | number:'1.2-6'}}</span>\r\n                </ng-template>    \r\n      </p-column> \r\n      <!-- <p-column field=\"Opis\" header=\"Opis\" sortable=\"true\"></p-column> -->\r\n      <!-- <p-column field=\"NameUser\" header=\"User\" sortable=\"true\"></p-column> -->\r\n      \r\n      <p-column styleClass=\"col-button text-center\" heder=\"Action\">\r\n          <ng-template let-param=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectParam(param)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateParam(param._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteParam(param)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          \r\n            </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAddParam()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n  \r\n\r\n\r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n\r\n\r\n\r\n<p-dialog header=\"PARAMETAR\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n\r\n    <div>\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                 ID\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                   {{parShow._id}}\r\n                </dd>\r\n                <dt>\r\n                NAZIV PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{parShow.Naziv}}\r\n                </dd>\r\n                <dt>\r\n                 KORISTI PARAMETAR\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.Koristi}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                STRING VREDNOST PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.VredString}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                NUMERIČKA VREDNOST PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.VredNumeric}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                OPIS\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.Opis}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM UNOSA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.created_at}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM AŽURIRANJA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.updatedAt}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                KORISNIK\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.NameUser}}\r\n                    \r\n                </dd>\r\n        \r\n            </dl>                        \r\n    </div>\r\n                    \r\n\r\n    <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n        <p-footer>\r\n             <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parametar_service__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parametar_model__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import * as $ from 'jquery';
var ParametarComponent = (function () {
    function ParametarComponent(paramService, router, confirmationService, flashMessage) {
        this.paramService = paramService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.parShow = new __WEBPACK_IMPORTED_MODULE_3__parametar_model__["a" /* Parametar */]();
        this.Title = "PREGLED PARAMETARA";
    }
    ParametarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramService.getParametars()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.params = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            //  console.log(error.message);
            _this.params = [];
            return false;
        });
    };
    ParametarComponent.prototype.onAddParam = function () {
        //alert("Add param");
        this.router.navigate(['parametar/new']);
    };
    ParametarComponent.prototype.updateParam = function (id) {
        this.router.navigate(['parametar/', id]);
    };
    ParametarComponent.prototype.deleteParam = function (tparam) {
        // console.log(tdrzava);
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ?   ",
            header: "" + tparam.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.params.indexOf(tparam);
                // console.log("index je " + index);
                _this.params.splice(index, 1);
                _this.paramService.delParametar(tparam._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.params.splice(index, 0, tparam);
                });
            }
        });
    };
    ParametarComponent.prototype.selectParam = function (tprm) {
        this.displayDetals = true;
        this.parShow = this.cloneData(tprm);
    };
    ParametarComponent.prototype.cloneData = function (c) {
        var prmdata = new __WEBPACK_IMPORTED_MODULE_3__parametar_model__["a" /* Parametar */]();
        for (var prop in c) {
            prmdata[prop] = c[prop];
        }
        return prmdata;
    };
    return ParametarComponent;
}());
ParametarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parametar',
        template: __webpack_require__("../../../../../src/app/components/parametar/parametar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parametar/parametar.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__parametar_service__["a" /* ParametarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__parametar_service__["a" /* ParametarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ParametarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=parametar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parametar; });
var Parametar = (function () {
    function Parametar() {
    }
    return Parametar;
}());

//# sourceMappingURL=parametar.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parametar_service__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parametar_component__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parmetar_form_parmetar_form_component__ = __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parametar_routing_module__ = __webpack_require__("../../../../../src/app/components/parametar/parametar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ParametarModule = (function () {
    function ParametarModule() {
    }
    return ParametarModule;
}());
ParametarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__parametar_routing_module__["a" /* ParametarRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__parametar_component__["a" /* ParametarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__parametar_service__["a" /* ParametarService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], ParametarModule);

//# sourceMappingURL=parametar.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ParametarService = (function () {
    function ParametarService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    ParametarService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ParametarService.prototype.getParametars = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //  let ep = this.prepEndpoint('api/parametar'); 
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/parametar/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.getParametar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('api/parametar/'+id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/parametar/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.addParametar = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('api/parametar');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/parametar/');
        return this.http.post(ep, JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.updateParametar = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // let ep = this.prepEndpoint('api/parametar/' + param._id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/parametar/' + param._id);
        return this.http.put(ep, JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.delParametar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('api/parametar/'+id);
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/parametar/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    ParametarService.prototype.handleError = function (error) {
        // console.error("handleError "  + error);
        // //console.error("handleError +"  + error.json().error);
        // if (!error.ok){
        //   console.error("handleError greska text statusText "  + error.statusText);
        // }
        var greska = error.status + "  " + error.statusText;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(greska || 'Server error');
    };
    return ParametarService;
}());
ParametarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ParametarService);

var _a;
//# sourceMappingURL=parametar.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .move-left {\r\n    width: auto;\r\n    box-shadow: none;\r\n  } \r\n\r\n /* label{\r\n    display:inline;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\"  [@formsTransition] >\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n                <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n    </div>\r\n  </div>\r\n<div class=\"panel-body \">\r\n      <form [formGroup]=\"frParam\" (ngSubmit)=\"save()\">\r\n          <div class=\"form-group\" >\r\n                  <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"parametar._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"parametar.Naziv\" required >\r\n              </label>\r\n              <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Naziv.errors.required\">\r\n                    <strong>Naziv je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Naziv.errors.minlength\">\r\n                  <strong>Naziv mora biti minimalno 3 karaktera dužine !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Naziv.errors.maxlength\">\r\n                  <strong>Predugački naziv !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Naziv.errors.validateSifru\">\r\n                  <strong>Naziv nije u dobrom formatu, ima nedozvoljene karaktere !!!</strong>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"> <!-- class=\"pull-left\" -->\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-2\">\r\n                  <label class=\"center-block text-center\" >Koristi</label>\r\n                  <label class=\"center-block\" >\r\n                    <div class=\"checkbox\">\r\n                      <label class=\"left-block\" >\r\n                       <input type=\"checkbox\" class=\"form-control input-sm\" formControlName=\"Koristi\" [(ngModel)]=\"parametar.Koristi\">\r\n                    </label>\r\n                    </div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Text vrednost:\r\n                  <input class=\"form-control\" formControlName=\"VredString\"  [(ngModel)]=\"parametar.VredString\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Brojčana vrednost:\r\n                  <input class=\"form-control\" formControlName=\"VredNumeric\"  [(ngModel)]=\"parametar.VredNumeric\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                       <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"parametar.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-4 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!frParam.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"frParam.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                   </div>\r\n              \r\n                      <!-- <div class=\"col-md-offset-2 col-md-6\">\r\n                              <button type=\"submit\" [disabled]=\"!frParam.valid\"\r\n                                class=\"btn btn-default\">\r\n                               <span class=\"glyphicon glyphicon-saved\"></span>\r\n                              Save\r\n                              </button>\r\n              \r\n                      </div> -->\r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n      \r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n        <!-- <div class=\"col-md-offset-2 col-md-9\"> -->\r\n            <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n              <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n              Back\r\n          </button>\r\n        <!-- </div> -->\r\n    </div>\r\n\r\n</div>\r\n    \r\n<!-- <div class=\"col-md-offset-2 col-md-9\">\r\n    <button (click)=\"backClicked()\"  class=\"btn btn-default btn-block\">\r\n    <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n    Back\r\n  </button>\r\n</div> -->\r\n\r\n\r\n<!-- </div>   coll\r\n</div>  row -->\r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParmetarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parametar_model__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parametar_service__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Message } from 'primeng/components/common/api';









var ParmetarFormComponent = (function () {
    function ParmetarFormComponent(router, route, formBuilder, paramService, _location, flashMessage, serValidate) {
        this.router = router;
        this.route = route;
        this.paramService = paramService;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.parametar = new __WEBPACK_IMPORTED_MODULE_3__parametar_model__["a" /* Parametar */]();
        this.saveTemp = true;
        this.frParam = formBuilder.group({
            _id: [],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(25),
                    serValidate.validateRegExpSifru
                ]],
            Koristi: [],
            VredString: [],
            VredNumeric: [],
            Opis: []
        });
    }
    Object.defineProperty(ParmetarFormComponent.prototype, "Naziv", {
        get: function () { return this.frParam.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    ParmetarFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje Parametra' : 'Novi Parametar';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.paramService.getParametar(id)
                .subscribe(function (param) {
                if (param.success) {
                    _this.saveTemp = false;
                    _this.parametar = param.data[0];
                }
                else {
                    _this.flashMessage.show(param.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                _this.router.navigate(['NotFound']);
            });
        });
    };
    ParmetarFormComponent.prototype.loadTempData = function () {
        var par = JSON.parse(localStorage.getItem('data_param'));
        if (par) {
            this.parametar = par;
        }
    };
    ParmetarFormComponent.prototype.setTempData = function () {
        var parValue = JSON.stringify(this.frParam.value);
        if (parValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_param', parValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    ParmetarFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_param');
    };
    ParmetarFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
        //event.stopPropagation();
    };
    ParmetarFormComponent.prototype.save = function () {
        var _this = this;
        var result, paramValue = this.frParam.value;
        if (paramValue._id) {
            this.paramService.updateParametar(paramValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['parametar']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.paramService.addParametar(paramValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['parametar']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    ParmetarFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    ParmetarFormComponent.prototype.ngOnChanges = function () {
        this.frParam.reset({
            Naziv: "",
            Koristi: 0,
            VredString: "",
            VredNumeric: 0,
            Opis: ""
        });
    };
    ParmetarFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return ParmetarFormComponent;
}());
ParmetarFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parmetar-form',
        template: __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__parametar_service__["a" /* ParametarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__parametar_service__["a" /* ParametarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], ParmetarFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=parmetar-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/kontaktpartner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"Kontakt\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Naziv</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"KoNaziv\" required>\r\n                 <small [hidden]=\"Kontakt.controls.KoNaziv.valid\" class=\"text-danger\">\r\n                    Naziv je obavezan\r\n                </small> \r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Funkcija</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"KoFunkcija\" required>\r\n                 <small [hidden]=\"Kontakt.controls.KoFunkcija.valid\" class=\"text-danger\">\r\n                        Funkcija je obavezna\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Email</label>\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"KoEmail\" >\r\n                </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Telefon</label>\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"KoTelef\" >\r\n               </div>\r\n                <div class=\"form-group col-md-4\">\r\n                    <label>Mobilni</label>\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"KoMobilni\" >\r\n                </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-8\">\r\n                <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control input-sm\" formControlName=\"KoOpis\">\r\n                </textarea>\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/kontaktpartner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontaktPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KontaktPartnerComponent = (function () {
    function KontaktPartnerComponent() {
    }
    return KontaktPartnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('groupkontakt'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], KontaktPartnerComponent.prototype, "Kontakt", void 0);
KontaktPartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'kontaktpartner',
        template: __webpack_require__("../../../../../src/app/components/partner/partner-form/kontaktpartner.component.html")
    })
], KontaktPartnerComponent);

var _a;
//# sourceMappingURL=kontaktpartner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/padresa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [formGroup]=\"Adresa\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-5\">\r\n            <label class=\"center-block\">Ulica:\r\n              <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdUlica\" required>\r\n            </label>\r\n            <!-- <small [hidden]=\"Adresa.controls.AdUlica.valid\" class=\"text-danger\">\r\n                Ulica je obavezna\r\n            </small> -->\r\n            <div *ngIf=\"Adresa.controls.AdUlica.invalid && (Adresa.controls.AdUlica.dirty || Adresa.controls.AdUlica.touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"Adresa.controls.AdUlica.errors.required\">\r\n                        <strong> Ulica je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"Adresa.controls.AdUlica.errors.minlength\">\r\n                        <strong>Ulica mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                      </div>\r\n                    <div *ngIf=\"Adresa.controls.AdUlica.errors.maxlength\">\r\n                        <strong>Predugačak podatak o ulici !!!</strong>\r\n                   </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n                <label>Broj:\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdBroj\">\r\n                </label>\r\n        </div>\r\n        <div class=\"form-group col-md-5\">\r\n            <label class=\"center-block\">Mesto:\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdMesto\" >\r\n            </label>\r\n        </div>\r\n       \r\n    </div>\r\n    <div class=\"row\">\r\n            <div class=\"form-group col-md-3\">\r\n                    <label class=\"center-block\">Ptt:\r\n                        <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdPttReon\" >\r\n                    </label>\r\n            </div>\r\n            <div class=\"form-group col-md-3\">\r\n                 <label class=\"center-block\">Ptt pak:\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdPttPak\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                 <label class=\"center-block\">Zemlja:\r\n                    <input type=\"text\" class=\"form-control input-sm\" formControlName=\"AdDrzava\" >\r\n                </label>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/padresa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadresaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PadresaComponent = (function () {
    function PadresaComponent() {
    }
    return PadresaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('groupadresa'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], PadresaComponent.prototype, "Adresa", void 0);
PadresaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'partadresa',
        template: __webpack_require__("../../../../../src/app/components/partner/partner-form/padresa.component.html")
    })
], PadresaComponent);

var _a;
//# sourceMappingURL=padresa.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/partner-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/partner-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  partner-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\"  [@formsTransition]>\r\n    <div class=\"panel-heading\">\r\n        <div class=\"row\">\r\n            <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n                <h5>{{title}}</h5> \r\n              </div>\r\n              <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n                <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n              </div>\r\n       </div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"formPartn\" (ngSubmit)=\"save()\" novalidate>\r\n            <div class=\"form-group\" >\r\n                <!-- <label class=\"center-block\">ID: -->\r\n                  <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"partnN._id\"   type=\"hidden\">\r\n                <!-- <label> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label class=\"center-block\">Naziv:\r\n                      <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"partnN.Naziv\"  required>\r\n                    </label>\r\n                    <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"Naziv.errors.required\">\r\n                            <strong>Naziv je obavezan podatak !!!</strong>\r\n                        </div>\r\n                        <div *ngIf=\"Naziv.errors.minlength\">\r\n                            <strong>Naziv mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                          </div>\r\n                        <div *ngIf=\"Naziv.errors.maxlength\">\r\n                            <strong>Predugačak naziv !!!</strong>\r\n                       </div>\r\n                    </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-8\">\r\n                  <label class=\"center-block\">Kod pretrage:\r\n                    <input class=\"form-control\" formControlName=\"KyeSearch\"  [(ngModel)]=\"partnN.KyeSearch\" required>\r\n                  </label>\r\n                  <div *ngIf=\"KyeSearch.invalid && (KyeSearch.dirty || KyeSearch.touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"KyeSearch.errors.required\">\r\n                          <strong>Kod je obavezan podatak !!!</strong>\r\n                      </div>\r\n                      <div *ngIf=\"KyeSearch.errors.minlength\">\r\n                          <strong>Kod mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                        </div>\r\n                      <div *ngIf=\"KyeSearch.errors.maxlength\">\r\n                          <strong>Predugačak kod !!!</strong>\r\n                     </div>\r\n                  </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n            <label class=\"center-block\">Ugovoreni procenat:\r\n                  <div class=\"input-group\">\r\n                      <div class=\"input-group\">\r\n                          <input class=\"form-control text-right\" formControlName=\"UgovProc\"  \r\n                          [(ngModel)]=\"partnN.UgovProc\" (keypress)=\"serValidate.validateOnlyNumbers($event)\" required>\r\n                          <span class=\"input-group-addon\">%</span>\r\n                      </div>\r\n                  </div>\r\n            </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Država:\r\n                <select  formControlName=\"Drzava\" class=\"form-control\" placeholder=\"Select Državu\"  \r\n                    name=\"Select Državu\" [(ngModel)]=\"partnN.Drzava\"  required>\r\n                    <option *ngFor=\"let list of drzave\" [value]=\"list._id\"   >\r\n                    {{ list.Naziv }}\r\n                    </option>\r\n                </select>\r\n                </label>\r\n            </div>\r\n\r\n             \r\n              <div class=\"form-group\">\r\n                  <div class=\"checkbox\">\r\n                    <label class=\"center-block\">\r\n                        <input type=\"checkbox\" formControlName=\"Aktivan\" [(ngModel)]=\"partnN.Aktivan\">Aktivan\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\"><strong>Adresa:</strong></div>\r\n                        <div class=\"panel-body\">\r\n                            <partadresa [groupadresa]=\"Adresa\" ></partadresa>\r\n                        </div>\r\n                    </div> \r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">Email:\r\n                        <input class=\"form-control\" formControlName=\"Email\"  [(ngModel)]=\"partnN.Email\" >\r\n                    </label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                        <div formArrayName=\"Telefon\">\r\n                            <div *ngFor=\"let Telefon of formPartn.controls.Telefon.controls; let i=index\" class=\"panel panel-info\"> \r\n                                <div class=\"panel-heading\">\r\n                                    <span><strong>Telefon {{i + 1}} </strong></span>\r\n                                    <span class=\"glyphicon glyphicon-remove pull-right\" (click)=\"removeTelefon(i)\"></span>\r\n                                </div>\r\n            \r\n                                <div [formGroupName]=\"i\" class=\"panel-body\" > \r\n                                    <telefonpartner [grouptel]=\"formPartn.controls.Telefon.controls[i]\"></telefonpartner>\r\n                                </div>\r\n                            </div>\r\n                      \r\n                            <div class=\"margin-20\" *ngIf=\"formPartn.controls.Telefon.controls.length < 6\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-2\">\r\n                                  </div>\r\n                                  <div class=\" col-xs-10 \">\r\n                                      <button type=\"button\" class=\"btn btn-info btn-block\"   (click)=\"addTelefon()\" title=\" Add telefon\">\r\n                                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                          Dodaj telefon\r\n                                      </button>\r\n                                      \r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          \r\n                        </div>\r\n                  </div> \r\n      \r\n\r\n                <div class=\"row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"center-block\">Pib:\r\n                        <input class=\"form-control\" formControlName=\"Pib\"  [(ngModel)]=\"partnN.Pib\" >\r\n                    </label>\r\n                </div>\r\n                      \r\n                <div class=\"form-group col-md-6\">\r\n                    <label class=\"center-block\">Matični broj:\r\n                         <input class=\"form-control\" formControlName=\"MatBroj\"  [(ngModel)]=\"partnN.MatBroj\" >\r\n                    </label>\r\n                </div>\r\n                  \r\n            <div class=\"form-group col-md-6\">\r\n                <label class=\"center-block\">Šifra delatnosti:\r\n                <input class=\"form-control\" formControlName=\"SifDelat\"  [(ngModel)]=\"partnN.SifDelat\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label class=\"center-block\">Pdv broj:\r\n                    <input class=\"form-control\" formControlName=\"PdvBroj\"  [(ngModel)]=\"partnN.PdvBroj\" >\r\n                </label>\r\n            </div>\r\n        </div>\r\n              \r\n       \r\n            \r\n\r\n                <div class=\"form-group\">\r\n                    <div formArrayName=\"Ziro\">\r\n                        <div *ngFor=\"let Ziro of formPartn.controls.Ziro.controls; let i=index\" class=\"panel panel-info\"> \r\n                            <div class=\"panel-heading\">\r\n                                <span><strong>Ziro racun {{i + 1}} </strong></span>\r\n                                <span class=\"glyphicon glyphicon-remove pull-right\" (click)=\"removeZiro(i)\"></span>\r\n                            </div>\r\n        \r\n                            <div [formGroupName]=\"i\" class=\"panel-body\" > \r\n                                <ziropartner [groupziro]=\"formPartn.controls.Ziro.controls[i]\"></ziropartner>\r\n                            </div>\r\n                        </div>\r\n                  \r\n                        <div class=\"margin-20\" *ngIf=\"formPartn.controls.Ziro.controls.length < 6\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-xs-2\">\r\n                              </div>\r\n                              <div class=\" col-xs-10 \">\r\n                                  <button type=\"button\" class=\"btn btn-info btn-block\"   (click)=\"addZiro()\" title=\" Add Žiro račun\">\r\n                                      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                      Dodaj žiro račun\r\n                                  </button>\r\n                                 \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      \r\n                    </div>\r\n                </div> \r\n\r\n                <div class=\"form-group\">\r\n                        <div formArrayName=\"Kontakt\">\r\n                            <div *ngFor=\"let kontak of formPartn.controls.Kontakt.controls; let i=index\" class=\"panel panel-info\"> \r\n                                <div class=\"panel-heading\">\r\n                                    <span><strong>Kontakt {{i + 1}} </strong></span>\r\n                                    <span class=\"glyphicon glyphicon-remove pull-right\" (click)=\"removeKontakt(i)\"></span>\r\n                                </div>\r\n            \r\n                                <div [formGroupName]=\"i\" class=\"panel-body\" > \r\n                                    <kontaktpartner [groupkontakt]=\"formPartn.controls.Kontakt.controls[i]\"></kontaktpartner>\r\n                                </div>\r\n                            </div>\r\n                      \r\n                            <div class=\"margin-20\" *ngIf=\"formPartn.controls.Kontakt.controls.length < 6\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-xs-2\">\r\n                                  </div>\r\n                                  <div class=\" col-xs-10 \">\r\n                                      <button type=\"button\" class=\"btn btn-info btn-block\"   (click)=\"addKontakt()\" title=\" Add kontakt\">\r\n                                          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                          Dodaj kontakt\r\n                                      </button>\r\n                                     \r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          \r\n                        </div>\r\n                </div> \r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"partnN.Opis\">\r\n\r\n                    </textarea>\r\n                  </label>\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                      <div class=\"col-md-offset-5 col-md-12\">\r\n                          <button type=\"submit\" [disabled]=\"!formPartn.valid\"\r\n                              class=\"btn btn-success\">\r\n                          <span class=\"glyphicon glyphicon-saved\"></span>\r\n                          Save\r\n                          </button>\r\n\r\n                        <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formPartn.pristine\"  (click)=\"revert()\">\r\n                            <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                            Clear data\r\n                        </button>\r\n                        \r\n                      </div>\r\n                \r\n                      \r\n            </div>\r\n                \r\n\r\n\r\n        </form>\r\n    </div>\r\n   \r\n    <div class=\"panel-footer\">\r\n        <!-- <div class=\"col-md-offset-2 col-md-9\"> -->\r\n            <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n              <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n              Back\r\n          </button>\r\n        <!-- </div> -->\r\n    </div>\r\n    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/partner-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partner_service__ = __webpack_require__("../../../../../src/app/components/partner/partner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partner_model__ = __webpack_require__("../../../../../src/app/components/partner/partner-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drzave_drzave_service__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PartnerFormComponent = (function () {
    function PartnerFormComponent(partnService, router, route, _fb, _location, flashMessage, serValidate, drzaveService) {
        this.partnService = partnService;
        this.router = router;
        this.route = route;
        this._fb = _fb;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.drzaveService = drzaveService;
        this.partnN = new __WEBPACK_IMPORTED_MODULE_6__partner_model__["a" /* PartnerModel */]();
        this.saveTemp = true;
        this.formPartn = this._fb.group({
            _id: [],
            KyeSearch: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(12)]],
            Naziv: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(150)]],
            UgovProc: [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, serValidate.minValue(0), serValidate.maxValue(100)]],
            Drzava: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Aktivan: [''],
            Adresa: this._fb.group({
                AdUlica: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
                AdBroj: [''],
                AdMesto: [''],
                AdPttReon: [''],
                AdPttPak: [''],
                AdDrzava: ['']
            }),
            Email: [''],
            Pib: [''],
            MatBroj: [''],
            SifDelat: [''],
            PdvBroj: [''],
            Ziro: this._fb.array([]),
            Telefon: this._fb.array([]),
            Kontakt: this._fb.array([]),
            Opis: ['']
        });
    }
    PartnerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drzaveService.getDrzave().subscribe(function (profile) {
            if (profile.success === true) {
                _this.drzave = profile.data;
            }
            else {
                _this.flashMessage.show(profile.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                _this.drzave = [];
            }
        }, function (error) {
            console.log(error);
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            _this.drzave = [];
            return false;
        });
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje kupca' : 'Novi kupac';
            if (!id) {
                // this.initAdresa("","","","","","");
                _this.loadTempData();
                return;
            }
            _this.partnService.getPartner(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.partnN = pos.data[0];
                    _this.partAdresa = pos.data[0].Adresa;
                    _this.initAdresa(_this.partAdresa);
                    // console.log(JSON.stringify(this.vlasnN ));
                    _this.initDataZiro();
                    _this.initDataTelefon();
                    _this.initDataKomtakt();
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    Object.defineProperty(PartnerFormComponent.prototype, "KyeSearch", {
        get: function () { return this.formPartn.get('KyeSearch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartnerFormComponent.prototype, "Naziv", {
        get: function () { return this.formPartn.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartnerFormComponent.prototype, "Adresa", {
        get: function () { return this.formPartn.get('Adresa'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartnerFormComponent.prototype, "Ziro", {
        get: function () { return this.formPartn.get('Ziro'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartnerFormComponent.prototype, "Telefon", {
        get: function () { return this.formPartn.get('Telefon'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartnerFormComponent.prototype, "Kontakt", {
        get: function () { return this.formPartn.get('Kontakt'); },
        enumerable: true,
        configurable: true
    });
    PartnerFormComponent.prototype.initAdresa = function (tAdresa) {
        // Adresa.
        // console.log("Dobio sam adresu " + JSON.stringify(tAdresa));
        this.Adresa.setValue({
            AdUlica: tAdresa.AdUlica,
            AdBroj: tAdresa.AdBroj,
            AdMesto: tAdresa.AdMesto,
            AdPttReon: tAdresa.AdPttReon,
            AdPttPak: tAdresa.AdPttPak,
            AdDrzava: tAdresa.AdDrzava
        });
    };
    PartnerFormComponent.prototype.initDataZiro = function () {
        for (var _i = 0, _a = this.partnN.Ziro; _i < _a.length; _i++) {
            var ziroitem = _a[_i];
            var control = this.formPartn.controls['Ziro'];
            control.push(this.initZiro(ziroitem.PzNaziv, ziroitem.PzRacun, ziroitem.PzGlavni, ziroitem.PzOpis));
        }
    };
    // Ziro racun vlasnika
    PartnerFormComponent.prototype.initZiro = function (tNaziv, tRacun, tGlavni, tOpis) {
        return this._fb.group({
            PzNaziv: [tNaziv, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PzRacun: [tRacun, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            PzGlavni: [tGlavni],
            PzOpis: [tOpis]
        });
    };
    PartnerFormComponent.prototype.addZiro = function () {
        var control = this.formPartn.controls['Ziro'];
        control.push(this.initZiro('', '', false, ''));
    };
    PartnerFormComponent.prototype.removeZiro = function (i) {
        var control = this.formPartn.controls['Ziro'];
        control.removeAt(i);
    };
    // telefon
    PartnerFormComponent.prototype.initDataTelefon = function () {
        for (var _i = 0, _a = this.partnN.Telefon; _i < _a.length; _i++) {
            var item = _a[_i];
            var control = this.formPartn.controls['Telefon'];
            control.push(this.initTelefon(item.TlNaziv, item.TlBroj, item.TlGlavni, item.TlOpis));
        }
    };
    PartnerFormComponent.prototype.initTelefon = function (tNaziv, tRacun, tGlavni, tOpis) {
        return this._fb.group({
            TlNaziv: [tNaziv, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            TlBroj: [tRacun, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            TlGlavni: [tGlavni],
            TlOpis: [tOpis]
        });
    };
    PartnerFormComponent.prototype.addTelefon = function () {
        var control = this.formPartn.controls['Telefon'];
        control.push(this.initTelefon('', '', false, ''));
    };
    PartnerFormComponent.prototype.removeTelefon = function (i) {
        var control = this.formPartn.controls['Telefon'];
        control.removeAt(i);
    };
    // Kontakt
    PartnerFormComponent.prototype.initDataKomtakt = function () {
        for (var _i = 0, _a = this.partnN.Kontakt; _i < _a.length; _i++) {
            var item = _a[_i];
            var control = this.formPartn.controls['Kontakt'];
            control.push(this.initKontakt(item.KoNaziv, item.KoFunkcija, item.KoEmail, item.KoTelef, item.KoMobilni, item.KoOpis));
        }
    };
    PartnerFormComponent.prototype.initKontakt = function (tKoNaziv, tKoFunkcija, tKoEmail, tKoTelef, tKoMobilni, tKoOpis) {
        return this._fb.group({
            KoNaziv: [tKoNaziv, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            KoFunkcija: [tKoFunkcija, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            KoEmail: [tKoEmail],
            KoTelef: [tKoTelef],
            KoMobilni: [tKoMobilni],
            KoOpis: [tKoOpis]
        });
    };
    PartnerFormComponent.prototype.addKontakt = function () {
        var control = this.formPartn.controls['Kontakt'];
        control.push(this.initKontakt('', '', '', '', '', ''));
    };
    PartnerFormComponent.prototype.removeKontakt = function (i) {
        var control = this.formPartn.controls['Kontakt'];
        control.removeAt(i);
    };
    // Save partner
    PartnerFormComponent.prototype.save = function () {
        var _this = this;
        var FPValue = this.formPartn.value;
        if (FPValue._id) {
            this.partnService.updatePartner(FPValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['partner']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // console.log(" forma UPDATE  " + error);
            });
        }
        else {
            this.partnService.addPartner(FPValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['partner']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
            });
        }
    };
    PartnerFormComponent.prototype.loadTempData = function () {
        var wdata = JSON.parse(localStorage.getItem('data_kupac'));
        if (wdata) {
            this.partnN = wdata;
        }
    };
    PartnerFormComponent.prototype.setTempData = function () {
        var fsValue = JSON.stringify(this.formPartn.value);
        if (fsValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_kupac', fsValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    PartnerFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_kupac');
    };
    PartnerFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
    };
    PartnerFormComponent.prototype.revert = function () { this.ClearData(); };
    PartnerFormComponent.prototype.ClearData = function () {
        this.formPartn.reset({
            KyeSearch: '',
            Naziv: '',
            UgovProc: 0,
            Drzava: '',
            Aktivan: false,
            Adresa: null,
            Email: '',
            Pib: '',
            MatBroj: '',
            SifDelat: '',
            PdvBroj: '',
            Ziro: null,
            Telefon: null,
            Kontakt: null,
            Opis: ''
        });
    };
    PartnerFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return PartnerFormComponent;
}());
PartnerFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-partner-form',
        template: __webpack_require__("../../../../../src/app/components/partner/partner-form/partner-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/partner/partner-form/partner-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__partner_service__["a" /* PartnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__drzave_drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__drzave_drzave_service__["a" /* DrzaveService */]) === "function" && _h || Object])
], PartnerFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=partner-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/telefonpartner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"Telefon\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Naziv</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"TlNaziv\" required>\r\n                 <small [hidden]=\"Telefon.controls.TlNaziv.valid\" class=\"text-danger\">\r\n                    Naziv je obavezan\r\n                </small> \r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Telefon</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"TlBroj\" required>\r\n                 <small [hidden]=\"Telefon.controls.TlBroj.valid\" class=\"text-danger\">\r\n                        Telefon je obavezan\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"form-group col-md-2\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <div class=\"checkbox\">\r\n                        <label >\r\n                            <input type=\"checkbox\"  class=\"form-control input-sm\" formControlName=\"TlGlavni\" >\r\n                            Glavni\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-8\">\r\n                    <label class=\"center-block\">Opis:\r\n                        <textarea class=\"form-control input-sm\" formControlName=\"TlOpis\">\r\n                    </textarea>\r\n                    </label>\r\n                </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/telefonpartner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TelefonPartnerComponent = (function () {
    function TelefonPartnerComponent() {
    }
    return TelefonPartnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('grouptel'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], TelefonPartnerComponent.prototype, "Telefon", void 0);
TelefonPartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'telefonpartner',
        template: __webpack_require__("../../../../../src/app/components/partner/partner-form/telefonpartner.component.html")
    })
], TelefonPartnerComponent);

var _a;
//# sourceMappingURL=telefonpartner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/ziropartner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"Ziro\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-2\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n            <label>Naziv</label>\r\n            <input type=\"text\" class=\"form-control input-sm\" formControlName=\"PzNaziv\" required>\r\n            <small [hidden]=\"Ziro.controls.PzNaziv.valid\" class=\"text-danger\">\r\n                Naziv je obavezan\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n            <label>Racun</label>\r\n            <input type=\"text\" class=\"form-control input-sm\" formControlName=\"PzRacun\" required>\r\n            <small [hidden]=\"Ziro.controls.PzRacun.valid\" class=\"text-danger\">\r\n                   Racun je obavezan\r\n            </small>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n                <div class=\"checkbox\">\r\n                    <label >\r\n                        <input type=\"checkbox\"  class=\"form-control input-sm\" formControlName=\"PzGlavni\" >\r\n                        Glavni\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-8\">\r\n                <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control input-sm\" formControlName=\"PzOpis\">\r\n                </textarea>\r\n                </label>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-form/ziropartner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZiroPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZiroPartnerComponent = (function () {
    function ZiroPartnerComponent() {
    }
    return ZiroPartnerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('groupziro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], ZiroPartnerComponent.prototype, "Ziro", void 0);
ZiroPartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'ziropartner',
        template: __webpack_require__("../../../../../src/app/components/partner/partner-form/ziropartner.component.html")
    })
], ZiroPartnerComponent);

var _a;
//# sourceMappingURL=ziropartner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAdresaModel */
/* unused harmony export PAZiroModel */
/* unused harmony export PATelefonModel */
/* unused harmony export PAKontaktModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerModel; });
var PAdresaModel = (function () {
    function PAdresaModel() {
    }
    return PAdresaModel;
}());

var PAZiroModel = (function () {
    function PAZiroModel() {
    }
    return PAZiroModel;
}());

var PATelefonModel = (function () {
    function PATelefonModel() {
    }
    return PATelefonModel;
}());

var PAKontaktModel = (function () {
    function PAKontaktModel() {
    }
    return PAKontaktModel;
}());

var PartnerModel = (function () {
    function PartnerModel() {
    }
    return PartnerModel;
}());

//# sourceMappingURL=partner-model.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partner_component__ = __webpack_require__("../../../../../src/app/components/partner/partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partner_form_partner_form_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/partner-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var partnerRoutes = [
    { path: 'partner', component: __WEBPACK_IMPORTED_MODULE_3__partner_component__["a" /* PartnerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'partner/new', component: __WEBPACK_IMPORTED_MODULE_4__partner_form_partner_form_component__["a" /* PartnerFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'partner/:id', component: __WEBPACK_IMPORTED_MODULE_4__partner_form_partner_form_component__["a" /* PartnerFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var PartnerRoutingModule = (function () {
    function PartnerRoutingModule() {
    }
    return PartnerRoutingModule;
}());
PartnerRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(partnerRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], PartnerRoutingModule);

//# sourceMappingURL=partner-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/partner/partner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  partner works!\r\n</p> -->\r\n\r\n<div *ngIf=\"partnerL;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"partnerL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedPartner\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"KyeSearch\" header=\"Ključ\" ></p-column>\r\n      <p-column field=\"Naziv\" header=\"Naziv\"  ></p-column>\r\n      <p-column field=\"UgovProc\" header=\"Ugovoreni %\"   styleClass=\"text-right\" >\r\n            <ng-template let-col let-partn=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{partn[col.field] | number:'1.2-2'}}</span>\r\n            </ng-template> \r\n      </p-column> \r\n      <p-column field=\"Email\" header=\"Email\" ></p-column>\r\n      <p-column field=\"Pib\" header=\"Pib\"  ></p-column>\r\n      \r\n      <p-column field=\"Aktivan\" header=\"Aktivan\"   styleClass=\"text-center\" >\r\n        <ng-template let-col let-partn=\"rowData\" pTemplate=\"body\">\r\n                <span [hidden]=\"partn[col.field]==false\">DA</span> \r\n                <span [hidden]=\"partn[col.field]==true\">NE</span> \r\n                \r\n        </ng-template> \r\n      </p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n       \r\n          <ng-template let-partn=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\r\n\r\n              <button type=\"button\" pButton (click)=\"selectItem(partn)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updatePartner(partn._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deletePartner(partn)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n       <p-footer *ngIf=\"partnerL.length > 0\">\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addPartner()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n            <!-- Custom content goes here -->\r\n            <div class=\"row\">\r\n                 <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                    <div class=\"hidden-xs dtempty_message_h1\">\r\n                        Još niste kreirali podatak.\r\n                    </div>\r\n                    <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                    <br/>\r\n                    <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                    <h3 class=\" hidden-xs dtempty_message\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite: \r\n                        <a  class=\"dtempty_message_text\" (click)=\"addPartner()\">\r\n                             Kreiraj podatak\r\n                        </a>\r\n                    </h3>\r\n\r\n                    <h5 class=\"visible-xs\" >\r\n                        <!-- To manually add new one click here: -->\r\n                        Da biste ručno dodali podatak kliknite : \r\n                        <a   (click)=\"addPartner()\">\r\n                             Kreiraj podatak\r\n                        </a>\r\n                    </h5>\r\n\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"KUPAC\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\" >\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                          ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{partnerShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                          KLJUČ PRETRAGE\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                          {{partnerShow.KyeSearch}} \r\n                          </dd>\r\n\r\n                        <dt>\r\n                        NAZIV\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                        {{partnerShow.Naziv}} \r\n                        </dd>\r\n                        <dt>\r\n                        UGOVORENI PROCENAT\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{partnerShow.UgovProc |  number:'1.2-2'}}\r\n                        </dd>\r\n                     \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{partnerShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{partnerShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{partnerShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{partnerShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer> \r\n             \r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n            \r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n \r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/partner/partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partner_service__ = __webpack_require__("../../../../../src/app/components/partner/partner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partner_model__ = __webpack_require__("../../../../../src/app/components/partner/partner-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PartnerComponent = (function () {
    function PartnerComponent(router, partService, confirmationService, flashMessage) {
        this.router = router;
        this.partService = partService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.partnerShow = new __WEBPACK_IMPORTED_MODULE_5__partner_model__["a" /* PartnerModel */]();
        this.Title = 'PREGLED KUPACA';
    }
    PartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partService.getPartneri()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.partnerL = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            //  console.log(error.message);
            _this.partnerL = [];
            return false;
        });
    };
    PartnerComponent.prototype.selectItem = function (work) {
        this.displayDetals = true;
        this.partnerShow = this.cloneData(work);
    };
    PartnerComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_5__partner_model__["a" /* PartnerModel */]();
        // tslint:disable-next-line:forin
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    PartnerComponent.prototype.addPartner = function () {
        this.router.navigate(['/partner/new']);
    };
    PartnerComponent.prototype.updatePartner = function (id) {
        this.router.navigate(['/partner/', id]);
    };
    PartnerComponent.prototype.deletePartner = function (tpartner) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ? ",
            header: "" + tpartner.Naziv,
            accept: function () {
                var index = _this.partnerL.indexOf(tpartner);
                // console.log("index je " + index);
                _this.partnerL.splice(index, 1);
                _this.partService.delPartner(tpartner._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.partnerL.splice(index, 0, tpartner);
                });
            }
        });
    };
    return PartnerComponent;
}());
PartnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-partner',
        template: __webpack_require__("../../../../../src/app/components/partner/partner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/partner/partner.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__partner_service__["a" /* PartnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__partner_service__["a" /* PartnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], PartnerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=partner.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partner_component__ = __webpack_require__("../../../../../src/app/components/partner/partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partner_form_partner_form_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/partner-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partner_form_padresa_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/padresa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partner_form_ziropartner_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/ziropartner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__partner_form_telefonpartner_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/telefonpartner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partner_form_kontaktpartner_component__ = __webpack_require__("../../../../../src/app/components/partner/partner-form/kontaktpartner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partner_service__ = __webpack_require__("../../../../../src/app/components/partner/partner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partner_routing_module__ = __webpack_require__("../../../../../src/app/components/partner/partner-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PartnerModule = (function () {
    function PartnerModule() {
    }
    return PartnerModule;
}());
PartnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_11__partner_routing_module__["a" /* PartnerRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__partner_component__["a" /* PartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__partner_form_partner_form_component__["a" /* PartnerFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__partner_form_padresa_component__["a" /* PadresaComponent */],
            __WEBPACK_IMPORTED_MODULE_7__partner_form_ziropartner_component__["a" /* ZiroPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__partner_form_telefonpartner_component__["a" /* TelefonPartnerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__partner_form_kontaktpartner_component__["a" /* KontaktPartnerComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__partner_service__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], PartnerModule);

//# sourceMappingURL=partner.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/partner/partner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PartnerService = (function () {
    function PartnerService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    PartnerService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PartnerService.prototype.getPartneri = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/partner');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PartnerService.prototype.getPartner = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/partner/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PartnerService.prototype.addPartner = function (tpartner) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/partner/');
        return this.http.post(ep, JSON.stringify(tpartner), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PartnerService.prototype.updatePartner = function (tpartner) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/partner/' + tpartner._id);
        return this.http.put(ep, JSON.stringify(tpartner), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PartnerService.prototype.delPartner = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/partner/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PartnerService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return PartnerService;
}());
PartnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PartnerService);

var _a;
//# sourceMappingURL=partner.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao-form/posao-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posao/posao-form/posao-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  mesta-form works!\r\n</p>\r\n[@slideToRight] -->\r\n<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n              <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n     </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formPOSAO\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"posaoN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Stručna sprema:\r\n                <select  formControlName=\"StepenSS\" class=\"form-control\"  [(ngModel)]=\"posaoN.StepenSS\"  required>\r\n                  <option *ngFor=\"let list of strSprema\" [value]=\"list\"   >\r\n                    {{ list }}\r\n                  </option>\r\n                </select>\r\n              </label>\r\n              <div *ngIf=\"StepenSS.invalid && (StepenSS.dirty || StepenSS.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"StepenSS.errors.required\">\r\n                    <strong>Stepen stručne spreme je obavezan podatak !!!</strong>\r\n                </div>\r\n                \r\n               </div>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv posla:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"posaoN.Naziv\"  required>\r\n              </label>\r\n              <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Naziv.errors.required\">\r\n                    <strong>Naziv je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Naziv.errors.maxlength\">\r\n                  <strong>Predugački naziv !!!</strong>\r\n                </div>\r\n               </div>\r\n              \r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Škola:\r\n                  <input class=\"form-control\" formControlName=\"Skola\"  [(ngModel)]=\"posaoN.Skola\" >\r\n                </label>\r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Šifra:\r\n                  <input class=\"form-control\" formControlName=\"Sifra\"  [(ngModel)]=\"posaoN.Sifra\" >\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Šifra1:\r\n                  <input class=\"form-control\" formControlName=\"Sifra1\"  [(ngModel)]=\"posaoN.Sifra1\" >\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"posaoN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formPOSAO.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formPOSAO.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/posao/posao-form/posao-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__posao_model__ = __webpack_require__("../../../../../src/app/components/posao/posao.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posao_service__ = __webpack_require__("../../../../../src/app/components/posao/posao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_EnumApp_StepenSS_enum__ = __webpack_require__("../../../../../src/app/shared/EnumApp/StepenSS.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PosaoFormComponent = (function () {
    function PosaoFormComponent(posService, router, route, formBuilder, _location, flashMessage) {
        this.posService = posService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.posaoN = new __WEBPACK_IMPORTED_MODULE_5__posao_model__["a" /* Posao */]();
        this.strSprema = __WEBPACK_IMPORTED_MODULE_7__shared_EnumApp_StepenSS_enum__["a" /* StepenSS */];
        this.saveTemp = true;
        this.formPOSAO = formBuilder.group({
            _id: [],
            StepenSS: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Skola: [],
            Sifra: [],
            Sifra1: [],
            Opis: []
        });
    }
    Object.defineProperty(PosaoFormComponent.prototype, "Naziv", {
        get: function () { return this.formPOSAO.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosaoFormComponent.prototype, "StepenSS", {
        get: function () { return this.formPOSAO.get('StepenSS'); },
        enumerable: true,
        configurable: true
    });
    PosaoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje posla' : 'Novi posao';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.posService.getPosao(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.posaoN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                //  if (error.status == 404) {
                _this.router.navigate(['NotFound']);
                //   }
            });
        });
    };
    PosaoFormComponent.prototype.loadTempData = function () {
        var posao = JSON.parse(localStorage.getItem('data_posao'));
        if (posao) {
            this.posaoN = posao;
        }
    };
    PosaoFormComponent.prototype.setTempData = function () {
        var posValue = JSON.stringify(this.formPOSAO.value);
        if (posValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_posao', posValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    PosaoFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_posao');
    };
    PosaoFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
        //event.stopPropagation();
    };
    PosaoFormComponent.prototype.save = function () {
        var _this = this;
        var result, posValue = this.formPOSAO.value;
        if (posValue._id) {
            this.posService.updatePosao(posValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['posao']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.posService.addPosao(posValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['posao']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    PosaoFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    PosaoFormComponent.prototype.ngOnChanges = function () {
        this.formPOSAO.reset({
            Naziv: "",
            Skola: "",
            Sifra: "",
            Sifra1: "",
            Opis: ""
        });
    };
    PosaoFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return PosaoFormComponent;
}());
PosaoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posao-form',
        template: __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__posao_service__["a" /* PosaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__posao_service__["a" /* PosaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], PosaoFormComponent);

var _a, _b, _c, _d, _e, _f;
//https://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
// <select>
// <option *ngFor="let item of strSprema | keys" [value]="item.key">{{item.value}}</option>
// </select>
//# sourceMappingURL=posao-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posao_component__ = __webpack_require__("../../../../../src/app/components/posao/posao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posao_form_posao_form_component__ = __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var posaoRoutes = [
    { path: 'posao', component: __WEBPACK_IMPORTED_MODULE_3__posao_component__["a" /* PosaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'posao/new', component: __WEBPACK_IMPORTED_MODULE_4__posao_form_posao_form_component__["a" /* PosaoFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'posao/:id', component: __WEBPACK_IMPORTED_MODULE_4__posao_form_posao_form_component__["a" /* PosaoFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var PosaoRoutingModule = (function () {
    function PosaoRoutingModule() {
    }
    return PosaoRoutingModule;
}());
PosaoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(posaoRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], PosaoRoutingModule);

//# sourceMappingURL=posao-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  posao works!\r\n</p> -->\r\n\r\n<div *ngIf=\"poslovi;else  waiting\"  [@routerTransition]>\r\n    \r\n        <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n        </div>\r\n        <p-dataTable [value]=\"poslovi\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                  selectionMode=\"single\" [(selection)]=\"selectedPosao\" dataKey=\"_id\"   \r\n                  styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                  resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n                <p-header><strong>{{Title}}</strong></p-header>       \r\n        <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n        <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n        <p-column field=\"StepenSS\" header=\"Sprema\" sortable=\"true\"></p-column>   \r\n        <p-column field=\"Skola\" header=\"Škola\" sortable=\"true\"></p-column> \r\n        <p-column field=\"Sifra\" header=\"Šifra\" sortable=\"true\"></p-column>\r\n    \r\n        <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n            <ng-template let-pos=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <button type=\"button\" pButton (click)=\"selectPosao(pos)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n                <button type=\"button\" pButton (click)=\"updatePosao(pos._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n                <button type=\"button\" pButton (click)=\"deletePosao(pos)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addPosao()\" label=\"Add\"></button>\r\n              </div>\r\n          </p-footer>\r\n        </p-dataTable>\r\n      </div>\r\n      \r\n      \r\n      \r\n      <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n      \r\n      \r\n      \r\n      <p-dialog header=\"POSAO\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"auto\"  [width]=\"auto\" [height]=\"auto\">\r\n      \r\n              <div>\r\n                      <dl class=\"dl-horizontal\">\r\n                          <dt>\r\n                           ID\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                             {{posShow._id}}\r\n                          </dd>\r\n                          <dt>\r\n                              NAZIV POSLA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                                {{posShow.Naziv}}\r\n                          </dd>\r\n                          <dt>\r\n                              STRUČNA SPREMA\r\n                            </dt>\r\n                            <dd class=\"text-success\">\r\n                                 {{posShow.StepenSS}} \r\n                            </dd>  \r\n                          <dt>\r\n                              ŠKOLA\r\n                            </dt>\r\n                            <dd class=\"text-success\">\r\n                                 {{posShow.Skola}} \r\n                            </dd> \r\n                       \r\n                          <dt>\r\n                           ŠIFRA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.Sifra}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                              ŠIFRA 1\r\n                             </dt>\r\n                             <dd class=\"text-success\">\r\n                                 {{posShow.Sifra1}}\r\n                                 \r\n                             </dd>\r\n                          \r\n                          <dt>\r\n                          OPIS\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.Opis}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          DATUM UNOSA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.created_at}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          DATUM AŽURIRANJA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.updatedAt}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          KORISNIK\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.NameUser}}\r\n                              \r\n                          </dd>\r\n                  \r\n                      </dl>                        \r\n              </div>\r\n              <p-footer>\r\n                      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n             </p-footer>\r\n      </p-dialog>\r\n      \r\n      \r\n      <ng-template #waiting  >\r\n        <div class=\"centerWait\">\r\n        <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        Loading...\r\n        </div>\r\n    </ng-template>\r\n      \r\n    "

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posao_model__ = __webpack_require__("../../../../../src/app/components/posao/posao.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posao_service__ = __webpack_require__("../../../../../src/app/components/posao/posao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PosaoComponent = (function () {
    function PosaoComponent(router, posService, confirmationService, flashMessage) {
        this.router = router;
        this.posService = posService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.posShow = new __WEBPACK_IMPORTED_MODULE_2__posao_model__["a" /* Posao */]();
        this.Title = "PREGLED POSLOVA";
    }
    PosaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.posService.getPoslovi().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.poslovi = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PosaoComponent.prototype.selectPosao = function (work) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        this.posShow = this.cloneData(work);
    };
    PosaoComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_2__posao_model__["a" /* Posao */]();
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    PosaoComponent.prototype.addPosao = function () {
        this.router.navigate(['/posao/new']);
    };
    PosaoComponent.prototype.updatePosao = function (id) {
        this.router.navigate(['/posao/', id]);
    };
    PosaoComponent.prototype.deletePosao = function (tposao) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani posao ?   ",
            header: "" + tposao.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.poslovi.indexOf(tposao);
                // console.log("index je " + index);
                _this.poslovi.splice(index, 1);
                _this.posService.delPosao(tposao._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (err) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show('Could not delete posao !!!', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.poslovi.splice(index, 0, tposao);
                });
            }
        });
    };
    return PosaoComponent;
}());
PosaoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-posao',
        template: __webpack_require__("../../../../../src/app/components/posao/posao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posao/posao.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__posao_service__["a" /* PosaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__posao_service__["a" /* PosaoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], PosaoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=posao.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Posao; });
var Posao = (function () {
    function Posao() {
    }
    return Posao;
}());

//# sourceMappingURL=posao.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posao_component__ = __webpack_require__("../../../../../src/app/components/posao/posao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__posao_form_posao_form_component__ = __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posao_service__ = __webpack_require__("../../../../../src/app/components/posao/posao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posao_routing_module__ = __webpack_require__("../../../../../src/app/components/posao/posao-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PosaoModule = (function () {
    function PosaoModule() {
    }
    return PosaoModule;
}());
PosaoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__posao_routing_module__["a" /* PosaoRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__posao_component__["a" /* PosaoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__posao_form_posao_form_component__["a" /* PosaoFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__posao_service__["a" /* PosaoService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], PosaoModule);

//# sourceMappingURL=posao.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/posao/posao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PosaoService = (function () {
    function PosaoService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev;
    }
    PosaoService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    PosaoService.prototype.getPoslovi = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/posao/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        ;
    };
    PosaoService.prototype.getPosao = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/posao/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PosaoService.prototype.addPosao = function (posao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/posao/');
        return this.http.post(ep, JSON.stringify(posao), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PosaoService.prototype.updatePosao = function (posao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/posao/' + posao._id);
        return this.http.put(ep, JSON.stringify(posao), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PosaoService.prototype.delPosao = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/posao/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    PosaoService.prototype.handleError = function (error) {
        // console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
        var greska = error.status + "  " + error.statusText;
        //return Observable.throw(error.statusText || 'Server error');
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(greska || 'Server error');
    };
    return PosaoService;
}());
PosaoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PosaoService);

var _a;
//# sourceMappingURL=posao.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n      <li class=\"list-group-item\">Email   : {{user.email}}</li>\r\n      <li class=\"list-group-item\">Opis    : {{user.opis}}</li>\r\n      <li class=\"list-group-item\">Datum   : {{user.created_at}}</li>\r\n    </ul>\r\n  </div> \r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-form/radnik-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* \r\n.ng-valid:not(form)  {\r\n    border-left: 5px solid #42A948;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-form/radnik-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  radnik-form works! \r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n              <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formRAD\" (ngSubmit)=\"save()\" novalidate >\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"radnikN._id\"   type=\"hidden\">\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Šifra:\r\n                <input class=\"form-control\" formControlName=\"SifraRad\"  [(ngModel)]=\"radnikN.SifraRad\" required >\r\n              </label>\r\n              \r\n              <div *ngIf=\"SifraRad.invalid && (SifraRad.dirty || SifraRad.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                    <div *ngIf=\"SifraRad.errors.required\">\r\n                        <strong>Šifra je obavezan podatak !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"SifraRad.errors.minlength\">\r\n                      <strong>Šifra mora biti minimalno 4 karaktera dužine !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"SifraRad.errors.maxlength\">\r\n                      <strong>Predugačka šifra !!!</strong>\r\n                    </div>\r\n                    <div *ngIf=\"SifraRad.errors.validateSifru\">\r\n                      <strong>Šifra nije u dobrom formatu, ima nedozvoljene karaktere !!!</strong>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Prezime:\r\n                <input class=\"form-control\" formControlName=\"Prezime\"  [(ngModel)]=\"radnikN.Prezime\" required>\r\n              </label>\r\n              <div *ngIf=\"Prezime.invalid && (Prezime.dirty || Prezime.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Prezime.errors.required\">\r\n                  <strong>Prezime je obavezan podatak !!!</strong>\r\n              </div>\r\n                <div *ngIf=\"Prezime.errors.maxlength\">\r\n                  <strong>Predugačko prezime !!!</strong>\r\n                </div>\r\n              </div>\r\n               <!-- <div class=\"alert alert-danger\" *ngIf=\"!formRAD.controls['Prezime'].valid && formRAD.controls['Prezime'].touched\">Prezime nije uneto</div>  -->\r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Ime:\r\n                <input class=\"form-control\" formControlName=\"Ime\"  [(ngModel)]=\"radnikN.Ime\" required>\r\n              </label>\r\n              <div *ngIf=\"Ime.invalid && (Ime.dirty || Ime.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Ime.errors.required\">\r\n                  <strong>Ime  je obavezan podatak !!!</strong>\r\n              </div>\r\n                <div *ngIf=\"Ime.errors.maxlength\">\r\n                  <strong>Predugačko ime !!!</strong>\r\n                </div>\r\n              </div>\r\n               <!-- <div class=\"alert alert-danger\" *ngIf=\"!formRAD.controls['Ime'].valid && formRAD.controls['Ime'].touched\">Ime nije uneto</div>  -->\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Jmbg:\r\n                  <input class=\"form-control\" formControlName=\"Jmbg\"  [(ngModel)]=\"radnikN.Jmbg\" >\r\n                </label>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"checkbox\">\r\n                  <label class=\"center-block\">\r\n                    <input type=\"checkbox\" formControlName=\"Aktivan\" [(ngModel)]=\"radnikN.Aktivan\"> Aktivan\r\n                  </label>\r\n                  \r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"radnikN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formRAD.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formRAD.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radnik_model__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radnik_service__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { PlatformLocation } from '@angular/common'
var RadnikFormComponent = (function () {
    function RadnikFormComponent(radService, router, route, formBuilder, _location, flashMessage, serValidate) {
        this.radService = radService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.radnikN = new __WEBPACK_IMPORTED_MODULE_5__radnik_model__["a" /* Radnik */]();
        this.saveTemp = true;
        this.formRAD = formBuilder.group({
            _id: [],
            SifraRad: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(12), serValidate.validateRegExpSifru]],
            Ime: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
            Prezime: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
            Jmbg: [],
            Aktivan: [],
            Opis: []
        });
    }
    Object.defineProperty(RadnikFormComponent.prototype, "SifraRad", {
        get: function () { return this.formRAD.get('SifraRad'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadnikFormComponent.prototype, "Ime", {
        get: function () { return this.formRAD.get('Ime'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadnikFormComponent.prototype, "Prezime", {
        get: function () { return this.formRAD.get('Prezime'); },
        enumerable: true,
        configurable: true
    });
    RadnikFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._location.subscribe(x => console.log(x));
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje radnika' : 'Novi radnik';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.radService.getRadnik(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.radnikN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            }, function () {
                console.log("Radnik servic get radnik kraj");
            });
        });
    };
    RadnikFormComponent.prototype.loadTempData = function () {
        var radnik = JSON.parse(localStorage.getItem('data_radnik'));
        if (radnik) {
            this.radnikN = radnik;
        }
    };
    RadnikFormComponent.prototype.setTempData = function () {
        var radValue = JSON.stringify(this.formRAD.value);
        if (radValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_radnik', radValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    RadnikFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_radnik');
    };
    RadnikFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
        //event.stopPropagation();
    };
    RadnikFormComponent.prototype.save = function () {
        var _this = this;
        var result, radValue = this.formRAD.value;
        if (radValue._id) {
            this.radService.updateRadnik(radValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['radnik']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.radService.addRadnik(radValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['radnik']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    RadnikFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    RadnikFormComponent.prototype.ngOnChanges = function () {
        this.formRAD.reset({
            SifraRad: "",
            Ime: "",
            Prezime: "",
            Jmbg: "",
            Aktivan: false,
            Opis: ""
        });
    };
    RadnikFormComponent.prototype.ngOnDestroy = function () {
        this.setTempData();
    };
    return RadnikFormComponent;
}());
RadnikFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radnik-form',
        template: __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__radnik_service__["a" /* RadnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__radnik_service__["a" /* RadnikService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], RadnikFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//   plloc.onPopState(() => {
//             console.log('pressed back!');
// }); 
//# sourceMappingURL=radnik-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radnik_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radnik_form_radnik_form_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var radnikRoutes = [
    { path: 'radnik', component: __WEBPACK_IMPORTED_MODULE_3__radnik_component__["a" /* RadnikComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'radnik/new', component: __WEBPACK_IMPORTED_MODULE_4__radnik_form_radnik_form_component__["a" /* RadnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'radnik/:id', component: __WEBPACK_IMPORTED_MODULE_4__radnik_form_radnik_form_component__["a" /* RadnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];
var RadnikRoutingModule = (function () {
    function RadnikRoutingModule() {
    }
    return RadnikRoutingModule;
}());
RadnikRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(radnikRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], RadnikRoutingModule);

//# sourceMappingURL=radnik-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  videcemo radnik works!\r\n\r\n</p> -->\r\n\r\n<div *ngIf=\"radnici;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"radnici\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedRadnik\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"SifraRad\" header=\"Šifra\" sortable=\"true\"></p-column> \r\n      <p-column field=\"Prezime\" header=\"Prezime\" sortable=\"true\"></p-column>\r\n      <p-column field=\"Ime\" header=\"Ime\" sortable=\"true\"></p-column>   \r\n      <p-column field=\"Aktivan\" header=\"Aktivan\" sortable=\"true\" styleClass=\"text-center\">\r\n        <ng-template let-col let-rad=\"rowData\" pTemplate=\"body\">\r\n            <span [hidden]=\"rad[col.field]==false\">DA</span> \r\n            <span [hidden]=\"rad[col.field]==true\">NE</span> \r\n        </ng-template> \r\n      </p-column>\r\n  \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n          <ng-template let-rad=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectRadnik(rad)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateRadnik(rad._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteRadnik(rad)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addRadnik()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"RADNIK\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{radShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                            ŠIFRA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{radShow.SifraRad}}\r\n                        </dd>\r\n                        <dt>\r\n                            PREZIME\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{radShow.Prezime}} \r\n                          </dd>  \r\n                        <dt>\r\n                            IME\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{radShow.Ime}} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                         JMBG\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.Jmbg}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                           AKTIVAN\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{radShow.Aktivan}}\r\n                               \r\n                           </dd>\r\n                        \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n    <ng-template #waiting  >\r\n        <div class=\"centerWait\">\r\n        <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        Loading...\r\n        </div>\r\n    </ng-template>\r\n    \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radnik_model__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radnik_service__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RadnikComponent = (function () {
    function RadnikComponent(router, radService, confirmationService, flashMessage) {
        this.router = router;
        this.radService = radService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.radShow = new __WEBPACK_IMPORTED_MODULE_2__radnik_model__["a" /* Radnik */]();
        this.Title = "PREGLED RADNIKA";
    }
    RadnikComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.radService.getRadnici().subscribe(function (profile) {
            if (profile.success === true) {
                //console.log(profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.radnici = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RadnikComponent.prototype.selectRadnik = function (work) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        this.radShow = this.cloneData(work);
    };
    RadnikComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_2__radnik_model__["a" /* Radnik */]();
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    RadnikComponent.prototype.addRadnik = function () {
        this.router.navigate(['/radnik/new']);
    };
    RadnikComponent.prototype.updateRadnik = function (id) {
        this.router.navigate(['/radnik/', id]);
    };
    RadnikComponent.prototype.deleteRadnik = function (tradnik) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabranog radnika ?   ",
            header: tradnik.Prezime + " " + tradnik.Ime,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.radnici.indexOf(tradnik);
                // console.log("index je " + index);
                _this.radnici.splice(index, 1);
                _this.radService.delRadnik(tradnik._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show('Radnik removed successfully ...', {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (err) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show('Could not delete radnik !!!', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.radnici.splice(index, 0, tradnik);
                });
            }
        });
    };
    return RadnikComponent;
}());
RadnikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radnik',
        template: __webpack_require__("../../../../../src/app/components/radnik/radnik.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/radnik/radnik.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__radnik_service__["a" /* RadnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__radnik_service__["a" /* RadnikService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RadnikComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=radnik.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Radnik; });
var Radnik = (function () {
    function Radnik() {
    }
    return Radnik;
}());

//# sourceMappingURL=radnik.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radnik_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radnik_form_radnik_form_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radnik_service__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__radnik_routing_module__ = __webpack_require__("../../../../../src/app/components/radnik/radnik-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RadnikModule = (function () {
    function RadnikModule() {
    }
    return RadnikModule;
}());
RadnikModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__radnik_routing_module__["a" /* RadnikRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__radnik_component__["a" /* RadnikComponent */],
            __WEBPACK_IMPORTED_MODULE_5__radnik_form_radnik_form_component__["a" /* RadnikFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__radnik_service__["a" /* RadnikService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], RadnikModule);

//# sourceMappingURL=radnik.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RadnikService = (function () {
    function RadnikService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    RadnikService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    RadnikService.prototype.getRadnici = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik'); //this.prepEndpoint('api/radnik'); 
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.getRadnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.addRadnik = function (radnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/');
        return this.http.post(ep, JSON.stringify(radnik), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RadnikService.prototype.updateRadnik = function (radnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + radnik._id);
        return this.http.put(ep, JSON.stringify(radnik), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.delRadnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    RadnikService.prototype.handleError = function (error) {
        // console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
        var greska = error.status + "  " + error.statusText;
        //return Observable.throw(error.statusText || 'Server error');
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(greska || 'Server error');
    };
    return RadnikService;
}());
RadnikService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], RadnikService);

var _a;
//# sourceMappingURL=radnik.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" >\r\n    <div class=\"panel-heading\">\r\n       \r\n        <div class=\"row\">\r\n            <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n                <h5>{{title}}</h5> \r\n              </div>\r\n              <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n                <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n              </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"formReg\" (ngSubmit)=\"onRegisterSubmit()\" novalidate>\r\n            <div class=\"form-group\" >\r\n                 <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"userN._id\"   type=\"hidden\">\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Ime i prezime:\r\n                  <input class=\"form-control\" formControlName=\"name\"  [(ngModel)]=\"userN.name\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['name'].valid && formReg.controls['name'].touched\">Ime nije uneto</div> \r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Korisničko ime:\r\n                  <input class=\"form-control\" formControlName=\"username\"  [(ngModel)]=\"userN.username\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['username'].valid && formReg.controls['username'].touched\">Korisničko ime nije uneto</div> \r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Email:\r\n                  <input class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"userN.email\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['email'].valid && formReg.controls['email'].touched\">Email nije unet</div> \r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                  <label class=\"center-block\">Lozinka:\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\"  [(ngModel)]=\"userN.password\" >\r\n                  </label>\r\n                   <div class=\"text-danger\" *ngIf=\"!formReg.controls['password'].valid && formReg.controls['password'].touched\">Lozinka nije uneta</div> \r\n                </div>\r\n                \r\n                \r\n                <div class=\"form-group\">\r\n                  <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"userN.Opis\">\r\n                    </textarea>\r\n                  </label>\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                      <div class=\"col-md-offset-5 col-md-12\">\r\n                          <button type=\"submit\" [disabled]=\"!formReg.valid\"\r\n                              class=\"btn btn-default\">\r\n                          <span class=\"glyphicon glyphicon-saved\"></span>\r\n                          Save\r\n                          </button>\r\n  \r\n                        <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formReg.pristine\"  (click)=\"revert()\">\r\n                            <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                            Clear data\r\n                        </button>\r\n                        \r\n                      </div>\r\n                \r\n                      \r\n            </div>\r\n                \r\n  \r\n  \r\n        </form>\r\n    </div>\r\n   \r\n    <div class=\"panel-footer\">\r\n        \r\n            <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n              <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n              Back\r\n          </button>\r\n   \r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n\r\n\r\n<!-- <div class=\"panel panel-info \">\r\n  <div class=\"panel-heading\">\r\n      <h3>Register</h3>\r\n  </div>\r\n<div class=\"panel-body panel-info\">\r\n  <form (submit)=\"onRegisterSubmit()\" >\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"  value=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" value=\"\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-5 col-md-12\">\r\n             <button type=\"submit\" \r\n                 class=\"btn btn-default\">\r\n             <span class=\"glyphicon glyphicon-saved\"></span>\r\n             Submit\r\n             </button>\r\n\r\n        \r\n           \r\n        </div>\r\n    </div>\r\n  \r\n  </form>\r\n</div>\r\n</div>\r\n\r\n -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/components/register/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__ = __webpack_require__("../../../../../src/app/services/auth/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage, formBuilder, _location) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this._location = _location;
        this.userN = new __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* UserModel */]();
        this.formReg = formBuilder.group({
            _id: [],
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            email: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]],
            username: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]],
            password: [],
            Opis: []
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.title = 'Register';
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = this.formReg.value;
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.backClicked = function (event) {
        this._location.back();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]) === "function" && _f || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/telefonvlasnik.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"telefForm\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Naziv</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Naziv\" required>\r\n                 <small [hidden]=\"telefForm.controls.Naziv.valid\" class=\"text-danger\">\r\n                    Naziv je obavezan\r\n                </small> \r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Telefon</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Telefon\" required>\r\n                 <small [hidden]=\"telefForm.controls.Telefon.valid\" class=\"text-danger\">\r\n                        Telefon je obavezan\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"form-group col-md-2\">\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                    <div class=\"checkbox\">\r\n                        <label >\r\n                            <input type=\"checkbox\"  class=\"form-control input-sm\" formControlName=\"Glavni\" >\r\n                            Glavni\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-8\">\r\n                    <label class=\"center-block\">Opis:\r\n                        <textarea class=\"form-control input-sm\" formControlName=\"Opis\">\r\n                    </textarea>\r\n                    </label>\r\n                </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/telefonvlasnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelefonVlasnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TelefonVlasnikComponent = (function () {
    function TelefonVlasnikComponent() {
    }
    return TelefonVlasnikComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], TelefonVlasnikComponent.prototype, "telefForm", void 0);
TelefonVlasnikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'telefonvlasnik',
        template: __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/telefonvlasnik.component.html")
    })
], TelefonVlasnikComponent);

var _a;
//# sourceMappingURL=telefonvlasnik.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  vlasnik-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@formsTransition]>\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n                <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formVlasn\" (ngSubmit)=\"save()\" novalidate >\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"vlasnN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Ime vlasnika:\r\n                  <input class=\"form-control\" formControlName=\"Ime\"  [(ngModel)]=\"vlasnN.Ime\" required >\r\n                </label>\r\n                <div *ngIf=\"Ime.invalid && (Ime.dirty || Ime.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"formVlasn.controls.Ime.errors.required\">\r\n                      <strong>Ime je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Ime.errors.minlength\">\r\n                    <strong>Ime mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Adresa:\r\n                <input class=\"form-control\" formControlName=\"Adresa\"  [(ngModel)]=\"vlasnN.Adresa\" required>\r\n              </label>\r\n              <div *ngIf=\"Adresa.invalid && (Adresa.dirty || Adresa.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"Adresa.errors.required\">\r\n                    <strong>Adresa je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Adresa.errors.minlength\">\r\n                    <strong>Adresa mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Adresa.errors.maxlength\">\r\n                    <strong>Predugačka Adresa !!!</strong>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Mesto:\r\n                <input class=\"form-control\" formControlName=\"Mesto\"  [(ngModel)]=\"vlasnN.Mesto\" required>\r\n              </label>\r\n                <div *ngIf=\"Mesto.invalid && (Mesto.dirty || Mesto.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"Mesto.errors.required\">\r\n                    <strong>Mesto  je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  <div *ngIf=\"Mesto.errors.minlength\">\r\n                    <strong>Mesto mora biti minimalno 2 karaktera dužine !!!</strong>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n                    \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Ptt:\r\n                <input class=\"form-control\" formControlName=\"PttReon\"  [(ngModel)]=\"vlasnN.PttReon\" >\r\n              </label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Ptt reon:\r\n                <input class=\"form-control\" formControlName=\"PttPak\"  [(ngModel)]=\"vlasnN.PttPak\" >\r\n              </label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Direktor:\r\n                <input class=\"form-control\" formControlName=\"Direktor\"  [(ngModel)]=\"vlasnN.Direktor\" >\r\n              </label>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Komercijalni rukovodioc:\r\n                <input class=\"form-control\" formControlName=\"KomRukovac\"  [(ngModel)]=\"vlasnN.KomRukovac\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Blagajnik:\r\n                <input class=\"form-control\" formControlName=\"Blagajnik\"  [(ngModel)]=\"vlasnN.Blagajnik\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Pib:\r\n                <input class=\"form-control\" formControlName=\"Pib\"  [(ngModel)]=\"vlasnN.Pib\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Matični broj:\r\n                <input class=\"form-control\" formControlName=\"MatBroj\"  [(ngModel)]=\"vlasnN.MatBroj\" >\r\n              </label>\r\n          </div>\r\n        \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Šifra delatnosti:\r\n                <input class=\"form-control\" formControlName=\"SifDelat\"  [(ngModel)]=\"vlasnN.SifDelat\" >\r\n              </label>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Pdv broj:\r\n                <input class=\"form-control\" formControlName=\"PdvBroj\"  [(ngModel)]=\"vlasnN.PdvBroj\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Sud:\r\n                <input class=\"form-control\" formControlName=\"Sud\"  [(ngModel)]=\"vlasnN.Sud\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Uplatni račun poreske jedinice:\r\n                <input class=\"form-control\" formControlName=\"UplRacPorJed\"  [(ngModel)]=\"vlasnN.UplRacPorJed\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv poreske jedinice:\r\n                <input class=\"form-control\" formControlName=\"NazPorJed\"  [(ngModel)]=\"vlasnN.NazPorJed\" >\r\n              </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Opis:\r\n                <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"vlasnN.Opis\">\r\n                </textarea>\r\n              </label>\r\n            </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div formArrayName=\"ZiroVlasnik\">\r\n                <div *ngFor=\"let ZiroVlasnik of formVlasn.controls.ZiroVlasnik.controls; let i=index\" class=\"panel panel-info\"> \r\n                    <div class=\"panel-heading\">\r\n                        <span><strong>Ziro racun {{i + 1}} </strong></span>\r\n                        <span class=\"glyphicon glyphicon-remove pull-right\" (click)=\"removeZiroVlas(i)\"></span>\r\n                    </div>\r\n\r\n                    <div [formGroupName]=\"i\" class=\"panel-body\" > \r\n                        <zirovlasnik [groupziro]=\"formVlasn.controls.ZiroVlasnik.controls[i]\"></zirovlasnik>\r\n                    </div>\r\n                </div>\r\n          \r\n                <div class=\"margin-20\" *ngIf=\"formVlasn.controls.ZiroVlasnik.controls.length < 6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-2\">\r\n                      </div>\r\n                      <div class=\" col-xs-10 \">\r\n                          <button type=\"button\" class=\"btn btn-info btn-block\"   (click)=\"addZiroVlas()\" title=\" Add Žiro račun\">\r\n                              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                              Dodaj žiro račun\r\n                          </button>\r\n                         \r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              \r\n            </div>\r\n          </div> \r\n           \r\n          <div class=\"form-group\">\r\n              <div formArrayName=\"TelefVlasnik\">\r\n                  <div *ngFor=\"let TelefVlasnik of formVlasn.controls.TelefVlasnik.controls; let j=index\" class=\"panel panel-info\"> \r\n                      <div class=\"panel-heading\">\r\n                          <span><strong>Telefon {{j + 1}} </strong></span>\r\n                          <span class=\"glyphicon glyphicon-remove pull-right\" (click)=\"removeTelVlas(j)\"></span>\r\n                      </div>\r\n                        <div [formGroupName]=\"j\" class=\"panel-body\" > \r\n                           <telefonvlasnik  [group]=\"formVlasn.controls.TelefVlasnik.controls[j]\"></telefonvlasnik>\r\n                      </div>\r\n                  </div>\r\n            \r\n                  <div class=\"margin-20\" *ngIf=\"formVlasn.controls.TelefVlasnik.controls.length < 10\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-2\">\r\n                        </div>\r\n                        <div class=\" col-xs-10 \">\r\n                           <button type=\"button\" class=\"btn btn-info btn-block\"   (click)=\"addATelVlas()\" title=\" Add Phone\">\r\n                                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                  Dodaj telefon\r\n                              </button>\r\n                          \r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                \r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"clearfix\"></div> \r\n         \r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-5 col-md-12\">\r\n                    <button type=\"submit\" [disabled]=\"!formVlasn.valid\"\r\n                        class=\"btn btn-success\">\r\n                    <span class=\"glyphicon glyphicon-saved\"></span>\r\n                    Save\r\n                    </button>\r\n\r\n                  <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formVlasn.pristine\"  (click)=\"revert()\">\r\n                      <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                      Clear data\r\n                  </button>\r\n                  \r\n                </div>\r\n          </div>\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n\r\n      <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n        <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n        Back\r\n    </button>\r\n\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n<!-- <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n    <small *ngIf=\"!myForm.controls.name.valid\" class=\"text-danger\">\r\n        Name is required (minimum 5 characters).\r\n      </small>\r\n  </div> -->\r\n  <!--addresses-->\r\n  <!-- <div formArrayName=\"addresses\">\r\n    <div *ngFor=\"let address of myForm.controls.addresses.controls; let i=index\" class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <span>Address {{i + 1}}</span>\r\n        <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.addresses.controls.length > 1\" (click)=\"removeAddress(i)\"></span>\r\n      </div>\r\n      <div class=\"panel-body\" [formGroupName]=\"i\">\r\n        <div class=\"form-group col-xs-6\">\r\n          <label>street</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"street\">\r\n          <small [hidden]=\"myForm.controls.addresses.controls[i].controls.street.valid\" class=\"text-danger\">\r\n              Street is required\r\n          </small>\r\n        </div>\r\n        <div class=\"form-group col-xs-6\">\r\n          <label>postcode</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"postcode\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"margin-20\">\r\n    <a (click)=\"addAddress()\" style=\"cursor: default\">\r\n      Add another address +\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"margin-20\">\r\n    <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\r\n  </div>\r\n  <div class=\"clearfix\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__ = __webpack_require__("../../../../../src/app/animation/forms.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vlasnik_model__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
// https://stackoverflow.com/questions/42968619/angular-2-how-to-use-array-of-objects-for-controls-in-reactive-forms
// https://github.com/scotch-io/angular2-forms-course
var VlasnikFormComponent = (function () {
    function VlasnikFormComponent(vlasnService, router, route, _fb, _location, flashMessage, serValidate) {
        this.vlasnService = vlasnService;
        this.router = router;
        this.route = route;
        this._fb = _fb;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.vlasnN = new __WEBPACK_IMPORTED_MODULE_6__vlasnik_model__["a" /* VlasnikModel */]();
        this.formVlasn = this._fb.group({
            _id: [],
            Ime: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2)
                ]],
            Adresa: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)]],
            Mesto: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2)]],
            PttReon: [''],
            PttPak: [''],
            Direktor: [''],
            KomRukovac: [''],
            Blagajnik: [''],
            Pib: [''],
            MatBroj: [''],
            SifDelat: [''],
            PdvBroj: [''],
            Slika: [''],
            Sud: [''],
            UplRacPorJed: [''],
            NazPorJed: [''],
            ZiroVlasnik: this._fb.array([]),
            TelefVlasnik: this._fb.array([]),
            Opis: ['']
        });
    }
    Object.defineProperty(VlasnikFormComponent.prototype, "Ime", {
        get: function () { return this.formVlasn.get('Ime'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VlasnikFormComponent.prototype, "Adresa", {
        get: function () { return this.formVlasn.get('Adresa'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VlasnikFormComponent.prototype, "Mesto", {
        get: function () { return this.formVlasn.get('Mesto'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VlasnikFormComponent.prototype, "TelefVlasnik", {
        get: function () { return this.formVlasn.get('TelefVlasnik'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VlasnikFormComponent.prototype, "ZiroVlasnik", {
        get: function () { return this.formVlasn.get('ZiroVlasnik'); },
        enumerable: true,
        configurable: true
    });
    VlasnikFormComponent.prototype.initDataZiro = function () {
        for (var _i = 0, _a = this.vlasnN.ZiroVlasnik; _i < _a.length; _i++) {
            var ziroitem = _a[_i];
            var control = this.formVlasn.controls['ZiroVlasnik'];
            control.push(this.initZiroVlas(ziroitem.Naziv, ziroitem.Racun, ziroitem.Glavni, ziroitem.Opis));
        }
    };
    // Ziro racun vlasnika
    VlasnikFormComponent.prototype.initZiroVlas = function (tNaziv, tRacun, tGlavni, tOpis) {
        return this._fb.group({
            Naziv: [tNaziv, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Racun: [tRacun, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Glavni: [tGlavni],
            Opis: [tOpis]
        });
    };
    VlasnikFormComponent.prototype.addZiroVlas = function () {
        var control = this.formVlasn.controls['ZiroVlasnik'];
        control.push(this.initZiroVlas('', '', false, ''));
    };
    VlasnikFormComponent.prototype.removeZiroVlas = function (i) {
        var control = this.formVlasn.controls['ZiroVlasnik'];
        control.removeAt(i);
    };
    // Kraj ziro racuna
    // Telefon
    VlasnikFormComponent.prototype.initDataTelef = function () {
        for (var _i = 0, _a = this.vlasnN.TelefVlasnik; _i < _a.length; _i++) {
            var telitem = _a[_i];
            var control = this.formVlasn.controls['TelefVlasnik'];
            control.push(this.initTelVlas(telitem.Naziv, telitem.Telefon, telitem.Glavni, telitem.Opis));
        }
    };
    VlasnikFormComponent.prototype.initTelVlas = function (tNaziv, tTelefon, tGlavni, tOpis) {
        return this._fb.group({
            Naziv: [tNaziv, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Telefon: [tTelefon, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Glavni: [tGlavni],
            Opis: [tOpis]
        });
    };
    VlasnikFormComponent.prototype.addATelVlas = function () {
        var control = this.formVlasn.controls['TelefVlasnik'];
        control.push(this.initTelVlas('', '', false, ''));
    };
    VlasnikFormComponent.prototype.removeTelVlas = function (i) {
        var control = this.formVlasn.controls['TelefVlasnik'];
        control.removeAt(i);
    };
    // Kraj telefona
    VlasnikFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje vlasnika' : 'Novi vlasnik';
            if (!id) {
                return;
            }
            _this.vlasnService.getVlasnik(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.vlasnN = pos.data[0];
                    // console.log(JSON.stringify(this.vlasnN ));
                    _this.initDataZiro();
                    _this.initDataTelef();
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    VlasnikFormComponent.prototype.save = function () {
        var _this = this;
        var FormValue = this.formVlasn.value;
        if (FormValue._id) {
            this.vlasnService.updateVlasnik(FormValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['vlasnik']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.vlasnService.addVlasnik(FormValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['vlasnik']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    VlasnikFormComponent.prototype.backClicked = function (event) {
        this._location.back();
    };
    VlasnikFormComponent.prototype.revert = function () { this.clearData(); };
    VlasnikFormComponent.prototype.clearData = function () {
        this.formVlasn.reset({
            Ime: '',
            Adresa: '',
            Mesto: '',
            PttReon: '',
            PttPak: '',
            Direktor: '',
            KomRukovac: '',
            Blagajnik: '',
            Pib: '',
            MatBroj: '',
            SifDelat: '',
            PdvBroj: '',
            Slika: '',
            Sud: '',
            UplRacPorJed: '',
            NazPorJed: '',
            ZiroVlasnik: null,
            TelefVlasnik: null,
            Opis: ''
        });
    };
    return VlasnikFormComponent;
}());
VlasnikFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.html"),
        selector: 'app-vlasnik-form',
        styles: [__webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_forms_animations__["a" /* formsTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__["a" /* VlasnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__["a" /* VlasnikService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], VlasnikFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=vlasnik-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/zirovlasnik.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"ziroForm\">\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-2\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n            <label>Naziv</label>\r\n            <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Naziv\" required>\r\n            <small [hidden]=\"ziroForm.controls.Naziv.valid\" class=\"text-danger\">\r\n                Naziv je obavezan\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n            <label>Racun</label>\r\n            <input type=\"text\" class=\"form-control input-sm\" formControlName=\"Racun\" required>\r\n            <small [hidden]=\"ziroForm.controls.Racun.valid\" class=\"text-danger\">\r\n                   Racun je obavezan\r\n            </small>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n            <div class=\"form-group col-md-2\">\r\n            </div>\r\n            <div class=\"form-group col-md-2\">\r\n                <div class=\"checkbox\">\r\n                    <label >\r\n                        <input type=\"checkbox\"  class=\"form-control input-sm\" formControlName=\"Glavni\" >\r\n                        Glavni\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col-md-8\">\r\n                <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control input-sm\" formControlName=\"Opis\">\r\n                </textarea>\r\n                </label>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-form/zirovlasnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZiroVlasnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZiroVlasnikComponent = (function () {
    function ZiroVlasnikComponent() {
    }
    return ZiroVlasnikComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('groupziro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], ZiroVlasnikComponent.prototype, "ziroForm", void 0);
ZiroVlasnikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'zirovlasnik',
        template: __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/zirovlasnik.component.html")
    })
], ZiroVlasnikComponent);

var _a;
//# sourceMappingURL=zirovlasnik.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TelefVlasnikModel */
/* unused harmony export ZiroVlasnikModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikModel; });
var TelefVlasnikModel = (function () {
    function TelefVlasnikModel() {
    }
    return TelefVlasnikModel;
}());

var ZiroVlasnikModel = (function () {
    function ZiroVlasnikModel() {
    }
    return ZiroVlasnikModel;
}());

var VlasnikModel = (function () {
    function VlasnikModel() {
    }
    return VlasnikModel;
}());

//# sourceMappingURL=vlasnik-model.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vlasnik_form_vlasnik_form_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var vlasnikRoutes = [
    { path: 'vlasnik', component: __WEBPACK_IMPORTED_MODULE_3__vlasnik_component__["a" /* VlasnikComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vlasnik/new', component: __WEBPACK_IMPORTED_MODULE_4__vlasnik_form_vlasnik_form_component__["a" /* VlasnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vlasnik/:id', component: __WEBPACK_IMPORTED_MODULE_4__vlasnik_form_vlasnik_form_component__["a" /* VlasnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];
var VlasnikRoutingModule = (function () {
    function VlasnikRoutingModule() {
    }
    return VlasnikRoutingModule;
}());
VlasnikRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(vlasnikRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], VlasnikRoutingModule);

//# sourceMappingURL=vlasnik-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  vlasnik works!\r\n</p> -->\r\n\r\n<div *ngIf=\"vlasnL;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"vlasnL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedVlasn\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n      <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Ime\" header=\"Ime\"  ></p-column>\r\n      <p-column field=\"Adresa\" header=\"Adresa\"    ></p-column> \r\n      <p-column field=\"Mesto\" header=\"Mesto\"  ></p-column>   \r\n      <p-column field=\"Direktor\" header=\"Direktor\"   ></p-column>\r\n      <p-column field=\"Pib\" header=\"Pib\"  ></p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n       \r\n          <ng-template let-vlasn=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\r\n\r\n              <button type=\"button\" pButton (click)=\"selectItem(vlasn)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateVasnik(vlasn._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteVlasnik(vlasn)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n       <!-- <p-footer *ngIf=\"vlasnL.length == 0\">\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"vlasnL()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer> -->\r\n\r\n        <ng-template pTemplate=\"emptymessage\">\r\n          <!-- Custom content goes here -->\r\n          <div class=\"row\">\r\n               <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\r\n                  <div class=\"hidden-xs dtempty_message_h1\">\r\n                     Još niste kreirali podatak.\r\n                  </div>\r\n                  \r\n                  <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\r\n                  <br/>\r\n                  <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \r\n                 <h3 class=\" hidden-xs dtempty_message\" >\r\n                      Da biste ručno dodali podatak kliknite: \r\n                      <a  class=\"dtempty_message_text\" (click)=\"addVlasnik()\">\r\n                           Kreiraj podatak\r\n                      </a>\r\n                  </h3>\r\n\r\n                  <h5 class=\"visible-xs\" >\r\n                     Da biste ručno dodali podatak kliknite : \r\n                      <a   (click)=\"addVlasnik()\">\r\n                          Kreiraj podatak\r\n                      </a>\r\n                  </h5>\r\n\r\n              </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n         </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    <p-dialog header=\"VLASNIK\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{vlasnShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                          IME\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                             {{vlasnShow.Ime}} \r\n                        </dd>\r\n                        <dt>\r\n                          Adresa\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{vlasnShow.Adresa}}\r\n                        </dd>\r\n                          \r\n                        <dt>\r\n                          Mesto\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{vlasnShow.Mesto}} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                          PttReon\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{vlasnShow.PttReon}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                          Direktor\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{vlasnShow.Direktor}}\r\n                               \r\n                           </dd>\r\n                      \r\n                        <dt>\r\n                          Pib\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{vlasnShow.Pib}}\r\n                               \r\n                           </dd>\r\n\r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{vlasnShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{vlasnShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{vlasnShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{vlasnShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n \r\n<ng-template #waiting  >\r\n    <div class=\"centerWait\">\r\n    <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    Loading...\r\n    </div>\r\n</ng-template>\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vlasnik_model__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VlasnikComponent = (function () {
    function VlasnikComponent(router, vlasnService, confirmationService, flashMessage) {
        this.router = router;
        this.vlasnService = vlasnService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.vlasnShow = new __WEBPACK_IMPORTED_MODULE_6__vlasnik_model__["a" /* VlasnikModel */]();
        this.Title = "PREGLED VLASNIKA";
    }
    VlasnikComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vlasnService.getVlasn()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.vlasnL = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            console.log(error.message);
            _this.vlasnL = [];
            return false;
        });
    };
    VlasnikComponent.prototype.selectItem = function (work) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        this.vlasnShow = this.cloneData(work);
    };
    VlasnikComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_6__vlasnik_model__["a" /* VlasnikModel */]();
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    VlasnikComponent.prototype.addVlasnik = function () {
        this.router.navigate(['/vlasnik/new']);
    };
    VlasnikComponent.prototype.updateVasnik = function (id) {
        this.router.navigate(['/vlasnik/', id]);
    };
    VlasnikComponent.prototype.deleteVlasnik = function (tvlasn) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ?   ",
            header: "" + tvlasn.Ime,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.vlasnL.indexOf(tvlasn);
                // console.log("index je " + index);
                _this.vlasnL.splice(index, 1);
                _this.vlasnService.delVlasnik(tvlasn._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.vlasnL.splice(index, 0, tvlasn);
                });
            }
        });
    };
    return VlasnikComponent;
}());
VlasnikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vlasnik',
        template: __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__["a" /* VlasnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__vlasnik_service__["a" /* VlasnikService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], VlasnikComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vlasnik.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vlasnik_form_vlasnik_form_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/vlasnik-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vlasnik_service__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vlasnik_routing_module__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vlasnik_form_zirovlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/zirovlasnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vlasnik_form_telefonvlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik-form/telefonvlasnik.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var VlasnikModule = (function () {
    function VlasnikModule() {
    }
    return VlasnikModule;
}());
VlasnikModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__vlasnik_routing_module__["a" /* VlasnikRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__vlasnik_component__["a" /* VlasnikComponent */],
            __WEBPACK_IMPORTED_MODULE_5__vlasnik_form_vlasnik_form_component__["a" /* VlasnikFormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__vlasnik_form_zirovlasnik_component__["a" /* ZiroVlasnikComponent */],
            __WEBPACK_IMPORTED_MODULE_9__vlasnik_form_telefonvlasnik_component__["a" /* TelefonVlasnikComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__vlasnik_service__["a" /* VlasnikService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], VlasnikModule);

//# sourceMappingURL=vlasnik.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var VlasnikService = (function () {
    function VlasnikService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    VlasnikService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    VlasnikService.prototype.getVlasn = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.getVlasnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.addVlasnik = function (vlasn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/');
        return this.http.post(ep, JSON.stringify(vlasn), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    VlasnikService.prototype.updateVlasnik = function (vlasn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + vlasn._id);
        return this.http.put(ep, JSON.stringify(vlasn), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.delVlasnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return VlasnikService;
}());
VlasnikService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], VlasnikService);

var _a;
//# sourceMappingURL=vlasnik.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  zadrugar-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZadrugarFormComponent = (function () {
    function ZadrugarFormComponent() {
    }
    ZadrugarFormComponent.prototype.ngOnInit = function () {
    };
    return ZadrugarFormComponent;
}());
ZadrugarFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zadrugar-form',
        template: __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ZadrugarFormComponent);

//# sourceMappingURL=zadrugar-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ZDAdresaModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarModel; });
var ZDAdresaModel = (function () {
    function ZDAdresaModel() {
    }
    return ZDAdresaModel;
}());

var ZadrugarModel = (function () {
    function ZadrugarModel() {
    }
    return ZadrugarModel;
}());

//# sourceMappingURL=zadrugar-model.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zadrugar_component__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zadrugar_form_zadrugar_form_component__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var zadrRoutes = [
    { path: 'zadrugar', component: __WEBPACK_IMPORTED_MODULE_3__zadrugar_component__["a" /* ZadrugarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'zadrugar/new', component: __WEBPACK_IMPORTED_MODULE_4__zadrugar_form_zadrugar_form_component__["a" /* ZadrugarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'zadrugar/:id', component: __WEBPACK_IMPORTED_MODULE_4__zadrugar_form_zadrugar_form_component__["a" /* ZadrugarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
];
var ZadrugarRoutingModule = (function () {
    function ZadrugarRoutingModule() {
    }
    return ZadrugarRoutingModule;
}());
ZadrugarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(zadrRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], ZadrugarRoutingModule);

//# sourceMappingURL=zadrugar-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  zadrugar works!\n</p> -->\n\n<div *ngIf=\"zadrL;else  waiting\"  [@routerTransition]>\n\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\n    </div>\n    <p-dataTable [value]=\"zadrL\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\n              selectionMode=\"single\" [(selection)]=\"selectedZadrugar\" dataKey=\"_id\"   \n              styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \n              resizableColumns=\"true\" columnResizeMode=\"expand\">\n\n    <p-header><strong>{{Title}}</strong></p-header>       \n    <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \n    <p-column field=\"IDZadrugar\" header=\"Šifra\" ></p-column>\n    <p-column field=\"Ime\" header=\"Ime\"  ></p-column>\n    <p-column field=\"Prezime\" header=\"Prezime\"  ></p-column>\n    <p-column field=\"DatRodjenja\" header=\"Datum rodj.\"   styleClass=\"text-right\" >\n          <ng-template let-col let-zadr=\"rowData\" pTemplate=\"body\">\n                  <span>{{zadr[col.field] | date}}</span>\n          </ng-template> \n    </p-column> \n    <p-column field=\"TipZadrugar\" header=\"Tip\" ></p-column>\n    <p-column field=\"ZadEmail\" header=\"ZadEmail\" ></p-column>\n    <p-column field=\"Jmbg\" header=\"Jmbg\"  ></p-column>\n    \n    <p-column field=\"Aktivan\" header=\"Aktivan\"   styleClass=\"text-center\" >\n      <ng-template let-col let-partn=\"rowData\" pTemplate=\"body\">\n              <span [hidden]=\"partn[col.field]==false\">DA</span> \n              <span [hidden]=\"partn[col.field]==true\">NE</span> \n              \n      </ng-template> \n    </p-column>\n    \n    <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\n     \n        <ng-template let-zadr=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\" >\n\n            <button type=\"button\" pButton (click)=\"selectItem(zadr)\" icon=\"fa fa-info\" title=\"Info\"></button>\n            <button type=\"button\" pButton (click)=\"updateZadrugar(zadr._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\n            <button type=\"button\" pButton (click)=\"deleteZadrugar(zadr)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\n        </ng-template>\n    </p-column>\n     <p-footer *ngIf=\"zadrL.length > 0\">\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n            <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addZadrugar()\" label=\"Add\"></button>\n          </div>\n      </p-footer>\n\n      <ng-template pTemplate=\"emptymessage\">\n          <!-- Custom content goes here -->\n          <div class=\"row\">\n               <div class=\"text-center col-lg-12 col-md-12 col-xs-12\">\n                  <div class=\"hidden-xs dtempty_message_h1\">\n                      Još niste kreirali podatak.\n                  </div>\n                  <h4 class=\"visible-xs\">Još niste kreirali podatak.</h4>\n                  <br/>\n                  <i class=\"fa fa-info fa-5x cursorpointer\" aria-hidden=\"true\"></i> \n                  <h3 class=\" hidden-xs dtempty_message\" >\n                      <!-- To manually add new one click here: -->\n                      Da biste ručno dodali podatak kliknite: \n                      <a  class=\"dtempty_message_text\" (click)=\"addZadrugar()\">\n                           Kreiraj podatak\n                      </a>\n                  </h3>\n\n                  <h5 class=\"visible-xs\" >\n                      <!-- To manually add new one click here: -->\n                      Da biste ručno dodali podatak kliknite : \n                      <a   (click)=\"addZadrugar()\">\n                           Kreiraj podatak\n                      </a>\n                  </h5>\n\n              </div>\n          </div>\n      </ng-template>\n\n    </p-dataTable>\n  </div>\n  \n  \n  \n  <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\" #cd>\n      <p-footer>\n          <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\n          <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\n       </p-footer>\n  </p-confirmDialog>\n  \n  \n  <p-dialog header=\"ZADRUGAR\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\" >\n  \n          <div>\n                  <dl class=\"dl-horizontal\">\n                      <dt>\n                        ID\n                      </dt>\n                      <dd class=\"text-success\">\n                         {{zadrShow._id}}\n                      </dd>\n                      <dt>\n                        ŠIFRA \n                        </dt>\n                        <dd class=\"text-success\">\n                        {{zadrShow.IDZadrugar}} \n                        </dd>\n\n                      <dt>\n                      IME\n                      </dt>\n                      <dd class=\"text-success\">\n                      {{zadrShow.Ime}} \n                      </dd>\n                      <dt>\n                     PREZIME\n                      </dt>\n                      <dd class=\"text-success\">\n                          {{zadrShow.Prezime}}\n                      </dd>\n                   \n                      <dt>\n                      OPIS\n                      </dt>\n                      <dd class=\"text-success\">\n                          {{zadrShow.Opis}}\n                          \n                      </dd>\n                      <dt>\n                      DATUM UNOSA\n                      </dt>\n                      <dd class=\"text-success\">\n                          {{zadrShow.created_at}}\n                          \n                      </dd>\n                      <dt>\n                      DATUM AŽURIRANJA\n                      </dt>\n                      <dd class=\"text-success\">\n                          {{zadrShow.updatedAt}}\n                          \n                      </dd>\n                      <dt>\n                      KORISNIK\n                      </dt>\n                      <dd class=\"text-success\">\n                          {{zadrShow.NameUser}}\n                          \n                      </dd>\n              \n                  </dl>                        \n          </div>\n          <p-footer> \n           \n          <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\n          \n         </p-footer>\n  </p-dialog>\n  \n  \n\n<ng-template #waiting  >\n  <div class=\"centerWait\">\n  <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n  Loading...\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zadrugar_service__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zadrugar_model__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZadrugarComponent = (function () {
    function ZadrugarComponent(router, zadrService, confirmationService, flashMessage) {
        this.router = router;
        this.zadrService = zadrService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.zadrShow = new __WEBPACK_IMPORTED_MODULE_5__zadrugar_model__["a" /* ZadrugarModel */]();
        this.Title = 'PREGLED ZADRUGARA';
    }
    ZadrugarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zadrService.getZadrugari()
            .subscribe(function (profile) {
            if (profile.success === true) {
                _this.zadrL = profile.data;
            }
            // }
        }, function (error) {
            _this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 9000
            });
            //  console.log(error.message);
            _this.zadrL = [];
            return false;
        });
    };
    ZadrugarComponent.prototype.selectItem = function (work) {
        this.displayDetals = true;
        this.zadrShow = this.cloneData(work);
    };
    ZadrugarComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_5__zadrugar_model__["a" /* ZadrugarModel */]();
        // tslint:disable-next-line:forin
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    ZadrugarComponent.prototype.addZadrugar = function () {
        this.router.navigate(['/zadrugar/new']);
    };
    ZadrugarComponent.prototype.updateZadrugar = function (id) {
        this.router.navigate(['/zadrugar/', id]);
    };
    ZadrugarComponent.prototype.deleteZadrugar = function (tzadrugar) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eelite uklonite izabrani podatak ? ",
            header: tzadrugar.Ime + "  " + tzadrugar.Prezime,
            accept: function () {
                var index = _this.zadrL.indexOf(tzadrugar);
                // console.log("index je " + index);
                _this.zadrL.splice(index, 1);
                _this.zadrService.delZadrugar(tzadrugar._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show(pos.message, {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (error) {
                    _this.flashMessage.show(error.message, {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.zadrL.splice(index, 0, tzadrugar);
                });
            }
        });
    };
    return ZadrugarComponent;
}());
ZadrugarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zadrugar',
        template: __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__zadrugar_service__["a" /* ZadrugarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__zadrugar_service__["a" /* ZadrugarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ZadrugarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=zadrugar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zadrugar_component__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zadrugar_form_zadrugar_form_component__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-form/zadrugar-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zadrugar_service__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__zadrugar_routing_module__ = __webpack_require__("../../../../../src/app/components/zadrugar/zadrugar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ZadrugarModule = (function () {
    function ZadrugarModule() {
    }
    return ZadrugarModule;
}());
ZadrugarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7__zadrugar_routing_module__["a" /* ZadrugarRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__zadrugar_component__["a" /* ZadrugarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__zadrugar_form_zadrugar_form_component__["a" /* ZadrugarFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__zadrugar_service__["a" /* ZadrugarService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], ZadrugarModule);

//# sourceMappingURL=zadrugar.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/zadrugar/zadrugar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZadrugarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__ = __webpack_require__("../../../../../src/app/shared/models/ErrorRes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ZadrugarService = (function () {
    function ZadrugarService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    ZadrugarService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ZadrugarService.prototype.getZadrugari = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zadrugar');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZadrugarService.prototype.getZadrugar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zadrugar/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZadrugarService.prototype.addZadrugar = function (tzadrugar) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zadrugar/');
        return this.http.post(ep, JSON.stringify(tzadrugar), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ZadrugarService.prototype.updateZadrugar = function (tzadrugar) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zadrugar/' + tzadrugar._id);
        return this.http.put(ep, JSON.stringify(tzadrugar), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZadrugarService.prototype.delZadrugar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zadrugar/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZadrugarService.prototype.handleError = function (error) {
        var myerror = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]().fromJSON(error.json());
        var servererr = new __WEBPACK_IMPORTED_MODULE_8__shared_models_ErrorRes__["a" /* ResponeCustom */]();
        servererr.message = 'Server error';
        servererr.success = false;
        servererr.data = [];
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(myerror || servererr);
    };
    return ZadrugarService;
}());
ZadrugarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ZadrugarService);

var _a;
//# sourceMappingURL=zadrugar.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  zanimanja-form works!\r\n</p> -->\r\n<div class=\"panel panel-primary\" [@routerTransition]>\r\n  <div class=\"panel-heading\">\r\n      <div class=\"row\">\r\n          <div class=\"text-left col-lg-9 col-md-9 col-xs-9\">\r\n              <h5>{{title}}</h5> \r\n            </div>\r\n            <div class=\"text-right col-lg-3 col-md-3 col-xs-3 \">\r\n              <i class=\"fa fa-times cursorpointer pull-right\" aria-hidden=\"true\" (click)=\"backClicked()\"></i>\r\n            </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formZAN\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"zanimN._id\"   type=\"hidden\">\r\n          </div>\r\n      \r\n            \r\n          <div class=\"form-group\">\r\n            <label class=\"center-block\">Šifra:\r\n              <input class=\"form-control\" formControlName=\"Sifra\"  [(ngModel)]=\"zanimN.Sifra\" required >\r\n            </label>\r\n            <!-- <div class=\"text-danger\" *ngIf=\"!formZAN.controls['Sifra'].valid && formZAN.controls['Sifra'].touched\">Obavezno</div>  -->\r\n\r\n            <div *ngIf=\"Sifra.invalid && (Sifra.dirty || Sifra.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Sifra.errors.required\">\r\n                    <strong>Šifra je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Sifra.errors.minlength\">\r\n                  <strong>Šifra mora biti minimalno 4 karaktera dužine !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Sifra.errors.maxlength\">\r\n                  <strong>Predugačka šifra !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Sifra.errors.validateSifru\">\r\n                  <strong>Šifra nije u dobrom formatu, ima nedozvoljene karaktere !!!</strong>\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv zanimanja:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"zanimN.Naziv\"  required>\r\n              </label>\r\n               <!-- <div class=\"text-danger\" *ngIf=\"!formZAN.controls['Naziv'].valid && formZAN.controls['Naziv'].touched\">Obavezno</div>  -->\r\n               <div *ngIf=\"Naziv.invalid && (Naziv.dirty || Naziv.touched)\" class=\"alert alert-danger\">\r\n                <div *ngIf=\"Naziv.errors.required\">\r\n                    <strong>Naziv je obavezan podatak !!!</strong>\r\n                </div>\r\n                <div *ngIf=\"Naziv.errors.maxlength\">\r\n                  <strong>Predugački naziv !!!</strong>\r\n                </div>\r\n               </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Stručna sprema:\r\n                <select  formControlName=\"StepenSS\" class=\"form-control\"  [(ngModel)]=\"zanimN.StepenSS\"  required>\r\n                  <option *ngFor=\"let list of strSprema\" [value]=\"list\">\r\n                    {{ list }}\r\n                  </option>\r\n                </select>\r\n                <!-- <div class=\"text-danger\" *ngIf=\"!formZAN.controls['StepenSS'].valid && formZAN.controls['StepenSS'].touched\">Obavezno</div>  -->\r\n\r\n                <div *ngIf=\"StepenSS.invalid && (StepenSS.dirty || StepenSS.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"StepenSS.errors.required\">\r\n                      <strong>Stepen stručne spreme je obavezan podatak !!!</strong>\r\n                  </div>\r\n                  \r\n                 </div>\r\n\r\n              </label>\r\n          </div>\r\n         \r\n          <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"zanimN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formZAN.valid\"\r\n                            class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formZAN.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Clear data\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zanimanja_model__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zanimanja_service__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_EnumApp_StepenSS_enum__ = __webpack_require__("../../../../../src/app/shared/EnumApp/StepenSS.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__ = __webpack_require__("../../../../../src/app/services/service.validate.shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ZanimanjaFormComponent = (function () {
    function ZanimanjaFormComponent(zanService, router, route, formBuilder, _location, flashMessage, serValidate) {
        this.zanService = zanService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.serValidate = serValidate;
        this.zanimN = new __WEBPACK_IMPORTED_MODULE_5__zanimanja_model__["a" /* ZanimanjaModel */]();
        this.strSprema = __WEBPACK_IMPORTED_MODULE_8__shared_EnumApp_StepenSS_enum__["a" /* StepenSS */];
        this.saveTemp = true;
        this.formZAN = formBuilder.group({
            _id: [],
            Sifra: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(4), serValidate.validateRegExpSifru]],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(100)
                ]],
            StepenSS: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Opis: []
        });
    }
    Object.defineProperty(ZanimanjaFormComponent.prototype, "Sifra", {
        get: function () { return this.formZAN.get('Sifra'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZanimanjaFormComponent.prototype, "Naziv", {
        get: function () { return this.formZAN.get('Naziv'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZanimanjaFormComponent.prototype, "StepenSS", {
        get: function () { return this.formZAN.get('StepenSS'); },
        enumerable: true,
        configurable: true
    });
    ZanimanjaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažuriranje zanimanja' : 'Novo zanimanje';
            if (!id) {
                _this.loadTempData();
                return;
            }
            _this.zanService.getZanimanje(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.saveTemp = false;
                    _this.zanimN = pos.data[0];
                }
                else {
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-danger',
                        timeout: 9000
                    });
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                // if (error == 404 || error.status == 400 ) {
                _this.router.navigate(['NotFound']);
                // }
            });
        });
    };
    ZanimanjaFormComponent.prototype.backClicked = function (event) {
        this.setTempData();
        this._location.back();
    };
    ZanimanjaFormComponent.prototype.save = function () {
        var _this = this;
        var zanValue = this.formZAN.value;
        if (zanValue._id) {
            this.zanService.updateZanimanje(zanValue).subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    // this.flashMessage.grayOut(true);
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'btn-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['zanimanja']);
                    // this.flashMessage.grayOut(false);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
        else {
            this.zanService.addZanimanje(zanValue)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.clearTempData();
                    _this.saveTemp = false;
                    _this.flashMessage.show(pos.message, {
                        cssClass: 'alert-success',
                        timeout: 5000
                    });
                    _this.router.navigate(['zanimanja']);
                }
                else {
                    _this.router.navigate(['NotFound']);
                }
            }, function (error) {
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
            });
        }
    };
    ZanimanjaFormComponent.prototype.loadTempData = function () {
        var zanim = JSON.parse(localStorage.getItem('data_zanim'));
        if (zanim) {
            this.zanimN = zanim;
        }
    };
    ZanimanjaFormComponent.prototype.setTempData = function () {
        var radValue = JSON.stringify(this.formZAN.value);
        if (radValue) {
            if (this.saveTemp) {
                localStorage.setItem('data_zanim', radValue);
            }
            else {
                this.clearTempData();
            }
        }
    };
    ZanimanjaFormComponent.prototype.clearTempData = function () {
        localStorage.removeItem('data_zanim');
    };
    ZanimanjaFormComponent.prototype.ngOnDestroy = function () {
        // console.log("radnik destroy");
        this.setTempData();
    };
    ZanimanjaFormComponent.prototype.revert = function () { this.clearData(); };
    ZanimanjaFormComponent.prototype.clearData = function () {
        this.formZAN.reset({
            Sifra: '',
            Naziv: '',
            StepenSS: '',
            Opis: ''
        });
    };
    return ZanimanjaFormComponent;
}());
ZanimanjaFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zanimanja-form',
        template: __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__zanimanja_service__["a" /* ZanimanjaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__zanimanja_service__["a" /* ZanimanjaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__["a" /* ServiceValidateShared */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_service_validate_shared__["a" /* ServiceValidateShared */]) === "function" && _g || Object])
], ZanimanjaFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=zanimanja-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zanimanja_component__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zanimanja_form_zanimanja_form_component__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var zanimanjaRoutes = [
    { path: 'zanimanja', component: __WEBPACK_IMPORTED_MODULE_3__zanimanja_component__["a" /* ZanimanjaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'zanimanja/new', component: __WEBPACK_IMPORTED_MODULE_4__zanimanja_form_zanimanja_form_component__["a" /* ZanimanjaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'zanimanja/:id', component: __WEBPACK_IMPORTED_MODULE_4__zanimanja_form_zanimanja_form_component__["a" /* ZanimanjaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] }
];
var ZanimanjaRoutingModule = (function () {
    function ZanimanjaRoutingModule() {
    }
    return ZanimanjaRoutingModule;
}());
ZanimanjaRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(zanimanjaRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ]
    })
], ZanimanjaRoutingModule);

//# sourceMappingURL=zanimanja-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  zanimanja works!\r\n</p> -->\r\n\r\n <div *ngIf=\"zanimanja;else  waiting\"  [@routerTransition]>\r\n  \r\n     <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i> \r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"zanimanja\"  [globalFilter]=\"gb\"  [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedZan\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n              <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Sifra\" header=\"Šifra\" sortable=\"true\"></p-column> \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n      <p-column field=\"StepenSS\" header=\"StepenSS\" sortable=\"true\"></p-column>   \r\n        \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n          <ng-template let-zan=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectPosao(zan)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateZanimanja(zan._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteZanimanje(zan)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addZnimanja()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n   \r\n    \r\n    \r\n    \r\n     <p-dialog header=\"ZANIMANJA\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"auto\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{zanShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                            ŠIFRA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{zanShow.Sifra}}\r\n                        </dd>\r\n                        <dt>\r\n                            NAZIV\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{zanShow.Naziv}} \r\n                          </dd>  \r\n                        <dt>\r\n                            STRUČNA SPREMA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{zanShow.StepenSS}} \r\n                          </dd> \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{zanShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{zanShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{zanShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{zanShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n       \r\n     <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" [width]=\"auto\" [responsive]=\"true\"  #cd>\r\n      \r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-close\" label=\"Ne\" (click)=\"cd.reject()\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-check\" label=\"Da\" class=\"ui-button-danger\" (click)=\"cd.accept()\"></button>\r\n       </p-footer>\r\n    </p-confirmDialog>\r\n\r\n    <ng-template #waiting  >\r\n        <div class=\"centerWait\">\r\n        <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        Loading...\r\n        </div>\r\n    </ng-template>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zanimanja_model__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zanimanja_service__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZanimanjaComponent = (function () {
    function ZanimanjaComponent(router, zanService, confirmationService, flashMessage) {
        this.router = router;
        this.zanService = zanService;
        this.confirmationService = confirmationService;
        this.flashMessage = flashMessage;
        this.displayDetals = false;
        this.zanShow = new __WEBPACK_IMPORTED_MODULE_2__zanimanja_model__["a" /* ZanimanjaModel */]();
        this.Title = 'PREGLED ZANIMANJA';
    }
    ZanimanjaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zanService.getZanimanja().subscribe(function (profile) {
            if (profile.success === true) {
                //  console.log(profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.zanimanja = profile.data;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        // this.flashMessage.grayOut(false);
    };
    ZanimanjaComponent.prototype.selectPosao = function (work) {
        // this.selectedOpstina=opstina;
        this.displayDetals = true;
        this.zanShow = this.cloneData(work);
    };
    ZanimanjaComponent.prototype.cloneData = function (c) {
        var work = new __WEBPACK_IMPORTED_MODULE_2__zanimanja_model__["a" /* ZanimanjaModel */]();
        for (var prop in c) {
            work[prop] = c[prop];
        }
        return work;
    };
    ZanimanjaComponent.prototype.addZnimanja = function () {
        this.router.navigate(['/zanimanja/new']);
    };
    ZanimanjaComponent.prototype.updateZanimanja = function (id) {
        this.router.navigate(['/zanimanja/', id]);
    };
    ZanimanjaComponent.prototype.deleteZanimanje = function (tzanim) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Jeste li sigurni da \u017Eeite uklonite izabrano zanimanje ?   ",
            header: "" + tzanim.Naziv,
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.zanimanja.indexOf(tzanim);
                // console.log("index je " + index);
                _this.zanimanja.splice(index, 1);
                _this.zanService.delZanimanje(tzanim._id)
                    .subscribe(function (pos) {
                    if (pos.success) {
                        _this.flashMessage.show('Zanimanje removed successfully ...', {
                            cssClass: 'alert-success',
                            timeout: 1000
                        });
                    }
                    else {
                        _this.router.navigate(['NotFound']);
                    }
                }, function (err) {
                    //alert("Could not delete radnik.");
                    _this.flashMessage.show('Could not delete zanimanje !!!', {
                        cssClass: 'alert-danger',
                        timeout: 5000
                    });
                    // Revert the view back to its original state
                    _this.zanimanja.splice(index, 0, tzanim);
                });
            }
        });
    };
    return ZanimanjaComponent;
}());
ZanimanjaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zanimanja',
        template: __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__zanimanja_service__["a" /* ZanimanjaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__zanimanja_service__["a" /* ZanimanjaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ZanimanjaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=zanimanja.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaModel; });
var ZanimanjaModel = (function () {
    function ZanimanjaModel() {
    }
    return ZanimanjaModel;
}());

//# sourceMappingURL=zanimanja.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zanimanja_component__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zanimanja_form_zanimanja_form_component__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja-form/zanimanja-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zanimanja_routing_module__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__zanimanja_service__ = __webpack_require__("../../../../../src/app/components/zanimanja/zanimanja.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ZanimanjaModule = (function () {
    function ZanimanjaModule() {
    }
    return ZanimanjaModule;
}());
ZanimanjaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_6__zanimanja_routing_module__["a" /* ZanimanjaRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__zanimanja_component__["a" /* ZanimanjaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__zanimanja_form_zanimanja_form_component__["a" /* ZanimanjaFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__zanimanja_service__["a" /* ZanimanjaService */], __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]]
    })
], ZanimanjaModule);

//# sourceMappingURL=zanimanja.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/zanimanja/zanimanja.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZanimanjaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ZanimanjaService = (function () {
    function ZanimanjaService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].isDev;
    }
    ZanimanjaService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ZanimanjaService.prototype.getZanimanja = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zanimanja/');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZanimanjaService.prototype.getZanimanje = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zanimanja/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZanimanjaService.prototype.addZanimanje = function (zanimanje) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zanimanja/');
        return this.http.post(ep, JSON.stringify(zanimanje), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZanimanjaService.prototype.updateZanimanje = function (zanimanje) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zanimanja/' + zanimanje._id);
        return this.http.put(ep, JSON.stringify(zanimanje), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZanimanjaService.prototype.delZanimanje = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__services_service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/zanimanja/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ZanimanjaService.prototype.handleError = function (error) {
        //console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
        var greska = error.status + "  " + error.statusText;
        //return Observable.throw(error.statusText || 'Server error');
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(greska || 'Server error');
    };
    return ZanimanjaService;
}());
ZanimanjaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ZanimanjaService);

var _a;
//# sourceMappingURL=zanimanja.service.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.glavni.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardGlavni; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__ = __webpack_require__("../../../../../src/app/services/auth/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardGlavni = (function () {
    function AuthGuardGlavni(authService, router, valser) {
        this.authService = authService;
        this.router = router;
        this.valser = valser;
    }
    AuthGuardGlavni.prototype.loadToken = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    AuthGuardGlavni.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.loadToken();
            if (this.valser.validateGlavni(this.user)) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
            }
            // console.log("ovo je email" + this.user.email);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuardGlavni;
}());
AuthGuardGlavni = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_validate_service__["a" /* ValidateService */]) === "function" && _c || Object])
], AuthGuardGlavni);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.glavni.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            // console.log("ovo je email" + this.user.email);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].isDev;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //this.serviceConfig.hosturl
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/register'); 
        var ep = __WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        //   .map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/authenticate'); 
        var ep = __WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
        //   .map(res => res.json());
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/profile'); 
        var ep = __WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.get('http://localhost:3000/users/profile',{headers: headers})
        //   .map(res => res.json());
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        // console.log('Token je ' + tokenNotExpired('id_token'));
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
        //return tokenNotExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateGlavni = function (user) {
        console.log("user name je " + user.username);
        if (user.name == undefined) {
            return false;
        }
        else {
            if (user.username == 'derrad') {
                return true;
            }
            return false;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceConfig; });
var ServiceConfig = {
    HostUrl: "http://localhost:3000/",
    PrepareHost: function (tisDev, endPoint) {
        if (this.isDev) {
            return endPoint;
        }
        else {
            //return 'http://localhost:8080/'+ep;
            return ServiceConfig.HostUrl + endPoint;
        }
        //return 'HOST PREPARE' + ServiceConfig.HostUrl;
    },
    isDev: false
};
// export class ServiceConfig {
//     private _hosturl:string = "http://localhost:3000/";
//     get  hosturl(): string {
//         return this._hosturl;
//     }
//     static  hosturl : string= "http://localhost:3000/";
// } 
//# sourceMappingURL=service.config.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.validate.shared.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceValidateShared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceValidateShared = (function () {
    function ServiceValidateShared() {
    }
    ServiceValidateShared.prototype.maxValue = function (max) {
        return function (control) {
            var input = control.value, isValid = input > max;
            if (isValid)
                return { 'maxValue': { max: max } };
            else
                return null;
        };
    };
    ServiceValidateShared.prototype.minValue = function (min) {
        return function (control) {
            var input = control.value, isValid = input < min;
            if (isValid)
                return { 'minValue': { min: min } };
            else
                return null;
        };
    };
    ServiceValidateShared.prototype.validateRegExpSifru = function (c) {
        var SIFRA_REGEXP = new RegExp('^[a-z0-9_-]+$', 'i');
        return SIFRA_REGEXP.test(c.value) ? null : {
            validateSifru: {
                valid: false
            }
        };
    };
    ServiceValidateShared.prototype.validateOnlyNumbers = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        var TABKEY = 9;
        if (theEvent.keyCode == TABKEY) {
            //console.log("Uhvatio tab");
            // if(theEvent.preventDefault) theEvent.preventDefault();
            return true;
        }
        var BACKSPACE = 8;
        if (theEvent.keyCode == BACKSPACE) {
            return true;
        }
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    ServiceValidateShared.prototype.validateOnlyDigit = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]/; // [^0-9] 
        var TABKEY = 9;
        if (theEvent.keyCode == TABKEY) {
            // console.log("Uhvatio tab");
            // if(theEvent.preventDefault) theEvent.preventDefault();
            return true;
        }
        var BACKSPACE = 8;
        if (theEvent.keyCode == BACKSPACE) {
            return true;
        }
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    return ServiceValidateShared;
}());
ServiceValidateShared = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ServiceValidateShared);

//# sourceMappingURL=service.validate.shared.js.map

/***/ }),

/***/ "../../../../../src/app/shared/EnumApp/StepenSS.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepenSS; });
var StepenSS = [
    'Nekvalifikovan',
    'Polukvalifikovan',
    'Kvalifikovan',
    'Srednja Strucna Sprema',
    'VKV',
    'Visa skola',
    'Fakultet',
    'Magistar',
    'Doktor Nauka'
];
//# sourceMappingURL=StepenSS.enum.js.map

/***/ }),

/***/ "../../../../../src/app/shared/frmDatum/DateValueAccessorModule .ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateValueAccessorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_value_accessor__ = __webpack_require__("../../../../../src/app/shared/frmDatum/date-value-accessor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateValueAccessorModule = (function () {
    function DateValueAccessorModule() {
    }
    return DateValueAccessorModule;
}());
DateValueAccessorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__date_value_accessor__["a" /* DateValueAccessor */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__date_value_accessor__["a" /* DateValueAccessor */]]
    })
], DateValueAccessorModule);

//# sourceMappingURL=DateValueAccessorModule .js.map

/***/ }),

/***/ "../../../../../src/app/shared/frmDatum/date-value-accessor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateValueAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DATE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a value and listening to changes on a date input element
 *
 *  ### Example
 *  `<input type="date" name="myBirthday" ngModel useValueAsDate>`
 */
var DateValueAccessor = (function () {
    function DateValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) {
            // console.log("HostListener input");
        };
        this.onTouched = function () {
            //console.log("HostListener blur");
        };
    }
    DateValueAccessor.prototype.writeValue = function (value) {
        if (!value) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', null);
            return;
        }
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'valueAsDate', value);
    };
    DateValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return DateValueAccessor;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target.valueAsDate']),
    __metadata("design:type", Object)
], DateValueAccessor.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('blur', []),
    __metadata("design:type", Object)
], DateValueAccessor.prototype, "onTouched", void 0);
DateValueAccessor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        // this selector changes the previous behavior silently and might break existing code
        // selector: 'input[type=date][formControlName],input[type=date][formControl],input[type=date][ngModel]',
        // this selector is an opt-in version
        selector: '[useValueAsDate]',
        providers: [DATE_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DateValueAccessor);

var _a, _b;
//https://github.com/JohannesHoppe/angular-date-value-accessor/blob/master/angular-date-value-accessor/src/date-value-accessor.ts
//https://blog.johanneshoppe.de/2016/10/angular-2-how-to-use-date-input-controls-with-angular-forms/
//# sourceMappingURL=date-value-accessor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/ErrorRes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponeCustom; });
/* unused harmony export ErrorRespone */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Serizable__ = __webpack_require__("../../../../../src/app/shared/models/Serizable.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ResponeCustom = (function (_super) {
    __extends(ResponeCustom, _super);
    function ResponeCustom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ResponeCustom;
}(__WEBPACK_IMPORTED_MODULE_0__Serizable__["a" /* Serializable */]));

var ErrorRespone = (function (_super) {
    __extends(ErrorRespone, _super);
    function ErrorRespone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ErrorRespone;
}(__WEBPACK_IMPORTED_MODULE_0__Serizable__["a" /* Serializable */]));

// export interface IRest {
//     success:boolean;
//     message: string;
//     data: Array<Object>;
//     ver?:string;
// }
// export class Rest implements IRest{
//     success:boolean;
//     message: string;
//     data: Array<Object>;
//     ver?:string;
// } 
//# sourceMappingURL=ErrorRes.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/Serizable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Serializable; });
var Serializable = (function () {
    function Serializable() {
    }
    Serializable.prototype.fromJSON = function (json) {
        //  console.log("Klasa Serializable primila " + json);
        for (var propName in json) {
            this[propName] = json[propName];
            console.log(" propName" + propName);
            // console.log(" this[propName]" +  this[propName])
            // console.log(" json[propName]" +  json[propName])
        }
        return this;
    };
    return Serializable;
}());

// export class Serializable {
//     //  fillFromJSON(json: string) {
//     //      var jsonObj = JSON.parse(json);
//     //      for (var propName in jsonObj) {
//     //          this[propName] = jsonObj[propName]
//     //      }
//     // }
//      fillfromJSON(json) {
//           for (var propName in json)
//               this[propName] = json[propName];
//           return this;
//       }
// }
//https://stackoverflow.com/questions/36014161/angular2-http-get-cast-response-into-full-object
//https://stackoverflow.com/questions/29758765/json-to-typescript-class-instance/29759472#29759472 
//# sourceMappingURL=Serizable.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipeapp/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var enumMember in value) {
            if (!isNaN(parseInt(enumMember, 10))) {
                keys.push({ key: enumMember, value: value[enumMember] });
                // Uncomment if you want log
                // console.log("enum member: ", value[enumMember]);
            }
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
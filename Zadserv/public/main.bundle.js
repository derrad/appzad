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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_drzave_drzave_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_drzave_drzave_form_drzave_form_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_parametar_parametar_component__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_parametar_parmetar_form_parmetar_form_component__ = __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_radnik_radnik_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_radnik_radnik_form_radnik_form_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_opstine_opstine_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_opstine_opstine_form_opstine_form_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_mesta_mesta_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mesta_mesta_form_mesta_form_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_vlasnik_vlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_fond_sati_fond_sati_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_fond_sati_fond_sati_form_fond_sati_form_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_konstanta_konstanta_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_posao_posao_component__ = __webpack_require__("../../../../../src/app/components/posao/posao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_posao_posao_form_posao_form_component__ = __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'drzave', component: __WEBPACK_IMPORTED_MODULE_3__components_drzave_drzave_component__["a" /* DrzaveComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'drzave/new', component: __WEBPACK_IMPORTED_MODULE_4__components_drzave_drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'drzave/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_drzave_drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'parametar', component: __WEBPACK_IMPORTED_MODULE_5__components_parametar_parametar_component__["a" /* ParametarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'parametar/new', component: __WEBPACK_IMPORTED_MODULE_6__components_parametar_parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'parametar/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_parametar_parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine', component: __WEBPACK_IMPORTED_MODULE_9__components_opstine_opstine_component__["a" /* OpstineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine/new', component: __WEBPACK_IMPORTED_MODULE_10__components_opstine_opstine_form_opstine_form_component__["a" /* OpstineFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_opstine_opstine_form_opstine_form_component__["a" /* OpstineFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'radnik', component: __WEBPACK_IMPORTED_MODULE_7__components_radnik_radnik_component__["a" /* RadnikComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'radnik/new', component: __WEBPACK_IMPORTED_MODULE_8__components_radnik_radnik_form_radnik_form_component__["a" /* RadnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'radnik/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_radnik_radnik_form_radnik_form_component__["a" /* RadnikFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'opstine', component: __WEBPACK_IMPORTED_MODULE_9__components_opstine_opstine_component__["a" /* OpstineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mesta', component: __WEBPACK_IMPORTED_MODULE_11__components_mesta_mesta_component__["a" /* MestaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mesta/new', component: __WEBPACK_IMPORTED_MODULE_12__components_mesta_mesta_form_mesta_form_component__["a" /* MestaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'mesta/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_mesta_mesta_form_mesta_form_component__["a" /* MestaFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'posao', component: __WEBPACK_IMPORTED_MODULE_17__components_posao_posao_component__["a" /* PosaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'posao/new', component: __WEBPACK_IMPORTED_MODULE_18__components_posao_posao_form_posao_form_component__["a" /* PosaoFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'posao/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_posao_posao_form_posao_form_component__["a" /* PosaoFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'vlasnik', component: __WEBPACK_IMPORTED_MODULE_13__components_vlasnik_vlasnik_component__["a" /* VlasnikComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fondsati', component: __WEBPACK_IMPORTED_MODULE_14__components_fond_sati_fond_sati_component__["a" /* FondSatiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fondsati/new', component: __WEBPACK_IMPORTED_MODULE_15__components_fond_sati_fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fondsati/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_fond_sati_fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'konstanta', component: __WEBPACK_IMPORTED_MODULE_16__components_konstanta_konstanta_component__["a" /* KonstantaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
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
exports.push([module.i, " /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n/* @media (max-width: 767px) {\r\n   \r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n} */\r\n\r\nbody {\r\n    position: relative;\r\n    overflow-x: hidden;\r\n}\r\nbody,\r\nhtml { height: 100%;}\r\n.nav .open > a, \r\n.nav .open > a:hover, \r\n.nav .open > a:focus {background-color: transparent;}\r\n\r\n/*-------------------------------*/\r\n/*           Wrappers            */\r\n/*-------------------------------*/\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled {\r\n    padding-left: 220px;\r\n}\r\n\r\n\r\n#sidebar-wrapper {\r\n    z-index: 1000;\r\n    left: 220px;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -220px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background: #1a1a1a;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n#sidebar-wrapper::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n    width: 220px;\r\n}\r\n\r\n#page-content-wrapper {\r\n    width: 100%;\r\n    padding-top: 70px;\r\n}\r\n\r\n#wrapper.toggled #page-content-wrapper {\r\n    position: absolute;\r\n    margin-right: -220px;\r\n}\r\n\r\n/*-------------------------------*/\r\n/*     Sidebar nav styles        */\r\n/*-------------------------------*/\r\n\r\n.sidebar-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 220px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n    position: relative; \r\n    line-height: 20px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.sidebar-nav li:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    height: 100%;\r\n    width: 3px;\r\n    background-color: #1c1c1c;\r\n    transition: width .2s ease-in;\r\n\r\n}\r\n.sidebar-nav li:first-child a {\r\n    color: #fff;\r\n    background-color: #1a1a1a;\r\n}\r\n.sidebar-nav li:nth-child(2):before {\r\n    background-color: #ec1b5a;   \r\n}\r\n.sidebar-nav li:nth-child(3):before {\r\n    background-color: #79aefe;   \r\n}\r\n.sidebar-nav li:nth-child(4):before {\r\n    background-color: #314190;   \r\n}\r\n.sidebar-nav li:nth-child(5):before {\r\n    background-color: #279636;   \r\n}\r\n.sidebar-nav li:nth-child(6):before {\r\n    background-color: #7d5d81;   \r\n}\r\n.sidebar-nav li:nth-child(7):before {\r\n    background-color: #ead24c;   \r\n}\r\n.sidebar-nav li:nth-child(8):before {\r\n    background-color: #2d2366;   \r\n}\r\n.sidebar-nav li:nth-child(9):before {\r\n    background-color: #35acdf;   \r\n}\r\n.sidebar-nav li:hover:before,\r\n.sidebar-nav li.open:hover:before {\r\n    width: 100%;\r\n    transition: width .2s ease-in;\r\n\r\n}\r\n\r\n.sidebar-nav li a {\r\n    display: block;\r\n    color: #ddd;\r\n    text-decoration: none;\r\n    padding: 10px 15px 10px 30px;    \r\n}\r\n\r\n.sidebar-nav li a:hover,\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus,\r\n.sidebar-nav li.open a:hover,\r\n.sidebar-nav li.open a:active,\r\n.sidebar-nav li.open a:focus{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n    height: 65px;\r\n    font-size: 20px;\r\n    line-height: 44px;\r\n}\r\n.sidebar-nav .dropdown-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    border-radius: 0;\r\n    border: none;\r\n    background-color: #222;\r\n    box-shadow: none;\r\n}\r\n\r\n/*-------------------------------*/\r\n/*       Hamburger-Cross         */\r\n/*-------------------------------*/\r\n\r\n.hamburger {\r\n  position: fixed;\r\n  top: 20px;  \r\n  z-index: 999;\r\n  display: block;\r\n  width: 32px;\r\n  height: 32px;\r\n  margin-left: 15px;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n.hamburger:hover,\r\n.hamburger:focus,\r\n.hamburger:active {\r\n  outline: none;\r\n}\r\n.hamburger.is-closed:before {\r\n  content: '';\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  line-height: 32px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  -webkit-transform: translate3d(0,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed:hover:before {\r\n  opacity: 1;\r\n  display: block;\r\n  -webkit-transform: translate3d(-100px,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n\r\n.hamburger.is-closed .hamb-top,\r\n.hamburger.is-closed .hamb-middle,\r\n.hamburger.is-closed .hamb-bottom,\r\n.hamburger.is-open .hamb-top,\r\n.hamburger.is-open .hamb-middle,\r\n.hamburger.is-open .hamb-bottom {\r\n  position: absolute;\r\n  left: 0;\r\n  height: 4px;\r\n  width: 100%;\r\n}\r\n.hamburger.is-closed .hamb-top,\r\n.hamburger.is-closed .hamb-middle,\r\n.hamburger.is-closed .hamb-bottom {\r\n  background-color: #1a1a1a;\r\n}\r\n.hamburger.is-closed .hamb-top { \r\n  top: 5px; \r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed .hamb-middle {\r\n  top: 50%;\r\n  margin-top: -2px;\r\n}\r\n.hamburger.is-closed .hamb-bottom {\r\n  bottom: 5px;  \r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n\r\n.hamburger.is-closed:hover .hamb-top {\r\n  top: 0;\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-closed:hover .hamb-bottom {\r\n  bottom: 0;\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-open .hamb-top,\r\n.hamburger.is-open .hamb-middle,\r\n.hamburger.is-open .hamb-bottom {\r\n  background-color: #1a1a1a;\r\n}\r\n.hamburger.is-open .hamb-top,\r\n.hamburger.is-open .hamb-bottom {\r\n  top: 50%;\r\n  margin-top: -2px;  \r\n}\r\n.hamburger.is-open .hamb-top { \r\n  -webkit-transform: rotate(45deg);\r\n  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);\r\n}\r\n.hamburger.is-open .hamb-middle { display: none; }\r\n.hamburger.is-open .hamb-bottom {\r\n  -webkit-transform: rotate(-45deg);\r\n  -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);\r\n}\r\n.hamburger.is-open:before {\r\n  content: '';\r\n  display: block;\r\n  width: 100px;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  line-height: 32px;\r\n  text-align: center;\r\n  opacity: 0;\r\n  -webkit-transform: translate3d(0,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n.hamburger.is-open:hover:before {\r\n  opacity: 1;\r\n  display: block;\r\n  -webkit-transform: translate3d(-100px,0,0);\r\n  -webkit-transition: all .35s ease-in-out;\r\n}\r\n\r\n/*-------------------------------*/\r\n/*            Overlay            */\r\n/*-------------------------------*/\r\n\r\n.overlay {\r\n    position: fixed;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(250,250,250,.8);\r\n    z-index: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n\r\n</app-navbar>\r\n<div class=\"content-wrapper\">\r\n<div class=\"row\">\r\n\r\n    <!-- <div class='col-sm-3'>\r\n        <app-navbar-left></app-navbar-left>\r\n        </div> -->\r\n        \r\n     <div class=\"container-fluid \"> \r\n\r\n        <!-- <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n              <a href=\"#\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\">My Dashboard</li>\r\n        </ol> col-sm-9 -->\r\n         <div class='body-content col-xs-12 col-sm-12 col-md-11'> \r\n               <flash-messages></flash-messages> \r\n                <router-outlet></router-outlet> \r\n            </div>\r\n       <div style=\"height: 1000px;\"></div>\r\n    </div>\r\n    <footer class=\"sticky-footer\">\r\n            <div class=\"container\">\r\n              <div class=\"text-center\">\r\n                <small>Copyright © Your Website 2017</small>\r\n              </div>\r\n            </div>\r\n   </footer>\r\n</div>\r\n</div> \r\n\r\n\r\n<!-- <div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <app-navbar-left></app-navbar-left>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <flash-messages></flash-messages>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>  -->\r\n\r\n\r\n<!-- <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"> -->\r\n\r\n\r\n<!-- <p-messages [(value)]=\"msgs\"></p-messages> -->\r\n<!-- <div class=\"container\"> -->\r\n\r\n <!-- <div class=\"container-fluid\">\r\n     <div class=\"row\">\r\n                <div class=\"col-sm-2 col-md-2 d-none d-sm-block bg-light\"> -->\r\n               <!-- <app-navbar-left></app-navbar-left> -->\r\n                <!-- </div> -->\r\n                <!-- <main class=\"container-main col-sm-10 ml-sm-auto col-md-10 pt-3\" role=\"main\"> -->\r\n<!--\r\n                <main class=\"container-main\" role=\"main\">\r\n                        <flash-messages class=\"col-lg-9 col-md-9 col-xs-10\"></flash-messages>\r\n                        <router-outlet></router-outlet> -->\r\n                <!-- </div> -->\r\n                <!-- </main>\r\n\r\n  </div>\r\n </div>  -->\r\n\r\n        <!-- <div class=\"col-lg-10\">\r\n        <div class=\"row\"> -->\r\n\r\n            <!-- <div class=\"col-lg-2\"> -->\r\n                <!-- <app-navbar-left></app-navbar-left> -->\r\n\r\n            <!-- </div>  -->\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n              <flash-messages></flash-messages>\r\n              <router-outlet>\r\n\r\n              </router-outlet>\r\n          </div>\r\n      </div>\r\n    </div> -->\r\n\r\n\r\n<!-- </div>  -->\r\n\r\n"

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
        // $(document).ready(function () {
        // var litriger = $('.listav');
        //  litriger.click(function () {
        //   li_hamburger_cross();      
        //  });
        // var trigger = $('.hamburger'),
        //    overlay = $('.overlay'),
        //   isClosed = false;
        //  trigger.click(function () {
        //    hamburger_cross();      
        //  });
        //  function li_hamburger_cross() {
        //       if (isClosed == true) {          
        //         overlay.hide();
        //         litriger.removeClass('is-open');
        //         litriger.addClass('is-closed');
        //         isClosed = false;
        //       } else {   
        //         overlay.show();
        //         litriger.removeClass('is-closed');
        //         litriger.addClass('is-open');
        //         isClosed = true;
        //       }
        //   }
        //     function hamburger_cross() {
        //       if (isClosed == true) {          
        //         overlay.hide();
        //         trigger.removeClass('is-open');
        //         trigger.addClass('is-closed');
        //         isClosed = false;
        //       } else {   
        //         overlay.show();
        //         trigger.removeClass('is-closed');
        //         trigger.addClass('is-open');
        //         isClosed = true;
        //       }
        //   }
        //   $('[data-toggle="offcanvas"]').click(function () {
        //         $('#wrapper').toggleClass('toggled');
        //   });  
        // });
        // (function($) {
        //     "use strict"; // Start of use strict
        //     console.log("pozvao sam fukciju za meni");
        //     // Configure tooltips for collapsed side navigation
        //     // $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
        //     //   template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        //     // })
        //     // Toggle the side navigation
        //     $("#sidenavToggler").click(function(e) {
        //       e.preventDefault();
        //       $("body").toggleClass("sidenav-toggled");
        //       $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
        //       $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
        //     });
        //     // Force the toggled class to be removed when a collapsible nav link is clicked
        //     $(".navbar-sidenav .nav-link-collapse").click(function(e) {
        //       e.preventDefault();
        //       $("body").removeClass("sidenav-toggled");
        //     });
        //     // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
        //     $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
        //       var e0 = e.originalEvent,
        //         delta = e0.wheelDelta || -e0.detail;
        //       this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        //       e.preventDefault();
        //     });
        //     // Scroll to top button appear
        //     $(document).scroll(function() {
        //       var scrollDistance = $(this).scrollTop();
        //       if (scrollDistance > 100) {
        //         $('.scroll-to-top').fadeIn();
        //       } else {
        //         $('.scroll-to-top').fadeOut();
        //       }
        //     });
        //     // Configure tooltips globally
        // //    $('[data-toggle="tooltip"]').tooltip();
        //     // Smooth scrolling using jQuery easing
        //     $(document).on('click', 'a.scroll-to-top', function(event) {
        //       var $anchor = $(this);
        //       $('html, body').stop().animate({
        //         scrollTop: ($($anchor.attr('href')).offset().top)
        //       }, 1000, 'easeInOutExpo');
        //       event.preventDefault();
        //     });
        //   })(); // End of use strict
        //     function htmlbodyHeightUpdate() {
        //       var height3 = $(window).height();
        //       var height1 = $('.nav').height() + 50;
        //      var height2 = $('.container-main').height();
        //       if (height2 > height3) {
        //           $('html').height(Math.max(height1, height3, height2) + 10);
        //           $('body').height(Math.max(height1, height3, height2) + 10);
        //       } else
        //       {
        //           $('html').height(Math.max(height1, height3, height2));
        //           $('body').height(Math.max(height1, height3, height2));
        //       }
        //   }
        //   $(document).ready(function () {
        //       htmlbodyHeightUpdate();
        //       $(window).resize(function () {
        //           htmlbodyHeightUpdate();
        //       });
        //       $(window).scroll(function () {
        //           var height2 = $('.container-main').height();
        //           htmlbodyHeightUpdate();
        //       });
        //   });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_left_navbar_left_component__ = __webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_validate_service__ = __webpack_require__("../../../../../src/app/services/auth/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_drzave_drzave_service__ = __webpack_require__("../../../../../src/app/services/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_mesta_mesta_service__ = __webpack_require__("../../../../../src/app/services/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_opstine_opstine_service__ = __webpack_require__("../../../../../src/app/services/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_opcijeapp_parametar_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_opcijeapp_fond_sati_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/fond-sati.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_opcijeapp_konstante_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/konstante.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_opcijeapp_radnik_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/radnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_opcijeapp_vlasnik_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/vlasnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_posao_posao_service__ = __webpack_require__("../../../../../src/app/components/posao/posao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__guards_auth_guard_glavni__ = __webpack_require__("../../../../../src/app/guards/auth.guard.glavni.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_drzave_drzave_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_drzave_drzave_form_drzave_form_component__ = __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_parametar_parametar_component__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_parametar_parmetar_form_parmetar_form_component__ = __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_radnik_radnik_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_radnik_radnik_form_radnik_form_component__ = __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_opstine_opstine_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_opstine_opstine_form_opstine_form_component__ = __webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_mesta_mesta_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_mesta_mesta_form_mesta_form_component__ = __webpack_require__("../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_vlasnik_vlasnik_component__ = __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_fond_sati_fond_sati_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_fond_sati_fond_sati_form_fond_sati_form_component__ = __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_konstanta_konstanta_component__ = __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_posao_posao_component__ = __webpack_require__("../../../../../src/app/components/posao/posao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_posao_posao_form_posao_form_component__ = __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_pipeapp_keys_pipe__ = __webpack_require__("../../../../../src/app/shared/pipeapp/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//Meni and app komponente







//Service













//Komponente 


















//Pipe 

//import { DecimalMask } from './directive/decimal-mask.directive';
// import { DecimalPipe } from '@angular/common';

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__guards_auth_guard_glavni__["a" /* AuthGuardGlavni */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    //  {path:'drzave', component: DrzaveComponent, canActivate:[AuthGuard]},
    //  {path:'drzave/new', component: DrzaveFormComponent, canActivate:[AuthGuard]},
    //  {path:'drzave/:id', component: DrzaveFormComponent, canActivate:[AuthGuard]},
    //  {path:'parametar', component: ParametarComponent, canActivate:[AuthGuard]},
    //  {path:'parametar/new', component: ParmetarFormComponent, canActivate:[AuthGuard]},
    //  {path:'parametar/:id', component: ParmetarFormComponent, canActivate:[AuthGuard]},
    //  {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
    //  {path:'opstine/new', component: OpstineFormComponent, canActivate:[AuthGuard]},
    //  {path:'opstine/:id', component: OpstineFormComponent, canActivate:[AuthGuard]},
    //  {path:'radnik', component: RadnikComponent, canActivate:[AuthGuard]},
    //  {path:'radnik/new', component: RadnikFormComponent, canActivate:[AuthGuard]},
    //  {path:'radnik/:id', component: RadnikFormComponent, canActivate:[AuthGuard]},
    //  {path:'opstine', component: OpstineComponent, canActivate:[AuthGuard]},
    //  {path:'mesta', component: MestaComponent, canActivate:[AuthGuard]},
    //  {path:'mesta/new', component: MestaFormComponent, canActivate:[AuthGuard]},
    //  {path:'mesta/:id', component: MestaFormComponent, canActivate:[AuthGuard]},
    //  {path:'posao', component: PosaoComponent, canActivate:[AuthGuard]},
    //  {path:'posao/new', component: PosaoFormComponent, canActivate:[AuthGuard]},
    //  {path:'posao/:id', component: PosaoFormComponent, canActivate:[AuthGuard]},
    //  {path:'vlasnik', component: VlasnikComponent, canActivate:[AuthGuard]},
    //  {path:'fondsati', component: FondSatiComponent, canActivate:[AuthGuard]},
    //  {path:'fondsati/new', component: FondSatiFormComponent, canActivate:[AuthGuard]},
    //  {path:'fondsati/:id', component: FondSatiFormComponent, canActivate:[AuthGuard]},
    //  {path:'konstanta', component: KonstantaComponent, canActivate:[AuthGuard]},
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_44__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: 'not-found' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_left_navbar_left_component__["a" /* NavbarLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_drzave_drzave_component__["a" /* DrzaveComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_parametar_parametar_component__["a" /* ParametarComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_radnik_radnik_component__["a" /* RadnikComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_opstine_opstine_component__["a" /* OpstineComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_mesta_mesta_component__["a" /* MestaComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_vlasnik_vlasnik_component__["a" /* VlasnikComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_fond_sati_fond_sati_component__["a" /* FondSatiComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_konstanta_konstanta_component__["a" /* KonstantaComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_drzave_drzave_form_drzave_form_component__["a" /* DrzaveFormComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_parametar_parmetar_form_parmetar_form_component__["a" /* ParmetarFormComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_opstine_opstine_form_opstine_form_component__["a" /* OpstineFormComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_mesta_mesta_form_mesta_form_component__["a" /* MestaFormComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_posao_posao_component__["a" /* PosaoComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_posao_posao_form_posao_form_component__["a" /* PosaoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_47__shared_pipeapp_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_35__components_radnik_radnik_form_radnik_form_component__["a" /* RadnikFormComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_fond_sati_fond_sati_form_fond_sati_form_component__["a" /* FondSatiFormComponent */]
            //  DecimalMask
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SidebarModule"],
            __WEBPACK_IMPORTED_MODULE_48__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_auth_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_28__guards_auth_guard_glavni__["a" /* AuthGuardGlavni */],
            __WEBPACK_IMPORTED_MODULE_18__services_drzave_drzave_service__["a" /* DrzaveService */], __WEBPACK_IMPORTED_MODULE_19__services_mesta_mesta_service__["a" /* MestaService */], __WEBPACK_IMPORTED_MODULE_20__services_opstine_opstine_service__["a" /* OpstineService */],
            __WEBPACK_IMPORTED_MODULE_21__services_opcijeapp_parametar_service__["a" /* ParametarService */], __WEBPACK_IMPORTED_MODULE_22__services_opcijeapp_fond_sati_service__["a" /* FondSatiService */], __WEBPACK_IMPORTED_MODULE_23__services_opcijeapp_konstante_service__["a" /* KonstanteService */],
            __WEBPACK_IMPORTED_MODULE_24__services_opcijeapp_radnik_service__["a" /* RadnikService */], __WEBPACK_IMPORTED_MODULE_25__services_opcijeapp_vlasnik_service__["a" /* VlasnikService */], __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"], __WEBPACK_IMPORTED_MODULE_26__components_posao_posao_service__["a" /* PosaoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

// MessagesModule,
// GrowlModule, 
//# sourceMappingURL=app.module.js.map

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

module.exports = "<div class=\"row\" class=\"col-lg-9 col-md-9 col-xs-10\" [@routerTransition]>\r\n        <h2 class=\"page-header\">Dashboard</h2>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <i class=\"fa fa-comments fa-5x\"></i>\r\n                        </div>\r\n                        <div class=\"col-xs-9 text-right\">\r\n                            <div class=\"huge\">26</div>\r\n                            <div>New Comments!</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                    <div class=\"panel-footer\">\r\n                        <span class=\"pull-left\">View Details</span>\r\n                        <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"panel panel-green\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <i class=\"fa fa-tasks fa-5x\"></i>\r\n                        </div>\r\n                        <div class=\"col-xs-9 text-right\">\r\n                            <div class=\"huge\">12</div>\r\n                            <div>New Tasks!</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                    <div class=\"panel-footer\">\r\n                        <span class=\"pull-left\">View Details</span>\r\n                        <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"panel panel-yellow\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <i class=\"fa fa-shopping-cart fa-5x\"></i>\r\n                        </div>\r\n                        <div class=\"col-xs-9 text-right\">\r\n                            <div class=\"huge\">124</div>\r\n                            <div>New Orders!</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                    <div class=\"panel-footer\">\r\n                        <span class=\"pull-left\">View Details</span>\r\n                        <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                        <div class=\"clearfix\"></div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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


var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

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

module.exports = "<!-- <div class=\"row\"> -->\r\n    <!-- <div class=\"col-lg-9 col-md-9 col-xs-10\"> -->\r\n    <div class=\"panel panel-primary \"  [@routerTransition]>\r\n      <div class=\"panel-heading\">\r\n          <h3>{{title}}</h3>\r\n    \r\n      </div>\r\n    <div class=\"panel-body\">\r\n    \r\n      <!-- <div   ng-repeat=\"item in ERROR\" ng-value=\"item\" class=\"text-danger\" >\r\n          <p>{{ERROR.KodDrzave.message}}</p>\r\n          <p>{{ERROR.Naziv.message}}</p>\r\n          \r\n      </div> -->\r\n     \r\n          <form [formGroup]=\"formDR\" (ngSubmit)=\"save()\">\r\n              <div class=\"form-group\" >\r\n                  <!-- <label class=\"center-block\">ID: -->\r\n                    <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"drzava._id\"   type=\"hidden\">\r\n                  <!-- </label> -->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">Kod:\r\n                      <input class=\"form-control\" formControlName=\"KodDrzave\"  [(ngModel)]=\"drzava.KodDrzave\" >\r\n                    </label>\r\n                    <div class=\"text-danger\" *ngIf=\"!formDR.controls['KodDrzave'].valid && formDR.controls['KodDrzave'].touched\">{{ titleAlertKod }}</div>\r\n                    \r\n                  </div>\r\n    \r\n               <div class=\"form-group\">\r\n                  <label class=\"center-block\">Naziv:\r\n                    <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"drzava.Naziv\" >\r\n                  </label>\r\n                  <div class=\"text-danger\" *ngIf=\"!formDR.controls['Naziv'].valid && formDR.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div>\r\n                  \r\n                </div>\r\n                <div class=\"checkbox\">\r\n                    <label class=\"center-block\">\r\n                      <input type=\"checkbox\" formControlName=\"EuClan\" [(ngModel)]=\"drzava.EuClan\"  value=\"1\">EuClan.\r\n                    </label>\r\n                    \r\n                </div>\r\n                 <div class=\"form-group\">\r\n                    <label class=\"center-block\">Opis:\r\n                      <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"drzava.Opis\">\r\n    \r\n                      </textarea>\r\n                    </label>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                       <div class=\"col-md-offset-5 col-md-12\">\r\n                            <button type=\"submit\" [disabled]=\"!formDR.valid\"\r\n                                class=\"btn btn-default\">\r\n                            <span class=\"glyphicon glyphicon-saved\"></span>\r\n                            Save\r\n                            </button>\r\n    \r\n                          <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formDR.pristine\"  (click)=\"revert()\">\r\n                              <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                              Revert\r\n                          </button>\r\n                          \r\n                       </div>\r\n              </div>\r\n          </form>\r\n         \r\n    </div>\r\n    <div class=\"panel-footer\">\r\n         <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n   </div>\r\n        \r\n    </div>\r\n    <!-- <div class=\"col-md-offset-2 col-md-9\">\r\n        <button (click)=\"backClicked()\"  class=\"btn btn-default btn-block\">\r\n        <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n        Back\r\n      </button>\r\n    </div> -->\r\n\r\n    \r\n    <!-- </div>  coll -->\r\n    <!-- </div>  row -->\r\n\r\n    \r\n\r\n<!-- \r\n<div class=\"col-lg-9 col-md-9 col-xs-10\" >\r\n<h5>{{ title }}</h5>\r\n<div class=\"row\">\r\n  <form materialize class=\"col-lg-9 col-md-9 col-xs-10\" [formGroup]=\"formDR\" (ngSubmit)=\"save()\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n       \r\n        <input id=\"KodDrzave\" type=\"text\" class=\"validate\"\r\n               [(ngModel)]=\"drzava.KodDrzave\" formControlName=\"KodDrzave\"\r\n               [class.invalid]=\"form.controls['KodDrzave'].touched && !form.controls['KodDrzave'].valid\"\r\n        >\r\n        <label for=\"KodDrzave\"\r\n               [class.active]=\"drzava.KodDrzave\"\r\n               data-error=\"KodDrzave is required and needs to contain at least 3 chars\">\r\n               KodDrzave\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n     \r\n        <input id=\"Naziv\" type=\"Naziv\" class=\"validate\"\r\n               [(ngModel)]=\"drzava.Naziv\" formControlName=\"Naziv\"\r\n               [class.invalid]=\"form.controls['Naziv'].touched && !form.controls['Naziv'].valid\">\r\n        <label for=\"Naziv\"\r\n               [class.active]=\"drzava.Naziv\"\r\n               data-error=\"Invalid Naziv\">\r\n          Naziv\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n\r\n        <input id=\"Opis\" type=\"text\" class=\"validate\" [(ngModel)]=\"drzava.Opis\" formControlName=\"Opis\">\r\n        <label for=\"Opis\" [class.active]=\"drzava.Opis\">Opis</label>\r\n      </div>\r\n    </div>\r\n    \r\n  \r\n    <button class=\"btn waves-effect waves-light\" type=\"submit\"\r\n            [disabled]=\"!form.valid\">Submit\r\n      \r\n     Submit<i class=\"material-icons right\">send</i> \r\n    </button>\r\n  </form>\r\n-->\r\n  <!--</div>-->\r\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave-form/drzave-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_model__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_drzave_drzave_service__ = __webpack_require__("../../../../../src/app/services/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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







var DrzaveFormComponent = (function () {
    function DrzaveFormComponent(drzaveService, router, route, formBuilder, _location) {
        this.drzaveService = drzaveService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.drzava = new __WEBPACK_IMPORTED_MODULE_3__drzave_model__["a" /* Drzave */]();
        this.titleAlertNaziv = "This field is required !!!";
        this.titleAlertKod = "KOD-ima jos, This field is required !!!";
        this.formDR = formBuilder.group({
            _id: [],
            KodDrzave: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(3)
                ]],
            EuClan: [],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Opis: []
        });
    }
    DrzaveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Edit Država' : 'New Država';
            if (!id)
                return;
            _this.drzaveService.getDrzava(id)
                .subscribe(function (drzava) {
                if (drzava.success) {
                    _this.drzava = drzava.data[0];
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
    DrzaveFormComponent.prototype.save = function () {
        var _this = this;
        var result, drzaveValue = this.formDR.value;
        if (drzaveValue._id) {
            result = this.drzaveService.updateDrzava(drzaveValue);
        }
        else {
            result = this.drzaveService.addDrzava(drzaveValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['drzave']); });
    };
    DrzaveFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    DrzaveFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    DrzaveFormComponent.prototype.ngOnChanges = function () {
        this.formDR.reset({
            KodDrzave: "",
            Naziv: "",
            EuClan: 0,
            Opis: ""
        });
    };
    return DrzaveFormComponent;
}());
DrzaveFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-drzave-form',
        template: __webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/drzave/drzave-form/drzave-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_drzave_drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_drzave_drzave_service__["a" /* DrzaveService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _e || Object])
], DrzaveFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=drzave-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .ui-column-title{\r\n    font-size:15px ;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n    <div *ngIf=\"drzave; else  waiting\" [@routerTransition]>\r\n      <!-- <h3 class=\"first\">TABELA DRZAVA</h3> class=\"col-lg-9 col-md-9 col-xs-10\"\r\n      <input #gb type=\"text\" placeholder=\"Global search\" pInputText focus>\r\n      <p></p> -->\r\n\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n       <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n    </div>\r\n      <p-dataTable [value]=\"drzave\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedDrzave\" dataKey=\"_id\"  [loading]=\"loading\" loadingIcon=\"fa fa-spinner\" \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false >\r\n\r\n    <p-header>List of Države</p-header>\r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n                                                                                         \r\n      <p-column styleClass=\"text-danger\" field=\"KodDrzave\" header=\"Kod\" sortable=\"true\"></p-column>                               \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n      <p-column field=\"EuClan\" header=\"EuClan\" sortable=\"true\"></p-column>\r\n      <p-column field=\"Opis\" header=\"Opis\" sortable=\"true\"></p-column>\r\n      <p-column field=\"NameUser\" header=\"User\" sortable=\"true\"></p-column>\r\n      \r\n      <p-column styleClass=\"col-button\" heder=\"Opcije\">\r\n          <ng-template let-drz=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectDrzavu(drz)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateDrzavu(drz._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteDrzavu(drz)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n     </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addDrzave()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n<!-- </div> -->\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n\r\n\r\n<p-dialog header=\"Država\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n\r\n    <div>\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                 ID\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                   {{drzShow._id}}\r\n                </dd>\r\n              \r\n                <dt>\r\n                  KOD DRŽAVE\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{drzShow.KodDrzave}} \r\n                </dd>\r\n                <dt>\r\n                NAZIV DRŽAVE\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{drzShow.Naziv}}\r\n                </dd>\r\n                <dt>\r\n                 EU CLAN\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.EuClan}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                OPIS\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.Opis}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM UNOSA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.created_at}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM AŽURIRANJA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.updatedAt}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                KORISNIK\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{drzShow.NameUser}}\r\n                    \r\n                </dd>\r\n        \r\n            </dl>                        \r\n    </div>\r\n                    \r\n\r\n    <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n        <p-footer>\r\n             <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n\r\n  <ng-template #waiting >Waiting...</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/drzave/drzave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrzaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drzave_drzave_service__ = __webpack_require__("../../../../../src/app/services/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drzave_model__ = __webpack_require__("../../../../../src/app/components/drzave/drzave.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
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
    function DrzaveComponent(drzaveService, router, confirmationService) {
        this.drzaveService = drzaveService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.displayDetals = false;
        this.drzShow = new __WEBPACK_IMPORTED_MODULE_3__drzave_model__["a" /* Drzave */]();
        this.Title = "PREGLED DRŽAVA";
    }
    DrzaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.drzaveService.getDrzave().subscribe(function (profile) {
                if (profile.success === true) {
                    _this.drzave = profile.data;
                }
            }, function (err) {
                console.log(err);
                return false;
            });
            _this.loading = false;
        }, 1000);
        //  this.loading = false;
    };
    // onAddDrzavu() {
    //     alert("Add drzavu");
    // }
    DrzaveComponent.prototype.selectDrzavu = function (tdrz) {
        // if (tId) {
        //     alert("Drzava je "  +tId);
        // } else {
        //     alert("Select" + this.selectedDrzave);
        // }
        // 
        this.displayDetals = true;
        // console.log(opstina);
        // console.log(this.selectedOpstina);
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
        // console.log(tdrzava);
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.drzave.indexOf(tdrzava);
                console.log("index je " + index);
                _this.drzave.splice(index, 1);
                _this.drzaveService.delDrzava(tdrzava._id)
                    .subscribe(null, function (err) {
                    alert("Could not delete drzavu.");
                    // Revert the view back to its original state
                    _this.drzave.splice(index, 0, tdrzava);
                });
            }
        });
        // // if (confirm("Are you sure you want to delete " + tdrzava.Naziv + "?")) {
        // //   var index = this.drzave.indexOf(tdrzava);
        // //   console.log("index je " + index);
        // //   this.drzave.splice(index, 1);
        // //   this.drzaveService.delDrzava(tdrzava._id)
        // //     .subscribe(null,
        // //       err => {
        // //         alert("Could not delete drzavu.");
        // //         // Revert the view back to its original state
        // //         this.drzave.splice(index, 0, tdrzava);
        // //       });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_drzave_drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_drzave_drzave_service__["a" /* DrzaveService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], DrzaveComponent);

var _a, _b, _c;
// showDialogToAdd(tdrzava) {
//   //alert("Add");
//   console.log("Broj slogova u drzavama(pre brisanja) " + this.drzave.length);
//   var index = this.drzave.indexOf(tdrzava);
//   console.log("index je " + index);
//   this.drzave.splice(index, 1);
//   console.log("Broj slogova u drzavama(showDialogToAdd) " + this.drzave.length);
// }
//}
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

module.exports = "<!-- <p>\r\n  radnik-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@routerTransition]>\r\n  <div class=\"panel-heading\">\r\n      <h3>{{title}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formFSAT\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"fnsatN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Mesec:\r\n                <input class=\"form-control\" formControlName=\"Mesec\"  [(ngModel)]=\"fnsatN.Mesec\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formFSAT.controls['Mesec'].valid && formFSAT.controls['Mesec'].touched\">Mesec nije unet</div> \r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Godina:\r\n                <input class=\"form-control\" formControlName=\"Godina\"  [(ngModel)]=\"fnsatN.Godina\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formFSAT.controls['Godina'].valid && formFSAT.controls['Godina'].touched\">Godina nije uneta</div> \r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Sati:\r\n                <input class=\"form-control\" formControlName=\"Sati\"  [(ngModel)]=\"fnsatN.Sati\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formFSAT.controls['Sati'].valid && formFSAT.controls['Sati'].touched\">Sati nisu uneti</div> \r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Minimalna osnovica:\r\n                  <input  class=\"form-control\" formControlName=\"MinOsnov\"  [(ngModel)]=\"fnsatN.MinOsnov\" >\r\n                </label>\r\n                <div class=\"text-danger\" *ngIf=\"!formFSAT.controls['MinOsnov'].valid && formFSAT.controls['MinOsnov'].touched\">Minimalna osnovica nije uneta</div> \r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Maksimalna osnovica:\r\n                  <input class=\"form-control\" formControlName=\"MaxOsnov\"  [(ngModel)]=\"fnsatN.MaxOsnov\" >\r\n                </label>\r\n                <div class=\"text-danger\" *ngIf=\"!formFSAT.controls['MaxOsnov'].valid && formFSAT.controls['MaxOsnov'].touched\">Maksimalna osnovica nije uneta</div> \r\n              </div>\r\n              \r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"fnsatN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formFSAT.valid\"\r\n                            class=\"btn btn-default\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formFSAT.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Revert\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FondSatiFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/fond-sati.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fondsati_model__ = __webpack_require__("../../../../../src/app/components/fond-sati/fondsati.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { DecimalMask } from './../../../directive/decimal-mask.directive';
//import { DecimalPipe } from '@angular/common';
var FondSatiFormComponent = (function () {
    function FondSatiFormComponent(fnsatService, router, route, formBuilder, _location, flashMessage) {
        this.fnsatService = fnsatService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.fnsatN = new __WEBPACK_IMPORTED_MODULE_6__fondsati_model__["a" /* FondSati */]();
        this.formFSAT = formBuilder.group({
            _id: [],
            Mesec: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Godina: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Sati: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            MinOsnov: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            MaxOsnov: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Opis: []
        });
    }
    FondSatiFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažurianje radnika' : 'Novi radnik';
            if (!id)
                return;
            _this.fnsatService.getFondSati(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.fnsatN = pos.data[0];
                }
                else {
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
    FondSatiFormComponent.prototype.save = function () {
        var _this = this;
        var result, FSValue = this.formFSAT.value;
        if (FSValue._id) {
            result = this.fnsatService.updateFondSati(FSValue).subscribe(function (pos) {
                if (pos.success) {
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
                _this.flashMessage.show(error, {
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
                _this.flashMessage.show(error, {
                    cssClass: 'alert-danger',
                    timeout: 9000
                });
                //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
            });
        }
    };
    FondSatiFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    FondSatiFormComponent.prototype.revert = function () { this.ngOnChanges(); };
    FondSatiFormComponent.prototype.ngOnChanges = function () {
        this.formFSAT.reset({
            Mesec: "",
            Godina: "",
            Sati: "",
            MinOsnov: "",
            MaxOsnov: "",
            Opis: ""
        });
    };
    return FondSatiFormComponent;
}());
FondSatiFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fond-sati-form',
        template: __webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/fond-sati/fond-sati-form/fond-sati-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__["a" /* FondSatiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__["a" /* FondSatiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], FondSatiFormComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!-- <p>\r\n  fond-sati works!\r\n</p> -->\r\n\r\n\r\n<div *ngIf=\"fnsati;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"fnsati\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedFnSati\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n              <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"Godina\" header=\"Godina\" sortable=\"true\" styleClass=\"text-center\"></p-column>\r\n      <p-column field=\"Mesec\" header=\"Mesec\" sortable=\"true\"  styleClass=\"text-center\" ></p-column> \r\n      <p-column field=\"Sati\" header=\"Sati\" sortable=\"true\" styleClass=\"text-right\"></p-column>   \r\n      <p-column field=\"MinOsnov\" header=\"MinOsnov\" sortable=\"true\" styleClass=\"text-right\" >\r\n        <ng-template let-col let-fsati=\"rowData\" pTemplate=\"body\">\r\n            <span>{{fsati[col.field] | currency:'USD':true:'.00'}}</span>\r\n        </ng-template>\r\n\r\n      </p-column>\r\n      <p-column field=\"MaxOsnov\" header=\"MaxOsnov\" sortable=\"true\" styleClass=\"text-right\">\r\n        <ng-template let-col let-fsati=\"rowData\" pTemplate=\"body\">\r\n            <span>{{fsati[col.field] | number:'1.0-6'}}</span>\r\n        </ng-template>\r\n\r\n\r\n      </p-column>\r\n      \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n          <ng-template let-fsat=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectItem(fsat)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateFSati(fsat._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteFSati(fsat)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addFSati()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n            <p-footer>\r\n                <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n            </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    \r\n    <p-dialog header=\"FOND SATI\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{fsatiShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                          GODINA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                             {{fsatiShow.Godina}} \r\n                        </dd>\r\n                        <dt>\r\n                            MESEC\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{fsatiShow.Mesec}}\r\n                        </dd>\r\n                          \r\n                        <dt>\r\n                            SATI\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{fsatiShow.Sati}} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                         MINIMALNA OSNOVICA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.MinOsnov}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                           MAKSIMALNA OSNOVICA\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{fsatiShow.MaxOsnov}}\r\n                               \r\n                           </dd>\r\n                        \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{fsatiShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n    <ng-template #waiting >Waiting...</ng-template>\r\n    \r\n  "

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/fond-sati.service.ts");
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
        this.fnsatiService.getFondSate().subscribe(function (profile) {
            if (profile.success === true) {
                //console.log(profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.fnsati = profile.data;
            }
        }, function (err) {
            console.log(err);
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
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.fnsati.indexOf(tfnsati);
                // console.log("index je " + index);
                _this.fnsati.splice(index, 1);
                _this.fnsatiService.delFondSati(tfnsati._id)
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__["a" /* FondSatiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_opcijeapp_fond_sati_service__["a" /* FondSatiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], FondSatiComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fond-sati.component.js.map

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
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n<div class=\"jumbotron text-center\">\r\n  <h1>MEAN Authentication App</h1>\r\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n</div>\r\n<!-- </div> -->"

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

/***/ "../../../../../src/app/components/konstanta/konstanta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  konstanta works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/konstanta/konstanta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstantaComponent; });
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

var KonstantaComponent = (function () {
    function KonstantaComponent() {
    }
    KonstantaComponent.prototype.ngOnInit = function () {
    };
    return KonstantaComponent;
}());
KonstantaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-konstanta',
        template: __webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/konstanta/konstanta.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KonstantaComponent);

//# sourceMappingURL=konstanta.component.js.map

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

module.exports = "<!-- <p>\n  mesta-form works!\n</p>\n[@slideToRight] -->\n<div class=\"panel panel-primary\" [@routerTransition]>\n  <div class=\"panel-heading\">\n      <h3>{{title}}</h3>\n  </div>\n  <div class=\"panel-body\">\n      <form [formGroup]=\"formMEST\" (ngSubmit)=\"save()\" novalidate>\n          <div class=\"form-group\" >\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"mesto._id\"   type=\"hidden\">\n          </div>\n          <div class=\"form-group\">\n              <label class=\"center-block\">Opština:\n                <select  formControlName=\"Opstina\" class=\"form-control\" placeholder=\"Select Opštinu\"  name=\"Select Opštinu\" [(ngModel)]=\"mesto.Opstina\" >\n                  <option *ngFor=\"let list of opstine\" [value]=\"list._id\"   >\n                    {{ list.Naziv }}\n                  </option>\n                </select>\n              </label>\n          </div>\n          \n          <div class=\"form-group\">\n              <label class=\"center-block\">Naziv mesta:\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"mesto.Naziv\" >\n              </label>\n               <div class=\"text-danger\" *ngIf=\"!formMEST.controls['Naziv'].valid && formMEST.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div> \n              \n            </div>\n            \n            <div class=\"form-group\">\n                <label class=\"center-block\">Ptt:\n                  <input class=\"form-control\" formControlName=\"Ptt\"  [(ngModel)]=\"mesto.Ptt\" >\n                </label>\n              </div>\n              \n             \n\n              <div class=\"form-group\">\n                <label class=\"center-block\">Opis:\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"mesto.Opis\">\n                  </textarea>\n                </label>\n            </div>\n          \n            <div class=\"form-group\">\n                    <div class=\"col-md-offset-5 col-md-12\">\n                        <button type=\"submit\" [disabled]=\"!formMEST.valid\"\n                            class=\"btn btn-default\">\n                        <span class=\"glyphicon glyphicon-saved\"></span>\n                        Save\n                        </button>\n\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formMEST.pristine\"  (click)=\"revert()\">\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\n                          Revert\n                      </button>\n                      \n                    </div>\n              \n                    \n          </div>\n              \n\n\n      </form>\n  </div>\n \n  <div class=\"panel-footer\">\n      \n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\n            Back\n        </button>\n \n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta-form/mesta-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesta_model__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mesta_mesta_service__ = __webpack_require__("../../../../../src/app/services/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_opstine_opstine_service__ = __webpack_require__("../../../../../src/app/services/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
            _this.title = id ? 'Ažurianje mesta' : 'Novo mesto';
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
        animations: [Object(__WEBPACK_IMPORTED_MODULE_7__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_opstine_opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_opstine_opstine_service__["a" /* OpstineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_mesta_mesta_service__["a" /* MestaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_mesta_mesta_service__["a" /* MestaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _f || Object])
], MestaFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mesta-form.component.js.map

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

module.exports = "<!-- <p>\r\n  mesta works!\r\n</p> -->\r\n\r\n<div *ngIf=\"mesta;else  waiting\"  [@routerTransition]>\r\n\r\n    <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n      <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n    </div>\r\n    <p-dataTable [value]=\"mesta\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n              selectionMode=\"single\" [(selection)]=\"selectedMesto\" dataKey=\"_id\"  \r\n              styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n        <p-header><strong>List of Mesta</strong></p-header>       \r\n        \r\n    <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n    <p-column field=\"Opstina.Drzava.Naziv\" header=\"Država\" sortable=\"true\"></p-column>   \r\n     <p-column field=\"Opstina.Naziv\" header=\"Opština\" sortable=\"true\"></p-column> \r\n    <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n    <p-column field=\"Ptt\" header=\"Ptt\" sortable=\"true\"></p-column>\r\n\r\n    <p-column styleClass=\"col-button text-center\" heder=\"Opcije\">\r\n        <ng-template let-mes=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <button type=\"button\" pButton (click)=\"selectMesto(mes)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n            <button type=\"button\" pButton (click)=\"updateMesta(mes._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n            <button type=\"button\" pButton (click)=\"deleteMesto(mes)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-footer>\r\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n            <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addMesta()\" label=\"Add\"></button>\r\n          </div>\r\n      </p-footer>\r\n    </p-dataTable>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n          <p-footer>\r\n              <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n              <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n          </p-footer>\r\n  </p-confirmDialog>\r\n  \r\n  \r\n  \r\n  <p-dialog header=\"Mesto\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n  \r\n          <div>\r\n                  <dl class=\"dl-horizontal\">\r\n                      <dt>\r\n                       ID\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                         {{mesShow._id}}\r\n                      </dd>\r\n                      <!-- <dt>\r\n                          DRŽAVA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                             {{mesShow.Opstina.Drzava.Naziv}} \r\n                        </dd> -->\r\n                \r\n                       <!-- <dt>\r\n                        OPŠTINA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                           {{mesShow.Opstina.Naziv}} \r\n                      </dd>   -->\r\n                      <dt>\r\n                      NAZIV MESTA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                           {{mesShow.Naziv}}\r\n                      </dd>\r\n                      <dt>\r\n                       PTT\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.Ptt}}\r\n                          \r\n                      </dd>\r\n                      \r\n                      <dt>\r\n                      OPIS\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.Opis}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      DATUM UNOSA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.created_at}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      DATUM AŽURIRANJA\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.updatedAt}}\r\n                          \r\n                      </dd>\r\n                      <dt>\r\n                      KORISNIK\r\n                      </dt>\r\n                      <dd class=\"text-success\">\r\n                          {{mesShow.NameUser}}\r\n                          \r\n                      </dd>\r\n              \r\n                  </dl>                        \r\n          </div>\r\n          <p-footer>\r\n                  <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n         </p-footer>\r\n  </p-dialog>\r\n  \r\n  \r\n  <ng-template #waiting >Waiting...</ng-template>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/components/mesta/mesta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MestaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mesta_mesta_service__ = __webpack_require__("../../../../../src/app/services/mesta/mesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesta_model__ = __webpack_require__("../../../../../src/app/components/mesta/mesta.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
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
    function MestaComponent(router, mestaService, confirmationService) {
        this.router = router;
        this.mestaService = mestaService;
        this.confirmationService = confirmationService;
        this.displayDetals = false;
        this.mesShow = new __WEBPACK_IMPORTED_MODULE_3__mesta_model__["a" /* Mesta */]();
        this.Title = "PREGLED MESTA";
    }
    MestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.mestaService.getMesta().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
                _this.mesta = profile.data;
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.loading = false;
    };
    MestaComponent.prototype.selectMesto = function (mesto) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        // console.log(" dobio" + mesto.Opstina);
        // console.log(this.selectedOpstina);
        this.mesShow = this.cloneData(mesto);
        //console.log(" klonirao" + this.mesShow.Opstina);
        //   if (tId) {
        //       alert("opstina je "  +tId);
        //   } else {
        //alert("Select" + this.selectedOpstina);
        //   }
        // //  
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
    MestaComponent.prototype.deleteMesto = function (tmesto) {
        // console.log(tdrzava);
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.mesta.indexOf(tmesto);
                // console.log("index je " + index);
                _this.mesta.splice(index, 1);
                _this.mestaService.delMesto(tmesto._id)
                    .subscribe(null, function (err) {
                    alert("Could not delete mesto.");
                    // Revert the view back to its original state
                    _this.mesta.splice(index, 0, tmesto);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_mesta_mesta_service__["a" /* MestaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_mesta_mesta_service__["a" /* MestaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], MestaComponent);

var _a, _b, _c;
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
exports.push([module.i, "/* body,html{\r\n    height: 100%;\r\n} */\r\n\r\n/*Remove rounded coners*/\r\n\r\nnav.sidebar.navbar {\r\n    border-radius: 0px;\r\n}\r\n\r\nnav.sidebar, .container-main{\r\n    transition: margin 200ms ease-out;\r\n}\r\n\r\n/* Icons */\r\n.menu-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n/* Add gap to nav and right windows.*/\r\n/*.container-main{\r\n    padding: 10px 10px 0 10px;\r\n}*/\r\n\r\n/* Colors */\r\n.navbar-m2p {\r\n    background-color: #00464f;\r\n    border-color: #00464f;\r\n}\r\n.navbar-m2p span, .navbar-m2p a {\r\n    color: #FFFFFF;\r\n}\r\n.active .dropdown-toggle {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n    border-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav .open > a {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n    border-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav li > a:hover, .nav .open > a:hover,\r\n.nav li > a:focus, .nav .open > a:focus,\r\n.nav li > a:active, .nav .open > a:active {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav .open ul > li {\r\n    background-color: rgba(126, 169, 39, 0.4)\r\n}\r\n.navbar-m2p .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #FFFFFF;\r\n    padding: 10px;\r\n}\r\n/* borda menu active */\r\n.navbar-m2p .navbar-nav .active a {\r\n    margin-left: -1px;\r\n    border-left: 5px solid #7ea927;\r\n}\r\n/* Hamburger */\r\n.navbar-toggle {\r\n    background-color: transparent;\r\n    border: 1px solid rgba(126, 169, 39, 0.4);\r\n}\r\n.navbar-toggle .icon-bar,\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n    background-color: #7ea927;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n    opacity: 1;\r\n}\r\n\r\n.navbar-m2p .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n\r\n.nav li.separator {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    background-color: rgba(0, 0, 39, 0.2);\r\n    color: rgba(208, 208, 207, 0.4);\r\n}\r\n\r\n/* .....NavBar: Icon only with coloring/layout.....*/\r\n\r\n/*small/medium side display*/\r\n@media (min-width: 768px) {\r\n\r\n    Allow main to be next to Nav\r\n    .container-main{\r\n        position: absolute;\r\n        width: calc(100% - 40px); /*keeps 100% minus nav size*/\r\n        margin-left: 40px;\r\n        float: right;\r\n    }\r\n\r\n    /*lets nav bar to be showed on mouseover*/\r\n    nav.sidebar:hover + .container-main{\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Center Brand*/\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    /*Center Brand*/\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-left: 0px;\r\n        font-size: 20px;\r\n        line-height: 27px;\r\n    }\r\n\r\n    /*Center Icons*/\r\n    nav.sidebar a{\r\n        padding-right: 13px;\r\n    }\r\n\r\n    /* Colors/style dropdown box*/\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n        position: static;\r\n        float: none;\r\n        width: auto;\r\n        margin-top: 0;\r\n        background-color: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n\r\n    /*allows nav box to use 100% width*/\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n        padding: 0 0px 0 0px;\r\n    }\r\n\r\n    /*gives sidebar width/height*/\r\n    nav.sidebar{\r\n        width: 300px;\r\n        height: 100%;\r\n        margin-left: -260px;\r\n        float: left;\r\n        z-index: 8000;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    /*give sidebar 100% width;*/\r\n    nav.sidebar li {\r\n        width: 100%;\r\n    }\r\n\r\n    /* Move nav to full on mouse over*/\r\n    nav.sidebar:hover{\r\n        margin-left: 0px;\r\n    }\r\n    /*for hiden things when navbar hidden*/\r\n    .forAnimate{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/* .....NavBar: Fully showing nav bar..... */\r\n\r\n@media (min-width: 1330px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        width: calc(100% - 300px); /*keeps 100% minus nav size*/\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Show all nav*/\r\n    nav.sidebar{\r\n        margin-left: 0px;\r\n        float: left;\r\n    }\r\n    /*Show hidden items on nav*/\r\n    nav.sidebar .forAnimate{\r\n        opacity: 1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar-left/navbar-left.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-m2p sidebar\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" href=\"#\">\r\n              OMLADINSKA ZADRUGA\r\n          </a>\r\n      </div>\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n          <ul class=\"nav navbar-nav\">\r\n              <!-- Dashboard -->\r\n              <!-- <li class=\"active open\"> -->\r\n               <li  *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \r\n                  [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">\r\n                    Dashboard <i class=\"menu-icon pull-right hidden-xs showopacity fa fa-tachometer\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n            \r\n              <li class=\"separator\">Content</li>\r\n              <!-- Sifarnik -->\r\n              <li class=\"\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                      <!-- <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">description</span>\r\n                      Šifarnik <span class=\"caret\"></span> -->\r\n                    <span>\r\n                      <i class=\"fa fa-file-o menu-icon pull-right hidden-xs showopacity\" aria-hidden=\"true\"></i>\r\n                      Šifarnik<span class=\"caret\"></span> \r\n                    </span>\r\n\r\n                  </a>\r\n                  <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <!-- <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> -->\r\n                        <li *ngIf=\"authService.loggedIn()\"><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-neuter\" aria-hidden=\"true\"></i> Zadrugari</a></li>\r\n                        <li *ngIf=\"authService.loggedIn()\"><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"></i> Kupci</a></li> \r\n                        <li *ngIf=\"authService.loggedIn()\"><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i> Zanimanja</a></li>\r\n                        <li *ngIf=\"authService.loggedIn()\">\r\n                            <a  [routerLink]=\"['/posao']\" ><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i> \r\n                                Poslovi\r\n                            </a>\r\n                        </li>\r\n                        <!-- <li *ngIf=\"authService.loggedIn()\"><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i> Mesta</a></li> -->\r\n                        <!-- <li *ngIf=\"authService.loggedIn()\"><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i> Opštine</a></li>\r\n                         -->\r\n                         <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/mesta']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>Mesta\r\n                                </a>\r\n                        </li>\r\n                        <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/opstine']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>Opštine\r\n                                </a>\r\n                        </li>\r\n                        <li *ngIf=\"authService.loggedIn()\">\r\n                            <a [routerLink]=\"['/drzave']\" >\r\n                                <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>Države\r\n                            </a>\r\n                        </li>\r\n                    \r\n                  </ul>\r\n              </li>\r\n              <!-- Obrade -->\r\n              <li class=\"\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                     <span><i class=\"fa fa-book menu-icon pull-right hidden-xs showopacity\" aria-hidden=\"true\"></i>\r\n                       Obrade <span class=\"caret\"></span>\r\n                      </span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-plus\" aria-hidden=\"true\"></i> Uputi</a></li>\r\n                        <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-plus\" aria-hidden=\"true\"></i> Fakture</a></li>\r\n                        <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-plus\" aria-hidden=\"true\"></i> Uplate</a></li>\r\n                        <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-money\" aria-hidden=\"true\"></i> Isplate</a></li>\r\n                  </ul>\r\n              </li>\r\n              <!-- Pregledi -->\r\n              <li class=\"dropdown\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                      <!-- <span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon material-icons\">label</span>\r\n                      Pregledi <span class=\"caret\"></span> -->\r\n\r\n                      <span><i class=\"fa fa-eye menu-icon pull-right hidden-xs showopacity\" aria-hidden=\"true\"></i>\r\n                        Pregledi <span class=\"caret\"></span>\r\n                        </span>\r\n\r\n                  </a>\r\n                  <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                        <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-plus\" aria-hidden=\"true\"></i> Add</a></li>\r\n                      <!-- <li><a href=\"#\"> <i class=\"material-icons\">add</i> Add</a></li>\r\n                      <li><a href=\"#\"> <i class=\"material-icons\">sort</i> List</a></li> -->\r\n                  </ul>\r\n              </li>\r\n              <li class=\"separator\">System</li>\r\n\r\n              <li class=\"\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <!-- <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">description</span>\r\n                        Šifarnik <span class=\"caret\"></span> -->\r\n                      <span>\r\n                        <i class=\"fa fa-cog menu-icon pull-right hidden-xs showopacity\" aria-hidden=\"true\"></i>\r\n                        Opcije<span class=\"caret\"></span> \r\n                      </span>\r\n  \r\n                    </a>\r\n                    <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                          <!-- <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> -->\r\n                          <!-- <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-ticket\" aria-hidden=\"true\"></i> Vlasnik</a></li> -->\r\n                          <!-- <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-ticket\" aria-hidden=\"true\"></i> Konstante</a></li>  -->\r\n                          <!-- <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i> Fond sati</a></li> -->\r\n                          <!-- <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i> Radnik </a></li> -->\r\n                         \r\n                          <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/vlasnik']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Vlasnik\r\n                                </a>\r\n                          </li>\r\n                          <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/konstanta']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Konstante\r\n                                </a>\r\n                          </li>\r\n                          <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/fondsati']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Fond sati\r\n                                </a>\r\n                          </li>\r\n                          <li *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/radnik']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Radnik\r\n                                </a>\r\n                          </li>\r\n                          \r\n                          <li *ngIf=\"authService.loggedIn()\">\r\n                            <a [routerLink]=\"['/parametar']\" >\r\n                                <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Parametri\r\n                            </a>\r\n                         </li>\r\n\r\n                          <!-- <li><a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i> Parametri</a></li> -->\r\n                          \r\n                    </ul>\r\n                </li>\r\n              \r\n\r\n              <!-- Users -->\r\n              <li class=\"#\">\r\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                      <!-- <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">group</span>\r\n                      Users <span class=\"caret\"></span> -->\r\n                      <span>Users\r\n                          <i class=\" menu-icon pull-right hidden-xs showopacity fa fa-users\" aria-hidden=\"true\"></i>\r\n                      </span>\r\n                     \r\n                  </a>\r\n                  <!-- [routerLinkActiveOptions] = \"{exact:true}\"   [routerLinkActive]=\"['active']\"-->\r\n                  <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n                      <!-- <li><a href=\"#\"><i class=\"material-icons\">add</i> Add</a></li>\r\n                       <li><a href=\"#\"><i class=\"material-icons\">sort</i> List</a></li> -->\r\n                      <li *ngIf=\"authService.loggedIn()\"   >\r\n                        <a [routerLink]=\"['/profile']\">Profile\r\n                          <i class=\" menu-icon pull-left hidden-xs showopacity fa fa-user-md\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                      </li>\r\n\r\n                      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                        <a [routerLink]=\"['/register']\">Register</a>\r\n                      </li>\r\n                      \r\n\r\n                  </ul>\r\n              </li\r\n              \r\n              >\r\n              <!-- Exit -->\r\n              <li>\r\n                  <a href=\"#\">\r\n                      <!-- <span class=\"menu-icon pull-right hidden-xs showopacity glyphicon material-icons\">exit_to_app</span> Exit -->\r\n\r\n                      <span><i class=\"fa fa-sign-out menu-icon pull-right hidden-xs showopacity\" aria-hidden=\"true\"></i>\r\n                        Exit\r\n                      </span>\r\n                  </a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>\r\n    \r\n    \r\n      \r\n    \r\n    \r\n"

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



var NavbarLeftComponent = (function () {
    function NavbarLeftComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarLeftComponent.prototype.ngOnInit = function () {
    };
    return NavbarLeftComponent;
}());
NavbarLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-left',
        template: __webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar-left/navbar-left.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], NavbarLeftComponent);

var _a, _b;
// templateUrl: './navbar-left.obican.html',
// styleUrls: ['./navbar-left.obican.css'] 
//# sourceMappingURL=navbar-left.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* p-sidebar.ui-sidebar{\r\n    background-color: #00464f;\r\n    border-color: #00464f;\r\n}\r\np-sidebar.ui-widget-content {\r\n    background-color: black;\r\n    border: 1px solid  black;\r\n}\r\np-sidebar.ui-sidebar-left.ui-sidebar-active, .ui-sidebar-right.ui-sidebar-active {\r\n    background-color: #000000;\r\n    border-color: #000000;\r\n}\r\np-sidebar.ui-sidebar-left.ui-sidebar-sm, .ui-sidebar-right.ui-sidebar-sm {\r\n    background-color: black;\r\n}\r\np-sidebar.ui-sidebar {\r\n    background-color: black;\r\n}\r\nui-widget ui-widget-content ui-shadow ui-sidebar-active ui-sidebar-left */\r\n\r\nnav.sidebar.navbar {\r\n    border-radius: 0px;\r\n}\r\n\r\nnav.sidebar, .container-main{\r\n    transition: margin 200ms ease-out;\r\n}\r\n\r\n/* Icons */\r\n.menu-icon {\r\n    font-size: 20px;\r\n}\r\n\r\n/* Add gap to nav and right windows.*/\r\n/*.container-main{\r\n    padding: 10px 10px 0 10px;\r\n}*/\r\n\r\n/* Colors */\r\n.navbar-m2p {\r\n    background-color: #00464f;\r\n    border-color: #00464f;\r\n}\r\n.navbar-m2p span, .navbar-m2p a {\r\n    color: #FFFFFF;\r\n}\r\n.active .dropdown-toggle {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n    border-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav .open > a {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n    border-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav li > a:hover, .nav .open > a:hover,\r\n.nav li > a:focus, .nav .open > a:focus,\r\n.nav li > a:active, .nav .open > a:active {\r\n    background-color: rgba(126, 169, 39, 0.3);\r\n}\r\n.nav .open ul > li {\r\n    background-color: rgba(126, 169, 39, 0.4)\r\n}\r\n.navbar-m2p .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #FFFFFF;\r\n    padding: 10px;\r\n}\r\n/* borda menu active */\r\n.navbar-m2p .navbar-nav .active a {\r\n    margin-left: -1px;\r\n    border-left: 5px solid #7ea927;\r\n}\r\n/* Hamburger */\r\n.navbar-toggle {\r\n    background-color: transparent;\r\n    border: 1px solid rgba(126, 169, 39, 0.4);\r\n}\r\n.navbar-toggle .icon-bar,\r\n.navbar-toggle .icon-bar + .icon-bar {\r\n    background-color: #7ea927;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n    opacity: 1;\r\n}\r\n\r\n.navbar-m2p .dropdown-menu {\r\n    padding: 0px;\r\n}\r\n\r\n.nav li.separator {\r\n    padding: 10px 15px;\r\n    text-transform: uppercase;\r\n    background-color: rgba(0, 0, 39, 0.2);\r\n    color: rgba(208, 208, 207, 0.4);\r\n}\r\n\r\n/* .....NavBar: Icon only with coloring/layout.....*/\r\n\r\n/*small/medium side display*/\r\n@media (min-width: 768px) {\r\n\r\n    Allow main to be next to Nav\r\n    .container-main{\r\n        position: absolute;\r\n        width: calc(100% - 40px); /*keeps 100% minus nav size*/\r\n        margin-left: 40px;\r\n        float: right;\r\n    }\r\n\r\n    /*lets nav bar to be showed on mouseover*/\r\n    nav.sidebar:hover + .container-main{\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Center Brand*/\r\n    nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 0px;\r\n    }\r\n    /*Center Brand*/\r\n    nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-left: 0px;\r\n        font-size: 20px;\r\n        line-height: 27px;\r\n    }\r\n\r\n    /*Center Icons*/\r\n    nav.sidebar a{\r\n        padding-right: 13px;\r\n    }\r\n\r\n    /* Colors/style dropdown box*/\r\n    nav.sidebar .navbar-nav .open .dropdown-menu {\r\n        position: static;\r\n        float: none;\r\n        width: auto;\r\n        margin-top: 0;\r\n        background-color: transparent;\r\n        border: 0;\r\n        box-shadow: none;\r\n    }\r\n\r\n    /*allows nav box to use 100% width*/\r\n    nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n        padding: 0 0px 0 0px;\r\n    }\r\n\r\n    /*gives sidebar width/height*/\r\n    nav.sidebar{\r\n        width: 300px;\r\n        height: 100%;\r\n        margin-left: -260px;\r\n        float: left;\r\n        z-index: 8000;\r\n        margin-bottom: 0px;\r\n    }\r\n\r\n    /*give sidebar 100% width;*/\r\n    nav.sidebar li {\r\n        width: 100%;\r\n    }\r\n\r\n    /* Move nav to full on mouse over*/\r\n    nav.sidebar:hover{\r\n        margin-left: 0px;\r\n    }\r\n    /*for hiden things when navbar hidden*/\r\n    .forAnimate{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/* .....NavBar: Fully showing nav bar..... */\r\n\r\n@media (min-width: 1330px) {\r\n\r\n    /*Allow main to be next to Nav*/\r\n    .container-main{\r\n        width: calc(100% - 300px); /*keeps 100% minus nav size*/\r\n        margin-left: 300px;\r\n    }\r\n\r\n    /*Show all nav*/\r\n    nav.sidebar{\r\n        margin-left: 0px;\r\n        float: left;\r\n    }\r\n    /*Show hidden items on nav*/\r\n    nav.sidebar .forAnimate{\r\n        opacity: 1;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default  fixed-top\">\r\n  <!-- <div class=\"container\"> -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <!-- <a class=\"navbar-brand navbar-left\" href=\"#\">GLAVNI</a> -->\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n         <li>\r\n          <a (click)=\"visibleSidebar1 = true\">\r\n            <i class=\"fa fa-sliders fa-2x\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </li>\r\n        &nbsp;&nbsp;\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">\r\n          <i class=\"fa fa-home fa-2x\" aria-hidden=\"true\"></i>\r\n          OMLADINSKA ZADRUGA</a>\r\n        </li>\r\n          \r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        \r\n        <!-- (click)=\"onClickQuickMenu()\" -->\r\n        <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"modal1.show()\">\r\n          <span class=\"glyphicon glyphicon-plus-sign fa-2x\" aria-hidden=\"true\" title=\"Quick add\"></span>\r\n        <!-- <i class=\"menu-icon pull-right hidden-xs showopacity fa fa-tachometer fa-2x\" aria-hidden=\"true\"></i> -->\r\n          </a>\r\n        </li>\r\n              \r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n        <li>|</li>\r\n        \r\n        <li><a (click)=\"onClickHelp()\" href=\"#\">\r\n            <span class=\"glyphicon glyphicon-question-sign fa-2x\" aria-hidden=\"true\" title=\"Help\"></span>\r\n          <!-- <i class=\"menu-icon pull-right hidden-xs showopacity fa fa-tachometer fa-2x\" aria-hidden=\"true\"></i> -->\r\n        </a></li>\r\n        <li>eee</li>\r\n\r\n      </ul>\r\n    </div>\r\n   \r\n  <!-- </div> -->\r\n</nav>\r\n\r\n\r\n <app-modal #modal1>\r\n  <div class=\"app-modal-header\">\r\n    <a (click)=\"modal1.hide()\">\r\n     <span class=\"text-right\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" title=\"Close\"></span>\r\n    </a>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n      <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n                <h3 class=\"text-primary\">Dokumenti</h3>\r\n                <ul class=\"nav nav-pills nav-stacked\" >\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Uputi</a></li>\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Fakture</a></li>\r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Uplate</a></li>        \r\n                    <li role=\"navigation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"> <a [routerLink]=\"['/dashboard']\">Isplate</a></li>        \r\n                </ul>\r\n            </div>\r\n             <div class=\"col-xs-6\">\r\n                <h3 class=\"text-primary\">Šifarnici</h3>\r\n                <ul class=\"nav nav-pills nav-stacked\">\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"><a href=\"#\">\r\n                            <i class=\"menu-icon hidden-xs fa fa-neuter\" aria-hidden=\"true\"></i>&nbsp;Zadrugari</a></li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\"><a href=\"#\">\r\n                            <i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"></i>&nbsp;Kupci</a></li> \r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Zanimanja</a></li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a  [routerLink]=\"['/posao/new']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp; \r\n                                Poslovi\r\n                            </a>\r\n                        </li>\r\n                     \r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/mesta/new']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Mesta\r\n                                </a>\r\n                        </li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                                <a [routerLink]=\"['/opstine/new']\" >\r\n                                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Opštine\r\n                                </a>\r\n                        </li>\r\n                        <li role=\"presentation\" (click)=\"modal1.hide()\" *ngIf=\"authService.loggedIn()\">\r\n                            <a [routerLink]=\"['/drzave/new']\" >\r\n                                <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Države\r\n                            </a>\r\n                        </li>\r\n                </ul>\r\n             </div>\r\n          \r\n      </div>\r\n       \r\n\r\n  </div>\r\n\r\n  <!-- <div class=\"app-modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"modal1.hide()\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n  </div> -->\r\n</app-modal>\r\n\r\n\r\n<p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"  styleClass=\"ui-sidebar-sm\"  >\r\n        <h1></h1>\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                <a href=\"#\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-neuter\" aria-hidden=\"true\" ></i>&nbsp;Zadrugari</a>\r\n                </li>\r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n                    <a href=\"#\">\r\n                    <i class=\"menu-icon hidden-xs fa fa-address-card\" aria-hidden=\"true\"  ></i>&nbsp;Kupci</a>\r\n                </li> \r\n                \r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a href=\"#\"><i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Zanimanja</a>\r\n                </li>\r\n               \r\n                <li role=\"presentation\" (click)=\"visibleSidebar1 = false\"  *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a  [routerLink]=\"['/posao']\" >\r\n                    <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp; \r\n                        Poslovi\r\n                    </a>\r\n                </li>\r\n             \r\n                <li role=\"presentation\" (click)=\"visibleSidebar1 = false\" *ngIf=\"authService.loggedIn()\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/mesta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Mesta\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\"  *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/opstine']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Opštine\r\n                        </a>\r\n                </li>\r\n                <li role=\"presentation\" *ngIf=\"authService.loggedIn()\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/drzave']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-list-alt\" aria-hidden=\"true\"></i>&nbsp;Države\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/vlasnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Vlasnik\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/konstanta']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Konstante\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                            [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                        <a [routerLink]=\"['/fondsati']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Fond sati\r\n                        </a>\r\n                  </li>\r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" > \r\n                        <a [routerLink]=\"['/radnik']\" >\r\n                            <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Radnik\r\n                        </a>\r\n                  </li>\r\n                  \r\n                  <li *ngIf=\"authService.loggedIn()\" role=\"presentation\" (click)=\"visibleSidebar1 = false\" \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/parametar']\" >\r\n                        <i class=\"menu-icon hidden-xs fa fa-object-group\" aria-hidden=\"true\"></i>Parametri\r\n                    </a>\r\n                 </li>\r\n                 <li *ngIf=\"authService.loggedIn()\"   role=\"presentation\" (click)=\"visibleSidebar1 = false\"  \r\n                        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" >\r\n                    <a [routerLink]=\"['/profile']\">Profile\r\n                      <i class=\" menu-icon pull-left hidden-xs showopacity fa fa-user-md\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" \r\n                        [routerLinkActiveOptions] = \"{exact:true}\"  role=\"presentation\" (click)=\"visibleSidebar1 = false\">\r\n                    <a [routerLink]=\"['/register']\">Register</a>\r\n                  </li>\r\n        </ul>\r\n \r\n     \r\n  <!-- <h1 style=\"font-weight:normal\">Left Sidebar</h1>\r\n  <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\r\n  <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button> -->\r\n\r\n\r\n\r\n</p-sidebar>"

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
        //    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
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

// @Component({
//     selector: 'app-not-found',
//     templateUrl: './not-found.component.html',
//     styleUrls: ['not-found.component.scss'],
//     animations: [routerTransition()]
// })
// export class NotFoundComponent { } 
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

module.exports = "<!-- <p>\r\n  opstine-form works!\r\n</p> -->\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-lg-9 col-md-9 col-xs-10\"> -->\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">\r\n          <h3>{{title}}</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n          <form [formGroup]=\"formOPST\" (ngSubmit)=\"save()\" novalidate>\r\n              <div class=\"form-group\" >\r\n                  <!-- <label class=\"center-block\">ID: -->\r\n                    <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"opstina._id\"   type=\"hidden\">\r\n                  <!-- <label> -->\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"center-block\">Država:\r\n                    <select  formControlName=\"Drzava\" class=\"form-control\" placeholder=\"Select Državu\"  name=\"Select Državu\" [(ngModel)]=\"opstina.Drzava\" >\r\n                      <option *ngFor=\"let list of drzave\" [value]=\"list._id\"   >\r\n                        {{ list.Naziv }}\r\n                      </option>\r\n                    </select>\r\n                  </label>\r\n              </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">Kod opštine:\r\n                      <input  class=\"form-control\" formControlName=\"RegOzn\"  [(ngModel)]=\"opstina.RegOzn\" >\r\n                    </label>\r\n                    <div class=\"text-danger\" *ngIf=\"!formOPST.controls['RegOzn'].valid && formOPST.controls['RegOzn'].touched\">{{ titleAlertRegOzn }}</div>\r\n                    \r\n                  </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"center-block\">Naziv opštine:\r\n                    <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"opstina.Naziv\" >\r\n                  </label>\r\n                  <div class=\"text-danger\" *ngIf=\"!formOPST.controls['Naziv'].valid && formOPST.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label class=\"center-block\">šifra poreza opštine:\r\n                      <input class=\"form-control\" formControlName=\"SifPorez\"  [(ngModel)]=\"opstina.SifPorez\" >\r\n                    </label>\r\n                  </div>\r\n                  \r\n                  <div class=\"form-group\">\r\n                      <label class=\"center-block\">Kontrolni broj opštine:\r\n                        <input class=\"form-control\" formControlName=\"KontBr\"  [(ngModel)]=\"opstina.KontBr\" >\r\n                      </label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"center-block\">Poziv na broj opštine:\r\n                          <input class=\"form-control\" formControlName=\"PozivNaBr\"  [(ngModel)]=\"opstina.PozivNaBr\" >\r\n                        </label>\r\n                      </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"center-block\">Opis:\r\n                      <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"opstina.Opis\">\r\n\r\n                      </textarea>\r\n                    </label>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                        <div class=\"col-md-offset-5 col-md-12\">\r\n                            <button type=\"submit\" [disabled]=\"!formOPST.valid\"\r\n                                class=\"btn btn-default\">\r\n                            <span class=\"glyphicon glyphicon-saved\"></span>\r\n                            Save\r\n                            </button>\r\n\r\n                          <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formOPST.pristine\"  (click)=\"revert()\">\r\n                              <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                              Revert\r\n                          </button>\r\n                          \r\n                        </div>\r\n                  \r\n                        \r\n              </div>\r\n                  \r\n\r\n\r\n          </form>\r\n      </div>\r\n     \r\n      <div class=\"panel-footer\">\r\n          <!-- <div class=\"col-md-offset-2 col-md-9\"> -->\r\n              <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n                <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n                Back\r\n            </button>\r\n          <!-- </div> -->\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n    <!-- </div>   coll -->\r\n <!--   </div>  row -->\r\n\r\n    \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine-form/opstine-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_drzave_drzave_service__ = __webpack_require__("../../../../../src/app/services/drzave/drzave.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_opstine_opstine_service__ = __webpack_require__("../../../../../src/app/services/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opstine_model__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
        this.titleAlertNaziv = "Naziv,This field is required !!!";
        this.titleAlertRegOzn = "Regionalna oznaka, This field is required !!!";
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
            _this.title = id ? 'Ažurianje opštine' : 'Nova opština';
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
        styles: [__webpack_require__("../../../../../src/app/components/opstine/opstine-form/opstine-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_opstine_opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_opstine_opstine_service__["a" /* OpstineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_drzave_drzave_service__["a" /* DrzaveService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_drzave_drzave_service__["a" /* DrzaveService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _f || Object])
], OpstineFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=opstine-form.component.js.map

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

module.exports = "<!-- <p>\r\n  opstine works!\r\n</p> -->\r\n\r\n<!-- <div class=\"row\"> -->\r\n    <div *ngIf=\"opstine;else  waiting\" >\r\n      <!-- <h3 class=\"first\">PREGLED OPŠTINA</h3>\r\n      <input #gb type=\"text\" placeholder=\"Global search\" pInputText focus>\r\n      <p></p> -->\r\n\r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n         <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"opstine\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedOpstina\" dataKey=\"_id\"  [loading]=\"loading\" loadingIcon=\"fa fa-spinner\" \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n          <p-header><strong>List of Opštine</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n      <p-column field=\"Drzava.Naziv\" header=\"Drzava\" sortable=\"true\"></p-column>  \r\n      <p-column field=\"RegOzn\" header=\"Oznaka\" sortable=\"true\"></p-column>                               \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n      <p-column field=\"SifPorez\" header=\"SifPorez\" sortable=\"true\"></p-column>\r\n      <!-- <p-column field=\"KontBr\" header=\"KontBr\" sortable=\"true\"></p-column>\r\n      <p-column field=\"PozivNaBr\" header=\"PozivNaBr\" sortable=\"true\"></p-column> -->\r\n      \r\n      <!-- <p-column styleClass=\"col-button text-center\" heder=\"Opcije\" > -->\r\n\r\n      <p-column styleClass=\"col-button text-center\" heder=\"Opcije\">\r\n          <ng-template let-opst=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectOpstina(opst)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateOpstinu(opst._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteOpstinu(opst)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n     </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addOpstine()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n\r\n<!-- </div> -->\r\n\r\n\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n        </p-footer>\r\n</p-confirmDialog>\r\n\r\n\r\n\r\n<p-dialog header=\"Opština\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n\r\n        <div>\r\n                <dl class=\"dl-horizontal\">\r\n                    <dt>\r\n                     ID\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                       {{opstShow._id}}\r\n                    </dd>\r\n                  \r\n                    <dt>\r\n                      KOD OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                         {{opstShow.RegOzn}} \r\n                    </dd>\r\n                    <dt>\r\n                    NAZIV OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                         {{opstShow.Naziv}}\r\n                    </dd>\r\n                    <dt>\r\n                     ŠIFRA POREZA OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.SifPorez}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    KONTROLNI BROJ OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.KontBr}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    POZIV NA BROJ OPŠTINE\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.PozivNaBr}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    OPIS\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.Opis}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    DATUM UNOSA\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.created_at}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    DATUM AŽURIRANJA\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.updatedAt}}\r\n                        \r\n                    </dd>\r\n                    <dt>\r\n                    KORISNIK\r\n                    </dt>\r\n                    <dd class=\"text-success\">\r\n                        {{opstShow.NameUser}}\r\n                        \r\n                    </dd>\r\n            \r\n                </dl>                        \r\n        </div>\r\n                        \r\n\r\n        <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n            <p-footer>\r\n                 <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n            </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<ng-template #waiting >Waiting...</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpstineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_opstine_opstine_service__ = __webpack_require__("../../../../../src/app/services/opstine/opstine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opstine_model__ = __webpack_require__("../../../../../src/app/components/opstine/opstine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
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
    function OpstineComponent(router, opstService, confirmationService) {
        this.router = router;
        this.opstService = opstService;
        this.confirmationService = confirmationService;
        this.displayDetals = false;
        this.opstShow = new __WEBPACK_IMPORTED_MODULE_3__opstine_model__["a" /* Opstine */]();
        this.Title = "PREGLED OPŠTINA";
    }
    OpstineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.opstService.getOpstine().subscribe(function (profile) {
            if (profile.success === true) {
                // console.log(profile);
                console.log(" data je " + profile.data[0].Drzava.Naziv);
                _this.opstine = profile.data;
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.loading = false;
    };
    OpstineComponent.prototype.selectOpstina = function (opstina) {
        // this.selectedOpstina=opstina;  
        this.displayDetals = true;
        // console.log(opstina);
        // console.log(this.selectedOpstina);
        this.opstShow = this.cloneData(opstina);
        //   if (tId) {
        //       alert("opstina je "  +tId);
        //   } else {
        //alert("Select" + this.selectedOpstina);
        //   }
        // //  
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
    OpstineComponent.prototype.deleteOpstinu = function (topstina) {
        // console.log(tdrzava);
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.opstine.indexOf(topstina);
                console.log("index je " + index);
                _this.opstine.splice(index, 1);
                _this.opstService.delOpstine(topstina._id)
                    .subscribe(null, function (err) {
                    alert("Could not delete drzavu.");
                    // Revert the view back to its original state
                    _this.opstine.splice(index, 0, topstina);
                });
            }
        });
        // if (confirm("Are you sure you want to delete " + topstina.Naziv + "?")) {
        //   var index = this.opstine.indexOf(topstina);
        //   console.log("index je " + index);
        //   this.opstine.splice(index, 1);
        //   this.opstService.delOpstine(topstina._id)
        //     .subscribe(null,
        //       err => {
        //         alert("Could not delete drzavu.");
        //         // Revert the view back to its original state
        //         this.opstine.splice(index, 0, topstina);
        //       });
        // }
    };
    return OpstineComponent;
}());
OpstineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-opstine',
        template: __webpack_require__("../../../../../src/app/components/opstine/opstine.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/opstine/opstine.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_opstine_opstine_service__["a" /* OpstineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_opstine_opstine_service__["a" /* OpstineService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], OpstineComponent);

var _a, _b, _c;
//# sourceMappingURL=opstine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/opstine/opstine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opstine; });
//import { Drzave } from './../drzave/drzave.model';
var Opstine = (function () {
    function Opstine() {
    }
    return Opstine;
}());

//# sourceMappingURL=opstine.model.js.map

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

module.exports = "<div class=\"row\"  [@routerTransition] >\r\n    <div *ngIf=\"params;else  waiting\" class=\" table-responsive col-lg-9 col-md-9 col-xs-10\">\r\n\r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n         <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"params\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedParam\" dataKey=\"_id\"  [loading]=\"loading\" loadingIcon=\"fa-spinner\" \r\n                styleClass=\"table  table-striped table-condensed\" [immutable]=false >\r\n      <p-header><strong>List of Parameters</strong></p-header>        \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column>    \r\n      <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\" ></p-column>\r\n      <p-column field=\"Koristi\" header=\"Koristi\" sortable=\"true\" styleClass=\"text-center\"></p-column>\r\n      <p-column field=\"VredString\" header=\"STRING\" sortable=\"true\"></p-column> \r\n      <p-column field=\"VredNumeric\" header=\"NUMERIC\" sortable=\"true\" styleClass=\"text-right\"></p-column> \r\n      <!-- <p-column field=\"Opis\" header=\"Opis\" sortable=\"true\"></p-column> -->\r\n      <!-- <p-column field=\"NameUser\" header=\"User\" sortable=\"true\"></p-column> -->\r\n      \r\n      <p-column styleClass=\"col-button\" heder=\"Opcije\">\r\n          <ng-template let-param=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectParam(param)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateParam(param._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteParam(param)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          \r\n            </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAddParam()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n\r\n\r\n<p-dialog header=\"Parametar\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n\r\n    <div>\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                 ID\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                   {{parShow._id}}\r\n                </dd>\r\n                <dt>\r\n                NAZIV PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                     {{parShow.Naziv}}\r\n                </dd>\r\n                <dt>\r\n                 KORISTI PARAMETAR\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.Koristi}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                STRING VREDNOST PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.VredString}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                NUMERIČKA VREDNOST PARAMETRA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.VredNumeric}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                OPIS\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.Opis}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM UNOSA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.created_at}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                DATUM AŽURIRANJA\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.updatedAt}}\r\n                    \r\n                </dd>\r\n                <dt>\r\n                KORISNIK\r\n                </dt>\r\n                <dd class=\"text-success\">\r\n                    {{parShow.NameUser}}\r\n                    \r\n                </dd>\r\n        \r\n            </dl>                        \r\n    </div>\r\n                    \r\n\r\n    <!-- <p>JSON.stringify({{selectedOpstina}})</p> -->\r\n        <p-footer>\r\n             <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n        </p-footer>\r\n</p-dialog>\r\n\r\n<ng-template #waiting >Waiting...</ng-template>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/parametar/parametar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_opcijeapp_parametar_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parametar_model__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {FlashMessagesService} from 'angular2-flash-messages';


//import * as $ from 'jquery';
var ParametarComponent = (function () {
    function ParametarComponent(paramService, router, confirmationService) {
        this.paramService = paramService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.valuekraj = 0;
        this.displayDetals = false;
        this.parShow = new __WEBPACK_IMPORTED_MODULE_3__parametar_model__["a" /* Parametar */]();
        this.Title = "PREGLED PARAMETARA";
    }
    ParametarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.paramService.getParametars().subscribe(function (profile) {
            if (profile.success === true) {
                _this.params = profile.data;
                _this.loading = false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.loading = false;
        //$("#glparam").show(1000);
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
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                var index = _this.params.indexOf(tparam);
                _this.params.splice(index, 1);
                _this.paramService.delParametar(tparam._id)
                    .subscribe(null, function (err) {
                    alert("Could not delete param.");
                    // Revert the view back to its original state
                    _this.params.splice(index, 0, tparam);
                });
            }
        });
    };
    ParametarComponent.prototype.selectParam = function (tprm) {
        //   if (tId) {
        //       alert("Param id je "  + tId);
        // //     } else {
        // //         alert("Select" + this.selectedParam);
        // //     }
        // //   //  
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
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_opcijeapp_parametar_service__["a" /* ParametarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_opcijeapp_parametar_service__["a" /* ParametarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], ParametarComponent);

var _a, _b, _c;
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

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  parmetar-form works!\r\n</p>  col-lg-9 col-md-9 col-xs-10-->\r\n<!-- <div class=\"row\">\r\n<div class=\"col-lg-9 col-md-9 col-xs-10\"> -->\r\n<div class=\"panel panel-primary\"  [@routerTransition]>\r\n  <div class=\"panel-heading\">\r\n      <h3>{{title}}</h3>\r\n\r\n  </div>\r\n<div class=\"panel-body \">\r\n\r\n  <!-- <div   ng-repeat=\"item in ERROR\" ng-value=\"item\" class=\"text-danger\" >\r\n      <p>{{ERROR.KodDrzave.message}}</p>\r\n      <p>{{ERROR.Naziv.message}}</p>\r\n      \r\n  </div> -->\r\n \r\n      <form [formGroup]=\"frParam\" (ngSubmit)=\"save()\">\r\n          <div class=\"form-group\" >\r\n              <!-- <label class=\"center-block\">ID: -->\r\n                <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"parametar._id\"   type=\"hidden\">\r\n              <!-- </label> -->\r\n            </div>\r\n        \r\n\r\n           <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"parametar.Naziv\" >\r\n              </label>\r\n              <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!frParam.controls['Naziv'].valid && frParam.controls['Naziv'].touched\">\r\n                <!-- <i class=\"fa fa-close\"></i> -->\r\n                <!-- {{ titleAlertNaziv }} -->\r\n                <span *ngIf=\"frParam.controls['Naziv'].errors['required']\">Naziv is required</span>\r\n                <span *ngIf=\"frParam.controls['Naziv'].errors['minlength']\">Naziv be longer than min 3 characters</span>\r\n                <span *ngIf=\"frParam.controls['Naziv'].errors['maxlength']\">Naziv be longer than max 25 characters</span>\r\n                \r\n\r\n            </div>\r\n              <!-- <div class=\"text-danger\" *ngIf=\"!frParam.controls['Naziv'].valid && frParam.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div> -->\r\n              \r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label class=\"center-block\">\r\n                  <input type=\"checkbox\" formControlName=\"Koristi\" [(ngModel)]=\"parametar.Koristi\"  value=\"1\">Koristi.\r\n                </label>\r\n                \r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Text vrednost:\r\n                  <input class=\"form-control\" formControlName=\"VredString\"  [(ngModel)]=\"parametar.VredString\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Brojčana vrednost:\r\n                  <input class=\"form-control\" formControlName=\"VredNumeric\"  [(ngModel)]=\"parametar.VredNumeric\" >\r\n                </label>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <!-- <input class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"parametar.Opis\" > -->\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"parametar.Opis\">\r\n\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n            <!-- <div style=\"margin-bottom: 1em\">\r\n                <button type=\"submit\"\r\n                        [disabled]=\"!frParam.valid\" class=\"btn btn-success\">Save</button> &nbsp;\r\n            </div> -->\r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!frParam.valid\"\r\n                            class=\"btn btn-default\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"frParam.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Revert\r\n                      </button>\r\n                      \r\n                   </div>\r\n              \r\n                      <!-- <div class=\"col-md-offset-2 col-md-6\">\r\n                              <button type=\"submit\" [disabled]=\"!frParam.valid\"\r\n                                class=\"btn btn-default\">\r\n                               <span class=\"glyphicon glyphicon-saved\"></span>\r\n                              Save\r\n                              </button>\r\n              \r\n                      </div> -->\r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n      \r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n        <!-- <div class=\"col-md-offset-2 col-md-9\"> -->\r\n            <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n              <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n              Back\r\n          </button>\r\n        <!-- </div> -->\r\n    </div>\r\n\r\n</div>\r\n    \r\n<!-- <div class=\"col-md-offset-2 col-md-9\">\r\n    <button (click)=\"backClicked()\"  class=\"btn btn-default btn-block\">\r\n    <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n    Back\r\n  </button>\r\n</div> -->\r\n\r\n\r\n<!-- </div>   coll\r\n</div>  row -->\r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParmetarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parametar_model__ = __webpack_require__("../../../../../src/app/components/parametar/parametar.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_opcijeapp_parametar_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/parametar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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







var ParmetarFormComponent = (function () {
    function ParmetarFormComponent(router, route, formBuilder, paramService, _location) {
        this.router = router;
        this.route = route;
        this.paramService = paramService;
        this._location = _location;
        this.parametar = new __WEBPACK_IMPORTED_MODULE_3__parametar_model__["a" /* Parametar */]();
        this.titleAlertNaziv = 'This field is required !!!';
        this.frParam = formBuilder.group({
            _id: [],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(25)
                ]],
            Koristi: [],
            VredString: [],
            VredNumeric: [],
            Opis: []
        });
    }
    ParmetarFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Edit Parametar' : 'ADD Parametar';
            if (!id)
                return;
            _this.paramService.getParametar(id)
                .subscribe(function (param) {
                console.log(param);
                if (param.success) {
                    _this.parametar = param.data[0];
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
    ParmetarFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    ParmetarFormComponent.prototype.save = function () {
        var _this = this;
        var result, paramValue = this.frParam.value;
        if (paramValue._id) {
            console.log("usao u parametar");
            result = this.paramService.updateParametar(paramValue);
        }
        else {
            try {
                result = this.paramService.addParametar(paramValue);
            }
            catch (er) {
                console.log("SAVE KOD ADD catch error" + er.Message);
            }
            if (result) {
                console.log("SAVE KOD ADD" + result);
            }
        }
        result.subscribe(function (data) { return _this.router.navigate(['parametar']); });
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
    return ParmetarFormComponent;
}());
ParmetarFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parmetar-form',
        template: __webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parametar/parmetar-form/parmetar-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_opcijeapp_parametar_service__["a" /* ParametarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_opcijeapp_parametar_service__["a" /* ParametarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _e || Object])
], ParmetarFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=parmetar-form.component.js.map

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

module.exports = "<!-- <p>\r\n  mesta-form works!\r\n</p>\r\n[@slideToRight] -->\r\n<div class=\"panel panel-primary\" [@routerTransition]>\r\n  <div class=\"panel-heading\">\r\n      <h3>{{title}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formPOSAO\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"posaoN._id\"   type=\"hidden\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Stručna sprema:\r\n                <select  formControlName=\"StepenSS\" class=\"form-control\"  [(ngModel)]=\"posaoN.StepenSS\" >\r\n                  <option *ngFor=\"let list of strSprema\" [value]=\"list\"   >\r\n                    {{ list }}\r\n                  </option>\r\n                </select>\r\n              </label>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Naziv posla:\r\n                <input class=\"form-control\" formControlName=\"Naziv\"  [(ngModel)]=\"posaoN.Naziv\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formPOSAO.controls['Naziv'].valid && formPOSAO.controls['Naziv'].touched\">{{ titleAlertNaziv }}</div> \r\n              \r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Škola:\r\n                  <input class=\"form-control\" formControlName=\"Skola\"  [(ngModel)]=\"posaoN.Skola\" >\r\n                </label>\r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Šifra:\r\n                  <input class=\"form-control\" formControlName=\"Sifra\"  [(ngModel)]=\"posaoN.Sifra\" >\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Šifra1:\r\n                  <input class=\"form-control\" formControlName=\"Sifra1\"  [(ngModel)]=\"posaoN.Sifra1\" >\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"posaoN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formPOSAO.valid\"\r\n                            class=\"btn btn-default\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formPOSAO.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Revert\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/posao/posao-form/posao-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosaoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_EnumApp_StepenSS_enum__ = __webpack_require__("../../../../../src/app/shared/EnumApp/StepenSS.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__posao_model__ = __webpack_require__("../../../../../src/app/components/posao/posao.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__posao_service__ = __webpack_require__("../../../../../src/app/components/posao/posao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { KeysPipe } from './../../../shared/PipeApp/keys.pipe';








var PosaoFormComponent = (function () {
    function PosaoFormComponent(posService, router, route, formBuilder, _location) {
        this.posService = posService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.posaoN = new __WEBPACK_IMPORTED_MODULE_6__posao_model__["a" /* Posao */]();
        this.titleAlertNaziv = "Naziv,This field is required !!!";
        this.strSprema = __WEBPACK_IMPORTED_MODULE_0__shared_EnumApp_StepenSS_enum__["a" /* StepenSS */];
        this.formPOSAO = formBuilder.group({
            _id: [],
            StepenSS: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            Naziv: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ]],
            Skola: [],
            Sifra: [],
            Sifra1: [],
            Opis: []
        });
    }
    PosaoFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažurianje posla' : 'Novi posao';
            if (!id)
                return;
            _this.posService.getPosao(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.posaoN = pos.data[0];
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
    PosaoFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    PosaoFormComponent.prototype.save = function () {
        var _this = this;
        var result, posValue = this.formPOSAO.value;
        if (posValue._id) {
            result = this.posService.updatePosao(posValue);
        }
        else {
            result = this.posService.addPosao(posValue);
        }
        result.subscribe(function (data) { return _this.router.navigate(['posao']); });
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
    return PosaoFormComponent;
}());
PosaoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-posao-form',
        template: __webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/posao/posao-form/posao-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animation_router_animations__["a" /* routerTransition */])()]
        //pipes: [KeysPipe]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__posao_service__["a" /* PosaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__posao_service__["a" /* PosaoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
], PosaoFormComponent);

var _a, _b, _c, _d, _e;
//https://stackoverflow.com/questions/35750059/select-based-on-enum-in-angular2
// <select>
// <option *ngFor="let item of strSprema | keys" [value]="item.key">{{item.value}}</option>
// </select>
//# sourceMappingURL=posao-form.component.js.map

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

module.exports = "<!-- <p>\r\n  posao works!\r\n</p> -->\r\n\r\n<div *ngIf=\"poslovi;else  waiting\"  [@routerTransition]>\r\n    \r\n        <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n            <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n        </div>\r\n        <p-dataTable [value]=\"poslovi\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                  selectionMode=\"single\" [(selection)]=\"selectedPosao\" dataKey=\"_id\"   \r\n                  styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                  resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n                <p-header><strong>{{Title}}</strong></p-header>       \r\n        <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n        <p-column field=\"Naziv\" header=\"Naziv\" sortable=\"true\"></p-column>\r\n        <p-column field=\"StepenSS\" header=\"Sprema\" sortable=\"true\"></p-column>   \r\n        <p-column field=\"Skola\" header=\"Škola\" sortable=\"true\"></p-column> \r\n        <p-column field=\"Sifra\" header=\"Šifra\" sortable=\"true\"></p-column>\r\n    \r\n        <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n            <ng-template let-pos=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <button type=\"button\" pButton (click)=\"selectPosao(pos)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n                <button type=\"button\" pButton (click)=\"updatePosao(pos._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n                <button type=\"button\" pButton (click)=\"deletePosao(pos)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addPosao()\" label=\"Add\"></button>\r\n              </div>\r\n          </p-footer>\r\n        </p-dataTable>\r\n      </div>\r\n      \r\n      \r\n      \r\n      <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n              <p-footer>\r\n                  <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n                  <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n              </p-footer>\r\n      </p-confirmDialog>\r\n      \r\n      \r\n      \r\n      <p-dialog header=\"Posao\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n      \r\n              <div>\r\n                      <dl class=\"dl-horizontal\">\r\n                          <dt>\r\n                           ID\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                             {{posShow._id}}\r\n                          </dd>\r\n                          <dt>\r\n                              NAZIV POSLA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                                {{posShow.Naziv}}\r\n                          </dd>\r\n                          <dt>\r\n                              STRUČNA SPREMA\r\n                            </dt>\r\n                            <dd class=\"text-success\">\r\n                                 {{posShow.StepenSS}} \r\n                            </dd>  \r\n                          <dt>\r\n                              ŠKOLA\r\n                            </dt>\r\n                            <dd class=\"text-success\">\r\n                                 {{posShow.Skola}} \r\n                            </dd> \r\n                       \r\n                          <dt>\r\n                           ŠIFRA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.Sifra}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                              ŠIFRA 1\r\n                             </dt>\r\n                             <dd class=\"text-success\">\r\n                                 {{posShow.Sifra1}}\r\n                                 \r\n                             </dd>\r\n                          \r\n                          <dt>\r\n                          OPIS\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.Opis}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          DATUM UNOSA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.created_at}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          DATUM AŽURIRANJA\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.updatedAt}}\r\n                              \r\n                          </dd>\r\n                          <dt>\r\n                          KORISNIK\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                              {{posShow.NameUser}}\r\n                              \r\n                          </dd>\r\n                  \r\n                      </dl>                        \r\n              </div>\r\n              <p-footer>\r\n                      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n             </p-footer>\r\n      </p-dialog>\r\n      \r\n      \r\n      <ng-template #waiting >Waiting...</ng-template>\r\n      \r\n    "

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
    function PosaoComponent(router, posService, confirmationService) {
        this.router = router;
        this.posService = posService;
        this.confirmationService = confirmationService;
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
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                //Actual logic to perform a confirmation
                var index = _this.poslovi.indexOf(tposao);
                // console.log("index je " + index);
                _this.poslovi.splice(index, 1);
                _this.posService.delPosao(tposao._id)
                    .subscribe(null, function (err) {
                    alert("Could not delete mesto.");
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__posao_service__["a" /* PosaoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__posao_service__["a" /* PosaoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], PosaoComponent);

var _a, _b, _c;
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
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-form/radnik-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  radnik-form works!\r\n</p> -->\r\n\r\n<div class=\"panel panel-primary\" [@routerTransition]>\r\n  <div class=\"panel-heading\">\r\n      <h3>{{title}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n      <form [formGroup]=\"formRAD\" (ngSubmit)=\"save()\" novalidate>\r\n          <div class=\"form-group\" >\r\n               <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"radnikN._id\"   type=\"hidden\">\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n              <label class=\"center-block\">Šifra:\r\n                <input class=\"form-control\" formControlName=\"SifraRad\"  [(ngModel)]=\"radnikN.SifraRad\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formRAD.controls['SifraRad'].valid && formRAD.controls['SifraRad'].touched\">Šifra nije uneta</div> \r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Prezime:\r\n                <input class=\"form-control\" formControlName=\"Prezime\"  [(ngModel)]=\"radnikN.Prezime\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formRAD.controls['Prezime'].valid && formRAD.controls['Prezime'].touched\">Prezime nije uneto</div> \r\n              \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"center-block\">Ime:\r\n                <input class=\"form-control\" formControlName=\"Ime\"  [(ngModel)]=\"radnikN.Ime\" >\r\n              </label>\r\n               <div class=\"text-danger\" *ngIf=\"!formRAD.controls['Ime'].valid && formRAD.controls['Ime'].touched\">Ime nije uneto</div> \r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Jmbg:\r\n                  <input class=\"form-control\" formControlName=\"Jmbg\"  [(ngModel)]=\"radnikN.Jmbg\" >\r\n                </label>\r\n              </div>\r\n              \r\n              <div class=\"checkbox\">\r\n                <label class=\"center-block\">\r\n                  <input type=\"checkbox\" formControlName=\"Aktivan\" [(ngModel)]=\"radnikN.Aktivan\"  value=\"1\">Aktivan.\r\n                </label>\r\n                \r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Opis:\r\n                  <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"radnikN.Opis\">\r\n                  </textarea>\r\n                </label>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-5 col-md-12\">\r\n                        <button type=\"submit\" [disabled]=\"!formRAD.valid\"\r\n                            class=\"btn btn-default\">\r\n                        <span class=\"glyphicon glyphicon-saved\"></span>\r\n                        Save\r\n                        </button>\r\n\r\n                      <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formRAD.pristine\"  (click)=\"revert()\">\r\n                          <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                          Revert\r\n                      </button>\r\n                      \r\n                    </div>\r\n              \r\n                    \r\n          </div>\r\n              \r\n\r\n\r\n      </form>\r\n  </div>\r\n \r\n  <div class=\"panel-footer\">\r\n      \r\n          <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n            <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n            Back\r\n        </button>\r\n \r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik-form/radnik-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_router_animations__ = __webpack_require__("../../../../../src/app/animation/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radnik_model__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_opcijeapp_radnik_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/radnik.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RadnikFormComponent = (function () {
    function RadnikFormComponent(radService, router, route, formBuilder, _location, flashMessage) {
        this.radService = radService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.flashMessage = flashMessage;
        this.radnikN = new __WEBPACK_IMPORTED_MODULE_5__radnik_model__["a" /* Radnik */]();
        this.formRAD = formBuilder.group({
            _id: [],
            SifraRad: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Ime: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Prezime: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ]],
            Jmbg: [],
            Aktivan: [],
            Opis: []
        });
    }
    RadnikFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.title = id ? 'Ažurianje radnika' : 'Novi radnik';
            if (!id)
                return;
            _this.radService.getRadnik(id)
                .subscribe(function (pos) {
                if (pos.success) {
                    _this.radnikN = pos.data[0];
                }
                else {
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
    RadnikFormComponent.prototype.backClicked = function (event) {
        this._location.back();
        //event.stopPropagation();
    };
    RadnikFormComponent.prototype.save = function () {
        var _this = this;
        var result, radValue = this.formRAD.value;
        if (radValue._id) {
            result = this.radService.updateRadnik(radValue).subscribe(function (pos) {
                if (pos.success) {
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
                console.log(" forma UPDATE  " + error);
            });
        }
        else {
            this.radService.addRadnik(radValue)
                .subscribe(function (pos) {
                if (pos.success) {
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
                //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
            });
        }
        //result.subscribe(data => this.router.navigate(['radnik']));
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
    return RadnikFormComponent;
}());
RadnikFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radnik-form',
        template: __webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/radnik/radnik-form/radnik-form.component.css")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animation_router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_opcijeapp_radnik_service__["a" /* RadnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_opcijeapp_radnik_service__["a" /* RadnikService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], RadnikFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=radnik-form.component.js.map

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

module.exports = "<!-- <p>\r\n  videcemo radnik works!\r\n\r\n</p> -->\r\n\r\n<div *ngIf=\"radnici;else  waiting\"  [@routerTransition]>\r\n  \r\n      <div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\r\n        <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\">\r\n      </div>\r\n      <p-dataTable [value]=\"radnici\"  [globalFilter]=\"gb\" [resizableColumns]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n                selectionMode=\"single\" [(selection)]=\"selectedRadnik\" dataKey=\"_id\"   \r\n                styleClass=\"table table-striped\" [responsive]=\"true\"  [immutable]=false \r\n                resizableColumns=\"true\" columnResizeMode=\"expand\">\r\n\r\n              <p-header><strong>{{Title}}</strong></p-header>       \r\n      <p-column field=\"_id\" header=\"ID\" sortable=\"true\" hidden=\"false\"></p-column> \r\n      <p-column field=\"SifraRad\" header=\"Šifra\" sortable=\"true\"></p-column> \r\n      <p-column field=\"Prezime\" header=\"Prezime\" sortable=\"true\"></p-column>\r\n      <p-column field=\"Ime\" header=\"Ime\" sortable=\"true\"></p-column>   \r\n      <p-column field=\"Aktivan\" header=\"Aktivan\" sortable=\"true\"></p-column>\r\n  \r\n      <p-column  styleClass=\"col-button text-center\" heder=\"ACTION\">\r\n          <ng-template let-rad=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <button type=\"button\" pButton (click)=\"selectRadnik(rad)\" icon=\"fa fa-info\" title=\"Info\"></button>\r\n              <button type=\"button\" pButton (click)=\"updateRadnik(rad._id)\" icon=\"fa fa-pencil\" title=\"Update\"></button>\r\n              <button type=\"button\" pButton (click)=\"deleteRadnik(rad)\" icon=\"fa fa-trash\" title=\"Delete\"></button>\r\n          </ng-template>\r\n      </p-column>\r\n      <p-footer>\r\n          <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"addRadnik()\" label=\"Add\"></button>\r\n            </div>\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n            <p-footer>\r\n                <button type=\"button\" pButton icon=\"fa-close\" label=\"No\" (click)=\"cd.reject()\"></button>\r\n                <button type=\"button\" pButton icon=\"fa-check\" label=\"Yes\" (click)=\"cd.accept()\"></button>\r\n            </p-footer>\r\n    </p-confirmDialog>\r\n    \r\n    \r\n    \r\n    <p-dialog header=\"Radnik\" [(visible)]=\"displayDetals\" modal=\"modal\" [responsive]=\"true\"  [width]=\"850\" [height]=\"auto\">\r\n    \r\n            <div>\r\n                    <dl class=\"dl-horizontal\">\r\n                        <dt>\r\n                         ID\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                           {{radShow._id}}\r\n                        </dd>\r\n                        <dt>\r\n                            ŠIFRA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                              {{radShow.SifraRad}}\r\n                        </dd>\r\n                        <dt>\r\n                            PREZIME\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{radShow.Prezime}} \r\n                          </dd>  \r\n                        <dt>\r\n                            IME\r\n                          </dt>\r\n                          <dd class=\"text-success\">\r\n                               {{radShow.Ime}} \r\n                          </dd> \r\n                     \r\n                        <dt>\r\n                         JMBG\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.Jmbg}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                           AKTIVAN\r\n                           </dt>\r\n                           <dd class=\"text-success\">\r\n                               {{radShow.Aktivan}}\r\n                               \r\n                           </dd>\r\n                        \r\n                        <dt>\r\n                        OPIS\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.Opis}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM UNOSA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.created_at}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        DATUM AŽURIRANJA\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.updatedAt}}\r\n                            \r\n                        </dd>\r\n                        <dt>\r\n                        KORISNIK\r\n                        </dt>\r\n                        <dd class=\"text-success\">\r\n                            {{radShow.NameUser}}\r\n                            \r\n                        </dd>\r\n                \r\n                    </dl>                        \r\n            </div>\r\n            <p-footer>\r\n                    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"displayDetals=false\" label=\"Close\"></button>\r\n           </p-footer>\r\n    </p-dialog>\r\n    \r\n    \r\n    <ng-template #waiting >Waiting...</ng-template>\r\n    \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/radnik/radnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadnikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radnik_model__ = __webpack_require__("../../../../../src/app/components/radnik/radnik.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_opcijeapp_radnik_service__ = __webpack_require__("../../../../../src/app/services/opcijeapp/radnik.service.ts");
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
            message: 'Are you sure that you want to perform this action?',
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_opcijeapp_radnik_service__["a" /* RadnikService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_opcijeapp_radnik_service__["a" /* RadnikService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
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

module.exports = "<div class=\"panel panel-primary\" >\r\n    <div class=\"panel-heading\">\r\n        <h3>Register</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <form [formGroup]=\"formReg\" (ngSubmit)=\"onRegisterSubmit()\" novalidate>\r\n            <div class=\"form-group\" >\r\n                 <input class=\"form-control\" formControlName=\"_id\"  [(ngModel)]=\"userN._id\"   type=\"hidden\">\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label class=\"center-block\">Ime i prezime:\r\n                  <input class=\"form-control\" formControlName=\"name\"  [(ngModel)]=\"userN.name\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['name'].valid && formReg.controls['name'].touched\">Ime nije uneto</div> \r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Korisničko ime:\r\n                  <input class=\"form-control\" formControlName=\"username\"  [(ngModel)]=\"userN.username\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['username'].valid && formReg.controls['username'].touched\">Korisničko ime nije uneto</div> \r\n                \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"center-block\">Email:\r\n                  <input class=\"form-control\" formControlName=\"email\"  [(ngModel)]=\"userN.email\" >\r\n                </label>\r\n                 <div class=\"text-danger\" *ngIf=\"!formReg.controls['email'].valid && formReg.controls['email'].touched\">Email nije unet</div> \r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                  <label class=\"center-block\">Lozinka:\r\n                    <input type=\"password\" class=\"form-control\" formControlName=\"password\"  [(ngModel)]=\"userN.password\" >\r\n                  </label>\r\n                   <div class=\"text-danger\" *ngIf=\"!formReg.controls['password'].valid && formReg.controls['password'].touched\">Lozinka nije uneta</div> \r\n                </div>\r\n                \r\n                \r\n                <div class=\"form-group\">\r\n                  <label class=\"center-block\">Opis:\r\n                    <textarea class=\"form-control\" formControlName=\"Opis\"  [(ngModel)]=\"userN.Opis\">\r\n                    </textarea>\r\n                  </label>\r\n              </div>\r\n            \r\n              <div class=\"form-group\">\r\n                      <div class=\"col-md-offset-5 col-md-12\">\r\n                          <button type=\"submit\" [disabled]=\"!formReg.valid\"\r\n                              class=\"btn btn-default\">\r\n                          <span class=\"glyphicon glyphicon-saved\"></span>\r\n                          Save\r\n                          </button>\r\n  \r\n                        <button type=\"reset\" class=\"btn btn-danger\"  [disabled]=\"formReg.pristine\"  (click)=\"revert()\">\r\n                            <i class=\"fa fa-undo\" aria-hidden=\"true\"></i>\r\n                            Revert\r\n                        </button>\r\n                        \r\n                      </div>\r\n                \r\n                      \r\n            </div>\r\n                \r\n  \r\n  \r\n        </form>\r\n    </div>\r\n   \r\n    <div class=\"panel-footer\">\r\n        \r\n            <button (click)=\"backClicked()\"  class=\"btn btn-primary btn-block\">\r\n              <i class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></i>\r\n              Back\r\n          </button>\r\n   \r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n\r\n\r\n<!-- <div class=\"panel panel-info \">\r\n  <div class=\"panel-heading\">\r\n      <h3>Register</h3>\r\n  </div>\r\n<div class=\"panel-body panel-info\">\r\n  <form (submit)=\"onRegisterSubmit()\" >\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\"  value=\"\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" value=\"\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-5 col-md-12\">\r\n             <button type=\"submit\" \r\n                 class=\"btn btn-default\">\r\n             <span class=\"glyphicon glyphicon-saved\"></span>\r\n             Submit\r\n             </button>\r\n\r\n        \r\n           \r\n        </div>\r\n    </div>\r\n  \r\n  </form>\r\n</div>\r\n</div>\r\n\r\n -->\r\n\r\n\r\n"

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
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //alert("Usao u onSubmit");
        var user = this.formReg.value;
        // const user = {
        //   name: this.name,
        //   email: this.email,
        //   username: this.username,
        //   password: this.password
        // }
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
        //event.stopPropagation();
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

module.exports = "<p>\r\n  vlasnik works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vlasnik/vlasnik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VlasnikComponent; });
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

var VlasnikComponent = (function () {
    function VlasnikComponent() {
    }
    VlasnikComponent.prototype.ngOnInit = function () {
    };
    return VlasnikComponent;
}());
VlasnikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vlasnik',
        template: __webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vlasnik/vlasnik.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VlasnikComponent);

//# sourceMappingURL=vlasnik.component.js.map

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
        this.isDev = false; // Change to false before deployment  sredi ovo
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        //this.serviceConfig.hosturl
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
        //   .map(res => res.json());
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
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
        var ep = this.prepEndpoint('users/profile');
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
    AuthService.prototype.prepEndpoint = function (ep) {
        console.log(__WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, ep));
        return __WEBPACK_IMPORTED_MODULE_4__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, ep);
        // if(this.isDev){
        //   return ep;
        // } else {
        //   //return 'http://localhost:8080/'+ep;
        //   return ServiceConfig.HostUrl + ep;
        // }
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

/***/ "../../../../../src/app/services/drzave/drzave.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = this.prepEndpoint('api/drzave');
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
        var ep = this.prepEndpoint('api/drzave/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.addDrzava = function (drzava) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/drzave');
        return this.http.post(ep, JSON.stringify(drzava), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.updateDrzava = function (drzava) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/drzave/' + drzava._id);
        return this.http.put(ep, JSON.stringify(drzava), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.delDrzava = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/drzave/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    DrzaveService.prototype.prepEndpoint = function (ep) {
        //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
        return __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, ep);
    };
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

/***/ "../../../../../src/app/services/mesta/mesta.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/'); //this.prepEndpoint('api/mesta'); 
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
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.addMesto = function (mesto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/');
        return this.http.post(ep, JSON.stringify(mesto), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.updateMesto = function (mesto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + mesto._id);
        return this.http.put(ep, JSON.stringify(mesto), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    MestaService.prototype.delMesto = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/mesta/' + id); // this.prepEndpoint('api/drzave/'+id);
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

/***/ "../../../../../src/app/services/opcijeapp/fond-sati.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.getFondSati = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.addFondSati = function (fsati) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/');
        return this.http.post(ep, JSON.stringify(fsati), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.updateFondSati = function (fsati) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + fsati._id);
        return this.http.put(ep, JSON.stringify(fsati), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FondSatiService.prototype.delFondSati = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/fondsati/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    //   prepEndpoint(ep){
    //      return ServiceConfig.PrepareHost(this.isDev,ep);
    //  }
    FondSatiService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
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

/***/ "../../../../../src/app/services/opcijeapp/konstante.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonstanteService; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KonstanteService = (function () {
    function KonstanteService(http) {
        this.http = http;
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    KonstanteService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    KonstanteService.prototype.getKonstants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //  let ep = this.prepEndpoint('api/konstanta'); 
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstanteService.prototype.getKonstant = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstanteService.prototype.addKonstant = function (konstant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/');
        return this.http.post(ep, JSON.stringify(konstant), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstanteService.prototype.updateKonstant = function (konstant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + konstant._id);
        return this.http.put(ep, JSON.stringify(konstant), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    KonstanteService.prototype.delKonstant = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/konstanta/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    KonstanteService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return KonstanteService;
}());
KonstanteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], KonstanteService);

var _a;
//# sourceMappingURL=konstante.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/opcijeapp/parametar.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = this.prepEndpoint('api/parametar');
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.getParametar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/parametar/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.addParametar = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/parametar');
        return this.http.post(ep, JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.updateParametar = function (param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/parametar/' + param._id);
        return this.http.put(ep, JSON.stringify(param), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.delParametar = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/parametar/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ParametarService.prototype.prepEndpoint = function (ep) {
        //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
        return __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, ep);
    };
    ParametarService.prototype.handleError = function (error) {
        console.error("handleError " + error);
        //console.error("handleError +"  + error.json().error);
        if (!error.ok) {
            console.error("handleError greska text statusText " + error.statusText);
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json() || 'Server error');
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

/***/ "../../../../../src/app/services/opcijeapp/radnik.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik'); //this.prepEndpoint('api/radnik'); 
        // console.log("getDrzave link", ep );
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.getRadnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.addRadnik = function (radnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/');
        return this.http.post(ep, JSON.stringify(radnik), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RadnikService.prototype.updateRadnik = function (radnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + radnik._id);
        return this.http.put(ep, JSON.stringify(radnik), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RadnikService.prototype.delRadnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/radnik/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    RadnikService.prototype.handleError = function (error) {
        console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message);
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

/***/ "../../../../../src/app/services/opcijeapp/vlasnik.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
    }
    VlasnikService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    VlasnikService.prototype.getVlasnici = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.getVlasnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.addVlasnik = function (vlasnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/');
        return this.http.post(ep, JSON.stringify(vlasnik), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.updateVlasnik = function (vlasnik) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + vlasnik._id);
        return this.http.put(ep, JSON.stringify(vlasnik), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    VlasnikService.prototype.delVlasnik = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, 'api/vlasnik/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    // prepEndpoint(ep){
    // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    //   return ServiceConfig.PrepareHost(this.isDev,ep);
    // }
    VlasnikService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
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

/***/ "../../../../../src/app/services/opstine/opstine.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_config__ = __webpack_require__("../../../../../src/app/services/service.config.ts");
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
        this.isDev = __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].isDev; // Change to false before deployment  sredi ovo
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
        var ep = this.prepEndpoint('api/opstine');
        // console.log("getDrzave link", ep );
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
        var ep = this.prepEndpoint('api/opstine/' + id);
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.addOpstine = function (opstina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/opstine');
        return this.http.post(ep, JSON.stringify(opstina), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.updateOpstine = function (opstina) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/opstine/' + opstina._id);
        return this.http.put(ep, JSON.stringify(opstina), { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.delOpstine = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('api/opstine/' + id);
        return this.http.delete(ep, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    OpstineService.prototype.prepEndpoint = function (ep) {
        //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
        return __WEBPACK_IMPORTED_MODULE_7__service_config__["a" /* ServiceConfig */].PrepareHost(this.isDev, ep);
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
// export enum StepenSS {
//     PRVI ="Nekvalifikovan" ,
//     DRUGI="Polukvalifikovan", 
//     TRECI="Kvalifikovan",
//     CETVRTI="Srednja Strucna Sprema",
//     PETI="VKV",
//     SESTI="Visa skola",
//     SEDMI="Fakultet",
//     OSMI="Magistar",
//     DEVETI="Doktor Nauka",
// }
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// } 
//# sourceMappingURL=StepenSS.enum.js.map

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
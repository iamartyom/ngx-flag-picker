"use strict";
(self["webpackChunkexample"] = self["webpackChunkexample"] || []).push([["main"],{

/***/ 5390:
/*!***************************************************!*\
  !*** ./projects/example/src/app/app.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-flag-picker */ 8875);


class AppComponent {
    constructor() {
        this.selectedCountryCode = 'be';
        this.countryCodes = ['be', 'lu', 'de', 'bs', 'br', 'pt'];
        this.customLabels = {
            'be': 'Belgium',
            'lu': 'Luxembourg',
            'de': 'Germany',
            'bs': 'Bahamas',
            'br': 'Brazil',
            'pt': 'Portugal'
        };
    }
    changeSelectedCountryCode(value) {
        this.selectedCountryCode = value;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 15, consts: [[1, "container"], [3, "selectedCountryCode", "countryCodes", "changedCountryCode"], [1, "parameter-text"], [3, "selectedCountryCode", "countryCodes", "customLabels", "changedCountryCode"], [3, "selectedCountryCode", "countryCodes", "showFlags", "changedCountryCode"], [3, "selectedCountryCode", "countryCodes", "showLabels", "changedCountryCode"], [3, "selectedCountryCode", "countryCodes", "showArrow", "changedCountryCode"], ["href", "https://github.com/iamartyom/ngx-flag-picker", "data-icon", "octicon-star", "data-size", "large", "data-show-count", "true", "aria-label", "Star iamartyom/ngx-flag-picker on GitHub", 1, "github-button"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "ngx-flag-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCountryCode", function AppComponent_Template_ngx_flag_picker_changedCountryCode_2_listener($event) { return ctx.changeSelectedCountryCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "customLabels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-flag-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCountryCode", function AppComponent_Template_ngx_flag_picker_changedCountryCode_5_listener($event) { return ctx.changeSelectedCountryCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "showFlags = false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-flag-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCountryCode", function AppComponent_Template_ngx_flag_picker_changedCountryCode_8_listener($event) { return ctx.changeSelectedCountryCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "showLabels = false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngx-flag-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCountryCode", function AppComponent_Template_ngx_flag_picker_changedCountryCode_11_listener($event) { return ctx.changeSelectedCountryCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "showArrow = false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngx-flag-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedCountryCode", function AppComponent_Template_ngx_flag_picker_changedCountryCode_14_listener($event) { return ctx.changeSelectedCountryCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Selected country code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr")(20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Star ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCountryCode", ctx.selectedCountryCode)("countryCodes", ctx.countryCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCountryCode", ctx.selectedCountryCode)("countryCodes", ctx.countryCodes)("customLabels", ctx.customLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCountryCode", ctx.selectedCountryCode)("countryCodes", ctx.countryCodes)("showFlags", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCountryCode", ctx.selectedCountryCode)("countryCodes", ctx.countryCodes)("showLabels", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedCountryCode", ctx.selectedCountryCode)("countryCodes", ctx.countryCodes)("showArrow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCountryCode);
    } }, dependencies: [ngx_flag_picker__WEBPACK_IMPORTED_MODULE_1__.NgxFlagPickerComponent], styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  text-align: center;\n  font-family: \"Lato\", sans-serif;\n}\n\nngx-flag-picker[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n\n.parameter-text[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbm5neC1mbGFnLXBpY2tlciB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4ucGFyYW1ldGVyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ 2196:
/*!************************************************!*\
  !*** ./projects/example/src/app/app.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5390);
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-flag-picker */ 8875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        ngx_flag_picker__WEBPACK_IMPORTED_MODULE_3__.NgxFlagPickerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        ngx_flag_picker__WEBPACK_IMPORTED_MODULE_3__.NgxFlagPickerModule] }); })();


/***/ }),

/***/ 9566:
/*!**********************************************************!*\
  !*** ./projects/example/src/environments/environment.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1986:
/*!**************************************!*\
  !*** ./projects/example/src/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2196);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9566);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 8875:
/*!***********************************************************!*\
  !*** ./dist/ngx-flag-picker/fesm2020/ngx-flag-picker.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxFlagPickerComponent": () => (/* binding */ NgxFlagPickerComponent),
/* harmony export */   "NgxFlagPickerModule": () => (/* binding */ NgxFlagPickerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = ["selectFlags"];

const _c1 = function (a0) {
  return {
    "flag-icon-margin-right": a0
  };
};

function NgxFlagPickerComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx_r1.selectedCountryCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r1.showLabels));
  }
}

function NgxFlagPickerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getCountryLabel(ctx_r2.selectedCountryCode));
  }
}

function NgxFlagPickerComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u25BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgxFlagPickerComponent_div_6_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
  }

  if (rf & 2) {
    const code_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", code_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r7.showLabels));
  }
}

function NgxFlagPickerComponent_div_6_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const code_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getCountryLabel(code_r6));
  }
}

function NgxFlagPickerComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxFlagPickerComponent_div_6_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const code_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.changeSelectedCountryCode(code_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxFlagPickerComponent_div_6_div_1_span_2_Template, 1, 6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxFlagPickerComponent_div_6_div_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFlags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showLabels);
  }
}

function NgxFlagPickerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxFlagPickerComponent_div_6_div_1_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.countryCodes);
  }
}

class NgxFlagPickerComponent {
  constructor(renderer, changeDetectorRef) {
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.showFlags = true;
    this.showLabels = true;
    this.showArrow = true;
    this.changedCountryCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._isShowListCountryFlags = false;

    this.outsideClickSelectFlags = () => {};
  }

  set isShowListCountryFlags(value) {
    this._isShowListCountryFlags = value;
    this.changeDetectorRef.markForCheck();
  }

  get isShowListCountryFlags() {
    return this._isShowListCountryFlags;
  }

  getCountryLabel(countryCode) {
    return this.customLabels && this.customLabels[countryCode] ? this.customLabels[countryCode] : countryCode ? countryCode.toUpperCase() : '';
  }

  changeSelectedCountryCode(value) {
    this.selectedCountryCode = value;
    this.closeListCountryFlags();
    this.changedCountryCode.emit(this.selectedCountryCode);
  }

  toggleListCountryFlags() {
    if (this.isShowListCountryFlags) {
      this.closeListCountryFlags();
    } else {
      this.openListCountryFlags();
    }
  }

  openListCountryFlags() {
    this.isShowListCountryFlags = true;
    this.subscribeOutsideClickSelectFlags();
  }

  closeListCountryFlags() {
    this.isShowListCountryFlags = false;
    this.unsubscribeOutsideClickSelectFlags();
  }

  subscribeOutsideClickSelectFlags() {
    this.outsideClickSelectFlags = this.renderer.listen('document', 'click', event => {
      if (!this.selectFlagsElementRef.nativeElement.contains(event.target)) {
        this.closeListCountryFlags();
      }
    });
  }

  unsubscribeOutsideClickSelectFlags() {
    if (this.outsideClickSelectFlags) {
      this.outsideClickSelectFlags();
      this.outsideClickSelectFlags = undefined;
    }
  }

}

NgxFlagPickerComponent.ɵfac = function NgxFlagPickerComponent_Factory(t) {
  return new (t || NgxFlagPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

NgxFlagPickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxFlagPickerComponent,
  selectors: [["ngx-flag-picker"]],
  viewQuery: function NgxFlagPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectFlagsElementRef = _t.first);
    }
  },
  inputs: {
    selectedCountryCode: "selectedCountryCode",
    countryCodes: "countryCodes",
    customLabels: "customLabels",
    showFlags: "showFlags",
    showLabels: "showLabels",
    showArrow: "showArrow"
  },
  outputs: {
    changedCountryCode: "changedCountryCode"
  },
  decls: 7,
  vars: 4,
  consts: [[1, "select-flags"], ["selectFlags", ""], ["tabindex", "0", 1, "country-flag", 3, "click"], [3, "ngClass", "class", 4, "ngIf"], ["class", "country-code", 4, "ngIf"], [4, "ngIf"], ["class", "list-country-flags", 4, "ngIf"], [3, "ngClass"], [1, "country-code"], [1, "list-country-flags"], ["class", "country-flag", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf"]],
  template: function NgxFlagPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxFlagPickerComponent_Template_div_click_2_listener() {
        return ctx.toggleListCountryFlags();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxFlagPickerComponent_span_3_Template, 1, 6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxFlagPickerComponent_span_4_Template, 2, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxFlagPickerComponent_span_5_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxFlagPickerComponent_div_6_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFlags);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLabels);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowListCountryFlags);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".select-flags[_ngcontent-%COMP%]{display:inline-block;position:relative;color:#50575e;text-align:left}.flag-icon-margin-right[_ngcontent-%COMP%]{margin-right:6px}.country-flag[_ngcontent-%COMP%]{cursor:pointer;outline:none;white-space:nowrap}.list-country-flags[_ngcontent-%COMP%]{width:-moz-available;position:absolute;max-height:200px;margin-top:10px;padding:5px;background:#ffffff;border:1px solid #c7c7c7;overflow:auto;z-index:99999}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFlagPickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-flag-picker',
      template: "<div class=\"select-flags\" #selectFlags>\r\n  <div class=\"country-flag\" tabindex=\"0\" (click)=\"toggleListCountryFlags()\">\r\n    <span *ngIf=\"showFlags\" [ngClass]=\"{ 'flag-icon-margin-right': showLabels }\" class=\"flag-icon flag-icon-{{ selectedCountryCode }}\"></span>\r\n    <span *ngIf=\"showLabels\" class=\"country-code\">{{ getCountryLabel(selectedCountryCode) }}</span>\r\n    <span *ngIf=\"showArrow\">\u25BE</span>\r\n  </div>\r\n  <div class=\"list-country-flags\" *ngIf=\"isShowListCountryFlags\">\r\n    <div class=\"country-flag\" tabindex=\"0\" *ngFor=\"let code of countryCodes\" (click)=\"changeSelectedCountryCode(code)\">\r\n      <span>\r\n        <span *ngIf=\"showFlags\" [ngClass]=\"{ 'flag-icon-margin-right': showLabels }\" class=\"flag-icon flag-icon-{{ code }}\"></span>\r\n        <span *ngIf=\"showLabels\" class=\"country-code\">{{ getCountryLabel(code) }}</span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>",
      styles: [".select-flags{display:inline-block;position:relative;color:#50575e;text-align:left}.flag-icon-margin-right{margin-right:6px}.country-flag{cursor:pointer;outline:none;white-space:nowrap}.list-country-flags{width:-moz-available;position:absolute;max-height:200px;margin-top:10px;padding:5px;background:#ffffff;border:1px solid #c7c7c7;overflow:auto;z-index:99999}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    selectedCountryCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    countryCodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    customLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showFlags: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showLabels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    changedCountryCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectFlagsElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['selectFlags']
    }]
  });
})();

class NgxFlagPickerModule {}

NgxFlagPickerModule.ɵfac = function NgxFlagPickerModule_Factory(t) {
  return new (t || NgxFlagPickerModule)();
};

NgxFlagPickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxFlagPickerModule
});
NgxFlagPickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxFlagPickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxFlagPickerComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [NgxFlagPickerComponent]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxFlagPickerModule, {
    declarations: [NgxFlagPickerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    exports: [NgxFlagPickerComponent]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1986)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//
var base_control_1 = require("./base-control");
var base_component_1 = require("../base-component");
var AzToolbarComponent = AzToolbarComponent_1 = (function (_super) {
    __extends(AzToolbarComponent, _super);
    function AzToolbarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AzToolbarComponent;
}(base_control_1.BaseControl));
AzToolbarComponent = AzToolbarComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'az-toolbar',
        templateUrl: './az-toolbar.component.html',
        providers: [{
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(function () { return AzToolbarComponent_1; })
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return AzToolbarComponent_1; }),
                multi: true
            }]
    })
], AzToolbarComponent);
exports.AzToolbarComponent = AzToolbarComponent;
var AzToolbarComponent_1;

//# sourceMappingURL=az-toolbar.component.js.map

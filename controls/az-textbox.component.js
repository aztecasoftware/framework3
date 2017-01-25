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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//
var base_control_1 = require("./base-control");
var base_component_1 = require("../base-component");
var AzTextboxComponent = AzTextboxComponent_1 = (function (_super) {
    __extends(AzTextboxComponent, _super);
    function AzTextboxComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        //
        _this.textChanged = new core_1.EventEmitter();
        _this.propagateChange = function (_) { };
        return _this;
    }
    AzTextboxComponent.prototype.onTextChanged = function (args) {
        this.textChanged.next(args.target.value);
        this.propagateChange(args.target.value);
    };
    //Implementación de control value accesor
    AzTextboxComponent.prototype.writeValue = function (value) {
        this.text = value ? value : '';
    };
    AzTextboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AzTextboxComponent.prototype.registerOnTouched = function () { };
    return AzTextboxComponent;
}(base_control_1.BaseControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzTextboxComponent.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzTextboxComponent.prototype, "textChanged", void 0);
__decorate([
    core_1.ViewChild('textbox'),
    __metadata("design:type", core_1.ElementRef)
], AzTextboxComponent.prototype, "textbox", void 0);
AzTextboxComponent = AzTextboxComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'az-textbox',
        templateUrl: './az-textbox.component.html',
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(function () { return AzTextboxComponent_1; })
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return AzTextboxComponent_1; }), multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], AzTextboxComponent);
exports.AzTextboxComponent = AzTextboxComponent;
var AzTextboxComponent_1;

//# sourceMappingURL=az-textbox.component.js.map

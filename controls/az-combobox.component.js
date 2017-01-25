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
var AzComboboxComponent = AzComboboxComponent_1 = (function (_super) {
    __extends(AzComboboxComponent, _super);
    function AzComboboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        _this.displayMember = '';
        _this.valueMember = '';
        _this.selectedItem = null;
        //
        _this.selectedItemChanged = new core_1.EventEmitter();
        _this.propagateChange = function (_) { };
        return _this;
    }
    AzComboboxComponent.prototype.onChange = function (args) {
        this.selectedItemChanged.next(this.selectedItem);
        this.propagateChange(this.value);
    };
    //Implementación de control value accesor
    AzComboboxComponent.prototype.writeValue = function (value) {
        this.value = value ? value : '';
    };
    AzComboboxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AzComboboxComponent.prototype.registerOnTouched = function () { };
    return AzComboboxComponent;
}(base_control_1.BaseControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AzComboboxComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "displayMember", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "valueMember", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AzComboboxComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzComboboxComponent.prototype, "selectedItemChanged", void 0);
AzComboboxComponent = AzComboboxComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'az-combobox',
        templateUrl: './az-combobox.component.html',
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(function () { return AzComboboxComponent_1; })
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return AzComboboxComponent_1; }), multi: true
            }
        ]
    })
], AzComboboxComponent);
exports.AzComboboxComponent = AzComboboxComponent;
var AzComboboxComponent_1;

//# sourceMappingURL=az-combobox.component.js.map

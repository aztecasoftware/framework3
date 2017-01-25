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
//
var base_control_1 = require("./base-control");
var base_component_1 = require("../base-component");
var AzLabelComponent = AzLabelComponent_1 = (function (_super) {
    __extends(AzLabelComponent, _super);
    function AzLabelComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AzLabelComponent;
}(base_control_1.BaseControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzLabelComponent.prototype, "text", void 0);
AzLabelComponent = AzLabelComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'az-label',
        templateUrl: './az-label.component.html',
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(function () { return AzLabelComponent_1; })
            }
        ]
    })
], AzLabelComponent);
exports.AzLabelComponent = AzLabelComponent;
var AzLabelComponent_1;

//# sourceMappingURL=az-label.component.js.map

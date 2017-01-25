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
var AzButtonComponent = AzButtonComponent_1 = (function (_super) {
    __extends(AzButtonComponent, _super);
    function AzButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'default';
        //
        _this.click = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(AzButtonComponent.prototype, "buttonClass", {
        //
        get: function () {
            return "btn-" + this.type;
        },
        enumerable: true,
        configurable: true
    });
    //
    AzButtonComponent.prototype.onClick = function () {
        this.click.next();
    };
    return AzButtonComponent;
}(base_control_1.BaseControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzButtonComponent.prototype, "type", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzButtonComponent.prototype, "click", void 0);
AzButtonComponent = AzButtonComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'az-button',
        templateUrl: './az-button.component.html',
        providers: [
            {
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(function () { return AzButtonComponent_1; })
            }
        ]
    })
], AzButtonComponent);
exports.AzButtonComponent = AzButtonComponent;
var AzButtonComponent_1;

//# sourceMappingURL=az-button.component.js.map

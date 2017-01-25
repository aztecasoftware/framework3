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
var base_component_1 = require("../base-component");
var policies_1 = require("../security/policies");
var BaseControl = (function (_super) {
    __extends(BaseControl, _super);
    function BaseControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isEnabled = true;
        _this.isVisible = true;
        return _this;
    }
    Object.defineProperty(BaseControl.prototype, "enabled", {
        //
        get: function () {
            return this.isEnabled;
        },
        set: function (value) {
            if (!this.isPolicyApplied(policies_1.Policies.enabled)) {
                this.isEnabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "visible", {
        get: function () {
            return this.isVisible;
        },
        set: function (value) {
            if (!this.isPolicyApplied(policies_1.Policies.visible)) {
                this.isVisible = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //Implementación de políticas
    BaseControl.prototype.applyPolicy = function (policy) {
        if (this.allowPolicies && !this.isPolicyApplied(policy.nombre)) {
            if (policy.nombre.toLowerCase() == policies_1.Policies.enabled) {
                this.isEnabled = policy.valor.toLowerCase() == 'true' ? true : false;
                this.appliedPolicies.push(policy);
            }
            if (policy.nombre.toLowerCase() == policies_1.Policies.visible) {
                this.isVisible = policy.valor.toLowerCase() == 'true' ? true : false;
                this.appliedPolicies.push(policy);
            }
        }
    };
    return BaseControl;
}(base_component_1.BaseComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BaseControl.prototype, "enabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], BaseControl.prototype, "visible", null);
exports.BaseControl = BaseControl;

//# sourceMappingURL=base-control.js.map

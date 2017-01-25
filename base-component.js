"use strict";
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
var BaseComponent = (function () {
    function BaseComponent() {
        this.appliedPolicies = [];
        this.allowPolicies = true;
    }
    BaseComponent.prototype.isPolicyApplied = function (policyName) {
        var applied = false;
        this.appliedPolicies.forEach(function (policy) {
            if (policy.nombre == policyName) {
                applied = true;
            }
        });
        return applied;
    };
    BaseComponent.prototype.applyPolicies = function (policies) {
    };
    return BaseComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaseComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaseComponent.prototype, "allowPolicies", void 0);
__decorate([
    core_1.ViewChildren(BaseComponent),
    __metadata("design:type", core_1.QueryList)
], BaseComponent.prototype, "children", void 0);
exports.BaseComponent = BaseComponent;

//# sourceMappingURL=base-component.js.map

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
const core_1 = require("@angular/core");
class BaseComponent {
    constructor() {
        this.appliedPolicies = [];
        this.allowPolicies = true;
    }
    isPolicyApplied(policyName) {
        let applied = false;
        this.appliedPolicies.forEach(policy => {
            if (policy.nombre == policyName) {
                applied = true;
            }
        });
        return applied;
    }
    applyPolicies(policies) {
    }
    getErrorMessage(error) {
        let message = 'error';
        if (error._body != undefined)
            message = error._body;
        else if (error.statusText != undefined)
            message = error.statusText;
        return message;
    }
}
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

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
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
//
const base_component_1 = require('../../base-component');
const policies_1 = require('../../security/models/policies');
class BaseControl extends base_component_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.isEnabled = true;
        this.isVisible = true;
    }
    //
    get enabled() {
        return this.isEnabled;
    }
    set enabled(value) {
        if (!this.isPolicyApplied(policies_1.Policies.enabled)) {
            this.isEnabled = value;
        }
    }
    get visible() {
        return this.isVisible;
    }
    set visible(value) {
        if (!this.isPolicyApplied(policies_1.Policies.visible)) {
            this.isVisible = value;
        }
    }
    ngAfterViewInit() {
        if (this.state && this.state.valueAccessor && this.state.valueAccessor instanceof base_component_1.BaseComponent) {
            if (!this.state.valueAccessor.name)
                this.state.valueAccessor.name = this.state.name;
        }
    }
    //Implementación de políticas
    applyPolicy(policy) {
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
    }
}
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], BaseControl.prototype, "enabled", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], BaseControl.prototype, "visible", null);
__decorate([
    core_1.ContentChild(forms_1.FormControlName), 
    __metadata('design:type', forms_1.FormControlName)
], BaseControl.prototype, "state", void 0);
exports.BaseControl = BaseControl;
//# sourceMappingURL=base-control.js.map
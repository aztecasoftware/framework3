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
const forms_1 = require("@angular/forms");
const base_component_1 = require("../../base-component");
const policies_1 = require("../../security/models/policies");
const toolbar_button_directive_1 = require("../directives/toolbar-button.directive");
let AzToolbarComponent = AzToolbarComponent_1 = class AzToolbarComponent extends base_component_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.buttonClick = new core_1.EventEmitter();
    }
    onButtonClick(button) {
        this.buttonClick.next(button);
    }
    //Implementación de políticas
    applyPolicy(policy) {
        if (this.allowPolicies && !this.isPolicyApplied(policy.nombre)) {
            if (policy.nombre.toLowerCase() == policies_1.Policies.enabled) {
                //this.isEnabled = policy.valor.toLowerCase() == 'true' ? true : false;
                this.appliedPolicies.push(policy);
            }
            if (policy.nombre.toLowerCase() == policies_1.Policies.visible) {
                //this.isVisible = policy.valor.toLowerCase() == 'true' ? true : false;
                this.appliedPolicies.push(policy);
            }
        }
    }
};
__decorate([
    core_1.ContentChildren(toolbar_button_directive_1.ToolbarButtonDirective),
    __metadata("design:type", core_1.QueryList)
], AzToolbarComponent.prototype, "buttons", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzToolbarComponent.prototype, "buttonClick", void 0);
AzToolbarComponent = AzToolbarComponent_1 = __decorate([
    core_1.Component({
        selector: 'az-toolbar',
        template: `
      <div class="btn-group">
          <button *ngFor="let btn of buttons" type="button" [ngClass]="btn.buttonClass" (click)="onButtonClick(btn)" [disabled]="!btn.enabled">
              <span [class]="btn.icon" aria-hidden="true"></span> {{btn.text}}
          </button>
      </div>
    `,
        providers: [{
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(() => AzToolbarComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => AzToolbarComponent_1),
                multi: true
            }]
    })
], AzToolbarComponent);
exports.AzToolbarComponent = AzToolbarComponent;
var AzToolbarComponent_1;

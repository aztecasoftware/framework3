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
//
const base_control_1 = require("../models/base-control");
const base_component_1 = require("../../base-component");
let AzButtonComponent = AzButtonComponent_1 = class AzButtonComponent extends base_control_1.BaseControl {
    constructor() {
        super(...arguments);
        this.type = 'default';
        //
        this.click = new core_1.EventEmitter();
    }
    //
    get buttonClass() {
        return "btn-" + this.type;
    }
    //
    onClick() {
        this.click.emit();
    }
};
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
        selector: 'az-button',
        template: `
      <button type="button" class="btn btn-default" (click)="onClick()" [disabled]="!enabled" *ngIf="visible">    
          <ng-content></ng-content>
      </button>
    `,
        providers: [
            {
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(() => AzButtonComponent_1)
            }
        ]
    })
], AzButtonComponent);
exports.AzButtonComponent = AzButtonComponent;
var AzButtonComponent_1;

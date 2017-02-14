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
let AzLabelComponent = AzLabelComponent_1 = class AzLabelComponent extends base_control_1.BaseControl {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzLabelComponent.prototype, "text", void 0);
AzLabelComponent = AzLabelComponent_1 = __decorate([
    core_1.Component({
        selector: 'az-label',
        template: `
      <div *ngIf="visible">
          <label class="label label-default">{{text}}</label>
      </div>
      <div *ngIf="!visible">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </div>
    `,
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(() => AzLabelComponent_1)
            }
        ]
    })
], AzLabelComponent);
exports.AzLabelComponent = AzLabelComponent;
var AzLabelComponent_1;

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
//
const base_control_1 = require("../models/base-control");
const base_component_1 = require("../../base-component");
let AzTextareaComponent = AzTextareaComponent_1 = class AzTextareaComponent extends base_control_1.BaseControl {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        //
        this.textChanged = new core_1.EventEmitter();
        this.propagateChange = (_) => { };
    }
    onTextChanged(args) {
        this.textChanged.emit(args.target.value);
        this.propagateChange(args.target.value);
    }
    //Implementación de control value accesor
    writeValue(value) {
        this.text = value ? value : '';
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzTextareaComponent.prototype, "text", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzTextareaComponent.prototype, "textChanged", void 0);
__decorate([
    core_1.ViewChild('textarea'),
    __metadata("design:type", core_1.ElementRef)
], AzTextareaComponent.prototype, "textbox", void 0);
AzTextareaComponent = AzTextareaComponent_1 = __decorate([
    core_1.Component({
        selector: 'az-textarea',
        template: `
      <div *ngIf="visible">
      	<textarea #textarea [value]="text" (keyup)="onTextChanged($event)" [disabled]="!enabled" style="height:70px;"></textarea>
      </div>
      <div *ngIf="!visible">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </div>
    `,
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(() => AzTextareaComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(() => AzTextareaComponent_1), multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], AzTextareaComponent);
exports.AzTextareaComponent = AzTextareaComponent;
var AzTextareaComponent_1;

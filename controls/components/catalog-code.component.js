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
let CatalogCodeComponent = CatalogCodeComponent_1 = class CatalogCodeComponent extends base_control_1.BaseControl {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        //
        this.textChanged = new core_1.EventEmitter();
        this.propagateChange = (_) => { };
    }
    ngOnChanges(changes) {
        if (changes['automatic']) {
            this.updateValidators();
        }
    }
    updateValidators() {
        if (this.state && this.state.control) {
            if (this.automatic) {
                this.state.control.setValidators(null);
                this.state.control.updateValueAndValidity();
            }
            else {
                this.state.control.setValidators(forms_1.Validators.required);
                this.state.control.updateValueAndValidity();
            }
        }
    }
    onTextChanged(args) {
        this.textChanged.next(args.target.value);
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
], CatalogCodeComponent.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogCodeComponent.prototype, "automatic", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogCodeComponent.prototype, "textChanged", void 0);
__decorate([
    core_1.ViewChild('textbox'),
    __metadata("design:type", core_1.ElementRef)
], CatalogCodeComponent.prototype, "textbox", void 0);
__decorate([
    core_1.ContentChild(forms_1.FormControlName),
    __metadata("design:type", forms_1.FormControlName)
], CatalogCodeComponent.prototype, "state", void 0);
CatalogCodeComponent = CatalogCodeComponent_1 = __decorate([
    core_1.Component({
        selector: 'catalog-code',
        template: `
      <div *ngIf="visible">
          <input type="text" #textbox [value]="text" (keyup)="onTextChanged($event)" [disabled]="!enabled" [readonly]="automatic ? 'true': null" />
      </div>
      <div *ngIf="!visible">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </div>
    `,
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(() => CatalogCodeComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(() => CatalogCodeComponent_1), multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], CatalogCodeComponent);
exports.CatalogCodeComponent = CatalogCodeComponent;
var CatalogCodeComponent_1;

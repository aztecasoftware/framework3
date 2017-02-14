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
let AzComboboxComponent = AzComboboxComponent_1 = class AzComboboxComponent extends base_control_1.BaseControl {
    constructor() {
        super(...arguments);
        this.items = [];
        this.displayMember = '';
        this.valueMember = '';
        this.selectedItem = null;
        //
        this.selectedItemChanged = new core_1.EventEmitter();
        this.propagateChange = (_) => { };
    }
    onChange(args) {
        this.selectedItemChanged.next(this.selectedItem);
        this.propagateChange(this.value);
    }
    //Implementación de control value accesor
    writeValue(value) {
        this.value = value ? value : '';
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AzComboboxComponent.prototype, "items", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "displayMember", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "valueMember", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AzComboboxComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AzComboboxComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzComboboxComponent.prototype, "selectedItemChanged", void 0);
AzComboboxComponent = AzComboboxComponent_1 = __decorate([
    core_1.Component({
        selector: 'az-combobox',
        template: `
      <div *ngIf="visible">
      	<select #combobox [(ngModel)]="selectedItem" [value]="value" (change)="onChange($event)" [disabled]="!enabled">
              <option *ngFor="let item of items; le i = index" [value]="item[valueMember]" [ngValue]="item">{{item[displayMember]}}</option>
      		<ng-content></ng-content>
      	</select>    
      </div>
      <div *ngIf="!visible">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
      </div>
    `,
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(() => AzComboboxComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(() => AzComboboxComponent_1), multi: true
            }
        ]
    })
], AzComboboxComponent);
exports.AzComboboxComponent = AzComboboxComponent;
var AzComboboxComponent_1;

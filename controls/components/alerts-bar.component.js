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
let AlertsBarComponent = class AlertsBarComponent {
    constructor() {
        this.alerts = [];
        //
        this.dismissTimeout = 5000;
    }
    //
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: this.dismissTimeout, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlertsBarComponent.prototype, "dismissTimeout", void 0);
AlertsBarComponent = __decorate([
    core_1.Component({
        selector: 'alerts-bar',
        template: `
      <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" [dismissOnTimeout]="alert.dismissOnTimeout" (close)="closeAlert(i)">
          {{ alert?.msg }}
      </alert>
    `
    })
], AlertsBarComponent);
exports.AlertsBarComponent = AlertsBarComponent;

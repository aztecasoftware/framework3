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
//
const ng2_bootstrap_1 = require('ng2-bootstrap');
let CatalogListDialogComponent = class CatalogListDialogComponent {
    constructor() {
    }
    onSearchRequested(request) {
    }
    onCurrentItemChangedHandler(item) {
    }
    onItemSelected(item) {
    }
    onConfirmClick() {
    }
    onCancelClick() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], CatalogListDialogComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogListDialogComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogListDialogComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogListDialogComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogListDialogComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.ViewChild('listDialog'), 
    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
], CatalogListDialogComponent.prototype, "listDialog", void 0);
CatalogListDialogComponent = __decorate([
    core_1.Component({
        selector: 'catalog-list-dialog',
        templateUrl: './catalog-list-dialog.component.html'
    }), 
    __metadata('design:paramtypes', [])
], CatalogListDialogComponent);
exports.CatalogListDialogComponent = CatalogListDialogComponent;
//# sourceMappingURL=catalog-list-dialog.component.js.map
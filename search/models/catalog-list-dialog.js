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
const catalog_list_dialog_component_1 = require("../components/catalog-list-dialog.component");
class CatalogListDialog {
    constructor(context) {
        this.context = context;
        this.serverSide = false;
        this.pageIndex = 0;
        this.pageSize = 15;
        this.multiSelect = false;
        this.excludedItems = [];
        //    
        this.selectedItemChanged = new core_1.EventEmitter();
        this.selectedItemsChanged = new core_1.EventEmitter();
    }
    show() {
        this.listDialog.triggerSearch();
        this.listDialog.show();
    }
    handleError(error) {
        console.error(error);
        this.context.app.hideSpinner();
    }
}
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListDialog.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialog.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialog.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialog.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListDialog.prototype, "multiSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogListDialog.prototype, "excludedItems", void 0);
__decorate([
    core_1.ViewChild(catalog_list_dialog_component_1.CatalogListDialogComponent),
    __metadata("design:type", catalog_list_dialog_component_1.CatalogListDialogComponent)
], CatalogListDialog.prototype, "listDialog", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialog.prototype, "selectedItemChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialog.prototype, "selectedItemsChanged", void 0);
exports.CatalogListDialog = CatalogListDialog;

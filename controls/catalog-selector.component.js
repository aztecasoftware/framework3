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
var core_1 = require("@angular/core");
//
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var wijmo = require("wijmo/wijmo");
var context_1 = require("../context");
var search_request_1 = require("../search/search-request");
var grid_column_1 = require("../utils/grid-column");
var entities_1 = require("../entities");
var CatalogSelectorComponent = (function () {
    function CatalogSelectorComponent(context) {
        this.context = context;
        this.selectedRow = null;
        //
        this.enabled = true;
        this.visible = true;
        this.selectedItem = null;
        this.displayValue = "";
        this.dialogTitle = "Lista del catálogo";
        //
        this.searchRequested = new core_1.EventEmitter();
        this.selectedItemChanged = new core_1.EventEmitter();
    }
    CatalogSelectorComponent.prototype.showListDialog = function () {
        this.listDialog.config.backdrop = false;
        this.listDialog.show();
        var request = new search_request_1.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.next(request);
    };
    CatalogSelectorComponent.prototype.hideListDialog = function () {
        this.listDialog.hide();
    };
    CatalogSelectorComponent.prototype.searchRequestedHandler = function (request) {
        //Redireccionar request a componente padre
        this.searchRequested.next(request);
    };
    CatalogSelectorComponent.prototype.currentItemChangedHandler = function (item) {
        this.selectedRow = item;
    };
    CatalogSelectorComponent.prototype.selectItem = function (item) {
        this.selectedItemChanged.next(item);
        this.hideListDialog();
    };
    CatalogSelectorComponent.prototype.clear = function () {
        this.selectedItemChanged.next(null);
    };
    CatalogSelectorComponent.prototype.refreshControls = function () {
        wijmo.Control.invalidateAll();
    };
    return CatalogSelectorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", entities_1.CatalogInfo)
], CatalogSelectorComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogSelectorComponent.prototype, "displayValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogSelectorComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogSelectorComponent.prototype, "dialogTitle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogSelectorComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogSelectorComponent.prototype, "selectedItemChanged", void 0);
__decorate([
    core_1.ViewChild('listDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CatalogSelectorComponent.prototype, "listDialog", void 0);
__decorate([
    core_1.ContentChildren(grid_column_1.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogSelectorComponent.prototype, "columns", void 0);
CatalogSelectorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-catalog-selector',
        templateUrl: './catalog-selector.component.html'
    }),
    __metadata("design:paramtypes", [context_1.Context])
], CatalogSelectorComponent);
exports.CatalogSelectorComponent = CatalogSelectorComponent;

//# sourceMappingURL=catalog-selector.component.js.map

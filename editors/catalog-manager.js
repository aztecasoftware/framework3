"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var catalog_manager_component_1 = require("./catalog-manager.component");
var base_component_1 = require("../base-component");
var policies_1 = require("../security/policies");
var CatalogManager = (function (_super) {
    __extends(CatalogManager, _super);
    function CatalogManager(context) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.pageIndex = 0;
        _this.totalRows = 0;
        //
        _this.enabled = true;
        _this.allowNew = true;
        _this.allowView = true;
        _this.allowEdit = true;
        _this.allowDelete = true;
        _this.allowClone = true;
        _this.allowChangeState = true;
        return _this;
    }
    CatalogManager.prototype.refreshList = function () {
        this.manager.triggerSearch();
    };
    CatalogManager.prototype.showAlert = function (message, type) {
        this.manager.showAlert(message, type);
    };
    CatalogManager.prototype.handleError = function (error) {
        this.context.app.hideSpinner();
        this.errorMessage = error.message ? error.message : error;
        console.log(this.errorMessage);
    };
    //Implementación de políticas
    CatalogManager.prototype.applyPolicy = function (policy) {
        if (this.allowPolicies && !this.isPolicyApplied(policy.nombre)) {
            if (policy.nombre.toLowerCase() == policies_1.Policies.enabled) {
                this.manager.enabled = policy.valor == "true" ? true : false;
                this.appliedPolicies.push(policy);
            }
        }
    };
    return CatalogManager;
}(base_component_1.BaseComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowNew", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowView", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowDelete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowClone", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManager.prototype, "allowChangeState", void 0);
__decorate([
    core_1.ViewChild(catalog_manager_component_1.CatalogManagerComponent),
    __metadata("design:type", catalog_manager_component_1.CatalogManagerComponent)
], CatalogManager.prototype, "manager", void 0);
exports.CatalogManager = CatalogManager;

//# sourceMappingURL=catalog-manager.js.map

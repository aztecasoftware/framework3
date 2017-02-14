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
const index_1 = require("../../index");
const catalog_manager_component_1 = require("../components/catalog-manager.component");
const policies_1 = require("../../security/models/policies");
class CatalogManager extends index_1.BaseComponent {
    constructor(context) {
        super();
        this.context = context;
        //
        this.pageIndex = 0;
        this.totalRows = 0;
        this.enabled = true;
        this.allowNew = true;
        this.allowView = true;
        this.allowEdit = true;
        this.allowDelete = true;
        this.allowClone = true;
        this.allowChangeState = true;
    }
    refreshList() {
        this.manager.triggerSearch();
    }
    showAlert(message, type) {
        this.manager.showAlert(message, type);
    }
    handleError(error) {
        this.context.app.hideSpinner();
        this.errorMessage = error.message ? error.message : error;
        console.log(this.errorMessage);
    }
    //Implementación de políticas
    applyPolicy(policy) {
        if (this.allowPolicies && !this.isPolicyApplied(policy.nombre)) {
            if (policy.nombre.toLowerCase() == policies_1.Policies.enabled) {
                this.manager.enabled = policy.valor == "true" ? true : false;
                this.appliedPolicies.push(policy);
            }
        }
    }
}
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogManager.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogManager.prototype, "totalRows", void 0);
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

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
const hierarchy_manager_component_1 = require("../components/hierarchy-manager.component");
class HierarchyManager {
    constructor() {
        //Inputs
        this.enabled = true;
        this.allowNew = true;
        this.allowEdit = true;
        this.allowDelete = true;
        this.allowCopy = true;
    }
    showAlert(message, type) {
        //this.manager.showAlert(message, type);
    }
    handleError(error) {
        //this.context.app.hideSpinner();
        this.errorMessage = error.message ? error.message : error;
        console.log(this.errorMessage);
    }
}
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManager.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManager.prototype, "allowNew", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManager.prototype, "allowEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManager.prototype, "allowDelete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManager.prototype, "allowCopy", void 0);
__decorate([
    core_1.ViewChild(hierarchy_manager_component_1.HierarchyManagerComponent),
    __metadata("design:type", hierarchy_manager_component_1.HierarchyManagerComponent)
], HierarchyManager.prototype, "manager", void 0);
exports.HierarchyManager = HierarchyManager;

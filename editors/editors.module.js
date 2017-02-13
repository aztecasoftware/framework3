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
const common_1 = require('@angular/common');
const forms_1 = require('@angular/forms');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Tree
const angular2_tree_component_1 = require('angular2-tree-component');
//Modulos Azteca
const utils_module_1 = require('../utils/utils.module');
const search_module_1 = require('../search/search.module');
const controls_module_1 = require('../controls/controls.module');
//Wijmo
const wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
const wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
const wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Components
const catalog_manager_component_1 = require('./components/catalog-manager.component');
const catalog_editor_component_1 = require('./components/catalog-editor.component');
const hierarchy_manager_component_1 = require('./components/hierarchy-manager.component');
let COMPONENTS = [catalog_manager_component_1.CatalogManagerComponent, catalog_editor_component_1.CatalogEditorComponent, hierarchy_manager_component_1.HierarchyManagerComponent];
let EditorsModule = class EditorsModule {
};
EditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.TabsModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot(),
            wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule, angular2_tree_component_1.TreeModule,
            utils_module_1.UtilsModule, search_module_1.SearchModule, controls_module_1.ControlsModule
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS
    }), 
    __metadata('design:paramtypes', [])
], EditorsModule);
exports.EditorsModule = EditorsModule;
//# sourceMappingURL=editors.module.js.map
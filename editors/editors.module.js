"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
//Modulos Azteca
var utils_module_1 = require("../utils/utils.module");
var search_module_1 = require("../search/search.module");
var controls_module_1 = require("../controls/controls.module");
var catalog_manager_component_1 = require("./catalog-manager.component");
var catalog_editor_component_1 = require("./catalog-editor.component");
//Wijmo
var wijmo_angular2_core_1 = require("wijmo/wijmo.angular2.core");
var wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
var wijmo_angular2_grid_filter_1 = require("wijmo/wijmo.angular2.grid.filter");
var wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Bootstrap
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var EditorsModule = (function () {
    function EditorsModule() {
    }
    return EditorsModule;
}());
EditorsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.TabsModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot(),
            wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule,
            utils_module_1.UtilsModule, search_module_1.SearchModule, controls_module_1.ControlsModule
        ],
        declarations: [catalog_manager_component_1.CatalogManagerComponent, catalog_editor_component_1.CatalogEditorComponent],
        exports: [catalog_manager_component_1.CatalogManagerComponent, catalog_editor_component_1.CatalogEditorComponent]
    })
], EditorsModule);
exports.EditorsModule = EditorsModule;

//# sourceMappingURL=editors.module.js.map

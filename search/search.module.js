"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
//Wijmo
const wijmo_angular2_core_1 = require("wijmo/wijmo.angular2.core");
const wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
const wijmo_angular2_grid_filter_1 = require("wijmo/wijmo.angular2.grid.filter");
const wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Bootstrap
const ng2_bootstrap_1 = require("ng2-bootstrap");
//Modulos Azteca
const utils_module_1 = require("../utils/utils.module");
const controls_module_1 = require("../controls/controls.module");
//Components
const catalog_list_component_1 = require("./components/catalog-list.component");
const catalog_list_dialog_component_1 = require("./components/catalog-list-dialog.component");
const catalog_selector_component_1 = require("./components/catalog-selector.component");
const catalog_autocomplete_component_1 = require("./components/catalog-autocomplete.component");
let COMPONENTS = [catalog_list_component_1.CatalogListComponent, catalog_list_dialog_component_1.CatalogListDialogComponent, catalog_selector_component_1.CatalogSelectorComponent, catalog_autocomplete_component_1.CatalogAutocompleteComponent,];
let SERVICES = [];
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule,
            ng2_bootstrap_1.ModalModule.forRoot(),
            utils_module_1.UtilsModule, controls_module_1.ControlsModule
        ],
        declarations: COMPONENTS,
        providers: SERVICES,
        exports: COMPONENTS
    })
], SearchModule);
exports.SearchModule = SearchModule;

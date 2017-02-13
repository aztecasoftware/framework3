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
const forms_1 = require('@angular/forms');
const common_1 = require('@angular/common');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Wijmo
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Modulos Kernel
const utils_module_1 = require('../utils/utils.module');
const search_module_1 = require('../search/search.module');
//Directivas
const bootstrap_input_directive_1 = require('./directives/bootstrap-input.directive');
const toolbar_button_directive_1 = require('./directives/toolbar-button.directive');
const grid_column_1 = require('./directives/grid-column');
const menu_item_directive_1 = require('./directives/menu-item.directive');
//Componentes
const az_label_component_1 = require('./components/az-label.component');
const az_textbox_component_1 = require('./components/az-textbox.component');
const az_button_component_1 = require('./components/az-button.component');
const az_pager_component_1 = require('./components/az-pager.component');
const az_toolbar_component_1 = require('./components/az-toolbar.component');
const az_panel_component_1 = require('./components/az-panel.component');
const form_field_component_1 = require('./components/form-field.component');
const catalog_selector_component_1 = require('./components/catalog-selector.component');
const catalog_autocomplete_component_1 = require('./components/catalog-autocomplete.component');
const image_box_component_1 = require('./components/image-box.component');
const catalog_code_component_1 = require('./components/catalog-code.component');
const grid_button_cell_1 = require('./components/grid-button-cell');
let COMPONENTES = [bootstrap_input_directive_1.BootstrapInputDirective, toolbar_button_directive_1.ToolbarButtonDirective, menu_item_directive_1.MenuItemDirective, grid_column_1.GridColumn,
    form_field_component_1.FormFieldComponent, catalog_selector_component_1.CatalogSelectorComponent, catalog_autocomplete_component_1.CatalogAutocompleteComponent, image_box_component_1.ImageBoxComponent, az_label_component_1.AzLabelComponent, az_button_component_1.AzButtonComponent, az_textbox_component_1.AzTextboxComponent, az_toolbar_component_1.AzToolbarComponent,
    catalog_code_component_1.CatalogCodeComponent, az_pager_component_1.AzPagerComponent, az_panel_component_1.AzPanelComponent, grid_button_cell_1.GridButtonCell];
let SERVICIOS = [];
let ControlsModule = class ControlsModule {
};
ControlsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule, common_1.CommonModule,
            wijmo_angular2_input_1.WjInputModule,
            ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot(),
            utils_module_1.UtilsModule, search_module_1.SearchModule,
        ],
        declarations: COMPONENTES,
        providers: SERVICIOS,
        exports: COMPONENTES
    }), 
    __metadata('design:paramtypes', [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=controls.module.js.map
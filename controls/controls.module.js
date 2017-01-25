"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
//Modulos Kernel
var utils_module_1 = require("../utils/utils.module");
var search_module_1 = require("../search/search.module");
//Wijmo
var wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Locales
var az_label_component_1 = require("./az-label.component");
var az_textbox_component_1 = require("./az-textbox.component");
var az_button_component_1 = require("./az-button.component");
var form_field_component_1 = require("./form-field.component");
var bootstrap_input_directive_1 = require("./bootstrap-input.directive");
var catalog_selector_component_1 = require("./catalog-selector.component");
var catalog_autocomplete_component_1 = require("./catalog-autocomplete.component");
var image_box_component_1 = require("./image-box.component");
//Bootstrap
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//Services
var ControlsModule = (function () {
    function ControlsModule() {
    }
    return ControlsModule;
}());
ControlsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule, common_1.CommonModule,
            wijmo_angular2_input_1.WjInputModule,
            ng2_bootstrap_1.AlertModule.forRoot(), ng2_bootstrap_1.ModalModule.forRoot(),
            utils_module_1.UtilsModule, search_module_1.SearchModule,
        ],
        declarations: [
            form_field_component_1.FormFieldComponent, bootstrap_input_directive_1.BootstrapInputDirective, catalog_selector_component_1.CatalogSelectorComponent, catalog_autocomplete_component_1.CatalogAutocompleteComponent,
            image_box_component_1.ImageBoxComponent, az_label_component_1.AzLabelComponent, az_button_component_1.AzButtonComponent, az_textbox_component_1.AzTextboxComponent
        ],
        providers: [],
        exports: [
            form_field_component_1.FormFieldComponent, bootstrap_input_directive_1.BootstrapInputDirective, catalog_selector_component_1.CatalogSelectorComponent, catalog_autocomplete_component_1.CatalogAutocompleteComponent,
            image_box_component_1.ImageBoxComponent, az_label_component_1.AzLabelComponent, az_button_component_1.AzButtonComponent, az_textbox_component_1.AzTextboxComponent
        ]
    })
], ControlsModule);
exports.ControlsModule = ControlsModule;

//# sourceMappingURL=controls.module.js.map

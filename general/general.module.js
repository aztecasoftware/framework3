"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//Modulos Kernel
var utils_module_1 = require("../utils/utils.module");
var search_module_1 = require("../search/search.module");
var controls_module_1 = require("../controls/controls.module");
//Wijmo
var wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Locales
var poblacion_selector_component_1 = require("./poblacion-selector.component");
//Bootstrap
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//Services
var geography_1 = require("./geography");
var GeneralModule = (function () {
    function GeneralModule() {
    }
    return GeneralModule;
}());
GeneralModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            wijmo_angular2_input_1.WjInputModule,
            ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.ModalModule,
            utils_module_1.UtilsModule, search_module_1.SearchModule, controls_module_1.ControlsModule
        ],
        declarations: [
            poblacion_selector_component_1.PoblacionSelectorComponent
        ],
        providers: [
            geography_1.PoblacionService
        ],
        exports: [
            poblacion_selector_component_1.PoblacionSelectorComponent
        ]
    })
], GeneralModule);
exports.GeneralModule = GeneralModule;

//# sourceMappingURL=general.module.js.map

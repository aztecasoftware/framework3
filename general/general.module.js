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
//Angular
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Modulos Kernel
const utils_module_1 = require('../utils/utils.module');
const search_module_1 = require('../search/search.module');
const controls_module_1 = require('../controls/controls.module');
//Wijmo
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Components
const poblacion_selector_component_1 = require('./components/poblacion-selector.component');
//Services
const poblacion_service_1 = require('./services/poblacion.service');
let COMPONENTS = [poblacion_selector_component_1.PoblacionSelectorComponent];
let SERVICES = [poblacion_service_1.PoblacionService];
let GeneralModule = class GeneralModule {
};
GeneralModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            wijmo_angular2_input_1.WjInputModule,
            ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.ModalModule,
            utils_module_1.UtilsModule, search_module_1.SearchModule, controls_module_1.ControlsModule
        ],
        declarations: COMPONENTS,
        providers: SERVICES,
        exports: COMPONENTS
    }), 
    __metadata('design:paramtypes', [])
], GeneralModule);
exports.GeneralModule = GeneralModule;
//# sourceMappingURL=general.module.js.map
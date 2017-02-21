"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
//Modulos
const general_routing_module_1 = require("./general.routing.module");
const utils_module_1 = require("../utils/utils.module");
const search_module_1 = require("../search/search.module");
const controls_module_1 = require("../controls/controls.module");
const editors_module_1 = require("../editors/editors.module");
//Bootstrap
const ng2_bootstrap_1 = require("ng2-bootstrap");
const wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Components
const poblacion_selector_component_1 = require("./components/poblacion-selector.component");
const persona_component_1 = require("./components/persona.component");
const asentamientoshumanos_editor_1 = require("./components/asentamientoshumanos.editor");
const asentamientoshumanos_manager_1 = require("./components/asentamientoshumanos.manager");
const tiposasentamiento_editor_1 = require("./components/tiposasentamiento.editor");
const tiposasentamiento_manager_1 = require("./components/tiposasentamiento.manager");
const servidoressmtp_editor_1 = require("./components/servidoressmtp.editor");
const servidoressmtp_manager_1 = require("./components/servidoressmtp.manager");
//Services
const poblacion_service_1 = require("./services/poblacion.service");
const asentamientohumano_service_1 = require("./services/asentamientohumano.service");
const tipoasentamiento_service_1 = require("./services/tipoasentamiento.service");
const servidorsmtp_service_1 = require("./services/servidorsmtp.service");
let COMPONENTS = [poblacion_selector_component_1.PoblacionSelectorComponent, persona_component_1.PersonaComponent, asentamientoshumanos_editor_1.AsentamientosHumanosEditor, asentamientoshumanos_manager_1.AsentamientosHumanosManager, tiposasentamiento_editor_1.TiposAsentamientoEditor, tiposasentamiento_manager_1.TiposAsentamientoManager, servidoressmtp_editor_1.ServidoresSMTPEditor, servidoressmtp_manager_1.ServidoresSMTPManager];
let SERVICES = [poblacion_service_1.PoblacionService, asentamientohumano_service_1.AsentamientoHumanoService, tipoasentamiento_service_1.TipoAsentamientoService, servidorsmtp_service_1.ServidorSMTPService];
let GeneralModule = class GeneralModule {
};
GeneralModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule, forms_1.ReactiveFormsModule,
            wijmo_angular2_input_1.WjInputModule, editors_module_1.EditorsModule,
            ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.ModalModule,
            utils_module_1.UtilsModule, search_module_1.SearchModule, controls_module_1.ControlsModule, general_routing_module_1.GeneralRoutingModule,
            ng2_bootstrap_1.TabsModule.forRoot()
        ],
        declarations: COMPONENTS,
        providers: SERVICES,
        exports: COMPONENTS
    })
], GeneralModule);
exports.GeneralModule = GeneralModule;

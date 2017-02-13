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
//Wijmo
const wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
const wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Modulos
const security_module_1 = require('../security/security.module');
const search_module_1 = require('../search/search.module');
const utils_module_1 = require('../utils/utils.module');
const controls_module_1 = require('../controls/controls.module');
const editors_module_1 = require('../editors/editors.module');
const custom_routing_module_1 = require('./custom.routing.module');
//Componentes
const custom_catalog_manager_1 = require('./components/custom-catalog.manager');
const ensamblados_manager_1 = require('./components/ensamblados.manager');
const ensamblados_editor_1 = require('./components/ensamblados.editor');
//Servicios
const custom_catalog_service_1 = require('./services/custom-catalog.service');
const ensamblado_service_1 = require('./services/ensamblado.service');
let COMPONENTS = [custom_catalog_manager_1.CustomCatalogManager, ensamblados_manager_1.EnsambladosManager, ensamblados_editor_1.EnsambladosEditor];
let SERVICES = [custom_catalog_service_1.CustomCatalogService, ensamblado_service_1.EnsambladoService];
let CustomModule = class CustomModule {
};
CustomModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule,
            ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.ModalModule, ng2_bootstrap_1.TabsModule,
            security_module_1.SecurityModule, search_module_1.SearchModule, utils_module_1.UtilsModule, controls_module_1.ControlsModule, custom_routing_module_1.CustomRoutingModule, editors_module_1.EditorsModule
        ],
        declarations: COMPONENTS,
        providers: SERVICES,
        exports: COMPONENTS
    }), 
    __metadata('design:paramtypes', [])
], CustomModule);
exports.CustomModule = CustomModule;
//# sourceMappingURL=custom.module.js.map
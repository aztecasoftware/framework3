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
//Modulos
const security_routing_module_1 = require('./security.routing.module');
const utils_module_1 = require('../utils/utils.module');
const search_module_1 = require('../search/search.module');
const controls_module_1 = require('../controls/controls.module');
const general_module_1 = require('../general/general.module');
const editors_module_1 = require('../editors/editors.module');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Wijmo
const wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
const wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
const wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Services
const empresa_service_1 = require('./services/empresa.service');
const sucursal_service_1 = require('./services/sucursal.service');
const proceso_service_1 = require('./services/proceso.service');
const usuario_service_1 = require('./services/usuario.service');
const grupo_service_1 = require('./services/grupo.service');
const rol_service_1 = require('./services/rol.service');
const modulo_service_1 = require('./services/modulo.service');
//Components
const empresas_manager_1 = require('./components/empresas.manager');
const empresas_editor_1 = require('./components/empresas.editor');
const sucursales_manager_1 = require('./components/sucursales.manager');
const sucursales_editor_1 = require('./components/sucursales.editor');
const grupos_manager_1 = require('./components/grupos.manager');
const grupos_editor_1 = require('./components/grupos.editor');
const roles_manager_1 = require('./components/roles.manager');
const roles_editor_1 = require('./components/roles.editor');
const modulos_manager_1 = require('./components/modulos.manager');
//Parts
const grupo_miembros_component_1 = require('./components/grupo-miembros.component');
let COMPONENTES = [empresas_manager_1.EmpresasManager, empresas_editor_1.EmpresasEditor, sucursales_manager_1.SucursalesManager, sucursales_editor_1.SucursalesEditor, grupos_manager_1.GruposManager, grupos_editor_1.GruposEditor,
    roles_editor_1.RolesEditor, roles_manager_1.RolesManager, grupo_miembros_component_1.GrupoMiembrosComponent, modulos_manager_1.ModulosManager];
let SERVICIOS = [empresa_service_1.EmpresaService, sucursal_service_1.SucursalService, proceso_service_1.ProcesoService, usuario_service_1.UsuarioService, grupo_service_1.GrupoService, rol_service_1.RolService, modulo_service_1.ModuloService];
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule, forms_1.ReactiveFormsModule,
            ng2_bootstrap_1.TabsModule.forRoot(),
            security_routing_module_1.SecurityRoutingModule, utils_module_1.UtilsModule, search_module_1.SearchModule, editors_module_1.EditorsModule, controls_module_1.ControlsModule, general_module_1.GeneralModule,
            wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule
        ],
        declarations: COMPONENTES,
        providers: SERVICIOS,
        exports: COMPONENTES
    }), 
    __metadata('design:paramtypes', [])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//Modulos
var security_routing_module_1 = require("./security.routing.module");
var utils_module_1 = require("../utils/utils.module");
var search_module_1 = require("../search/search.module");
var controls_module_1 = require("../controls/controls.module");
var general_module_1 = require("../general/general.module");
var editors_module_1 = require("../editors/editors.module");
//Bootstrap
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//Wijmo
var wijmo_angular2_core_1 = require("wijmo/wijmo.angular2.core");
var wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
var wijmo_angular2_grid_filter_1 = require("wijmo/wijmo.angular2.grid.filter");
var wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Services
var empresa_1 = require("./empresa");
var sucursal_1 = require("./sucursal");
var proceso_1 = require("./proceso");
var usuario_1 = require("./usuario");
var grupo_1 = require("./grupo");
//Components
var empresas_manager_1 = require("./empresas.manager");
var empresas_editor_1 = require("./empresas.editor");
var sucursales_manager_1 = require("./sucursales.manager");
var sucursales_editor_1 = require("./sucursales.editor");
var grupos_manager_1 = require("./grupos.manager");
var grupos_editor_1 = require("./grupos.editor");
var COMPONENTES = [empresas_manager_1.EmpresasManager, empresas_editor_1.EmpresasEditor, sucursales_manager_1.SucursalesManager, sucursales_editor_1.SucursalesEditor, grupos_manager_1.GruposManager, grupos_editor_1.GruposEditor];
var SERVICIOS = [empresa_1.EmpresaService, sucursal_1.SucursalService, proceso_1.ProcesoService, usuario_1.UsuarioService, grupo_1.GrupoService];
var SecurityModule = (function () {
    function SecurityModule() {
    }
    return SecurityModule;
}());
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
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;

//# sourceMappingURL=security.module.js.map

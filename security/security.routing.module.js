"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//
var empresas_manager_1 = require("./empresas.manager");
var empresas_editor_1 = require("./empresas.editor");
var sucursales_editor_1 = require("./sucursales.editor");
var sucursales_manager_1 = require("./sucursales.manager");
var routes = [
    {
        path: 'kernel/security',
        children: [
            { path: 'empresas', component: empresas_manager_1.EmpresasManager },
            { path: 'empresas/:id', component: empresas_editor_1.EmpresasEditor },
            { path: 'sucursales', component: sucursales_manager_1.SucursalesManager },
            { path: 'sucursales/:idEmpresa/:id', component: sucursales_editor_1.SucursalesEditor }
        ]
    },
];
var SecurityRoutingModule = (function () {
    function SecurityRoutingModule() {
    }
    return SecurityRoutingModule;
}());
SecurityRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], SecurityRoutingModule);
exports.SecurityRoutingModule = SecurityRoutingModule;

//# sourceMappingURL=security.routing.module.js.map

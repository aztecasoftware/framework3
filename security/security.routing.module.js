"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
//Components
const empresas_manager_1 = require("./components/empresas.manager");
const empresas_editor_1 = require("./components/empresas.editor");
const sucursales_manager_1 = require("./components/sucursales.manager");
const sucursales_editor_1 = require("./components/sucursales.editor");
const grupos_manager_1 = require("./components/grupos.manager");
const grupos_editor_1 = require("./components/grupos.editor");
const roles_manager_1 = require("./components/roles.manager");
const roles_editor_1 = require("./components/roles.editor");
const modulos_manager_1 = require("./components/modulos.manager");
//Parts
const grupo_miembros_component_1 = require("./components/grupo-miembros.component");
const routes = [
    {
        path: 'kernel/security',
        children: [
            { path: 'empresas', component: empresas_manager_1.EmpresasManager },
            { path: 'empresas/:id', component: empresas_editor_1.EmpresasEditor },
            { path: 'sucursales', component: sucursales_manager_1.SucursalesManager },
            { path: 'sucursales/:idEmpresa/:id', component: sucursales_editor_1.SucursalesEditor },
            { path: 'grupos', component: grupos_manager_1.GruposManager },
            { path: 'grupos/:id', component: grupos_editor_1.GruposEditor },
            { path: 'grupos/:id/members', component: grupo_miembros_component_1.GrupoMiembrosComponent },
            { path: 'roles', component: roles_manager_1.RolesManager },
            { path: 'roles/:id', component: roles_editor_1.RolesEditor },
            { path: 'modulos', component: modulos_manager_1.ModulosManager }
        ]
    },
];
let SecurityRoutingModule = class SecurityRoutingModule {
};
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

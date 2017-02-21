"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
//Componentes
const custom_catalog_manager_1 = require("./components/custom-catalog.manager");
const ensamblados_manager_1 = require("./components/ensamblados.manager");
const ensamblados_editor_1 = require("./components/ensamblados.editor");
//
const index_1 = require("../security/index");
const routes = [
    {
        path: 'kernel/custom',
        canActivateChild: [index_1.AuthGuard],
        children: [
            { path: 'catalogos', component: custom_catalog_manager_1.CustomCatalogManager },
            { path: 'ensamblados', component: ensamblados_manager_1.EnsambladosManager },
            { path: 'ensamblados/:id', component: ensamblados_editor_1.EnsambladosEditor }
        ]
    },
];
let CustomRoutingModule = class CustomRoutingModule {
};
CustomRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], CustomRoutingModule);
exports.CustomRoutingModule = CustomRoutingModule;

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
const asentamientoshumanos_manager_1 = require("./components/asentamientoshumanos.manager");
const asentamientoshumanos_editor_1 = require("./components/asentamientoshumanos.editor");
const tiposasentamiento_manager_1 = require("./components/tiposasentamiento.manager");
const tiposasentamiento_editor_1 = require("./components/tiposasentamiento.editor");
const servidoressmtp_manager_1 = require("./components/servidoressmtp.manager");
const servidoressmtp_editor_1 = require("./components/servidoressmtp.editor");
//Guards
const index_1 = require("../editors/index");
const routes = [
    {
        path: 'kernel/general',
        children: [
            { path: 'asentamientohumano', component: asentamientoshumanos_manager_1.AsentamientosHumanosManager },
            { path: 'asentamientohumano/:id', component: asentamientoshumanos_editor_1.AsentamientosHumanosEditor, canDeactivate: [index_1.EditorDeactivateGuard] },
            { path: 'tipoasentamiento', component: tiposasentamiento_manager_1.TiposAsentamientoManager },
            { path: 'tipoasentamiento/:id', component: tiposasentamiento_editor_1.TiposAsentamientoEditor, canDeactivate: [index_1.EditorDeactivateGuard] },
            { path: 'servidores-smtp', component: servidoressmtp_manager_1.ServidoresSMTPManager },
            { path: 'servidores-smtp/:id', component: servidoressmtp_editor_1.ServidoresSMTPEditor, canDeactivate: [index_1.EditorDeactivateGuard] }
        ]
    },
];
let GeneralRoutingModule = class GeneralRoutingModule {
};
GeneralRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], GeneralRoutingModule);
exports.GeneralRoutingModule = GeneralRoutingModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
//Wijmo
const wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
const wijmo_angular2_grid_filter_1 = require("wijmo/wijmo.angular2.grid.filter");
const wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Modulos
const security_module_1 = require("./security/security.module");
const search_module_1 = require("./search/search.module");
const utils_module_1 = require("./utils/utils.module");
const controls_module_1 = require("./controls/controls.module");
const general_module_1 = require("./general/general.module");
const custom_module_1 = require("./custom/custom.module");
const editors_module_1 = require("./editors/editors.module");
//
let KernelModule = class KernelModule {
};
KernelModule = __decorate([
    core_1.NgModule({
        imports: [
            security_module_1.SecurityModule, search_module_1.SearchModule, utils_module_1.UtilsModule, general_module_1.GeneralModule, controls_module_1.ControlsModule, custom_module_1.CustomModule, editors_module_1.EditorsModule,
            wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule
        ],
        declarations: [],
        providers: [],
        exports: [
            security_module_1.SecurityModule, search_module_1.SearchModule, utils_module_1.UtilsModule, general_module_1.GeneralModule, controls_module_1.ControlsModule, custom_module_1.CustomModule, editors_module_1.EditorsModule,
            wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule
        ]
    })
], KernelModule);
exports.KernelModule = KernelModule;

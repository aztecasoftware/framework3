"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Wijmo
var wijmo_angular2_grid_1 = require("wijmo/wijmo.angular2.grid");
var wijmo_angular2_grid_filter_1 = require("wijmo/wijmo.angular2.grid.filter");
var wijmo_angular2_input_1 = require("wijmo/wijmo.angular2.input");
//Modulos
var security_module_1 = require("./security/security.module");
var search_module_1 = require("./search/search.module");
var utils_module_1 = require("./utils/utils.module");
var controls_module_1 = require("./controls/controls.module");
var general_module_1 = require("./general/general.module");
//Servicios
var context_1 = require("./context");
var KernelModule = (function () {
    function KernelModule() {
    }
    return KernelModule;
}());
KernelModule = __decorate([
    core_1.NgModule({
        imports: [
            security_module_1.SecurityModule, search_module_1.SearchModule, utils_module_1.UtilsModule, general_module_1.GeneralModule, controls_module_1.ControlsModule,
            wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule
        ],
        declarations: [],
        providers: [
            context_1.Context
        ],
        exports: [
            wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule
        ]
    })
], KernelModule);
exports.KernelModule = KernelModule;

//# sourceMappingURL=kernel.module.js.map

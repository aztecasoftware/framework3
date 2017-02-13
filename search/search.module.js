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
//Wijmo
const wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
const wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
const wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
const wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
//Modulos Azteca
const utils_module_1 = require('../utils/utils.module');
//Components
const catalog_list_component_1 = require('./components/catalog-list.component');
let COMPONENTS = [catalog_list_component_1.CatalogListComponent];
let SERVICES = [];
let SearchModule = class SearchModule {
};
SearchModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule,
            utils_module_1.UtilsModule
        ],
        declarations: COMPONENTS,
        providers: SERVICES,
        exports: COMPONENTS
    }), 
    __metadata('design:paramtypes', [])
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map
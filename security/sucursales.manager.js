"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var context_1 = require("../context");
var catalog_manager_1 = require("../editors/catalog-manager");
var entities_1 = require("../entities");
var sucursal_1 = require("./sucursal");
var base_component_1 = require("../base-component");
var SucursalesManager = SucursalesManager_1 = (function (_super) {
    __extends(SucursalesManager, _super);
    function SucursalesManager(router, route, context, sucursalService) {
        var _this = _super.call(this, context) || this;
        _this.router = router;
        _this.route = route;
        _this.context = context;
        _this.sucursalService = sucursalService;
        return _this;
    }
    SucursalesManager.prototype.onConfigureCatalog = function (options) {
        this.manager.pageSize = options.tamanioPagina;
        this.manager.serverSide = options.busquedasServidor;
        this.refreshList();
    };
    SucursalesManager.prototype.doSearch = function (request) {
        var _this = this;
        this.context.app.showSpinner();
        //Agregar condición de empresa actual
        var condicionEmpresa = { field: "idEmpresa", operator: "=", valueType: "int", value: this.idEmpresa.toString() };
        request.conditions.push(condicionEmpresa);
        this.sucursalService.search(this.context.app.defaultSite.identity, request)
            .then(function (response) {
            _this.context.app.hideSpinner();
            //
            _this.sucursales = response.rows;
            _this.pageIndex = request.pageIndex;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    SucursalesManager.prototype.onAddingItem = function () {
        this.router.navigate(['kernel/security/sucursales', this.idEmpresa, 0]);
    };
    SucursalesManager.prototype.onEditingItem = function (item) {
        this.router.navigate(['kernel/security/sucursales', this.idEmpresa, item.id]);
    };
    return SucursalesManager;
}(catalog_manager_1.CatalogManager));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SucursalesManager.prototype, "idEmpresa", void 0);
SucursalesManager = SucursalesManager_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-sucursales-manager',
        templateUrl: './sucursales.manager.html',
        providers: [
            {
                provide: base_component_1.BaseComponent, useExisting: core_1.forwardRef(function () { return SucursalesManager_1; })
            },
            {
                provide: entities_1.CatalogService, useExisting: sucursal_1.SucursalService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, context_1.Context, sucursal_1.SucursalService])
], SucursalesManager);
exports.SucursalesManager = SucursalesManager;
var SucursalesManager_1;

//# sourceMappingURL=sucursales.manager.js.map

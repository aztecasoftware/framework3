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
//Frameworks
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Azteca Kernel
var index_1 = require("../index");
var index_2 = require("../editors/index");
//Locales
var index_3 = require("./index");
var EmpresasManager = EmpresasManager_1 = (function (_super) {
    __extends(EmpresasManager, _super);
    //    
    function EmpresasManager(router, route, context, empresaService) {
        var _this = _super.call(this, context) || this;
        _this.router = router;
        _this.route = route;
        _this.context = context;
        _this.empresaService = empresaService;
        return _this;
    }
    EmpresasManager.prototype.onConfigureCatalog = function (options) {
        this.manager.serverSide = options.busquedasServidor;
        this.manager.pageSize = options.tamanioPagina;
        this.refreshList();
    };
    EmpresasManager.prototype.doSearch = function (request) {
        var _this = this;
        this.context.app.showSpinner();
        this.empresaService.search(this.context.app.defaultSite.identity, request)
            .then(function (response) {
            _this.context.app.hideSpinner();
            //
            _this.empresas = response.rows;
            _this.totalRows = response.totalRows;
            _this.pageIndex = request.pageIndex;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    EmpresasManager.prototype.onAddingItem = function () {
        this.router.navigate([0], { relativeTo: this.route });
    };
    EmpresasManager.prototype.onViewingItem = function (item) {
        this.router.navigate([item.id, { readonly: true }], { relativeTo: this.route });
    };
    EmpresasManager.prototype.onEditingItem = function (item) {
        this.router.navigate([item.id], { relativeTo: this.route });
    };
    EmpresasManager.prototype.onDeletingItem = function (item) {
        var _this = this;
        this.empresaService.delete(item.id)
            .then(function (success) {
            _this.refreshList();
            _this.showAlert('El registro ha sido eliminado con éxito.', 'success');
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    EmpresasManager.prototype.onCloningItem = function (item) {
        this.router.navigate([0, { cloneId: item.id }], { relativeTo: this.route });
    };
    EmpresasManager.prototype.onChangingItemState = function (item) {
        var _this = this;
        this.empresaService.changeStatus(item.id, !item.activo)
            .then(function (success) {
            _this.refreshList();
            _this.showAlert('El estatus del registro ha sido actualizado con éxito.', 'success');
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    return EmpresasManager;
}(index_2.CatalogManager));
EmpresasManager = EmpresasManager_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-empresas-manager',
        templateUrl: './empresas.manager.html',
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(function () { return EmpresasManager_1; })
            },
            {
                provide: index_1.CatalogService, useExisting: index_3.EmpresaService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, index_1.Context, index_3.EmpresaService])
], EmpresasManager);
exports.EmpresasManager = EmpresasManager;
var EmpresasManager_1;

//# sourceMappingURL=empresas.manager.js.map

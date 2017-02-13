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
//Frameworks
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
//Azteca Kernel
const index_1 = require('../../index');
const index_2 = require('../../editors/index');
//Features
const ensamblado_service_1 = require('../services/ensamblado.service');
let EnsambladosManager_1 = class EnsambladosManager extends index_2.CatalogManager {
    //    
    constructor(router, route, context, ensambladoService) {
        super(context);
        this.router = router;
        this.route = route;
        this.context = context;
        this.ensambladoService = ensambladoService;
    }
    onConfigureCatalog(options) {
        this.manager.serverSide = options.busquedasServidor;
        this.manager.pageSize = options.tamanioPagina;
        this.refreshList();
    }
    doSearch(request) {
        this.context.app.showSpinner();
        this.ensambladoService.search(this.context.app.defaultSite.identity, request)
            .then(response => {
            this.context.app.hideSpinner();
            //
            this.ensamblados = response.rows;
            this.totalRows = response.totalRows;
            this.pageIndex = request.pageIndex;
        })
            .catch(error => this.handleError(error));
    }
    onAddingItem() {
        this.router.navigate([0], { relativeTo: this.route });
    }
    onViewingItem(item) {
        this.router.navigate([item.id, { readonly: true }], { relativeTo: this.route });
    }
    onEditingItem(item) {
        this.router.navigate([item.id], { relativeTo: this.route });
    }
    onDeletingItem(item) {
        this.ensambladoService.delete(item.id)
            .then(success => {
            this.refreshList();
            this.showAlert('El registro ha sido eliminado con éxito.', 'success');
        })
            .catch(error => this.handleError(error));
    }
    onCloningItem(item) {
        this.router.navigate([0, { cloneId: item.id }], { relativeTo: this.route });
    }
    onChangingItemState(item) {
        this.ensambladoService.changeStatus(item.id, !item.activo)
            .then(success => {
            this.refreshList();
            this.showAlert('El estatus del registro ha sido actualizado con éxito.', 'success');
        })
            .catch(error => this.handleError(error));
    }
};
let EnsambladosManager = EnsambladosManager_1;
EnsambladosManager = EnsambladosManager_1 = __decorate([
    core_1.Component({
        selector: 'custom-ensamblados-manager',
        templateUrl: './ensamblados.manager.html',
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => EnsambladosManager)
            },
            {
                provide: index_1.CatalogService, useExisting: ensamblado_service_1.EnsambladoService
            }
        ]
    }), 
    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, index_1.Context, ensamblado_service_1.EnsambladoService])
], EnsambladosManager);
exports.EnsambladosManager = EnsambladosManager;
//# sourceMappingURL=ensamblados.manager.js.map
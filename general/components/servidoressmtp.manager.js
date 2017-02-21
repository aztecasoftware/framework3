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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
//Azteca Kernel
const index_1 = require("../../index");
const editors_1 = require("../../editors");
//Features
const servidorsmtp_service_1 = require("../services/servidorsmtp.service");
let ServidoresSMTPManager = ServidoresSMTPManager_1 = class ServidoresSMTPManager extends editors_1.CatalogManager {
    //    
    constructor(router, route, context, servidorSMTPService) {
        super(context);
        this.router = router;
        this.route = route;
        this.context = context;
        this.servidorSMTPService = servidorSMTPService;
        this.servidoressmtp = [];
    }
    onConfigureCatalog(options) {
        this.manager.serverSide = options.busquedasServidor;
        this.manager.pageSize = options.tamanioPagina;
        this.refreshList();
    }
    doSearch(request) {
        this.context.app.showSpinner();
        this.servidorSMTPService.search(this.context.app.defaultSite.identity, request)
            .then(response => {
            this.context.app.hideSpinner();
            //
            this.servidoressmtp = response.rows;
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
        this.servidorSMTPService.delete(item.id)
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
        this.servidorSMTPService.changeStatus(item.id, !item.activo)
            .then(success => {
            this.refreshList();
            this.showAlert('El estatus del registro ha sido actualizado con éxito.', 'success');
        })
            .catch(error => this.handleError(error));
    }
};
ServidoresSMTPManager = ServidoresSMTPManager_1 = __decorate([
    core_1.Component({
        selector: 'general-servidoressmtp-manager',
        template: `
      <azteca-catalog-manager (searchRequested)="doSearch($event)"
                              (addingItem)="onAddingItem()"
                              (viewingItem)="onViewingItem($event)"
                              (editingItem)="onEditingItem($event)"
                              (deletingItem)="onDeletingItem($event)"
                              (cloningItem)="onCloningItem($event)"
                              (changingItemState)="onChangingItemState($event)"
      						(configureCatalog)="onConfigureCatalog($event)"
                              [enabled]="enabled"
                              [allowNew]="allowNew"
                              [allowView]="allowView"
                              [allowEdit]="allowEdit"
                              [allowDelete]="allowDelete"
                              [allowClone]="allowClone"
                              [allowChangeState]="allowChangeState"
                              [catalogList]="servidoressmtp"
                              [totalRows]="totalRows"
                              [pageIndex]="pageIndex">


          <azteca-grid-column [header]="'ID'" [binding]="'id'" dataType="Number" [width]="'10*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Codigo'" [binding]="'codigo'" [width]="'10*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Nombre'" [binding]="'nombre'" [width]="'60*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Estatus'" [binding]="'estatus'" [width]="'20*'"></azteca-grid-column>

      </azteca-catalog-manager>
    `,
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => ServidoresSMTPManager_1)
            },
            {
                provide: index_1.CatalogService, useExisting: servidorsmtp_service_1.ServidorSMTPService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, index_1.Context, servidorsmtp_service_1.ServidorSMTPService])
], ServidoresSMTPManager);
exports.ServidoresSMTPManager = ServidoresSMTPManager;
var ServidoresSMTPManager_1;

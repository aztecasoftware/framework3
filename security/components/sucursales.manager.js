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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
//Azteca Kernel
const index_1 = require("../../index");
const index_2 = require("../../editors/index");
const sucursal_service_1 = require("../services/sucursal.service");
let SucursalesManager = SucursalesManager_1 = class SucursalesManager extends index_2.CatalogManager {
    constructor(router, route, context, sucursalService) {
        super(context);
        this.router = router;
        this.route = route;
        this.context = context;
        this.sucursalService = sucursalService;
    }
    onConfigureCatalog(options) {
    }
    doSearch(request) {
    }
    onAddingItem() {
        this.router.navigate(['kernel/security/sucursales', this.idEmpresa, 0]);
    }
    onEditingItem(item) {
        this.router.navigate(['kernel/security/sucursales', this.idEmpresa, item.id]);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SucursalesManager.prototype, "idEmpresa", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SucursalesManager.prototype, "sucursales", void 0);
SucursalesManager = SucursalesManager_1 = __decorate([
    core_1.Component({
        selector: 'azteca-sucursales-manager',
        template: `
      <azteca-catalog-manager (searchRequested)="doSearch($event)"
                              (configureCatalog)="onConfigureCatalog($event)"
                              (addingItem)="onAddingItem()"
                              (editingItem)="onEditingItem($event)"                        
                              [enabled]="enabled"
                              [allowNew]="allowNew"
                              [allowView]="allowView"
                              [allowEdit]="allowEdit"
                              [allowDelete]="allowDelete"
                              [allowClone]="allowClone"
                              [allowChangeState]="allowChangeState"
                              [catalogList]="sucursales"
                              [pageSize]="10"
                              [standAlone]="false"
                              [serverSide]="false">


          <azteca-grid-column [header]="'ID'" [binding]="'id'" [dataType]="Number" [width]="'1*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Codigo'" [binding]="'codigo'" [width]="'2*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Nombre'" [binding]="'sucursal'" [width]="'3*'" ></azteca-grid-column>
          <azteca-grid-column [header]="'Domicilio'" [binding]="'domicilio'" [width]="'2*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Estatus'" [binding]="'estatus'" [width]="'2*'"></azteca-grid-column>

      </azteca-catalog-manager>
    `,
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => SucursalesManager_1)
            },
            {
                provide: index_1.CatalogService, useExisting: sucursal_service_1.SucursalService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, index_1.Context, sucursal_service_1.SucursalService])
], SucursalesManager);
exports.SucursalesManager = SucursalesManager;
var SucursalesManager_1;

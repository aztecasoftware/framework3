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
const forms_1 = require("@angular/forms");
//
const index_1 = require("../../index");
const index_2 = require("../../search/index");
const poblacion_service_1 = require("../services/poblacion.service");
let PoblacionSelectorComponent = PoblacionSelectorComponent_1 = class PoblacionSelectorComponent extends index_2.CatalogSelector {
    constructor(context, poblacionService) {
        super(context);
        this.context = context;
        this.poblacionService = poblacionService;
        this.selectedItem = null;
    }
    loadItem(itemID) {
        if (itemID > 0) {
            this.poblacionService.getDetailByID(itemID)
                .then(info => {
                this.selectedItem = info;
                this.displayValue = info.nombre + ", " + info.municipio.estado.nombre;
            })
                .catch(error => this.handleError(error));
        }
        else {
            this.selectedItem = null;
            this.displayValue = "";
        }
    }
    doSearch(request) {
        this.context.app.showSpinner();
        this.poblacionService.search(this.context.app.defaultSite.identity, request)
            .then(response => {
            this.context.app.hideSpinner();
            //
            this.poblaciones = response.rows;
            this.totalRows = response.totalRows;
            this.pageIndex = request.pageIndex;
        })
            .catch(error => this.handleError(error));
    }
};
PoblacionSelectorComponent = PoblacionSelectorComponent_1 = __decorate([
    core_1.Component({
        selector: 'poblacion-selector',
        template: `
      <azteca-catalog-selector [catalogList]="poblaciones"
                               [dialogTitle]="'Poblaciones'"
                               [displayValue]="displayValue"
                               [serverSide]="true"
                               [selectedItem]="selectedItem"
                               [pageIndex]="pageIndex"
                               [pageSize]="pageSize"
                               [totalRows]="totalRows"
                               [enabled]="enabled"
                               [visible]="visible"
                               (selectedItemChanged)="itemChangedHandler($event)"
                               (searchRequested)="doSearch($event)">

          <azteca-grid-column [header]="'ID'" [binding]="'id'" [dataType]="Number" [width]="'1*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Codigo'" [binding]="'codigo'" [width]="'2*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Nombre'" [binding]="'nombre'" [width]="'3*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Estado'" [binding]="'estado'" [width]="'2*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Estatus'" [binding]="'estatus'" [width]="'2*'"></azteca-grid-column>

      </azteca-catalog-selector>
    `,
        providers: [{
                provide: index_1.BaseComponent,
                useExisting: core_1.forwardRef(() => PoblacionSelectorComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => PoblacionSelectorComponent_1),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [index_1.Context, poblacion_service_1.PoblacionService])
], PoblacionSelectorComponent);
exports.PoblacionSelectorComponent = PoblacionSelectorComponent;
var PoblacionSelectorComponent_1;

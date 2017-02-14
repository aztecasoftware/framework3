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
const common_1 = require("@angular/common");
//Wijmo
const wijmo_1 = require("wijmo/wijmo");
const wijmo_grid_1 = require("wijmo/wijmo.grid");
//Bootstrap
const ng2_bootstrap_1 = require("ng2-bootstrap");
//Azteca Kernel
const index_1 = require("../../index");
const catalog_options_1 = require("../models/catalog-options");
const custom_catalog_service_1 = require("../services/custom-catalog.service");
const ensamblado_service_1 = require("../services/ensamblado.service");
let CustomCatalogManager = class CustomCatalogManager {
    constructor(context, customService, router, location, ensambladoService) {
        this.context = context;
        this.customService = customService;
        this.router = router;
        this.location = location;
        this.ensambladoService = ensambladoService;
        this.alerts = [];
        this.collectionView = new wijmo_1.CollectionView();
        this.currentItem = new catalog_options_1.CatalogOptions();
    }
    ngOnInit() {
        this.collectionView.pageSize = 15;
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadEnsamblados());
        setTimeout(_ => this.loadData());
    }
    loadData() {
        this.customService.load()
            .then(options => this.collectionView.sourceCollection = options)
            .catch(error => this.handleError(error));
    }
    loadEnsamblados() {
        this.ensambladoService.loadList()
            .then(ensamblados => {
            this.ensamblados = ensamblados;
            this.ensamblados.push({ id: 0, codigo: '0', nombre: '[NO SELECCIONADA]', ensamblado: '', activo: true });
            this.ensambladosMap = new wijmo_grid_1.DataMap(this.ensamblados, 'id', 'nombre');
        })
            .catch(error => this.handleError(error));
    }
    saveData() {
        this.customService.update(this.collectionView.sourceCollection)
            .then(() => this.showAlert('Los cambios han sido guardados con éxito', 'success'))
            .catch(error => this.handleError(error));
    }
    mainToolbarHandler(button) {
        if (button.name == "SAVE") {
            this.saveData();
        }
        if (button.name == "LOAD") {
            this.loadData();
        }
        else if (button.name == "CLOSE") {
            this.location.back();
        }
    }
    detailsToolbarHandler(button) {
        if (button.name == "OK") {
            this.collectionView.commitEdit();
            this.detailsDialog.hide();
        }
        if (button.name == "CANCEL") {
            this.collectionView.cancelEdit();
            this.detailsDialog.hide();
        }
    }
    onRowEdit(item) {
        this.currentItem = item;
        this.collectionView.editItem(this.collectionView.currentItem);
        this.detailsDialog.config.backdrop = false;
        this.detailsDialog.show();
    }
    hideDetailsDialog() {
        this.collectionView.cancelEdit();
        this.detailsDialog.hide();
    }
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
    handleError(error) {
        console.error(error);
        this.showAlert('Error al guardar los cambios', 'danger');
    }
};
__decorate([
    core_1.ViewChild('detailsDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CustomCatalogManager.prototype, "detailsDialog", void 0);
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", wijmo_grid_1.FlexGrid)
], CustomCatalogManager.prototype, "grid", void 0);
CustomCatalogManager = __decorate([
    core_1.Component({
        selector: 'custom-catalog-manager',
        template: `
      <div class="row">
          <div class="col-xs-12 col-md-10 col-lg-10">
              <div class="panel panel-default">
                  <div class="panel-heading">Configuración y personalización de catálogos</div>

                  <az-toolbar (buttonClick)="mainToolbarHandler($event)">
                      <az-toolbar-button [name]="'SAVE'" [type]="'primary'" [text]="'Guardar Cambios'" [icon]="'glyphicon glyphicon-floppy-disk'"></az-toolbar-button>
                      <az-toolbar-button [name]="'LOAD'" [text]="'Actualizar Lista'" [icon]="'glyphicon glyphicon-refresh'"></az-toolbar-button>
                      <az-toolbar-button [name]="'CLOSE'" [text]="'Cerrar'"></az-toolbar-button>
                  </az-toolbar>
                  <!--Pool de alertas-->
                  <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" [dismissOnTimeout]="alert.dismissOnTimeout" (close)="closeAlert(i)">
                      {{ alert?.msg }}
                  </alert>

                  <div class="panel-body">
                      <div class="row">
                          <div class="col-xs-12">
                              <wj-flex-grid #grid style="height:550px"
                                            [itemsSource]="collectionView">

                                  <wj-flex-grid-filter #filter></wj-flex-grid-filter>

                                  <wj-flex-grid-column [header]="''" [width]="45" [isReadOnly]="true">                                
                                      <template wjFlexGridCellTemplate [cellType]="'Cell'" let-cell="cell">
                                          <button type="button" class="btn btn-default" (click)="onRowEdit(cell.item)">
                                              <span class="glyphicon glyphicon-pencil"></span>
                                          </button>
                                      </template>
                                  </wj-flex-grid-column>

                                  <wj-flex-grid-column [header]="'Entidad'" [binding]="'entidad'" [width]="'30*'" [isReadOnly]="true"></wj-flex-grid-column>
                                  <wj-flex-grid-column [header]="'Ensamblado'" [binding]="'idEnsamblado'" [width]="'20*'" [dataMap]="ensambladosMap"></wj-flex-grid-column>
                                  <wj-flex-grid-column [header]="'Clase'" [binding]="'claseAcciones'" [width]="'20*'"></wj-flex-grid-column>
                                  <wj-flex-grid-column [header]="'Código Auto'" [binding]="'codigoAutogenerado'" dataType="Boolean" [width]="'10*'"></wj-flex-grid-column>
                                  <wj-flex-grid-column [header]="'Log'" [binding]="'logCambios'" dataType="Boolean" [width]="'10*'"></wj-flex-grid-column>
                              </wj-flex-grid>
                          </div>
                      </div>
                      <!--Pager-->
                      <div class="row">
                          <div class="col-xs-12 col-md-6">
                              <az-pager [totalRows]="collectionView.totalItemCount"
                                        [pageSize]="collectionView.pageSize"
                                        [pageIndex]="collectionView.pageIndex"                                  
                                        (moveToPage)="collectionView.moveToPage($event)">

                              </az-pager>
                          </div>
                      </div>
                
                  </div>
              </div>

          </div>
      </div>

      <!--Dialogo de edición de datalles-->
      <div bsModal #detailsDialog="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" aria-label="Close" (click)="hideDetailsDialog()">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 class="modal-title">Configuración de entidad - {{currentItem.entidad}}</h4>
                  </div>
                  <div class="modal-body">
                      <div class="row">

                          <div class="col-xs-12 col-md-10 col-lg-6">
                              <div class="panel panel-default">
                                  <div class="panel-heading">Opciones de Configuración</div>
                                  <div class="panel-body">
                                      <div class="checkbox">
                                          <label>
                                              <input type="checkbox" [(ngModel)]="currentItem.codigoAutogenerado" />Código Autogenerado
                                          </label>
                                      </div>

                                      <div class="checkbox">
                                          <label>
                                              <input type="checkbox" [(ngModel)]="currentItem.logCambios" />Habilitar log de cambios
                                          </label>
                                      </div>

                                      <div class="checkbox">
                                          <label>
                                              <input type="checkbox" [(ngModel)]="currentItem.busquedasServidor" />Realizar búsquedas y paginación del lado del servidor
                                          </label>
                                      </div>

                                      <div class="checkbox">
                                          <label>
                                              <input type="checkbox" [(ngModel)]="currentItem.utilizarCache" />Guardar catálogo en caché para acelerar las búsquedas
                                          </label>
                                      </div>

                                      <div class="form-group">
                                          <label class="control-label">Cantidad de registros por página:</label>
                                          <input type="text" [(ngModel)]="currentItem.tamanioPagina" />
                                      </div>

                                  </div> <!--Panel body-->
                              </div> <!--Panel-->
                          </div> <!--Column-->

                          <div class="col-xs-12 col-md-10 col-lg-6">
                        
                              <div class="panel panel-default">
                                  <div class="panel-heading">Clase de personalizaciones</div>
                                  <div class="panel-body">

                                      <div class="form-group">
                                          <label class="control-label">Ensamblado:</label>
                                          <wj-combo-box class="form-control"
                                                        [itemsSource]="ensamblados"
                                                        [selectedValuePath]="'id'"
                                                        [displayMemberPath]="'nombre'"
                                                        [(selectedValue)]="currentItem.idEnsamblado">
                                          </wj-combo-box>
                                      </div>

                                      <div class="form-group">
                                          <label class="control-label">Clase:</label>
                                          <input type="text" [(ngModel)]="currentItem.claseAcciones" />
                                      </div>
                                  </div> <!--Panel body-->
                              </div> <!--Panel-->
                          </div> <!--Column-->

                      </div> <!--Row-->
                
                      <div class="modal-footer">
                          <az-toolbar (buttonClick)="detailsToolbarHandler($event)">
                              <az-toolbar-button [name]="'OK'" [type]="'primary'" [text]="'Aceptar'" [icon]="'glyphicon glyphicon-ok'"></az-toolbar-button>
                              <az-toolbar-button [name]="'CANCEL'" [type]="'warning'" [text]="'Cancelar'" [icon]="'glyphicon glyphicon-remove'"></az-toolbar-button>
                          </az-toolbar>
                      </div> <!--Footer-->
                  </div> <!--Modal Body-->
              </div> <!--Modal Content-->
          </div> <!--Modal-->

      </div>
    `
    }),
    __metadata("design:paramtypes", [index_1.Context, custom_catalog_service_1.CustomCatalogService, router_1.Router, common_1.Location,
        ensamblado_service_1.EnsambladoService])
], CustomCatalogManager);
exports.CustomCatalogManager = CustomCatalogManager;

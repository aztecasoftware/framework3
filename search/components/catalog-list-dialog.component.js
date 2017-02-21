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
//
const ng2_bootstrap_1 = require("ng2-bootstrap");
const index_1 = require("../../controls/index");
const search_request_1 = require("../models/search-request");
let CatalogListDialogComponent = class CatalogListDialogComponent {
    constructor() {
        this.selectedItems = [];
        this.selectedItem = null;
        this.list = [];
        this.multiSelect = false;
        this.excludedItems = [];
        //Outputs
        this.searchRequested = new core_1.EventEmitter();
        this.selectedItemChanged = new core_1.EventEmitter();
        this.selectedItemsChanged = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes['catalogList'] && this.multiSelect) {
            this.updateSelected();
        }
    }
    updateSelected() {
        if (this.catalogList == undefined)
            return;
        //Crear copia local de la colección y quitar los elementos excluidos
        this.list = this.catalogList.slice();
        if (this.excludedItems.length > 0) {
            this.list = this.list.filter(fitem => !this.excludedItems.find(sitem => sitem.id == fitem.id));
        }
        //Marcar los elementos seleccionados
        this.list.forEach(item => {
            if (item.selected == undefined)
                item.selected = false;
            //Si el elemento se encuentra dentro de la colección de elementos seleccionados, cambiar estatus
            if (this.selectedItems.find(selItem => selItem.id == item.id)) {
                item.selected = true;
            }
        });
    }
    onSearchRequested(request) {
        this.searchRequested.emit(request);
    }
    onCurrentItemChanged(item) {
        this.selectedItem = item;
    }
    onItemSelected(item) {
        //Sólo aplica cuando es de selección simple (doble click)
        if (!this.multiSelect) {
            this.selectedItemChanged.emit(item);
            this.listDialog.hide();
        }
    }
    onItemCheckedChanged(item) {
        if (item.selected) {
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems = this.selectedItems.filter(fItem => item.id != fItem.id);
        }
    }
    onConfirmClick() {
        if (this.multiSelect) {
            this.selectedItemsChanged.emit(this.selectedItems);
        }
        else {
            this.selectedItemChanged.emit(this.selectedItem);
        }
        this.listDialog.hide();
    }
    onCancelClick() {
        this.listDialog.hide();
    }
    triggerSearch() {
        let request = new search_request_1.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.emit(request);
    }
    show() {
        this.selectedItems = [];
        this.selectedItem = null;
        this.listDialog.config.backdrop = false;
        this.listDialog.show();
    }
    isValid() {
        if (this.multiSelect) {
            return this.selectedItems.length > 0;
        }
        else {
            return this.selectedItem != null;
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogListDialogComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListDialogComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialogComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialogComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListDialogComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListDialogComponent.prototype, "multiSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogListDialogComponent.prototype, "excludedItems", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialogComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialogComponent.prototype, "selectedItemChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialogComponent.prototype, "selectedItemsChanged", void 0);
__decorate([
    core_1.ViewChild('listDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CatalogListDialogComponent.prototype, "listDialog", void 0);
__decorate([
    core_1.ContentChildren(index_1.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogListDialogComponent.prototype, "columns", void 0);
CatalogListDialogComponent = __decorate([
    core_1.Component({
        selector: 'catalog-list-dialog',
        template: `
      <div bsModal #listDialog="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-body">
                      <azteca-catalog-list [catalogList]="list"
                                           (searchRequested)="onSearchRequested($event)"
                                           (currentItemChanged)="onCurrentItemChanged($event)"
                                           (itemSelected)="onItemSelected($event)"
                                           (itemCheckedChanged)="onItemCheckedChanged($event)"
                                           [showSelectColumn]="multiSelect"
                                           [serverSide]="serverSide"
                                           [pageSize]="pageSize"
                                           [totalRows]="totalRows"
                                           [pageIndex]="pageIndex">

                          <!-- Mapear columnas definidas en componente padre-->
                          <azteca-grid-column *ngFor="let col of columns"
                                              [header]="col.header"
                                              [binding]="col.binding"
                                              [dataType]="col.dataType ? col.dataType :'String'"
                                              [dataMap]="col.dataMap"
                                              [width]="col.width">

                              <!-- Add cell template if col.cellTemplate is specified. -->
                              <template wjFlexGridCellTemplate *ngIf="col.cellTemplate" [cellType]="'Cell'" let-cell="cell">
                                  <!-- Load the component whose type is specified in col.cellTemplate -->
                                  <wj-component-loader [component]="col.cellTemplate" [properties]="{cell: cell}"></wj-component-loader>
                              </template>

                          </azteca-grid-column>

                      </azteca-catalog-list>
                

                  </div> <!-- Modal Body-->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" (click)="onConfirmClick()" [disabled]="!isValid()">Aceptar</button>
                      <button type="button" class="btn btn-default" (click)="onCancelClick()">Cancelar</button>
                  </div> <!-- Modal Footer-->

              </div> <!--Modal Content-->
          </div> <!-- Modal-->
      </div> <!-- Modal Directive-->
    `
    }),
    __metadata("design:paramtypes", [])
], CatalogListDialogComponent);
exports.CatalogListDialogComponent = CatalogListDialogComponent;

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
        this.multiSelect = false;
        //Outputs
        this.searchRequested = new core_1.EventEmitter();
    }
    onSearchRequested(request) {
        this.searchRequested.next(request);
    }
    onCurrentItemChanged(item) {
    }
    onItemSelected(item) {
    }
    onConfirmClick() {
    }
    onCancelClick() {
    }
    triggerSearch() {
        let request = new search_request_1.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.next(request);
    }
    show() {
        this.listDialog.config.backdrop = false;
        this.listDialog.show();
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
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListDialogComponent.prototype, "searchRequested", void 0);
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
                      <azteca-catalog-list [catalogList]="catalogList"
                                           (searchRequested)="onSearchRequested($event)"
                                           (currentItemChanged)="onCurrentItemChanged($event)"
                                           (itemSelected)="onItemSelected($event)"
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
                      <button type="button" class="btn btn-primary" (click)="onConfirmClick()">Aceptar</button>
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

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
const wijmo = require("wijmo/wijmo");
//
const index_1 = require("../../index");
const index_2 = require("../../controls/index");
const search_request_1 = require("../models/search-request");
let CatalogSelectorComponent = class CatalogSelectorComponent {
    constructor(context) {
        this.context = context;
        this.selectedRow = null;
        //
        this.enabled = true;
        this.visible = true;
        this.selectedItem = null;
        this.displayValue = "";
        this.dialogTitle = "Lista del catálogo";
        //
        this.searchRequested = new core_1.EventEmitter();
        this.selectedItemChanged = new core_1.EventEmitter();
    }
    showListDialog() {
        this.listDialog.config.backdrop = false;
        this.listDialog.show();
        let request = new search_request_1.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.next(request);
    }
    hideListDialog() {
        this.listDialog.hide();
    }
    searchRequestedHandler(request) {
        //Redireccionar request a componente padre
        this.searchRequested.next(request);
    }
    currentItemChangedHandler(item) {
        this.selectedRow = item;
    }
    selectItem(item) {
        this.selectedItemChanged.next(item);
        this.hideListDialog();
    }
    clear() {
        this.selectedItemChanged.next(null);
    }
    refreshControls() {
        wijmo.Control.invalidateAll();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.CatalogInfo)
], CatalogSelectorComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogSelectorComponent.prototype, "displayValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogSelectorComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogSelectorComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogSelectorComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogSelectorComponent.prototype, "dialogTitle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogSelectorComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogSelectorComponent.prototype, "selectedItemChanged", void 0);
__decorate([
    core_1.ViewChild('listDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CatalogSelectorComponent.prototype, "listDialog", void 0);
__decorate([
    core_1.ContentChildren(index_2.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogSelectorComponent.prototype, "columns", void 0);
CatalogSelectorComponent = __decorate([
    core_1.Component({
        selector: 'azteca-catalog-selector',
        template: `
      <div class="input-group">
          <input type="text" class="form-control" [value]="displayValue" readonly>
          <span class="input-group-btn">
              <button class="btn btn-default" type="button" (click)="showListDialog()" *ngIf="enabled">
                  <span class="glyphicon glyphicon-list-alt"></span>
              </button>
              <button class="btn btn-default" type="button" (click)="clear()" *ngIf="selectedItem != null && enabled">
                  <span class="glyphicon glyphicon-remove"></span>
              </button>
          </span>
      </div>

      <div bsModal #listDialog="bs-modal" (onShown)="refreshControls()" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">

          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" aria-label="Close" (click)="hideListDialog()">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 class="modal-title">{{dialogTitle}}</h4>
                  </div>
                  <div class="modal-body">
                      <azteca-catalog-list [catalogList]="catalogList"
                                           (searchRequested)="searchRequestedHandler($event)"                                     
                                           (itemSelected)="selectItem($event)"
                                           (currentItemChanged)="currentItemChangedHandler($event)"
                                           [serverSide]="serverSide"
                                           [pageSize]="pageSize"
                                           [totalRows]="totalRows"
                                           [pageIndex]="pageIndex">


                          <azteca-grid-column *ngFor="let col of columns"
                                              [header]="col.header"
                                              [binding]="col.binding"
                                              [dataType]="col.dataType"
                                              [dataMap]="col.dataMap"
                                              [width]="col.width">

                          </azteca-grid-column>

                      </azteca-catalog-list>


                  </div><!--Modal Body-->
                  <div class="modal-footer">
                      <!--Toolbar-->
                      <div class="btn-group">
                          <button type="submit" class="btn btn-primary" (click)="selectItem(selectedRow)" [disabled]="selectedRow == null">
                              <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Aceptar
                          </button>
                          <button type="button" class="btn btn-warning" (click)="hideListDialog()">
                              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                          </button>
                      </div> <!--Toolbar-->
                  </div> <!--Modal Footer-->
              </div> <!--Modal Content-->
          </div> <!--Modal-->
      </div> <!--Modal Directive-->
    `
    }),
    __metadata("design:paramtypes", [index_1.Context])
], CatalogSelectorComponent);
exports.CatalogSelectorComponent = CatalogSelectorComponent;

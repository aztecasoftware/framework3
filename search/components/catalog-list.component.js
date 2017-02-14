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
const wijmo_1 = require("wijmo/wijmo");
const wijmo_grid_1 = require("wijmo/wijmo.grid");
const wijmo_grid_filter_1 = require("wijmo/wijmo.grid.filter");
const wijmo_input_1 = require("wijmo/wijmo.input");
const search_request_1 = require("../models/search-request");
const index_1 = require("../../controls/index");
const grid_filter_1 = require("../../utils/grid-filter");
let CatalogListComponent = class CatalogListComponent {
    constructor() {
        this._emptyFilter = "{\"defaultFilterType\":3, \"filters\":[]}";
        this._catalogList = [];
        this._currentFilter = this._emptyFilter;
        this._currentSortedColumn = -1;
        this._pageSize = 20;
        this._serverSice = true;
        //
        this.currentItem = null;
        this.catalogView = new wijmo_1.CollectionView();
        //
        this.enabled = true;
        this.showSelectColumn = false;
        this.showRowButton = false;
        this.pageIndex = 0;
        this.totalRows = 0;
        //
        this.searchRequested = new core_1.EventEmitter();
        this.contextMenuClick = new core_1.EventEmitter();
        this.currentItemChanged = new core_1.EventEmitter();
        this.itemSelected = new core_1.EventEmitter();
        this.contextMenuOpen = new core_1.EventEmitter();
        this.rowButtonClick = new core_1.EventEmitter();
    }
    get pageCount() {
        if (this.serverSide)
            return Math.ceil(this.totalRows / this.pageSize);
        else
            return this.catalogView.pageCount;
    }
    get catalogList() {
        return this._catalogList;
    }
    set catalogList(value) {
        if (value) {
            this._catalogList = value;
            this.catalogView.sourceCollection = value;
            this.catalogView.moveCurrentToFirst();
            if (this.catalogView.currentItem != null) {
                this.currentItem = { id: this.catalogView.currentItem.id, codigo: this.catalogView.currentItem.codigo, activo: this.catalogView.currentItem.activo, estatus: this.catalogView.currentItem.estatus, data: this.catalogView.currentItem };
                this.currentItemChanged.next(this.currentItem);
            }
        }
    }
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(value) {
        this._pageSize = value;
        this.catalogView.pageSize = value;
    }
    get serverSide() {
        return this._serverSice;
    }
    set serverSide(value) {
        this._serverSice = value;
        if (this.filter) {
            this.setFilterType();
        }
    }
    setFilterType() {
        if (this._serverSice) {
            this.filter.defaultFilterType = wijmo_grid_filter_1.FilterType.Condition;
            this._currentFilter = this.filter.filterDefinition;
        }
        else {
            this.filter.defaultFilterType = wijmo_grid_filter_1.FilterType.Both;
            this._currentFilter = this._emptyFilter;
        }
    }
    //Implementación 
    ngAfterViewInit() {
        this.setFilterType();
        /*
        if (this.showRowButton) {
            setTimeout(_ => this.grid.refresh(true));
        }
        */
    }
    initialized(sender, args) {
        var self = this;
        //Agregar manejador para menú contextual        
        sender.addEventListener(sender.hostElement, "contextmenu", (e) => {
            let ht = sender.hitTest(e);
            sender.select(new wijmo_grid_1.CellRange(ht.row, ht.col), true);
            self.contextMenuOpen.next(self.currentItem);
        });
        //Manejo de doble click
        sender.addEventListener(sender.hostElement, "dblclick", (e) => {
            let ht = sender.hitTest(e);
            if (ht.cellType == wijmo_grid_1.CellType.Cell) {
                this.itemSelected.next(this.currentItem);
            }
        });
        //Establecer el operador "comienza con" para todas cadenas
        for (let i = 0; i < this.grid.columns.length; i++) {
            let col = this.grid.columns[i];
            let colFilter = this.filter.getColumnFilter(col);
            if (colFilter != null) {
                if (col.dataType == undefined || col.dataType == wijmo_1.DataType.String) {
                    colFilter.conditionFilter.condition1.operator = wijmo_grid_filter_1.Operator.BW;
                }
            }
        }
        //        
        this.catalogView.currentChanged.addHandler((args) => {
            let row = self.catalogView.currentItem;
            if (row != null)
                this.currentItem = { id: row.id, codigo: row.codigo, activo: row.activo, estatus: row.estatus, data: row };
            else
                this.currentItem = null;
            //
            self.currentItemChanged.next(self.currentItem);
        }, self);
    }
    moveFirst() {
        if (this.serverSide)
            this.createSearchRequest(0);
        else {
            this.catalogView.moveToFirstPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    }
    movePrevious() {
        if (this.serverSide)
            this.createSearchRequest(this.pageIndex - 1);
        else {
            this.catalogView.moveToPreviousPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    }
    moveNext() {
        if (this.serverSide)
            this.createSearchRequest(this.pageIndex + 1);
        else {
            this.catalogView.moveToNextPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    }
    moveLast() {
        if (this.serverSide)
            this.createSearchRequest(this.pageCount - 1);
        else {
            this.catalogView.moveToLastPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    }
    filterChanged(e, args) {
        if (this.serverSide) {
            this._currentFilter = this.filter.filterDefinition;
            this.createSearchRequest(0);
        }
        else {
            this.pageIndex = 0;
        }
    }
    sortChanged(sender, args) {
        if (this.serverSide) {
            let col = sender.columns[args.col];
            this._currentSortedColumn = args.col;
            this._currentSortOrder = col.currentSort;
            this.createSearchRequest(this.pageIndex);
        }
    }
    createSearchRequest(pageIndex) {
        //Crear objeto con la representación del filtro actual del grid
        let gridFilter = new grid_filter_1.GridFilter();
        gridFilter.fromJSON(this._currentFilter);
        //Crear search request a partir de los filtros y orden del grid
        let request = new search_request_1.SearchRequest();
        request.SetGridConditions(gridFilter);
        request.pageIndex = pageIndex;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //Iterar sobre las columnas del grid para determinar el orden
        for (let i = 0; i < this.grid.columns.length; i++) {
            let col = this.grid.columns[i];
            if (col.currentSort != null) {
                let SortExp = new search_request_1.SortOrder();
                SortExp.field = col.binding;
                SortExp.direction = col.currentSort == "+" ? "asc" : "desc";
                request.order.push(SortExp);
            }
        }
        //
        this.searchRequested.next(request);
        return request;
    }
    menuItemClicked(menu, args) {
        if (this.currentItem != null) {
            let menuItems = this.contextMenuItems.toArray();
            let item = menuItems[menu.selectedIndex];
            this.contextMenuClick.next(item);
        }
    }
    onRowButtonClick(row) {
        this.rowButtonClick.next(row);
    }
};
__decorate([
    core_1.ContentChildren(index_1.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogListComponent.prototype, "columns", void 0);
__decorate([
    core_1.ViewChild('filter'),
    __metadata("design:type", wijmo_grid_filter_1.FlexGridFilter)
], CatalogListComponent.prototype, "filter", void 0);
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", wijmo_grid_1.FlexGrid)
], CatalogListComponent.prototype, "grid", void 0);
__decorate([
    core_1.ViewChild('ctxMenu'),
    __metadata("design:type", wijmo_input_1.Menu)
], CatalogListComponent.prototype, "contextMenu", void 0);
__decorate([
    core_1.ContentChildren(index_1.MenuItemDirective),
    __metadata("design:type", core_1.QueryList)
], CatalogListComponent.prototype, "contextMenuItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], CatalogListComponent.prototype, "catalogList", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListComponent.prototype, "showSelectColumn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogListComponent.prototype, "showRowButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogListComponent.prototype, "rowButtonIcon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CatalogListComponent.prototype, "pageSize", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogListComponent.prototype, "serverSide", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogListComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "contextMenuClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "currentItemChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "itemSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "contextMenuOpen", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogListComponent.prototype, "rowButtonClick", void 0);
CatalogListComponent = __decorate([
    core_1.Component({
        selector: 'azteca-catalog-list',
        template: `
      <wj-menu #ctxMenu (itemClicked)="menuItemClicked(ctxMenu, $event)" style="display:none">
          <wj-menu-item *ngFor="let item of contextMenuItems">
              <div *ngIf="enabled && item.enabled">
                  <span [class]="item.icon"></span>
                  <b>{{item.text}}</b>
                  <br>
                  <small><i>{{item.smallText}}</i></small>
              </div>
          </wj-menu-item>
      </wj-menu>

      <div class="row">

          <div class="col-xs-12">
              <wj-flex-grid #grid style="height:500px"
                            [itemsSource]="catalogView"
                            (initialized)="initialized(grid, $event)"
                            (sortedColumn)="sortChanged(grid, $event)"
                            [selectionMode]="'Row'"
                            [wjContextMenu]="ctxMenu"                      
                            [isReadOnly]="true">

                  <!--Row Button-->
                  <wj-flex-grid-column *ngIf="showRowButton" [header]="''" [width]="45" [isReadOnly]="true">
                      <template wjFlexGridCellTemplate [cellType]="'Cell'" let-cell="cell">
                          <button type="button" class="btn btn-default" (click)="onRowButtonClick(cell.item)">
                              <span [ngClass]="rowButtonIcon"></span>
                          </button>
                      </template>
                  </wj-flex-grid-column>

                  <!--Selection Column-->
                  <wj-flex-grid-column *ngIf="showSelectColumn" [header]="col.header" [binding]="'selected'" dataType="Boolean" [width]="'45'"></wj-flex-grid-column>

                  <wj-flex-grid-filter #filter (filterChanged)="filterChanged(filter, $event)"></wj-flex-grid-filter>
                  <!--Agregar las columnas definidas en el template-->
                  <wj-flex-grid-column *ngFor="let col of columns"
                                          [header]="col.header"
                                          [binding]="col.binding"
                                          [name]="col.name"
                                          [dataType]="col.dataType"
                                          [dataMap]="col.dataMap"
                                          [width]="col.width">
                      <!-- Add cell template if col.cellTemplate is specified. -->
                      <template wjFlexGridCellTemplate *ngIf="col.cellTemplate" [cellType]="'Cell'" let-cell="cell">
                          <!-- Load the component whose type is specified in col.cellTemplate -->
                          <wj-component-loader [component]="col.cellTemplate" [properties]="{cell: cell}"></wj-component-loader>
                      </template>
                  </wj-flex-grid-column>
              </wj-flex-grid>
          </div>
      </div>

      <div class="row">
          <div class="col-xs-12 col-md-6">
              <div class="btn-group">
                  <button type="button" class="btn btn-default"
                          (click)="moveFirst()"
                          [disabled]="pageIndex <= 0">
                      <span class="glyphicon glyphicon-fast-backward"></span>
                  </button>
                  <button type="button" class="btn btn-default"
                          (click)="movePrevious()"
                          [disabled]="pageIndex <= 0">
                      <span class="glyphicon glyphicon-step-backward"></span>
                  </button>
                  <button type="button" class="btn btn-default" disabled style="width:100px">
                      {{pageIndex + 1}} de {{pageCount}}
                  </button>
                  <button type="button" class="btn btn-default"
                          (click)="moveNext()"
                          [disabled]="pageIndex >= pageCount -1">
                      <span class="glyphicon glyphicon-step-forward"></span>
                  </button>
                  <button type="button" class="btn btn-default"
                          (click)="moveLast()"
                          [disabled]="pageIndex >= pageCount -1">
                      <span class="glyphicon glyphicon-fast-forward"></span>
                  </button>
              </div>
          </div>
      </div>
    `
    })
], CatalogListComponent);
exports.CatalogListComponent = CatalogListComponent;

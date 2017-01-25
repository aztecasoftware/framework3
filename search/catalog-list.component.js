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
var core_1 = require("@angular/core");
//
var wijmo_1 = require("wijmo/wijmo");
var wijmo_grid_1 = require("wijmo/wijmo.grid");
var wijmo_grid_filter_1 = require("wijmo/wijmo.grid.filter");
var wijmo_input_1 = require("wijmo/wijmo.input");
var search_request_1 = require("./search-request");
var grid_column_1 = require("../utils/grid-column");
var grid_filter_1 = require("../utils/grid-filter");
var CatalogListComponent = (function () {
    function CatalogListComponent() {
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
        this.contextMenuItems = [];
        this.totalRows = 0;
        //
        this.searchRequested = new core_1.EventEmitter();
        this.contextMenuClick = new core_1.EventEmitter();
        this.currentItemChanged = new core_1.EventEmitter();
        this.itemSelected = new core_1.EventEmitter();
        this.contextMenuOpen = new core_1.EventEmitter();
    }
    Object.defineProperty(CatalogListComponent.prototype, "pageCount", {
        get: function () {
            if (this.serverSide)
                return Math.ceil(this.totalRows / this.pageSize);
            else
                return this.catalogView.pageCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogListComponent.prototype, "catalogList", {
        get: function () {
            return this._catalogList;
        },
        set: function (value) {
            if (value) {
                this._catalogList = value;
                this.catalogView.sourceCollection = value;
                this.catalogView.moveCurrentToFirst();
                if (this.catalogView.currentItem != null) {
                    this.currentItem = { id: this.catalogView.currentItem.id, codigo: this.catalogView.currentItem.codigo, activo: this.catalogView.currentItem.activo, estatus: this.catalogView.currentItem.estatus, data: this.catalogView.currentItem };
                    this.currentItemChanged.next(this.currentItem);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogListComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
            this.catalogView.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogListComponent.prototype, "serverSide", {
        get: function () {
            return this._serverSice;
        },
        set: function (value) {
            this._serverSice = value;
            if (this.filter) {
                this.setFilterType();
            }
        },
        enumerable: true,
        configurable: true
    });
    CatalogListComponent.prototype.setFilterType = function () {
        if (this._serverSice) {
            this.filter.defaultFilterType = wijmo_grid_filter_1.FilterType.Condition;
            this._currentFilter = this.filter.filterDefinition;
        }
        else {
            this.filter.defaultFilterType = wijmo_grid_filter_1.FilterType.Both;
            this._currentFilter = this._emptyFilter;
        }
    };
    //Implementación 
    CatalogListComponent.prototype.ngAfterViewInit = function () {
        this.setFilterType();
    };
    CatalogListComponent.prototype.initialized = function (sender, args) {
        var _this = this;
        var self = this;
        //Agregar manejador para menú contextual        
        sender.addEventListener(sender.hostElement, "contextmenu", function (e) {
            var ht = sender.hitTest(e);
            sender.select(new wijmo_grid_1.CellRange(ht.row, ht.col), true);
            self.contextMenuOpen.next(self.currentItem);
        });
        //Manejo de doble click
        sender.addEventListener(sender.hostElement, "dblclick", function (e) {
            var ht = sender.hitTest(e);
            if (ht.cellType == wijmo_grid_1.CellType.Cell) {
                _this.itemSelected.next(_this.currentItem);
            }
        });
        //Establecer el operador "comienza con" para todas cadenas
        for (var i = 0; i < this.grid.columns.length; i++) {
            var col = this.grid.columns[i];
            var colFilter = this.filter.getColumnFilter(col);
            if (col.dataType == undefined || col.dataType == wijmo_1.DataType.String) {
                colFilter.conditionFilter.condition1.operator = wijmo_grid_filter_1.Operator.BW;
            }
        }
        //        
        this.catalogView.currentChanged.addHandler(function (args) {
            var row = self.catalogView.currentItem;
            if (row != null)
                _this.currentItem = { id: row.id, codigo: row.codigo, activo: row.activo, estatus: row.estatus, data: row };
            else
                _this.currentItem = null;
            //
            self.currentItemChanged.next(self.currentItem);
        }, self);
    };
    CatalogListComponent.prototype.moveFirst = function () {
        if (this.serverSide)
            this.createSearchRequest(0);
        else {
            this.catalogView.moveToFirstPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    };
    CatalogListComponent.prototype.movePrevious = function () {
        if (this.serverSide)
            this.createSearchRequest(this.pageIndex - 1);
        else {
            this.catalogView.moveToPreviousPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    };
    CatalogListComponent.prototype.moveNext = function () {
        if (this.serverSide)
            this.createSearchRequest(this.pageIndex + 1);
        else {
            this.catalogView.moveToNextPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    };
    CatalogListComponent.prototype.moveLast = function () {
        if (this.serverSide)
            this.createSearchRequest(this.pageCount - 1);
        else {
            this.catalogView.moveToLastPage();
            this.pageIndex = this.catalogView.pageIndex;
        }
    };
    CatalogListComponent.prototype.filterChanged = function (e, args) {
        if (this.serverSide) {
            this._currentFilter = this.filter.filterDefinition;
            this.createSearchRequest(0);
        }
        else {
            this.pageIndex = 0;
        }
    };
    CatalogListComponent.prototype.sortChanged = function (sender, args) {
        if (this.serverSide) {
            var col = sender.columns[args.col];
            this._currentSortedColumn = args.col;
            this._currentSortOrder = col.currentSort;
            this.createSearchRequest(this.pageIndex);
        }
    };
    CatalogListComponent.prototype.createSearchRequest = function (pageIndex) {
        //Crear objeto con la representación del filtro actual del grid
        var gridFilter = new grid_filter_1.GridFilter();
        gridFilter.fromJSON(this._currentFilter);
        //Crear search request a partir de los filtros y orden del grid
        var request = new search_request_1.SearchRequest();
        request.SetGridConditions(gridFilter);
        request.pageIndex = pageIndex;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //Iterar sobre las columnas del grid para determinar el orden
        for (var i = 0; i < this.grid.columns.length; i++) {
            var col = this.grid.columns[i];
            if (col.currentSort != null) {
                var SortExp = new search_request_1.SortOrder();
                SortExp.field = col.binding;
                SortExp.direction = col.currentSort == "+" ? "asc" : "desc";
                request.order.push(SortExp);
            }
        }
        //
        this.searchRequested.next(request);
        return request;
    };
    CatalogListComponent.prototype.menuItemClicked = function (menu, args) {
        if (this.currentItem != null) {
            var item = this.contextMenuItems[menu.selectedIndex];
            this.contextMenuClick.next(item);
        }
    };
    return CatalogListComponent;
}());
__decorate([
    core_1.ContentChildren(grid_column_1.GridColumn),
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
    __metadata("design:type", Array)
], CatalogListComponent.prototype, "contextMenuItems", void 0);
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
CatalogListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-catalog-list',
        templateUrl: './catalog-list.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], CatalogListComponent);
exports.CatalogListComponent = CatalogListComponent;

//# sourceMappingURL=catalog-list.component.js.map

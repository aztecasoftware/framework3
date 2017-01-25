"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_control_1 = require("./base-control");
var CatalogSelector = (function (_super) {
    __extends(CatalogSelector, _super);
    function CatalogSelector(context) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this._selectedID = 0;
        _this.displayValue = "";
        _this.pageIndex = 0;
        _this.pageSize = 20;
        _this.totalRows = 0;
        _this.propagateChange = function (_) { };
        return _this;
    }
    Object.defineProperty(CatalogSelector.prototype, "selectedID", {
        get: function () {
            return this._selectedID;
        },
        set: function (value) {
            if (value != this._selectedID) {
                this._selectedID = value ? value : 0;
                this.loadItem(this._selectedID);
            }
        },
        enumerable: true,
        configurable: true
    });
    CatalogSelector.prototype.writeValue = function (value) {
        this.selectedID = value ? value : 0;
    };
    CatalogSelector.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CatalogSelector.prototype.registerOnTouched = function () { };
    CatalogSelector.prototype.handleError = function (reason) {
        this.context.app.hideSpinner();
    };
    CatalogSelector.prototype.itemChangedHandler = function (item) {
        if (item != null)
            this.loadItem(item.id);
        else
            this.loadItem(0);
    };
    return CatalogSelector;
}(base_control_1.BaseControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CatalogSelector.prototype, "selectedID", null);
exports.CatalogSelector = CatalogSelector;

//# sourceMappingURL=catalog-selector.js.map

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
const base_control_1 = require("./base-control");
class CatalogSelector extends base_control_1.BaseControl {
    constructor(context) {
        super();
        this.context = context;
        this._selectedID = 0;
        this.displayValue = "";
        this.pageIndex = 0;
        this.pageSize = 20;
        this.totalRows = 0;
        this.propagateChange = (_) => { };
    }
    get selectedID() {
        return this._selectedID;
    }
    set selectedID(value) {
        if (value != this._selectedID) {
            this._selectedID = value ? value : 0;
            this.loadItem(this._selectedID);
        }
    }
    writeValue(value) {
        this.selectedID = value ? value : 0;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
    handleError(reason) {
        this.context.app.hideSpinner();
    }
    itemChangedHandler(item) {
        if (item != null)
            this.loadItem(item.id);
        else
            this.loadItem(0);
    }
}
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CatalogSelector.prototype, "selectedID", null);
exports.CatalogSelector = CatalogSelector;

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
var forms_1 = require("@angular/forms");
//
var context_1 = require("../context");
var catalog_selector_1 = require("../controls/catalog-selector");
var base_component_1 = require("../base-component");
//
var geography_1 = require("./geography");
var PoblacionSelectorComponent = PoblacionSelectorComponent_1 = (function (_super) {
    __extends(PoblacionSelectorComponent, _super);
    function PoblacionSelectorComponent(context, poblacionService) {
        var _this = _super.call(this, context) || this;
        _this.context = context;
        _this.poblacionService = poblacionService;
        _this.selectedItem = null;
        return _this;
    }
    PoblacionSelectorComponent.prototype.loadItem = function (itemID) {
        var _this = this;
        if (itemID > 0) {
            this.poblacionService.getDetailByID(itemID)
                .then(function (info) {
                _this.selectedItem = info;
                _this.displayValue = info.nombre + ", " + info.municipio.estado.nombre;
                _this.propagateChange(itemID);
            })
                .catch(function (error) { return _this.handleError(error); });
        }
        else {
            this.selectedItem = null;
            this.displayValue = "";
            this.propagateChange(0);
        }
    };
    PoblacionSelectorComponent.prototype.doSearch = function (request) {
        var _this = this;
        this.context.app.showSpinner();
        this.poblacionService.search(this.context.app.defaultSite.identity, request)
            .then(function (response) {
            _this.context.app.hideSpinner();
            //
            _this.poblaciones = response.rows;
            _this.totalRows = response.totalRows;
            _this.pageIndex = request.pageIndex;
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    return PoblacionSelectorComponent;
}(catalog_selector_1.CatalogSelector));
PoblacionSelectorComponent = PoblacionSelectorComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'poblacion-selector',
        templateUrl: './poblacion-selector.component.html',
        providers: [{
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(function () { return PoblacionSelectorComponent_1; })
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return PoblacionSelectorComponent_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [context_1.Context, geography_1.PoblacionService])
], PoblacionSelectorComponent);
exports.PoblacionSelectorComponent = PoblacionSelectorComponent;
var PoblacionSelectorComponent_1;

//# sourceMappingURL=poblacion-selector.component.js.map

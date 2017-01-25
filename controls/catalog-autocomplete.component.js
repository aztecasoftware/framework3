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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//
var wijmo_input_1 = require("wijmo/wijmo.input");
//
var context_1 = require("../context");
var webapi_1 = require("../webapi");
//
var CatalogAutocompleteComponent = (function () {
    //
    function CatalogAutocompleteComponent(http, context) {
        this.http = http;
        this.context = context;
        this.maxItems = 2;
        this.displayMember = "";
    }
    CatalogAutocompleteComponent.prototype.ngOnInit = function () {
        var self = this;
        //Configurar autocomplete
        this.autocomplete.displayMemberPath = this.displayMember;
        this.autocomplete.maxItems = 2;
        //Crear referencia a servicio web
        this.apiService = new webapi_1.WebService(this.http, this.serviceUrl + '/' + this.context.session.sessionID);
        //
        this.autocomplete.itemsSourceFunction = function (query, max, callback) {
            var params;
            if (self.parameters != undefined)
                params = self.parameters;
            else {
                params = new http_1.URLSearchParams();
                params.set('idBranch', self.context.app.defaultSite.identity.toString());
            }
            params.set("keyword", query);
            //
            self.apiService.getData('search-keyword', params)
                .map(function (response) {
                return response.json();
            })
                .toPromise()
                .then(function (items) { return callback(items); })
                .catch(function (reason) {
                callback(null);
            });
        };
    };
    return CatalogAutocompleteComponent;
}());
__decorate([
    core_1.ViewChild('autocomplete'),
    __metadata("design:type", wijmo_input_1.AutoComplete)
], CatalogAutocompleteComponent.prototype, "autocomplete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogAutocompleteComponent.prototype, "serviceUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", http_1.URLSearchParams)
], CatalogAutocompleteComponent.prototype, "parameters", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogAutocompleteComponent.prototype, "maxItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogAutocompleteComponent.prototype, "displayMember", void 0);
CatalogAutocompleteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-catalog-autocomplete',
        templateUrl: './catalog-autocomplete.component.html',
        styleUrls: ['./catalog-autocomplete.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context])
], CatalogAutocompleteComponent);
exports.CatalogAutocompleteComponent = CatalogAutocompleteComponent;

//# sourceMappingURL=catalog-autocomplete.component.js.map

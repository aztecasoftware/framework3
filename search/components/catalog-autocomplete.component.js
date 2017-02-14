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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//
const wijmo_input_1 = require("wijmo/wijmo.input");
//
const index_1 = require("../../index");
//
let CatalogAutocompleteComponent = class CatalogAutocompleteComponent {
    //
    constructor(http, context) {
        this.http = http;
        this.context = context;
        this.maxItems = 2;
        this.displayMember = "";
    }
    ngOnInit() {
        var self = this;
        //Configurar autocomplete
        this.autocomplete.displayMemberPath = this.displayMember;
        this.autocomplete.maxItems = 2;
        //Crear referencia a servicio web
        this.apiService = new index_1.WebService(this.http, this.serviceUrl + '/' + this.context.session.sessionID);
        //
        this.autocomplete.itemsSourceFunction = function (query, max, callback) {
            let params;
            if (self.parameters != undefined)
                params = self.parameters;
            else {
                params = new http_1.URLSearchParams();
                params.set('idBranch', self.context.app.defaultSite.identity.toString());
            }
            params.set("keyword", query);
            //
            self.apiService.getData('search-keyword', params)
                .map(response => {
                return response.json();
            })
                .toPromise()
                .then(items => callback(items))
                .catch(reason => {
                callback(null);
            });
        };
    }
};
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
        selector: 'azteca-catalog-autocomplete',
        template: `
      <wj-auto-complete #autocomplete
                        [isRequired]="true"
                        [placeholder]="'Introduzca búsqueda...'"
                        [showDropDownButton]="false">
      </wj-auto-complete>
    `,
        styles: [`
      .wj-autocomplete {
          width:100%
      }
    `]
    }),
    __metadata("design:paramtypes", [http_1.Http, index_1.Context])
], CatalogAutocompleteComponent);
exports.CatalogAutocompleteComponent = CatalogAutocompleteComponent;

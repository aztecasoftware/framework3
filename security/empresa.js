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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var context_1 = require("../context");
var entities_1 = require("../entities");
var file_1 = require("../general/file");
//////////////////////////// MODELS /////////////////////////////////////////////////////
var EmpresaInfo = (function (_super) {
    __extends(EmpresaInfo, _super);
    function EmpresaInfo() {
        var _this = _super.call(this) || this;
        _this.logo = new file_1.FileInfo();
        return _this;
    }
    return EmpresaInfo;
}(entities_1.CatalogInfo));
exports.EmpresaInfo = EmpresaInfo;
var EmpresaItem = (function () {
    function EmpresaItem() {
    }
    return EmpresaItem;
}());
exports.EmpresaItem = EmpresaItem;
//////////////////////////// SERVICES /////////////////////////////////////////////////////
var EmpresaService = (function (_super) {
    __extends(EmpresaService, _super);
    function EmpresaService(http, context) {
        return _super.call(this, http, context, "api/kernel/security/empresas") || this;
    }
    EmpresaService.prototype.create = function () {
        return Promise.resolve(new EmpresaInfo());
    };
    EmpresaService.prototype.loadSucursales = function (idEmpresa) {
        var params = new http_1.URLSearchParams();
        params.set("idEmpresa", idEmpresa.toString());
        return this.apiService.getData("load-sucursales", params)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return EmpresaService;
}(entities_1.CatalogService));
EmpresaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context])
], EmpresaService);
exports.EmpresaService = EmpresaService;

//# sourceMappingURL=empresa.js.map

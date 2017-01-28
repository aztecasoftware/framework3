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
//Frameworks
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//Azteca Kernel
var context_1 = require("../context");
var entities_1 = require("../entities");
var GrupoInfo = (function (_super) {
    __extends(GrupoInfo, _super);
    function GrupoInfo() {
        return _super.call(this) || this;
    }
    return GrupoInfo;
}(entities_1.CatalogInfo));
exports.GrupoInfo = GrupoInfo;
var GrupoItem = (function () {
    function GrupoItem() {
    }
    return GrupoItem;
}());
exports.GrupoItem = GrupoItem;
var GrupoService = (function (_super) {
    __extends(GrupoService, _super);
    function GrupoService(http, context) {
        return _super.call(this, http, context, 'api/kernel/security/grupos') || this;
    }
    GrupoService.prototype.create = function () {
        return Promise.resolve(new GrupoInfo());
    };
    GrupoService.prototype.getMembers = function (idGrupo) {
        var params = new http_1.URLSearchParams();
        params.set('idGrupo', idGrupo.toString());
        return this.apiService.getData('get-members', params)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return GrupoService;
}(entities_1.CatalogService));
GrupoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context])
], GrupoService);
exports.GrupoService = GrupoService;

//# sourceMappingURL=grupo.js.map

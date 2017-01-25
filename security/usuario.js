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
var webapi_1 = require("../webapi");
var context_1 = require("../context");
var entities_1 = require("../entities");
//////////////////////////// MODELS /////////////////////////////////////////////////////
var UsuarioInfo = (function (_super) {
    __extends(UsuarioInfo, _super);
    function UsuarioInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UsuarioInfo;
}(entities_1.CatalogInfo));
exports.UsuarioInfo = UsuarioInfo;
//////////////////////////// SERVICES /////////////////////////////////////////////////////
var UsuarioService = (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http, context) {
        return _super.call(this, http, context, "api/kernel/security/usuarios") || this;
    }
    UsuarioService.prototype.create = function () {
        return Promise.resolve(new UsuarioInfo());
    };
    UsuarioService.prototype.login = function (userName, password, workStation) {
        var _this = this;
        var Params = new http_1.URLSearchParams();
        Params.set('userName', userName);
        Params.set('password', password);
        Params.set('workstation', workStation);
        return this.apiService.getData("login", Params)
            .map(function (response) {
            var session = response.json();
            if (session != null)
                _this.apiService = new webapi_1.WebService(_this.http, _this.serviceUrl + "/" + session.sessionID);
            return session;
        })
            .toPromise();
    };
    return UsuarioService;
}(entities_1.CatalogService));
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context])
], UsuarioService);
exports.UsuarioService = UsuarioService;

//# sourceMappingURL=usuario.js.map

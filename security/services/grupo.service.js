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
//Frameworks
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//Azteca Kernel
const index_1 = require("../../index");
const grupo_1 = require("../models/grupo");
let GrupoService = class GrupoService extends index_1.CatalogService {
    constructor(http, context) {
        super(http, context, 'api/kernel/security/grupos');
    }
    create() {
        return Promise.resolve(new grupo_1.GrupoInfo());
    }
    getMembers(idGrupo) {
        let params = new http_1.URLSearchParams();
        params.set('idGrupo', idGrupo.toString());
        return this.apiService.getData('get-members', params)
            .map(response => response.json())
            .toPromise();
    }
    addMembers(idGrupo, usuarios) {
        let params = new http_1.URLSearchParams();
        params.set('idGrupo', idGrupo.toString());
        return this.apiService.postData('add-members', params, usuarios)
            .toPromise();
    }
    removeMember(idGrupo, idUsuario) {
        let params = new http_1.URLSearchParams();
        params.set('idGrupo', idGrupo.toString());
        params.set('idUsuario', idUsuario.toString());
        return this.apiService.delete('remove-member', params)
            .toPromise();
    }
};
GrupoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, index_1.Context])
], GrupoService);
exports.GrupoService = GrupoService;

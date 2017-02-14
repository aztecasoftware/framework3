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
const context_1 = require("./context");
//
const base_service_1 = require("./base-service");
/**
 * Clase base para servicios básicos de un catálogo
 */
let CatalogService = class CatalogService extends base_service_1.BaseService {
    constructor(http, context, serviceUrl) {
        super(http, context, serviceUrl);
        this.http = http;
        this.context = context;
        this.serviceUrl = serviceUrl;
        this.options = null;
    }
    getOptions() {
        if (this.options == null) {
            let params = new http_1.URLSearchParams();
            return this.apiService.getData('get-options', params)
                .map(response => {
                this.options = response.json();
                return this.options;
            })
                .toPromise();
        }
        else {
            return Promise.resolve(this.options);
        }
    }
    update(info) {
        let params = new http_1.URLSearchParams();
        return this.apiService.postData('update', params, info)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    getDetailByID(itemID) {
        let params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.getData('get-detail-id', params)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    getDetailByCode(idBranch, code) {
        let params = new http_1.URLSearchParams();
        params.set('idBranch', idBranch.toString());
        params.set('code', code);
        return this.apiService.getData('get-detail-code', params)
            .map(response => response.json())
            .toPromise();
    }
    getDetailFromCache(itemID) {
        let params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.getData('get-detail-cache', params)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    clone(itemID) {
        let params = new http_1.URLSearchParams();
        params.set('originalID', itemID.toString());
        return this.apiService.getData('clone', params)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    delete(itemID) {
        let params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.delete('delete', params)
            .toPromise();
    }
    exists(itemID) {
        return Promise.resolve(false);
    }
    changeStatus(itemID, active) {
        let params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        params.set('active', active ? "true" : "false");
        return this.apiService.postData('change-status', params, "")
            .toPromise();
    }
    sync(lastUpdate) {
        return Promise.resolve(null);
    }
    search(idBranch, request) {
        let params = new http_1.URLSearchParams();
        params.set('idBranch', idBranch.toString());
        return this.apiService.postData('search', params, request)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
CatalogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context, String])
], CatalogService);
exports.CatalogService = CatalogService;

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
var webapi_1 = require("./webapi");
var context_1 = require("./context");
//////////////////////////////// MODELS ////////////////////////////////////////////////////////////
/**
*Model básico de un catálogo
*/
var CatalogInfo = (function () {
    function CatalogInfo() {
        this.identity = 0;
        this.code = '';
    }
    return CatalogInfo;
}());
exports.CatalogInfo = CatalogInfo;
/**
 * Modelo básico de una estructura jerárquica
 */
var HierarchyInfo = (function (_super) {
    __extends(HierarchyInfo, _super);
    function HierarchyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HierarchyInfo;
}(CatalogInfo));
exports.HierarchyInfo = HierarchyInfo;
/**
 * Modelo básico de un documento con workflow
 */
var DocumentInfo = (function () {
    function DocumentInfo() {
    }
    return DocumentInfo;
}());
exports.DocumentInfo = DocumentInfo;
var DocumentDetail = (function () {
    function DocumentDetail() {
    }
    return DocumentDetail;
}());
exports.DocumentDetail = DocumentDetail;
///////////////////////////// SERVICES //////////////////////////////////////////////////////////////
/**
 * Clase base para todos los servicios
 */
var BaseService = (function () {
    function BaseService(http, context, serviceUrl) {
        this.http = http;
        this.context = context;
        this.serviceUrl = serviceUrl;
        if (this.context.session != null)
            this.apiService = new webapi_1.WebService(http, serviceUrl, this.context.session.sessionID);
        else
            this.apiService = new webapi_1.WebService(http, serviceUrl);
    }
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context, String])
], BaseService);
exports.BaseService = BaseService;
/**
 * Clase base para servicios básicos de un catálogo
 */
var CatalogService = (function (_super) {
    __extends(CatalogService, _super);
    function CatalogService(http, context, serviceUrl) {
        var _this = _super.call(this, http, context, serviceUrl) || this;
        _this.http = http;
        _this.context = context;
        _this.serviceUrl = serviceUrl;
        _this.options = null;
        return _this;
    }
    CatalogService.prototype.getOptions = function () {
        var _this = this;
        if (this.options == null) {
            var params = new http_1.URLSearchParams();
            return this.apiService.getData('get-options', params)
                .map(function (response) {
                _this.options = response.json();
                return _this.options;
            })
                .toPromise();
        }
        else {
            return Promise.resolve(this.options);
        }
    };
    CatalogService.prototype.update = function (info) {
        var params = new http_1.URLSearchParams();
        return this.apiService.postData('update', params, info)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    CatalogService.prototype.getDetailByID = function (itemID) {
        var params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.getData('get-detail-id', params)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    CatalogService.prototype.getDetailByCode = function (idBranch, code) {
        var params = new http_1.URLSearchParams();
        params.set('idBranch', idBranch.toString());
        params.set('code', code);
        return this.apiService.getData('get-detail-code', params)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    CatalogService.prototype.getDetailFromCache = function (itemID) {
        var params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.getData('get-detail-cache', params)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    CatalogService.prototype.clone = function (itemID) {
        var params = new http_1.URLSearchParams();
        params.set('originalID', itemID.toString());
        return this.apiService.getData('clone', params)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    CatalogService.prototype.delete = function (itemID) {
        var params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        return this.apiService.delete('delete', params)
            .toPromise();
    };
    CatalogService.prototype.exists = function (itemID) {
        return Promise.resolve(false);
    };
    CatalogService.prototype.changeStatus = function (itemID, active) {
        var params = new http_1.URLSearchParams();
        params.set('itemID', itemID.toString());
        params.set('active', active ? "true" : "false");
        return this.apiService.postData('change-status', params, "")
            .toPromise();
    };
    CatalogService.prototype.sync = function (lastUpdate) {
        return Promise.resolve(null);
    };
    CatalogService.prototype.search = function (idBranch, request) {
        var params = new http_1.URLSearchParams();
        params.set('idBranch', idBranch.toString());
        return this.apiService.postData('search', params, request)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    CatalogService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return CatalogService;
}(BaseService));
CatalogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context, String])
], CatalogService);
exports.CatalogService = CatalogService;
var HierarchyService = (function (_super) {
    __extends(HierarchyService, _super);
    function HierarchyService(http, context, serviceUrl) {
        var _this = _super.call(this, http, context, serviceUrl) || this;
        _this.http = http;
        _this.context = context;
        _this.serviceUrl = serviceUrl;
        return _this;
    }
    HierarchyService.prototype.getOptions = function () {
        var params = new http_1.URLSearchParams();
        return this.apiService.getData('get-options', params)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    HierarchyService.prototype.update = function (info) {
        return Promise.resolve(info);
    };
    HierarchyService.prototype.getDetailByID = function (itemID) {
        return this.create();
    };
    HierarchyService.prototype.getDetailByCode = function (idBranch, code) {
        return this.create();
    };
    HierarchyService.prototype.getDetailFromCache = function (itemID) {
        return this.create();
    };
    HierarchyService.prototype.clone = function (itemID) {
        var params = new http_1.URLSearchParams();
        params.set('originalID', itemID.toString());
        return this.apiService.getData('clone', params)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    HierarchyService.prototype.delete = function (itemID) {
        return Promise.resolve(null);
    };
    HierarchyService.prototype.exists = function (itemID) {
        return Promise.resolve(false);
    };
    HierarchyService.prototype.changeStatus = function (itemID, active) {
        return Promise.resolve(null);
    };
    HierarchyService.prototype.search = function (idBranch, request) {
        var params = new http_1.URLSearchParams();
        params.set('idBranch', idBranch.toString());
        return this.apiService.postData('search', params, request)
            .map(function (response) {
            return response.json();
        })
            .toPromise();
    };
    HierarchyService.prototype.sync = function (lastUpdate) {
        return Promise.resolve(null);
    };
    HierarchyService.prototype.loadChildren = function (idCompany, idParent) {
        return Promise.resolve([]);
    };
    HierarchyService.prototype.moveNode = function (idNode, idTargetParent, order) {
        return Promise.resolve(null);
    };
    return HierarchyService;
}(BaseService));
exports.HierarchyService = HierarchyService;
var DocumentService = (function () {
    function DocumentService() {
    }
    return DocumentService;
}());
exports.DocumentService = DocumentService;

//# sourceMappingURL=entities.js.map

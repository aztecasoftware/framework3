"use strict";
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//
const catalog_service_1 = require('./catalog.service');
class HierarchyService extends catalog_service_1.CatalogService {
    constructor(http, context, serviceUrl) {
        super(http, context, serviceUrl);
        this.http = http;
        this.context = context;
        this.serviceUrl = serviceUrl;
    }
    loadChildren(idCompany, idParent) {
        let params = new http_1.URLSearchParams();
        params.set('idCompany', idCompany.toString());
        params.set('idParent', idParent.toString());
        return this.apiService.getData('children', params)
            .map(response => response.json())
            .toPromise();
    }
    moveNode(idNode, idTargetParent, order) {
        let params = new http_1.URLSearchParams();
        params.set('idNode', idNode.toString());
        params.set('idTargetParent', idTargetParent.toString());
        params.set('order', order.toString());
        return this.apiService.putData('move-node', params, null)
            .toPromise();
    }
    loadHierarchy(idCompany) {
        let params = new http_1.URLSearchParams();
        params.set('idCompany', idCompany.toString());
        return this.apiService.getData('load-hierarchy', params)
            .map(response => {
            return response.json();
        })
            .toPromise();
    }
    saveHierarchy(changes) {
        let params = new http_1.URLSearchParams();
        return this.apiService.postData('save-hierarchy', params, changes)
            .map(response => response.json())
            .toPromise();
    }
}
exports.HierarchyService = HierarchyService;
//# sourceMappingURL=hierarchy.service.js.map
"use strict";
/**
*Model básico de un catálogo
*/
class CatalogInfo {
    constructor() {
        this.identity = 0;
        this.code = '';
        this.idCompany = 0;
        this.idBranch = 0;
        this.active = true;
    }
}
exports.CatalogInfo = CatalogInfo;

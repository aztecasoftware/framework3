"use strict";
const index_1 = require("../../index");
//
const empresa_1 = require("./empresa");
class SucursalInfo extends index_1.CatalogInfo {
    constructor() {
        super();
        this.empresa = new empresa_1.EmpresaInfo();
    }
}
exports.SucursalInfo = SucursalInfo;
class SucursalItem {
}
exports.SucursalItem = SucursalItem;

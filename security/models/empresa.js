"use strict";
const index_1 = require('../../index');
const file_1 = require('../../general/models/file');
class EmpresaInfo extends index_1.CatalogInfo {
    constructor() {
        super();
        this.logo = new file_1.FileInfo();
    }
}
exports.EmpresaInfo = EmpresaInfo;
class EmpresaItem {
}
exports.EmpresaItem = EmpresaItem;
//# sourceMappingURL=empresa.js.map
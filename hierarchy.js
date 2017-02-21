"use strict";
const catalog_1 = require("./catalog");
/**
 * Modelo básico de una estructura jerárquica
 */
class HierarchyInfo extends catalog_1.CatalogInfo {
    constructor() {
        super();
        this.nombre = '';
        this.idPadre = 0;
        this.isLeaf = true;
        this.children = [];
        this.clientID = 0;
        this.nombre = '';
        this.idPadre = 0;
        this.orden = 0;
        this.nivel = 0;
        this.path = '';
        this.isLeaf = true;
        this.namedPath = '';
        this.children = [];
        this.clientID = 0;
    }
    get icon() {
        if (!this.isLeaf) {
            return 'glyphicon glyphicon-folder-open';
        }
        else {
            return '';
        }
    }
}
exports.HierarchyInfo = HierarchyInfo;
/**
 * Implementación base de HierarchyInfo
 */
class HierarchyNode extends HierarchyInfo {
}
exports.HierarchyNode = HierarchyNode;
/**
 * Wraper para enviar actualizaciones de una jerarquía
 */
class HierarchyChanges {
    constructor() {
        this.nodes = [];
        this.deletedNodes = [];
    }
}
exports.HierarchyChanges = HierarchyChanges;

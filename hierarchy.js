"use strict";
const catalog_1 = require('./catalog');
/**
 * Modelo básico de una estructura jerárquica
 */
class HierarchyInfo extends catalog_1.CatalogInfo {
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
}
exports.HierarchyChanges = HierarchyChanges;
//# sourceMappingURL=hierarchy.js.map
import { CatalogInfo } from './catalog';
/**
 * Modelo básico de una estructura jerárquica
 */
export declare abstract class HierarchyInfo<TNode extends HierarchyInfo<TNode>> extends CatalogInfo {
    nombre: string;
    idPadre: number;
    orden: number;
    nivel: number;
    path: string;
    isLeaf: boolean;
    namedPath: string;
    children: TNode[];
    clientID: number;
    readonly icon: string;
}
/**
 * Implementación base de HierarchyInfo
 */
export declare class HierarchyNode extends HierarchyInfo<HierarchyNode> {
}
/**
 * Wraper para enviar actualizaciones de una jerarquía
 */
export declare class HierarchyChanges<TNode extends HierarchyInfo<TNode>> {
    nodes: TNode[];
    deletedNodes: number[];
}

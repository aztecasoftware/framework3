import { TreeNode } from 'angular2-tree-component';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/models/catalog-options';
import { HierarchyManager } from '../../editors/index';
import { ModuloInfo } from '../models/modulo';
import { ModuloService } from '../services/modulo.service';
export declare class ModulosManager extends HierarchyManager {
    private context;
    private moduloService;
    modulos: ModuloInfo[];
    currentNode: TreeNode;
    constructor(context: Context, moduloService: ModuloService);
    onConfigureCatalog(options: CatalogOptions): void;
    loadHierarchy(): void;
    onCurrentNodeChanged(node: TreeNode): void;
    onCreatingNode(parentNode: TreeNode): void;
    onEditingNode(node: TreeNode): void;
    onSavingNode(info: ModuloInfo): void;
    savingHierarchy(modulos: ModuloInfo[]): void;
}

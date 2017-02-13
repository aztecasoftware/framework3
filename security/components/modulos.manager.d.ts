import { Context } from '../../index';
import { CatalogOptions } from '../../custom/models/catalog-options';
import { HierarchyManager } from '../../editors/index';
import { ModuloInfo } from '../models/modulo';
import { ModuloService } from '../services/modulo.service';
export declare class ModulosManager extends HierarchyManager {
    private context;
    private moduloService;
    modulos: ModuloInfo[];
    constructor(context: Context, moduloService: ModuloService);
    onConfigureCatalog(options: CatalogOptions): void;
    loadHierarchy(): void;
}

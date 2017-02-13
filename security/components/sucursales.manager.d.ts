import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogManager } from '../../editors/index';
import { SearchRequest } from '../../search/index';
import { SucursalItem } from '../models/sucursal';
import { SucursalService } from '../services/sucursal.service';
export declare class SucursalesManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private sucursalService;
    idEmpresa: number;
    sucursales: SucursalItem[];
    constructor(router: Router, route: ActivatedRoute, context: Context, sucursalService: SucursalService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onEditingItem(item: CatalogItem): void;
}

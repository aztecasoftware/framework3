import { Router, ActivatedRoute } from '@angular/router';
import { Context } from '../context';
import { CatalogOptions } from '../custom/custom-catalog';
import { CatalogManager } from '../editors/catalog-manager';
import { CatalogItem } from '../entities';
import { SearchRequest } from '../search/search-request';
import { SucursalService } from './sucursal';
export declare class SucursalesManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private sucursalService;
    idEmpresa: number;
    sucursales: any[];
    constructor(router: Router, route: ActivatedRoute, context: Context, sucursalService: SucursalService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onEditingItem(item: CatalogItem): void;
}

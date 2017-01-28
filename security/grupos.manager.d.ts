import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../index';
import { CatalogOptions } from '../custom/index';
import { CatalogManager } from '../editors/index';
import { SearchRequest } from '../search/index';
import { GrupoInfo, GrupoService } from './grupo';
export declare class GruposManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private grupoService;
    grupos: GrupoInfo[];
    constructor(router: Router, route: ActivatedRoute, context: Context, grupoService: GrupoService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onViewingItem(item: CatalogItem): void;
    onEditingItem(item: CatalogItem): void;
    onDeletingItem(item: CatalogItem): void;
    onCloningItem(item: CatalogItem): void;
    onChangingItemState(item: CatalogItem): void;
}

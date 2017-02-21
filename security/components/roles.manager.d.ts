import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogManager } from '../../editors/index';
import { SearchRequest } from '../../search/index';
import { RolService } from '../services/rol.service';
import { RolItem } from '../models/rol';
export declare class RolesManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private rolService;
    roles: RolItem[];
    constructor(router: Router, route: ActivatedRoute, context: Context, rolService: RolService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onViewingItem(item: CatalogItem): void;
    onEditingItem(item: CatalogItem): void;
    onDeletingItem(item: CatalogItem): void;
    onCloningItem(item: CatalogItem): void;
    onChangingItemState(item: CatalogItem): void;
}

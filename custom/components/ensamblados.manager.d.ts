import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../../index';
import { CatalogOptions } from '../models/catalog-options';
import { CatalogManager } from '../../editors/index';
import { SearchRequest } from '../../search/index';
import { EnsambladoService } from '../services/ensamblado.service';
import { EnsambladoItem } from '../models/ensamblado';
export declare class EnsambladosManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private ensambladoService;
    ensamblados: EnsambladoItem[];
    constructor(router: Router, route: ActivatedRoute, context: Context, ensambladoService: EnsambladoService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onViewingItem(item: CatalogItem): void;
    onEditingItem(item: CatalogItem): void;
    onDeletingItem(item: CatalogItem): void;
    onCloningItem(item: CatalogItem): void;
    onChangingItemState(item: CatalogItem): void;
}

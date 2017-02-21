import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogManager } from '../../editors/index';
import { SearchRequest } from '../../search/index';
import { AsentamientoHumanoService } from '../services/asentamientohumano.service';
import { AsentamientoHumanoItem } from '../models/asentamientohumano';
export declare class AsentamientosHumanosManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private asentamientoHumanoService;
    asentamientoshumanos: AsentamientoHumanoItem[];
    constructor(router: Router, route: ActivatedRoute, context: Context, asentamientoHumanoService: AsentamientoHumanoService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onViewingItem(item: CatalogItem): void;
    onEditingItem(item: CatalogItem): void;
    onDeletingItem(item: CatalogItem): void;
    onCloningItem(item: CatalogItem): void;
    onChangingItemState(item: CatalogItem): void;
}

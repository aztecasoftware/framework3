import { Router, ActivatedRoute } from '@angular/router';
import { Context, CatalogItem } from '../../index';
import { CatalogOptions } from '../../custom';
import { CatalogManager } from '../../editors';
import { SearchRequest } from '../../search';
import { ServidorSMTPService } from '../services/servidorsmtp.service';
import { ServidorSMTPItem } from '../models/servidorsmtp';
export declare class ServidoresSMTPManager extends CatalogManager {
    private router;
    private route;
    protected context: Context;
    private servidorSMTPService;
    servidoressmtp: ServidorSMTPItem[];
    constructor(router: Router, route: ActivatedRoute, context: Context, servidorSMTPService: ServidorSMTPService);
    onConfigureCatalog(options: CatalogOptions): void;
    doSearch(request: SearchRequest): void;
    onAddingItem(): void;
    onViewingItem(item: CatalogItem): void;
    onEditingItem(item: CatalogItem): void;
    onDeletingItem(item: CatalogItem): void;
    onCloningItem(item: CatalogItem): void;
    onChangingItemState(item: CatalogItem): void;
}

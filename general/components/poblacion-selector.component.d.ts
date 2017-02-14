import { Context } from '../../index';
import { SearchRequest, CatalogSelector } from '../../search/index';
import { PoblacionInfo } from '../models/poblacion';
import { PoblacionService } from '../services/poblacion.service';
export declare class PoblacionSelectorComponent extends CatalogSelector {
    protected context: Context;
    private poblacionService;
    poblaciones: any[];
    selectedItem: PoblacionInfo;
    constructor(context: Context, poblacionService: PoblacionService);
    loadItem(itemID: number): void;
    doSearch(request: SearchRequest): void;
}

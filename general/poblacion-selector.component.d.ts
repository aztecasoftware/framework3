import { Context } from '../context';
import { CatalogSelector } from '../controls/catalog-selector';
import { SearchRequest } from '../search/search-request';
import { PoblacionService, PoblacionInfo } from './geography';
export declare class PoblacionSelectorComponent extends CatalogSelector {
    protected context: Context;
    private poblacionService;
    poblaciones: any[];
    selectedItem: PoblacionInfo;
    constructor(context: Context, poblacionService: PoblacionService);
    loadItem(itemID: number): void;
    doSearch(request: SearchRequest): void;
}

import { ModalDirective } from 'ng2-bootstrap';
import { CatalogItem } from '../../index';
import { SearchRequest } from '../models/search-request';
export declare class CatalogListDialogComponent {
    selectedItems: CatalogItem[];
    selectedItem: CatalogItem;
    catalogList: CatalogItem[];
    serverSide: boolean;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    listDialog: ModalDirective;
    constructor();
    onSearchRequested(request: SearchRequest): void;
    onCurrentItemChangedHandler(item: CatalogItem): void;
    onItemSelected(item: CatalogItem): void;
    onConfirmClick(): void;
    onCancelClick(): void;
}

import { EventEmitter, QueryList } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CatalogItem } from '../../index';
import { GridColumn } from '../../controls/index';
import { SearchRequest } from '../models/search-request';
export declare class CatalogListDialogComponent {
    selectedItems: CatalogItem[];
    selectedItem: CatalogItem;
    catalogList: CatalogItem[];
    serverSide: boolean;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    multiSelect: boolean;
    searchRequested: EventEmitter<SearchRequest>;
    listDialog: ModalDirective;
    columns: QueryList<GridColumn>;
    constructor();
    private onSearchRequested(request);
    private onCurrentItemChanged(item);
    private onItemSelected(item);
    private onConfirmClick();
    private onCancelClick();
    triggerSearch(): void;
    show(): void;
}

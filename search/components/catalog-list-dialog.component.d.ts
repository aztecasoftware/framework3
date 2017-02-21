import { EventEmitter, QueryList, SimpleChanges } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { CatalogItem } from '../../index';
import { GridColumn } from '../../controls/index';
import { SearchRequest } from '../models/search-request';
export declare class CatalogListDialogComponent {
    selectedItems: CatalogItem[];
    selectedItem: CatalogItem;
    list: CatalogItem[];
    catalogList: CatalogItem[];
    serverSide: boolean;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    multiSelect: boolean;
    excludedItems: CatalogItem[];
    searchRequested: EventEmitter<SearchRequest>;
    selectedItemChanged: EventEmitter<CatalogItem>;
    selectedItemsChanged: EventEmitter<CatalogItem[]>;
    listDialog: ModalDirective;
    columns: QueryList<GridColumn>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    private updateSelected();
    private onSearchRequested(request);
    private onCurrentItemChanged(item);
    private onItemSelected(item);
    onItemCheckedChanged(item: CatalogItem): void;
    private onConfirmClick();
    private onCancelClick();
    triggerSearch(): void;
    show(): void;
    isValid(): boolean;
}

import { EventEmitter } from '@angular/core';
import { CatalogListDialogComponent } from '../components/catalog-list-dialog.component';
import { Context, CatalogItem } from '../../index';
export declare class CatalogListDialog {
    protected context: Context;
    serverSide: boolean;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    multiSelect: boolean;
    excludedItems: CatalogItem[];
    listDialog: CatalogListDialogComponent;
    selectedItemChanged: EventEmitter<CatalogItem>;
    selectedItemsChanged: EventEmitter<CatalogItem[]>;
    constructor(context: Context);
    show(): void;
    handleError(error: any): void;
}

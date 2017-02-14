import { CatalogListDialogComponent } from '../components/catalog-list-dialog.component';
import { Context } from '../../index';
export declare class CatalogListDialog {
    protected context: Context;
    serverSide: boolean;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    multiSelect: boolean;
    listDialog: CatalogListDialogComponent;
    constructor(context: Context);
    show(): void;
    handleError(error: any): void;
}

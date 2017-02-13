import { ControlValueAccessor } from '@angular/forms';
import { BaseControl } from './base-control';
import { Context, CatalogItem } from '../../index';
export declare abstract class CatalogSelector extends BaseControl implements ControlValueAccessor {
    protected context: Context;
    protected _selectedID: number;
    displayValue: string;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    selectedID: number;
    constructor(context: Context);
    abstract loadItem(itemID: number): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    handleError(reason: any): void;
    itemChangedHandler(item: CatalogItem): void;
}

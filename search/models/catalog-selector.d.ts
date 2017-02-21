import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseControl } from '../../controls/index';
import { Context, CatalogItem } from '../../index';
export declare abstract class CatalogSelector extends BaseControl implements ControlValueAccessor {
    protected context: Context;
    protected _selectedID: number;
    displayValue: string;
    pageIndex: number;
    pageSize: number;
    totalRows: number;
    selectedID: number;
    itemChanged: EventEmitter<CatalogItem>;
    constructor(context: Context);
    abstract loadItem(itemID: number): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    handleError(reason: any): void;
    itemChangedHandler(item: CatalogItem): void;
}

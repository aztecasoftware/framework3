import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseControl } from '../models/base-control';
export declare class AzComboboxComponent extends BaseControl implements ControlValueAccessor {
    items: any[];
    displayMember: string;
    valueMember: string;
    value: string;
    selectedItem: any;
    selectedItemChanged: EventEmitter<any>;
    onChange(args: any): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}

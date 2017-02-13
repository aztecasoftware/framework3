import { EventEmitter, Renderer, ElementRef, SimpleChanges } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { BaseControl } from '../models/base-control';
export declare class CatalogCodeComponent extends BaseControl {
    private renderer;
    text: string;
    automatic: boolean;
    textChanged: EventEmitter<string>;
    textbox: ElementRef;
    state: FormControlName;
    constructor(renderer: Renderer);
    ngOnChanges(changes: SimpleChanges): void;
    updateValidators(): void;
    onTextChanged(args: any): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}

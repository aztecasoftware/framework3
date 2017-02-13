import { EventEmitter, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseControl } from '../models/base-control';
export declare class AzTextboxComponent extends BaseControl implements ControlValueAccessor {
    private renderer;
    text: string;
    textChanged: EventEmitter<string>;
    textbox: ElementRef;
    constructor(renderer: Renderer);
    onTextChanged(args: any): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}

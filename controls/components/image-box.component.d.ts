import { EventEmitter, SimpleChange, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseControl } from '../models/base-control';
import { FileInfo } from '../../general/models/file';
import { Context } from '../../context';
export declare class ImageBoxComponent extends BaseControl implements ControlValueAccessor {
    private renderer;
    private context;
    readonly allowedExtensions: string[];
    defaultImage: string;
    imageSrc: string;
    imageFile: FileInfo;
    fileChanged: EventEmitter<FileInfo>;
    fileInput: ElementRef;
    constructor(renderer: Renderer, context: Context);
    private validExtension(extension);
    private updateImageSrc();
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private fileChangedHandler(e);
    selectFile(): void;
    removeFile(): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}

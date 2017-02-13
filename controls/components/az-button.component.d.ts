import { EventEmitter } from '@angular/core';
import { BaseControl } from '../models/base-control';
export declare class AzButtonComponent extends BaseControl {
    type: string;
    click: EventEmitter<void>;
    readonly buttonClass: string;
    onClick(): void;
}

import { EventEmitter } from '@angular/core';
export declare class GridButtonCell {
    cell: any;
    icon: string;
    click: EventEmitter<any>;
    constructor();
    onClick(row: any): void;
}

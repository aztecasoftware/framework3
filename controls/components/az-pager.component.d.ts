import { EventEmitter } from '@angular/core';
export declare class AzPagerComponent {
    pageIndex: number;
    totalRows: number;
    pageSize: number;
    readonly pageCount: number;
    moveToFirst: EventEmitter<void>;
    moveToLast: EventEmitter<void>;
    moveToNext: EventEmitter<void>;
    moveToPrevious: EventEmitter<void>;
    moveToPage: EventEmitter<number>;
    moveFirst(): void;
    movePrevious(): void;
    moveNext(): void;
    moveLast(): void;
}

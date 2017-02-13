import { SimpleChange } from '@angular/core';
export declare class ToolbarButtonDirective {
    name: string;
    text: string;
    icon: string;
    enabled: boolean;
    type: string;
    readonly buttonClass: string;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}

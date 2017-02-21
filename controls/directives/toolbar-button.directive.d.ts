import { SimpleChange } from '@angular/core';
export declare class ToolbarButtonDirective {
    name: string;
    text: string;
    icon: string;
    class: string;
    enabled: boolean;
    type: string;
    toolTip: string;
    readonly buttonClass: string;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}

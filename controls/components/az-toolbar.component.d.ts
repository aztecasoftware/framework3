import { EventEmitter, QueryList } from '@angular/core';
import { BaseComponent } from '../../base-component';
import { PolicyInfo } from '../../security/models/policy';
import { ToolbarButtonDirective } from '../directives/toolbar-button.directive';
export declare class AzToolbarComponent extends BaseComponent {
    buttons: QueryList<ToolbarButtonDirective>;
    buttonClick: EventEmitter<ToolbarButtonDirective>;
    onButtonClick(button: ToolbarButtonDirective): void;
    applyPolicy(policy: PolicyInfo): void;
}

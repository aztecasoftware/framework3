import { EventEmitter, QueryList } from '@angular/core';
import { Menu } from 'wijmo/wijmo.input';
import { BaseComponent } from '../../base-component';
import { PolicyInfo } from '../../security/models/policy';
import { ToolbarButtonDirective } from '../directives/toolbar-button.directive';
import { ToolbarMenuDirective } from '../directives/toolbar-menu.directive';
import { MenuItem } from '../models/menu-item';
export declare class AzToolbarComponent extends BaseComponent {
    buttons: QueryList<ToolbarButtonDirective>;
    menus: QueryList<ToolbarMenuDirective>;
    buttonClick: EventEmitter<ToolbarButtonDirective>;
    menuItemClick: EventEmitter<MenuItem>;
    onButtonClick(button: ToolbarButtonDirective): void;
    onMenuItemClicked(menu: ToolbarMenuDirective, wijMenu: Menu): void;
    applyPolicy(policy: PolicyInfo): void;
}

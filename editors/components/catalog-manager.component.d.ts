import { EventEmitter, QueryList } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { Menu } from 'wijmo/wijmo.input';
import { Context, CatalogInfo, CatalogItem, CatalogService } from '../../index';
import { CatalogOptions } from '../../custom/models/catalog-options';
import { SearchRequest } from '../../search/index';
import { GridColumn, Alert, MenuItem, MenuItemDirective } from '../../controls/index';
export declare class CatalogManagerComponent {
    protected context: Context;
    private catalogService;
    menuItems: MenuItem[];
    currentItem: CatalogItem;
    alerts: Alert[];
    classMap: string[];
    defaultOptions: CatalogOptions;
    columns: QueryList<GridColumn>;
    deleteDialog: ModalDirective;
    customMenuItems: QueryList<MenuItemDirective>;
    pageSize: number;
    pageIndex: number;
    totalRows: number;
    standAlone: boolean;
    catalogList: CatalogItem[];
    serverSide: boolean;
    enabled: boolean;
    allowNew: boolean;
    allowView: boolean;
    allowEdit: boolean;
    allowDelete: boolean;
    allowClone: boolean;
    allowChangeState: boolean;
    configureCatalog: EventEmitter<CatalogOptions>;
    searchRequested: EventEmitter<SearchRequest>;
    currentItemChanged: EventEmitter<CatalogItem>;
    addingItem: EventEmitter<void>;
    viewingItem: EventEmitter<CatalogItem>;
    editingItem: EventEmitter<CatalogItem>;
    deletingItem: EventEmitter<CatalogItem>;
    cloningItem: EventEmitter<CatalogItem>;
    changingItemState: EventEmitter<CatalogItem>;
    menuItemClick: EventEmitter<MenuItem>;
    constructor(context: Context, catalogService: CatalogService<CatalogInfo>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    loadConfiguration(): void;
    triggerSearch(): void;
    showAlert(message: string, type: string): void;
    closeAlert(i: number): void;
    searchRequestedHandler(request: SearchRequest): void;
    private isMenuItemEnabled(tag);
    private setMenuItemState(tag, enabled);
    getMenuItem(name: string): MenuItem;
    createMenu(): void;
    onValidateMenu(item: CatalogItem): void;
    currentItemChangedHandler(item: CatalogItem): void;
    onMenuItemClicked(menu: Menu, args: any): void;
    onIsDroppedDown(menu: Menu, args: any): void;
    deleteItem(): void;
    hideDeleteDialog(): void;
    optionClick(option: MenuItem): void;
    newItemHandler(): void;
    private handleError(error);
}
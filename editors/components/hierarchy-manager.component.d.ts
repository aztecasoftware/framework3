import { EventEmitter, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TreeComponent, ITreeOptions, IActionMapping, TreeNode } from 'angular2-tree-component';
import { ModalDirective } from 'ng2-bootstrap';
import { Menu } from 'wijmo/wijmo.input';
import { Context, CatalogInfo, CatalogService, HierarchyInfo, HierarchyNode, HierarchyChanges } from '../../index';
import { CatalogOptions } from '../../custom/models/catalog-options';
import { Alert, MenuItem, MenuItemDirective, ToolbarButton } from '../../controls/index';
export declare class HierarchyManagerComponent {
    private context;
    private catalogService;
    private router;
    private route;
    private location;
    alerts: Alert[];
    defaultOptions: CatalogOptions;
    menuItems: MenuItem[];
    lastCreated: HierarchyInfo<HierarchyNode>;
    deletedNodes: HierarchyInfo<HierarchyNode>[];
    clipboardNode: TreeNode;
    actionMapping: IActionMapping;
    treeOptions: ITreeOptions;
    customMenuItems: QueryList<MenuItemDirective>;
    tree: TreeComponent;
    editDialog: ModalDirective;
    deleteDialog: ModalDirective;
    nodes: HierarchyInfo<HierarchyNode>[];
    title: string;
    editorTitle: string;
    enabled: boolean;
    currentNode: TreeNode;
    validForm: boolean;
    configureCatalog: EventEmitter<CatalogOptions>;
    menuItemClick: EventEmitter<MenuItem>;
    currentNodeChanged: EventEmitter<TreeNode>;
    creatingNode: EventEmitter<TreeNode>;
    editingNode: EventEmitter<TreeNode>;
    savingNode: EventEmitter<any>;
    deletingNode: EventEmitter<TreeNode>;
    copyingNode: EventEmitter<TreeNode>;
    pastingNode: EventEmitter<TreeNode>;
    savingHierarchy: EventEmitter<HierarchyChanges<HierarchyNode>>;
    nodesChanged: EventEmitter<HierarchyInfo<HierarchyNode>[]>;
    constructor(context: Context, catalogService: CatalogService<CatalogInfo>, router: Router, route: ActivatedRoute, location: Location);
    ngAfterViewInit(): void;
    loadConfiguration(): void;
    createMenu(): void;
    mainToolbarHandler(button: ToolbarButton): void;
    private selectAction(item);
    onMenuItemClick(menu: Menu, args: any): void;
    showEditor(): void;
    hideEditor(): void;
    showAlert(message: string, type: string): void;
    closeAlert(i: number): void;
    findInfoByClientID(clientID: number, nodes: HierarchyInfo<HierarchyNode>[]): HierarchyInfo<HierarchyNode>;
    addNode(info: HierarchyInfo<HierarchyNode>, parentNode: TreeNode): void;
    updateNode(info: HierarchyInfo<HierarchyNode>): void;
    deleteNode(node: TreeNode): void;
    pasteNode(node: TreeNode, target: TreeNode): void;
    reset(): void;
    private resetNodeData(nodes);
    private confirmDelete();
    private onTreeUpdated();
    private onCurrentNodeChanged(args);
    private onMoveNode(args);
    private onCommitEdit();
    private onCancelEdit();
    private handleError(error);
}

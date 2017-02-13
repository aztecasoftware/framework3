"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Angular
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
//Tree
const angular2_tree_component_1 = require('angular2-tree-component');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Azteca Kernel
const index_1 = require('../../index');
const index_2 = require('../../controls/index');
//
let HierarchyManagerComponent = class HierarchyManagerComponent {
    constructor(context, catalogService, router, route, location) {
        this.context = context;
        this.catalogService = catalogService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.alerts = [];
        this.defaultOptions = { busquedasServidor: true, tamanioPagina: 10 };
        this.menuItems = [];
        //Configuración del árbol
        this.actionMapping = {
            mouse: {
                contextMenu: angular2_tree_component_1.TREE_ACTIONS.SELECT
            }
        };
        this.treeOptions = { displayField: 'nombre', idField: 'clientID', allowDrag: true, actionMapping: this.actionMapping };
        this.title = 'Administrador de jerarquía';
        this.enabled = true;
        //Outputs
        this.configureCatalog = new core_1.EventEmitter();
        this.menuItemClick = new core_1.EventEmitter();
        this.currentNodeChanged = new core_1.EventEmitter();
        this.creatingNode = new core_1.EventEmitter();
        this.editingNode = new core_1.EventEmitter();
        this.savingNode = new core_1.EventEmitter();
        this.savingHierarchy = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadConfiguration());
        setTimeout(_ => this.createMenu());
    }
    loadConfiguration() {
        this.configureCatalog.next(this.defaultOptions);
        //Cargar configuración del catálogo
        this.context.app.showSpinner();
        this.catalogService.getOptions()
            .then(options => {
            if (options != null)
                this.configureCatalog.next(options);
            else {
                this.configureCatalog.next(this.defaultOptions);
            }
            this.context.app.hideSpinner();
        })
            .catch(error => this.handleError(error));
    }
    createMenu() {
        let mnuAddChild = { icon: "glyphicon glyphicon-plus", text: "Crear hijo", name: "CHILD", smallText: "crear nodo hijo" };
        let mnuAddSibling = { icon: "glyphicon glyphicon-plus", text: "Crear hermano", name: "SIBLING", smallText: "crear nodo hermano" };
        let mnuEdit = { icon: "glyphicon glyphicon-edit", text: "Editar", name: "EDIT", smallText: "editar nodo" };
        let mnuDelete = { icon: "glyphicon glyphicon-trash", text: "Eliminar", name: "DELETE", smallText: "eliminar nodo" };
        this.menuItems.push(mnuAddChild, mnuAddSibling, mnuEdit, mnuDelete);
        //Marcar como habilitadas todas las opciones
        this.menuItems.forEach(item => {
            if (item.enabled == undefined)
                item.enabled = true;
        });
    }
    mainToolbarHandler(button) {
        if (button.name == "SAVE") {
        }
        if (button.name == "ROOT") {
            this.creatingNode.next(null);
        }
        if (button.name == "CLOSE") {
            this.location.back();
        }
    }
    onMenuItemClick(menu, args) {
        let item = null;
        //Si el indice es menor a la cantidad de opciones estándar, buscar en array local (ya que primero se agregan las opciones estándar)
        if (menu.selectedIndex < this.menuItems.length) {
            item = this.menuItems[menu.selectedIndex];
            //
            if (item.name == "CHILD") {
                this.creatingNode.next(this.currentNode);
            }
            if (item.name == "SIBLING") {
                this.creatingNode.next(this.currentNode.parent);
            }
            if (item.name == "EDIT") {
                this.editingNode.next(this.currentNode);
            }
        }
        else {
            let customItems = this.customMenuItems.toArray();
            let customIndex = menu.selectedIndex - (this.menuItems.length + 1); //Se determina el indice dentro del array de custom options restando las opciones estándar
            item = customItems[customIndex];
            //Notificar a componente padre sobre la opción personalizada
            this.menuItemClick.next(item);
        }
    }
    showEditor() {
        this.editDialog.config.backdrop = false;
        this.editDialog.show();
    }
    onCurrentNodeChanged(args) {
        let node = args.node;
        this.currentNodeChanged.next(node);
    }
    onMoveNode(args) {
    }
    onCommitEdit() {
    }
    onCancelEdit() {
        this.editDialog.hide();
    }
    handleError(error) {
        this.context.app.hideSpinner();
    }
};
__decorate([
    core_1.ContentChildren(index_2.MenuItemDirective), 
    __metadata('design:type', core_1.QueryList)
], HierarchyManagerComponent.prototype, "customMenuItems", void 0);
__decorate([
    core_1.ViewChild('editDialog'), 
    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
], HierarchyManagerComponent.prototype, "editDialog", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], HierarchyManagerComponent.prototype, "nodes", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], HierarchyManagerComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], HierarchyManagerComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', angular2_tree_component_1.TreeNode)
], HierarchyManagerComponent.prototype, "currentNode", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "configureCatalog", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "menuItemClick", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "currentNodeChanged", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "creatingNode", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "editingNode", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "savingNode", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "savingHierarchy", void 0);
HierarchyManagerComponent = __decorate([
    core_1.Component({
        selector: 'azteca-hierarchy-manager',
        templateUrl: './hierarchy-manager.component.html'
    }), 
    __metadata('design:paramtypes', [index_1.Context, index_1.CatalogService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
], HierarchyManagerComponent);
exports.HierarchyManagerComponent = HierarchyManagerComponent;
//# sourceMappingURL=hierarchy-manager.component.js.map
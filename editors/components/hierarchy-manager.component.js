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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
//Tree
const angular2_tree_component_1 = require("angular2-tree-component");
//Bootstrap
const ng2_bootstrap_1 = require("ng2-bootstrap");
//Azteca Kernel
const index_1 = require("../../index");
const index_2 = require("../../controls/index");
//
let HierarchyManagerComponent = class HierarchyManagerComponent {
    constructor(context, catalogService, router, route, location) {
        this.context = context;
        this.catalogService = catalogService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.alerts = [];
        this.defaultOptions = { codigoAutogenerado: true };
        this.menuItems = [];
        this.lastCreated = null;
        this.deletedNodes = [];
        this.clipboardNode = null;
        //Configuración del árbol
        this.actionMapping = {
            mouse: {
                contextMenu: angular2_tree_component_1.TREE_ACTIONS.SELECT
            }
        };
        this.treeOptions = { displayField: 'nombre', idField: 'clientID', allowDrag: true, actionMapping: this.actionMapping };
        this.title = 'Administrador de jerarquía';
        this.editorTitle = 'Editando información del nodo';
        this.enabled = true;
        //Outputs
        this.configureCatalog = new core_1.EventEmitter();
        this.menuItemClick = new core_1.EventEmitter();
        this.currentNodeChanged = new core_1.EventEmitter();
        this.creatingNode = new core_1.EventEmitter();
        this.editingNode = new core_1.EventEmitter();
        this.savingNode = new core_1.EventEmitter();
        this.deletingNode = new core_1.EventEmitter();
        this.copyingNode = new core_1.EventEmitter();
        this.pastingNode = new core_1.EventEmitter();
        this.savingHierarchy = new core_1.EventEmitter();
        this.nodesChanged = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadConfiguration());
        setTimeout(_ => this.createMenu());
    }
    loadConfiguration() {
        this.catalogService.getOptions()
            .then(options => {
            if (options != null)
                this.configureCatalog.emit(options);
            else {
                this.configureCatalog.emit(this.defaultOptions);
            }
        })
            .catch(error => this.handleError(error));
    }
    createMenu() {
        let mnuAddChild = { icon: "glyphicon glyphicon-plus", text: "Crear hijo", name: "CHILD", smallText: "crear nodo hijo" };
        let mnuAddSibling = { icon: "glyphicon glyphicon-plus", text: "Crear hermano", name: "SIBLING", smallText: "crear nodo hermano" };
        let mnuEdit = { icon: "glyphicon glyphicon-edit", text: "Editar", name: "EDIT", smallText: "editar nodo" };
        let mnuCopy = { icon: "glyphicon glyphicon-duplicate", text: "Copiar", name: "COPY", smallText: "copiar nodo y descendientes" };
        let mnuPaste = { icon: "glyphicon glyphicon-paste", text: "Pegar", name: "PASTE", smallText: "pegar nodos en memoria" };
        let mnuDelete = { icon: "glyphicon glyphicon-trash", text: "Eliminar", name: "DELETE", smallText: "eliminar nodo" };
        this.menuItems.push(mnuAddChild, mnuAddSibling, mnuEdit, mnuCopy, mnuPaste, mnuDelete);
        //Marcar como habilitadas todas las opciones
        this.menuItems.forEach(item => {
            if (item.enabled == undefined)
                item.enabled = true;
        });
    }
    mainToolbarHandler(button) {
        if (button.name == "SAVE") {
            let changes = new index_1.HierarchyChanges();
            changes.nodes = this.nodes;
            changes.deletedNodes = this.deletedNodes;
            this.savingHierarchy.emit(changes);
        }
        if (button.name == "ROOT") {
            this.creatingNode.emit(null);
        }
        if (button.name == "CLOSE") {
            this.location.back();
        }
    }
    selectAction(item) {
        if (item.name == "CHILD") {
            this.creatingNode.emit(this.currentNode);
        }
        if (item.name == "SIBLING") {
            this.creatingNode.emit(this.currentNode.parent);
        }
        if (item.name == "EDIT") {
            this.editingNode.emit(this.currentNode);
        }
        if (item.name == "DELETE") {
            this.deleteDialog.config.backdrop = false;
            this.deleteDialog.show();
        }
        if (item.name == "COPY") {
            this.clipboardNode = this.currentNode;
            this.copyingNode.emit(this.clipboardNode);
        }
        if (item.name == "PASTE") {
            if (this.clipboardNode == null) {
                this.showAlert('No hay información en el portapapeles', 'warning');
            }
            else if (this.clipboardNode === this.currentNode) {
                this.showAlert('El nodo en el portapapeles y el nodo destino son el mismo', 'warning');
            }
            else {
                this.pastingNode.emit(this.clipboardNode);
                if (this.currentNode) {
                    this.pasteNode(this.clipboardNode, this.currentNode);
                }
                else {
                    this.pasteNode(this.clipboardNode, null);
                }
            }
        }
        //Notificar a componente padre
        this.menuItemClick.emit(item);
    }
    onMenuItemClick(menu, args) {
        let item = null;
        //Si el indice es menor a la cantidad de opciones estándar, buscar en array local (ya que primero se agregan las opciones estándar)
        if (menu.selectedIndex < this.menuItems.length) {
            item = this.menuItems[menu.selectedIndex];
        }
        else {
            let customItems = this.customMenuItems.toArray();
            let customIndex = menu.selectedIndex - (this.menuItems.length + 1); //Se determina el indice dentro del array de custom options restando las opciones estándar
            item = customItems[customIndex];
        }
        this.selectAction(item);
    }
    showEditor() {
        this.editDialog.config.backdrop = false;
        this.editDialog.show();
    }
    hideEditor() {
        this.editDialog.hide();
    }
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
    findInfoByClientID(clientID, nodes) {
        let retNode = null;
        nodes.forEach(node => {
            if (node.clientID == clientID) {
                retNode = node;
            }
            else {
                if (!retNode && node.children && node.children.length > 0) {
                    retNode = this.findInfoByClientID(clientID, node.children);
                }
            }
        });
        return retNode;
    }
    addNode(info, parentNode) {
        let newNodes = this.nodes.slice();
        //Si no se especificó un nodo padre, agregar como nodo raíz
        if (parentNode == null || parentNode.data.identity == undefined) {
            newNodes.push(info);
        }
        else {
            let parentInfo = this.findInfoByClientID(parentNode.data.clientID, newNodes);
            if (parentInfo) {
                parentInfo.children.push(info);
            }
            else {
                console.error('No se encontró un nodo con client ID: ' + parentNode.data.clientID);
            }
        }
        this.lastCreated = info;
        if (parentNode)
            parentNode.setIsExpanded(true);
        this.nodesChanged.emit(newNodes);
    }
    updateNode(info) {
        let newNodes = this.nodes.slice();
        let nodeToUpdate = this.tree.treeModel.getNodeById(info.clientID);
        //Si es un nodo raíz, reemplazar directamente
        if (nodeToUpdate.isRoot) {
            let nodeIndex = newNodes.indexOf(nodeToUpdate.data);
            if (nodeIndex != -1)
                newNodes[nodeIndex] = info;
        }
        else {
            let infoPadre = this.findInfoByClientID(nodeToUpdate.parent.data.clientID, newNodes);
            let nodeIndex = infoPadre.children.indexOf(nodeToUpdate.data);
            if (nodeIndex != -1)
                infoPadre.children[nodeIndex] = info;
        }
        this.nodesChanged.emit(newNodes);
    }
    deleteNode(node) {
        let newNodes = this.nodes.slice();
        let deletedNode;
        //Si es un nodo raíz, eliminar directamente
        if (node.isRoot) {
            let nodeIndex = newNodes.indexOf(node.data);
            if (nodeIndex != -1) {
                deletedNode = newNodes.splice(nodeIndex, 1)[0];
            }
        }
        else {
            let infoPadre = this.findInfoByClientID(node.parent.data.clientID, newNodes);
            let nodeIndex = infoPadre.children.indexOf(node.data);
            if (nodeIndex != -1) {
                deletedNode = infoPadre.children.splice(nodeIndex, 1)[0];
            }
        }
        this.deletedNodes.push(deletedNode);
        this.nodesChanged.emit(newNodes);
    }
    pasteNode(node, target) {
        let newNodes = this.nodes.slice();
        let copy = JSON.parse(JSON.stringify(node.data));
        copy.nombre += ' (copia)';
        //Reestablecer campos para que se tomen como nuevos nodos
        copy.clientID = 0;
        copy.identity = 0;
        copy.code = '';
        this.resetNodeData(copy.children);
        //Si se especificó el nodo destino, pegar sobre él, si no, pegar como nodo raíz
        if (target) {
            let infoTarget = this.findInfoByClientID(target.data.clientID, newNodes);
            infoTarget.children.push(copy);
            target.setIsExpanded(true);
        }
        else {
            newNodes.push(copy);
        }
        this.lastCreated = copy;
        this.nodesChanged.emit(newNodes);
    }
    reset() {
        this.lastCreated = null;
        this.deletedNodes = [];
        this.clipboardNode = null;
    }
    resetNodeData(nodes) {
        nodes.forEach(node => {
            node.clientID = 0;
            node.identity = 0;
            node.code = '';
            this.resetNodeData(node.children);
        });
    }
    confirmDelete() {
        this.deletingNode.emit(this.currentNode);
        this.deleteDialog.hide();
    }
    onTreeUpdated() {
        //Si se acaba de crear un nuevo nodo, buscarlo y establecerlo como el nodo activo
        if (this.lastCreated != null) {
            let node = this.tree.treeModel.getNodeById(this.lastCreated.clientID);
            node.setIsActive(true, false);
            this.lastCreated = null;
        }
    }
    onCurrentNodeChanged(args) {
        let node = args.node;
        this.currentNodeChanged.emit(node);
    }
    onMoveNode(args) {
    }
    onCommitEdit() {
        this.savingNode.emit();
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
    __metadata("design:type", core_1.QueryList)
], HierarchyManagerComponent.prototype, "customMenuItems", void 0);
__decorate([
    core_1.ViewChild(angular2_tree_component_1.TreeComponent),
    __metadata("design:type", angular2_tree_component_1.TreeComponent)
], HierarchyManagerComponent.prototype, "tree", void 0);
__decorate([
    core_1.ViewChild('editDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], HierarchyManagerComponent.prototype, "editDialog", void 0);
__decorate([
    core_1.ViewChild('confirmDelDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], HierarchyManagerComponent.prototype, "deleteDialog", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HierarchyManagerComponent.prototype, "nodes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HierarchyManagerComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HierarchyManagerComponent.prototype, "editorTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManagerComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", angular2_tree_component_1.TreeNode)
], HierarchyManagerComponent.prototype, "currentNode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HierarchyManagerComponent.prototype, "validForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "configureCatalog", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "menuItemClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "currentNodeChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "creatingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "editingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "savingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "deletingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "copyingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "pastingNode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "savingHierarchy", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HierarchyManagerComponent.prototype, "nodesChanged", void 0);
HierarchyManagerComponent = __decorate([
    core_1.Component({
        selector: 'azteca-hierarchy-manager',
        template: `
      <div class="row">
          <div class="col-xs-12 col-md-10 col-lg-10">
              <az-panel [header]="title">

                  <!--Pool de alertas-->
                  <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" [dismissOnTimeout]="alert.dismissOnTimeout" (close)="closeAlert(i)">
                      {{ alert?.msg }}
                  </alert>


                  <div class="row">
                      <div class="col-xs-12 col-md-10 col-lg-10">
                          <az-toolbar (buttonClick)="mainToolbarHandler($event)" (menuItemClick)="selectAction($event)">
                              <az-toolbar-button [name]="'SAVE'" [type]="'primary'" [text]="'Guardar'" [icon]="'glyphicon glyphicon-floppy-disk'" [class]="'hidden-xs'"></az-toolbar-button>
                              <az-toolbar-button [name]="'SAVE'" [type]="'primary'" [toolTip]="'Guardar'" [icon]="'glyphicon glyphicon-floppy-disk'" [class]="'visible-xs'"></az-toolbar-button>

                              <az-toolbar-button [name]="'ROOT'" [text]="'Crear ráiz'" [icon]="'glyphicon glyphicon-plus'" [class]="'hidden-xs'"></az-toolbar-button>
                              <az-toolbar-button [name]="'ROOT'" [toolTip]="'Crear ráiz'" [icon]="'glyphicon glyphicon-plus'" [class]="'visible-xs'"></az-toolbar-button>

                              <az-toolbar-button [name]="'CLOSE'" [text]="'Cerrar'" [icon]="'glyphicon glyphicon-remove'" [class]="'hidden-xs'"></az-toolbar-button>
                              <az-toolbar-button [name]="'CLOSE'" [toolTip]="'Cerrar'" [icon]="'glyphicon glyphicon-remove'" [class]="'visible-xs'"></az-toolbar-button>

                              <az-toolbar-menu *ngIf="currentNode" [name]="'NODE'" [header]="'Nodo'" [menuItems]="menuItems"></az-toolbar-menu>
                              <az-toolbar-menu *ngIf="currentNode && customMenuItems.toArray().length > 0" [name]="'OPTS'" [header]="'Opciones'" [menuItems]="customMenuItems.toArray()"></az-toolbar-menu>
                          </az-toolbar>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-xs-12" style="height: 500px; overflow:auto;">
                          <Tree [nodes]="nodes" 
                                [options]="treeOptions"
                                (onUpdateData)="onTreeUpdated($event)"
                                (onActivate)="onCurrentNodeChanged($event)"
                                (onMoveNode)="onMoveNode($event)">

                              <template #treeNodeTemplate let-node="node" let-index="index">
                                  <span [class]="node.data.icon"></span>
                                  <span [wjContextMenu]="ctxMenu">{{ node.data.nombre }}</span>
                              </template>
                          </Tree>

                      </div>
                  </div>

              </az-panel>
          </div>
      </div>

      <!-- Menú Contextual-->
      <wj-menu #ctxMenu style="display:none"
                      (itemClicked)="onMenuItemClick(ctxMenu, $event)"                
                      [isDisabled]="!enabled">

          <!-- Opciones estándar de la jerarquía-->
          <wj-menu-item *ngFor="let item of menuItems">
              <div *ngIf="enabled && item.enabled">
                  <span [class]="item.icon"></span>
                  <b>{{item.text}}</b>
                  <br>
                  <small><i>{{item.smallText}}</i></small>
              </div>
          </wj-menu-item>
    
          <wj-menu-separator *ngIf="customMenuItems && customMenuItems.toArray().length > 0"></wj-menu-separator>
    
          <!--Opciones personalizadas del componente padre-->
          <wj-menu-item *ngFor="let item of customMenuItems">
              <div *ngIf="enabled && item.enabled">
                  <span [class]="item.icon"></span>
                  <b>{{item.text}}</b>
                  <br>
                  <small><i>{{item.smallText}}</i></small>
              </div>
          </wj-menu-item>

      </wj-menu>


      <div bsModal #editDialog="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-body">

                      <div class="panel panel-default">
                          <div class="panel-heading">{{editorTitle}}</div>
                          <div class="panel-body">
                              <ng-content></ng-content>
                          </div>
                      </div> 

                  </div> <!--Modal Body-->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" (click)="onCommitEdit()" [disabled]="!validForm">Aceptar</button>
                      <button type="button" class="btn btn-default" (click)="onCancelEdit()">Cancelar</button>
                  </div> <!--Modal Footer-->

              </div> <!-- Modal Content-->
          </div> <!--Modal-->
      </div> <!--Modal directive-->


      <div bsModal #confirmDelDialog="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm">
              <div class="modal-content">
                  <div class="modal-body">
                      <div>¿Está seguro que desea eliminar el nodo seleccionado?</div>
                  </div> <!--Modal Body-->
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" (click)="confirmDelete()">Aceptar</button>
                      <button type="button" class="btn btn-default" (click)="confirmDelDialog.hide()">Cancelar</button>                
                  </div> <!--Modal Footer-->

              </div> <!-- Modal Content-->
          </div> <!--Modal-->
      </div> <!--Modal directive-->
    `
    }),
    __metadata("design:paramtypes", [index_1.Context, index_1.CatalogService, router_1.Router,
        router_1.ActivatedRoute, common_1.Location])
], HierarchyManagerComponent);
exports.HierarchyManagerComponent = HierarchyManagerComponent;

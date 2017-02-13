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
const core_1 = require('@angular/core');
//
const ng2_bootstrap_1 = require('ng2-bootstrap');
//
const index_1 = require('../../index');
const index_2 = require('../../search/index');
const index_3 = require('../../controls/index');
let CatalogManagerComponent = class CatalogManagerComponent {
    constructor(context, catalogService) {
        this.context = context;
        this.catalogService = catalogService;
        this.menuItems = [];
        this.currentItem = null;
        this.alerts = [];
        this.classMap = [];
        this.defaultOptions = { busquedasServidor: true, tamanioPagina: 10 };
        //
        this.pageSize = 10;
        this.standAlone = true;
        this.catalogList = [];
        this.serverSide = true;
        this.enabled = true;
        this.allowNew = true;
        //
        this.configureCatalog = new core_1.EventEmitter();
        this.searchRequested = new core_1.EventEmitter();
        this.currentItemChanged = new core_1.EventEmitter();
        this.addingItem = new core_1.EventEmitter();
        this.viewingItem = new core_1.EventEmitter();
        this.editingItem = new core_1.EventEmitter();
        this.deletingItem = new core_1.EventEmitter();
        this.cloningItem = new core_1.EventEmitter();
        this.changingItemState = new core_1.EventEmitter();
        this.menuItemClick = new core_1.EventEmitter();
    }
    get allowView() {
        return this.isMenuItemEnabled("OPEN");
    }
    set allowView(value) {
        this.setMenuItemState("OPEN", value);
    }
    get allowEdit() {
        return this.isMenuItemEnabled("EDIT");
    }
    set allowEdit(value) {
        this.setMenuItemState("EDIT", value);
    }
    get allowDelete() {
        return this.isMenuItemEnabled("DELETE");
    }
    set allowDelete(value) {
        this.setMenuItemState("DELETE", value);
    }
    get allowClone() {
        return this.isMenuItemEnabled("CLONE");
    }
    set allowClone(value) {
        this.setMenuItemState("CLONE", value);
    }
    get allowChangeState() {
        return this.isMenuItemEnabled("STATE");
    }
    set allowChangeState(value) {
        this.setMenuItemState("STATE", value);
    }
    ngOnInit() {
        if (this.standAlone) {
            this.classMap.push(this.context.app.defaultWidth);
        }
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadConfiguration());
        setTimeout(_ => this.createMenu());
    }
    loadConfiguration() {
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
    triggerSearch() {
        //Disparar búsqueda inicial. Si el manejo se realiza del lado del servidor, obtener sólo la primer página, si es local obtener toda la información disponible
        let request = new index_2.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.next(request);
    }
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
    searchRequestedHandler(request) {
        //Redireccionar request a componente padre
        this.searchRequested.next(request);
    }
    isMenuItemEnabled(tag) {
        let item = this.getMenuItem(tag);
        if (item != null)
            return item.enabled;
        else
            return false;
    }
    setMenuItemState(tag, enabled) {
        let item = this.getMenuItem(tag);
        if (item != null)
            item.enabled = enabled;
    }
    getMenuItem(name) {
        let retItem = null;
        this.menuItems.forEach(item => {
            if (item.name == name) {
                retItem = item;
            }
        });
        return retItem;
    }
    createMenu() {
        //Agregar opciones estándar del catálogo
        let mnuView = { icon: "glyphicon glyphicon-folder-open", text: "Ver", name: "OPEN", smallText: "abrir en modo de sólo lectura" };
        let mnuEdit = { icon: "glyphicon glyphicon-pencil", text: "Editar", name: "EDIT", smallText: "abrir en modo de edición" };
        let mnuState = { icon: "glyphicon glyphicon-lock", text: "Activar/Desactivar", name: "STATE", smallText: "cambiar estatus" };
        let mnuCopy = { icon: "glyphicon glyphicon-duplicate", text: "Duplicar", name: "CLONE", smallText: "crear una copia" };
        let mnuDelete = { icon: "glyphicon glyphicon-trash", text: "Eliminar", name: "DELETE", smallText: "eliminar permanentemente" };
        let mnuAudit = { icon: "glyphicon glyphicon-search", text: "Auditar", name: "AUDIT", smallText: "auditar cambios" };
        this.menuItems.push(mnuView, mnuEdit, mnuState, mnuCopy, mnuDelete, mnuAudit);
        //Agregar elementos personalizados
        let customOptions = this.customMenuItems.toArray();
        this.menuItems = this.menuItems.concat(customOptions);
        //
        this.menuItems.forEach(item => {
            if (item.enabled == undefined)
                item.enabled = true;
        });
    }
    onValidateMenu(item) {
        if (item) {
            //Cambiar texto de opción para activar o desactivar registros
            let mnuState = this.menuItems.filter(item => item.name == "STATE")[0];
            if (item.activo) {
                mnuState.text = "Desactivar";
            }
            else {
                mnuState.text = "Activar";
            }
        }
    }
    currentItemChangedHandler(item) {
        this.currentItem = item;
        this.currentItemChanged.next(item);
    }
    onMenuItemClicked(menu, args) {
        let item = this.menuItems[menu.selectedIndex];
        this.optionClick(item);
    }
    onIsDroppedDown(menu, args) {
        this.onValidateMenu(this.currentItem);
    }
    deleteItem() {
        this.deletingItem.next(this.currentItem);
        this.deleteDialog.hide();
    }
    hideDeleteDialog() {
        this.deleteDialog.hide();
    }
    optionClick(option) {
        if (option.name == "OPEN")
            this.viewingItem.next(this.currentItem);
        if (option.name == "EDIT")
            this.editingItem.next(this.currentItem);
        if (option.name == "DELETE") {
            this.deleteDialog.config.backdrop = false;
            this.deleteDialog.show();
        }
        if (option.name == "CLONE")
            this.cloningItem.next(this.currentItem);
        if (option.name == "STATE")
            this.changingItemState.next(this.currentItem);
        //Disparar evento genérico con cualquier opción de menú, principalmente dirigido a notificar acciones personalizadas
        this.menuItemClick.next(option);
    }
    newItemHandler() {
        this.addingItem.next();
    }
    handleError(error) {
        this.context.app.hideSpinner();
    }
};
__decorate([
    core_1.ContentChildren(index_3.GridColumn), 
    __metadata('design:type', core_1.QueryList)
], CatalogManagerComponent.prototype, "columns", void 0);
__decorate([
    core_1.ViewChild('confirmDelDialog'), 
    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
], CatalogManagerComponent.prototype, "deleteDialog", void 0);
__decorate([
    core_1.ContentChildren(index_3.MenuItemDirective), 
    __metadata('design:type', core_1.QueryList)
], CatalogManagerComponent.prototype, "customMenuItems", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogManagerComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogManagerComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], CatalogManagerComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "standAlone", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Array)
], CatalogManagerComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowNew", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowView", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowEdit", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowDelete", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowClone", null);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], CatalogManagerComponent.prototype, "allowChangeState", null);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "configureCatalog", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "currentItemChanged", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "addingItem", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "viewingItem", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "editingItem", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "deletingItem", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "cloningItem", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "changingItemState", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], CatalogManagerComponent.prototype, "menuItemClick", void 0);
CatalogManagerComponent = __decorate([
    core_1.Component({
        selector: 'azteca-catalog-manager',
        templateUrl: './catalog-manager.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }), 
    __metadata('design:paramtypes', [index_1.Context, index_1.CatalogService])
], CatalogManagerComponent);
exports.CatalogManagerComponent = CatalogManagerComponent;
//# sourceMappingURL=catalog-manager.component.js.map
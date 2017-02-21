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
const core_1 = require("@angular/core");
//
const ng2_bootstrap_1 = require("ng2-bootstrap");
//
const index_1 = require("../../index");
const index_2 = require("../../search/index");
const index_3 = require("../../controls/index");
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
                this.configureCatalog.emit(options);
            else {
                this.configureCatalog.emit(this.defaultOptions);
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
        this.searchRequested.emit(request);
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
        this.searchRequested.emit(request);
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
        this.currentItemChanged.emit(item);
    }
    onMenuItemClicked(menu, args) {
        let item = this.menuItems[menu.selectedIndex];
        this.optionClick(item);
    }
    onIsDroppedDown(menu, args) {
        this.onValidateMenu(this.currentItem);
    }
    deleteItem() {
        this.deletingItem.emit(this.currentItem);
        this.deleteDialog.hide();
    }
    hideDeleteDialog() {
        this.deleteDialog.hide();
    }
    optionClick(option) {
        if (option.name == "OPEN")
            this.viewingItem.emit(this.currentItem);
        if (option.name == "EDIT")
            this.editingItem.emit(this.currentItem);
        if (option.name == "DELETE") {
            this.deleteDialog.config.backdrop = false;
            this.deleteDialog.show();
        }
        if (option.name == "CLONE")
            this.cloningItem.emit(this.currentItem);
        if (option.name == "STATE")
            this.changingItemState.emit(this.currentItem);
        //Disparar evento genérico con cualquier opción de menú, principalmente dirigido a notificar acciones personalizadas
        this.menuItemClick.emit(option);
    }
    newItemHandler() {
        this.addingItem.emit();
    }
    handleError(error) {
        this.context.app.hideSpinner();
    }
};
__decorate([
    core_1.ContentChildren(index_3.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogManagerComponent.prototype, "columns", void 0);
__decorate([
    core_1.ViewChild('confirmDelDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CatalogManagerComponent.prototype, "deleteDialog", void 0);
__decorate([
    core_1.ContentChildren(index_3.MenuItemDirective),
    __metadata("design:type", core_1.QueryList)
], CatalogManagerComponent.prototype, "customMenuItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogManagerComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogManagerComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CatalogManagerComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManagerComponent.prototype, "standAlone", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CatalogManagerComponent.prototype, "catalogList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManagerComponent.prototype, "serverSide", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManagerComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogManagerComponent.prototype, "allowNew", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogManagerComponent.prototype, "allowView", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogManagerComponent.prototype, "allowEdit", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogManagerComponent.prototype, "allowDelete", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogManagerComponent.prototype, "allowClone", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], CatalogManagerComponent.prototype, "allowChangeState", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "configureCatalog", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "searchRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "currentItemChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "addingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "viewingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "editingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "deletingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "cloningItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "changingItemState", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogManagerComponent.prototype, "menuItemClick", void 0);
CatalogManagerComponent = __decorate([
    core_1.Component({
        selector: 'azteca-catalog-manager',
        template: `
      <!--Pool de alertas-->
      <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" [dismissOnTimeout]="alert.dismissOnTimeout" (close)="closeAlert(i)">
          {{ alert?.msg }}
      </alert>

      <div class="row">
          <div [ngClass]="{'col-xs-12 col-md-10 col-lg-10': standAlone}">

              <div class="btn-group">
                  <button type="button" class="btn btn-primary" (click)="newItemHandler()" *ngIf="enabled && allowNew">
                      <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Nuevo
                  </button>
                  <button type="button" class="btn btn-default hidden-xs" (click)="triggerSearch()">
                      <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Actualizar
                  </button>
                  <wj-menu #menu
                           (itemClicked)="onMenuItemClicked(menu, $event)"
                           (isDroppedDownChanging)="onIsDroppedDown(menu, $event)"                     
                           [isDisabled]="!enabled"
                           [header]="'Opciones'" >

                      <wj-menu-item *ngFor="let item of menuItems">
                          <div *ngIf="enabled && item.enabled">
                              <span [class]="item.icon"></span>
                              <b>{{item.text}}</b>
                              <br>
                              <small><i>{{item.smallText}}</i></small>
                          </div>
                      </wj-menu-item>

                  </wj-menu>

              </div>
          </div>
      </div>

      <div class="row">
          <div [ngClass]="classMap">

              <azteca-catalog-list [catalogList]="catalogList"
                                   (searchRequested)="searchRequestedHandler($event)"
                                   (currentItemChanged)="currentItemChangedHandler($event)"
                                   (contextMenuClick)="optionClick($event)"
                                   (contextMenuOpen)="onValidateMenu($event)"
                                   [enabled]="enabled"                             
                                   [serverSide]="serverSide"
                                   [pageSize]="pageSize"
                                   [totalRows]="totalRows"
                                   [pageIndex]="pageIndex">

                  <!-- Mapear opciones de menú de componente padre-->
                  <azteca-menu-item *ngFor="let item of menuItems" [name]="item.name" [icon]="item.icon" [text]="item.text" [smallText]="item.smallText"></azteca-menu-item>
            
                  <!-- Mapear columnas definidas en componente padre-->
                  <azteca-grid-column *ngFor="let col of columns"
                                      [header]="col.header"
                                      [binding]="col.binding"
                                      [dataType]="col.dataType ? col.dataType :'String'"
                                      [dataMap]="col.dataMap"
                                      [width]="col.width">

                      <!-- Add cell template if col.cellTemplate is specified. -->
                      <template wjFlexGridCellTemplate *ngIf="col.cellTemplate" [cellType]="'Cell'" let-cell="cell">
                          <!-- Load the component whose type is specified in col.cellTemplate -->
                          <wj-component-loader [component]="col.cellTemplate" [properties]="{cell: cell}"></wj-component-loader>
                      </template>

                  </azteca-grid-column>

              </azteca-catalog-list>
          </div>
      </div>


      <div bsModal #confirmDelDialog="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">

          <div class="modal-dialog modal-sm">
              <div class="modal-content">

                  <div class="modal-body">
                      <div>¿Está seguro que desea eliminar el elemento seleccionado?</div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" (click)="hideDeleteDialog()">Cancelar</button>
                      <button type="button" class="btn btn-default" (click)="deleteItem()">Aceptar</button>                
                  </div>

              </div>
          </div>

      </div>    
    `,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [index_1.Context, index_1.CatalogService])
], CatalogManagerComponent);
exports.CatalogManagerComponent = CatalogManagerComponent;

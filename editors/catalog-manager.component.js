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
var core_1 = require("@angular/core");
//
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//
var context_1 = require("../context");
var entities_1 = require("../entities");
var search_request_1 = require("../search/search-request");
var grid_column_1 = require("../utils/grid-column");
var CatalogManagerComponent = (function () {
    function CatalogManagerComponent(context, catalogService) {
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
        this.customOptions = [];
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
        this.itemAction = new core_1.EventEmitter();
    }
    Object.defineProperty(CatalogManagerComponent.prototype, "allowView", {
        get: function () {
            return this.isMenuItemEnabled("OPEN");
        },
        set: function (value) {
            this.setMenuItemState("OPEN", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogManagerComponent.prototype, "allowEdit", {
        get: function () {
            return this.isMenuItemEnabled("EDIT");
        },
        set: function (value) {
            this.setMenuItemState("EDIT", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogManagerComponent.prototype, "allowDelete", {
        get: function () {
            return this.isMenuItemEnabled("DELETE");
        },
        set: function (value) {
            this.setMenuItemState("DELETE", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogManagerComponent.prototype, "allowClone", {
        get: function () {
            return this.isMenuItemEnabled("CLONE");
        },
        set: function (value) {
            this.setMenuItemState("CLONE", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogManagerComponent.prototype, "allowChangeState", {
        get: function () {
            return this.isMenuItemEnabled("STATE");
        },
        set: function (value) {
            this.setMenuItemState("STATE", value);
        },
        enumerable: true,
        configurable: true
    });
    CatalogManagerComponent.prototype.ngOnInit = function () {
        this.createMenu();
        //
        if (this.standAlone) {
            this.classMap.push(this.context.app.defaultWidth);
        }
    };
    CatalogManagerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) { return _this.loadConfiguration(); });
    };
    CatalogManagerComponent.prototype.loadConfiguration = function () {
        var _this = this;
        //Cargar configuración del catálogo
        this.context.app.showSpinner();
        this.catalogService.getOptions()
            .then(function (options) {
            if (options != null)
                _this.configureCatalog.next(options);
            else {
                _this.configureCatalog.next(_this.defaultOptions);
            }
            _this.context.app.hideSpinner();
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    CatalogManagerComponent.prototype.triggerSearch = function () {
        //Disparar búsqueda inicial. Si el manejo se realiza del lado del servidor, obtener sólo la primer página, si es local obtener toda la información disponible
        var request = new search_request_1.SearchRequest();
        request.pageIndex = 0;
        request.pageSize = this.pageSize;
        request.paged = this.serverSide ? true : false;
        //
        this.searchRequested.next(request);
    };
    CatalogManagerComponent.prototype.showAlert = function (message, type) {
        var newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    };
    CatalogManagerComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    CatalogManagerComponent.prototype.searchRequestedHandler = function (request) {
        //Redireccionar request a componente padre
        this.searchRequested.next(request);
    };
    CatalogManagerComponent.prototype.isMenuItemEnabled = function (tag) {
        var item = this.getMenuItem(tag);
        if (item != null)
            return item.enabled;
        else
            return false;
    };
    CatalogManagerComponent.prototype.setMenuItemState = function (tag, enabled) {
        var item = this.getMenuItem(tag);
        if (item != null)
            item.enabled = enabled;
    };
    CatalogManagerComponent.prototype.getMenuItem = function (tag) {
        var retItem = null;
        this.menuItems.forEach(function (item) {
            if (item.tag == tag) {
                retItem = item;
            }
        });
        return retItem;
    };
    CatalogManagerComponent.prototype.createMenu = function () {
        //Agregar opciones estándar del catálogo
        var mnuView = { icon: "glyphicon glyphicon-folder-open", text: "Ver", tag: "OPEN", smallText: "abrir en modo de sólo lectura" };
        var mnuEdit = { icon: "glyphicon glyphicon-pencil", text: "Editar", tag: "EDIT", smallText: "abrir en modo de edición" };
        var mnuState = { icon: "glyphicon glyphicon-lock", text: "Activar/Desactivar", tag: "STATE", smallText: "cambiar estatus" };
        var mnuCopy = { icon: "glyphicon glyphicon-duplicate", text: "Duplicar", tag: "CLONE", smallText: "crear una copia" };
        var mnuDelete = { icon: "glyphicon glyphicon-trash", text: "Eliminar", tag: "DELETE", smallText: "eliminar permanentemente" };
        var mnuAudit = { icon: "glyphicon glyphicon-search", text: "Auditar", tag: "AUDIT", smallText: "auditar cambios" };
        this.menuItems.push(mnuView, mnuEdit, mnuState, mnuCopy, mnuDelete, mnuAudit);
        //Agregar elementos personalizados
        this.menuItems = this.menuItems.concat(this.customOptions);
        //
        this.menuItems.forEach(function (item) {
            if (item.enabled == undefined)
                item.enabled = true;
        });
    };
    CatalogManagerComponent.prototype.onValidateMenu = function (item) {
        if (item) {
            //Cambiar texto de opción para activar o desactivar registros
            var mnuState = this.menuItems.filter(function (item) { return item.tag == "STATE"; })[0];
            if (item.activo) {
                mnuState.text = "Desactivar";
            }
            else {
                mnuState.text = "Activar";
            }
        }
    };
    CatalogManagerComponent.prototype.currentItemChangedHandler = function (item) {
        this.currentItem = item;
        this.currentItemChanged.next(item);
    };
    CatalogManagerComponent.prototype.menuItemClicked = function (menu, args) {
        var item = this.menuItems[menu.selectedIndex];
        this.optionClick(item);
    };
    CatalogManagerComponent.prototype.onIsDroppedDown = function (menu, args) {
        this.onValidateMenu(this.currentItem);
    };
    CatalogManagerComponent.prototype.deleteItem = function () {
        this.deletingItem.next(this.currentItem);
        this.deleteDialog.hide();
    };
    CatalogManagerComponent.prototype.hideDeleteDialog = function () {
        this.deleteDialog.hide();
    };
    CatalogManagerComponent.prototype.optionClick = function (option) {
        if (option.tag == "OPEN")
            this.viewingItem.next(this.currentItem);
        if (option.tag == "EDIT")
            this.editingItem.next(this.currentItem);
        if (option.tag == "DELETE") {
            this.deleteDialog.config.backdrop = false;
            this.deleteDialog.show();
        }
        if (option.tag == "CLONE")
            this.cloningItem.next(this.currentItem);
        if (option.tag == "STATE")
            this.changingItemState.next(this.currentItem);
    };
    CatalogManagerComponent.prototype.newItemHandler = function () {
        this.addingItem.next();
    };
    CatalogManagerComponent.prototype.handleError = function (error) {
        this.context.app.hideSpinner();
    };
    return CatalogManagerComponent;
}());
__decorate([
    core_1.ContentChildren(grid_column_1.GridColumn),
    __metadata("design:type", core_1.QueryList)
], CatalogManagerComponent.prototype, "columns", void 0);
__decorate([
    core_1.ViewChild('confirmDelDialog'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], CatalogManagerComponent.prototype, "deleteDialog", void 0);
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
    __metadata("design:type", Array)
], CatalogManagerComponent.prototype, "customOptions", void 0);
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
], CatalogManagerComponent.prototype, "itemAction", void 0);
CatalogManagerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-catalog-manager',
        templateUrl: './catalog-manager.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [context_1.Context, entities_1.CatalogService])
], CatalogManagerComponent);
exports.CatalogManagerComponent = CatalogManagerComponent;

//# sourceMappingURL=catalog-manager.component.js.map

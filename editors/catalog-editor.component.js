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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var entities_1 = require("../entities");
var context_1 = require("../context");
var CatalogEditorComponent = (function () {
    function CatalogEditorComponent(router, route, location, context, catalogService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.context = context;
        this.catalogService = catalogService;
        this.readonlyMode = false;
        this.alerts = [];
        this.widthClass = [];
        this.defaultOptions = { codigoAutogenerado: false };
        this.enabled = true;
        //
        this.configureCatalog = new core_1.EventEmitter();
        this.creatingItem = new core_1.EventEmitter();
        this.viewingItem = new core_1.EventEmitter();
        this.loadingItem = new core_1.EventEmitter();
        this.cloningItem = new core_1.EventEmitter();
        this.savingItem = new core_1.EventEmitter();
    }
    CatalogEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Establecer el ancho establecido para la aplicación
        this.widthClass.push(this.context.app.defaultWidth);
        //
        var cloneId = 0;
        this.route.params.forEach(function (params) {
            _this.identity = +params['id'];
            if (params['cloneId'])
                cloneId = +params['cloneId'];
            if (params['readonly'])
                _this.readonlyMode = params['readonly'] == "true" ? true : false;
        });
        //Si identity es mayor a cero, se solicitará carga de información. Si es cero, se creará un nuevo elemento
        if (this.identity > 0) {
            if (this.readonlyMode)
                this.viewingItem.next(this.identity);
            else
                this.loadingItem.next(this.identity);
        }
        else {
            //Determinar si el nuevo elemento será en blanco o se clonará de otro elemento
            if (cloneId == 0)
                this.creatingItem.next();
            else
                this.cloningItem.next(cloneId);
        }
    };
    CatalogEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) { return _this.loadConfiguration(); });
    };
    CatalogEditorComponent.prototype.loadConfiguration = function () {
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
    CatalogEditorComponent.prototype.showAlert = function (message, type) {
        var newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    };
    CatalogEditorComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    CatalogEditorComponent.prototype.saveHandler = function () {
        this.onSaveItem(false);
    };
    CatalogEditorComponent.prototype.saveCloseHanlder = function () {
        this.onSaveItem(true);
    };
    CatalogEditorComponent.prototype.onSaveItem = function (closeEditor) {
        if (this.catalogForm.valid) {
            var args = { info: this.info, closeEditor: closeEditor };
            this.savingItem.next(args);
        }
        else {
            this.showAlert("Uno o varios campos no cumplen con las validaciones", "danger");
        }
    };
    CatalogEditorComponent.prototype.closeEditor = function () {
        this.location.back();
    };
    CatalogEditorComponent.prototype.handleError = function (error) {
        this.context.app.hideSpinner();
    };
    return CatalogEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", entities_1.CatalogInfo)
], CatalogEditorComponent.prototype, "info", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogEditorComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], CatalogEditorComponent.prototype, "catalogForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogEditorComponent.prototype, "enabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "configureCatalog", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "creatingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "viewingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "loadingItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "cloningItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "savingItem", void 0);
CatalogEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'azteca-catalog-editor',
        templateUrl: './catalog-editor.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location,
        context_1.Context,
        entities_1.CatalogService])
], CatalogEditorComponent);
exports.CatalogEditorComponent = CatalogEditorComponent;

//# sourceMappingURL=catalog-editor.component.js.map

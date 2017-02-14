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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
const index_1 = require("../../index");
const index_2 = require("../../controls/index");
let CatalogEditorComponent = class CatalogEditorComponent {
    constructor(router, route, location, context, catalogService) {
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
        this.menuItemClick = new core_1.EventEmitter();
    }
    ngOnInit() {
        //Establecer el ancho establecido para la aplicación
        this.widthClass.push(this.context.app.defaultWidth);
        //               
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadConfiguration());
        setTimeout(_ => this.triggerOperation());
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
    triggerOperation() {
        //
        let cloneId = 0;
        this.route.params.forEach((params) => {
            this.identity = +params['id'];
            if (params['cloneId'])
                cloneId = +params['cloneId'];
            if (params['readonly'])
                this.readonlyMode = params['readonly'] == "true" ? true : false;
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
    }
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
    saveHandler() {
        this.onSaveItem(false);
    }
    saveCloseHanlder() {
        this.onSaveItem(true);
    }
    onSaveItem(closeEditor) {
        if (this.valid) {
            let args = { info: this.info, closeEditor: closeEditor };
            this.savingItem.next(args);
        }
        else {
            this.showAlert("Uno o varios campos no cumplen con las validaciones", "danger");
        }
    }
    closeEditor() {
        this.location.back();
    }
    onMenuItemClicked(menu, args) {
        let items = this.menuItems.toArray();
        let item = items[menu.selectedIndex];
        this.menuItemClick.next(item);
    }
    handleError(error) {
        this.context.app.hideSpinner();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.CatalogInfo)
], CatalogEditorComponent.prototype, "info", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CatalogEditorComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CatalogEditorComponent.prototype, "valid", void 0);
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
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CatalogEditorComponent.prototype, "menuItemClick", void 0);
__decorate([
    core_1.ContentChildren(index_2.MenuItemDirective),
    __metadata("design:type", core_1.QueryList)
], CatalogEditorComponent.prototype, "menuItems", void 0);
CatalogEditorComponent = __decorate([
    core_1.Component({
        selector: 'azteca-catalog-editor',
        template: `
      <div class="row">
          <div [ngClass]="widthClass">

              <div class="panel panel-default">
                  <div class="panel-heading">{{title}}</div>

                  <!--Toolbar-->

                  <div class="btn-group">
                      <button type="submit" class="btn btn-primary" (click)="saveHandler()" [disabled]="!valid" *ngIf="enabled">
                          <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Guardar
                      </button>
                      <button type="button" class="btn btn-default" (click)="saveCloseHanlder()" [disabled]="!valid" *ngIf="enabled">
                          <span class="glyphicon glyphicon-floppy-remove" aria-hidden="true"></span> Guardar y cerrar
                      </button>
                      <button type="button" class="btn btn-default" (click)="closeEditor()">
                          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                      </button>

                      <wj-menu #menu *ngIf="menuItems && menuItems.toArray().length > 0"
                               (itemClicked)="onMenuItemClicked(menu, $event)"
                               [isDisabled]="!enabled"
                               [header]="'Opciones'">

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

                  <!--Pool de alertas-->
                  <alert *ngFor="let alert of alerts;let i = index" [type]="alert.type" dismissible="true" [dismissOnTimeout]="alert.dismissOnTimeout" (close)="closeAlert(i)">
                      {{ alert?.msg }}
                  </alert>

                  <div class="panel-body">
                      <ng-content></ng-content>
                  </div>
              </div>

          </div>
      </div>
    `,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        common_1.Location,
        index_1.Context,
        index_1.CatalogService])
], CatalogEditorComponent);
exports.CatalogEditorComponent = CatalogEditorComponent;

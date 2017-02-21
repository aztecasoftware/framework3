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
//Frameworks
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
//Azteca Kernel
const index_1 = require("../../index");
const index_2 = require("../../editors/index");
//Features
const rol_service_1 = require("../services/rol.service");
const rol_1 = require("../models/rol");
let RolesEditor = RolesEditor_1 = class RolesEditor extends index_2.CatalogEditor {
    //
    constructor(router, route, formBuilder, changeDetector, context, location, rolService) {
        super(context, changeDetector);
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.changeDetector = changeDetector;
        this.context = context;
        this.location = location;
        this.rolService = rolService;
        this.rol = new rol_1.RolInfo();
        this.catalogForm = formBuilder.group({
            'codigo': ['', forms_1.Validators.required],
            'nombre': ['', forms_1.Validators.required],
            'url': ['', forms_1.Validators.required]
        });
    }
    onConfigureCatalog(options) {
        this.autogeneratedCode = options.codigoAutogenerado;
    }
    onCreatingItem() {
    }
    onViewingItem(id) {
        this.context.app.showSpinner();
        this.rolService.getDetailByID(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.rol = info;
            this.setReadonlyMode();
        })
            .catch(error => this.handleError(error));
    }
    onCloningItem(id) {
        this.context.app.showSpinner();
        //
        this.rolService.clone(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.rol = info;
        })
            .catch(error => this.handleError(error));
    }
    onLoadingItem(id) {
        this.context.app.showSpinner();
        this.rolService.getDetailByID(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.rol = info;
        })
            .catch(error => this.handleError(error));
    }
    onSavingItem(args) {
        this.context.app.showSpinner();
        this.rolService.update(this.rol)
            .then(info => {
            this.context.app.hideSpinner();
            this.rol = info;
            this.reset();
            if (args.closeEditor)
                this.location.back();
            else
                this.showAlert('La información ha sido actualizada con éxito', 'success');
        })
            .catch(error => this.handleError(error));
    }
};
RolesEditor = RolesEditor_1 = __decorate([
    core_1.Component({
        selector: 'security-rol-editor',
        template: `
      <form [formGroup]="catalogForm">

          <azteca-catalog-editor #catalogEditor
                                 [title]="'Definición de rol'"
                                 [info]="rol"
                                 [valid]="catalogForm.valid"
                                 (configureCatalog)="onConfigureCatalog($event)"
                                 (creatingItem)="onCreatingItem()"
                                 (viewingItem)="onViewingItem($event)"
                                 (cloningItem)="onCloningItem($event)"
                                 (savingItem)="onSavingItem($event)"
                                 (loadingItem)="onLoadingItem($event)">

              <div class="row">
                  <div class="col-xs-10 col-md-10">
                      <azteca-form-field [label]="'Código:'">
                          <catalog-code formControlName="codigo" [(ngModel)]="rol.code" [automatic]="autogeneratedCode"></catalog-code>
                      </azteca-form-field>

                      <azteca-form-field [label]="'Nombre:'">
                          <az-textbox formControlName="nombre" [(ngModel)]="rol.nombre"></az-textbox>
                      </azteca-form-field>

                      <azteca-form-field [label]="'URL:'">
                          <az-textbox formControlName="url" [(ngModel)]="rol.url"></az-textbox>
                      </azteca-form-field>

                  </div>
              </div>

          </azteca-catalog-editor>
      </form>
    `,
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => RolesEditor_1)
            },
            {
                provide: index_1.CatalogService, useExisting: rol_service_1.RolService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, core_1.ChangeDetectorRef,
        index_1.Context, common_1.Location, rol_service_1.RolService])
], RolesEditor);
exports.RolesEditor = RolesEditor;
var RolesEditor_1;

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
//
const wijmo_1 = require("wijmo/wijmo");
//Azteca Kernel
const index_1 = require("../../index");
const index_2 = require("../../controls/index");
const index_3 = require("../../editors/index");
const index_4 = require("../../search/index");
//Locales
const empresa_1 = require("../models/empresa");
const empresa_service_1 = require("../services/empresa.service");
const sucursal_service_1 = require("../services/sucursal.service");
const sucursales_manager_1 = require("./sucursales.manager");
let EmpresasEditor = EmpresasEditor_1 = class EmpresasEditor extends index_3.CatalogEditor {
    //        
    constructor(router, route, formBuilder, changeDetector, context, empresaService, sucursalService, location) {
        super(context, changeDetector);
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.changeDetector = changeDetector;
        this.context = context;
        this.empresaService = empresaService;
        this.sucursalService = sucursalService;
        this.location = location;
        this.empresa = new empresa_1.EmpresaInfo();
        this.sucursales = [];
        this.catalogForm = formBuilder.group({
            'codigo': ['', forms_1.Validators.required],
            'nombre': ['', forms_1.Validators.required],
            'calle': [''],
            'numExt': [''],
            'numInt': [''],
            'colonia': [''],
            'logo': [null, index_2.AztecaValiators.validFile],
            'poblacion': [0, index_2.AztecaValiators.selected]
        });
    }
    onConfigureCatalog(options) {
        this.autogeneratedCode = options.codigoAutogenerado;
    }
    onCreatingItem() {
    }
    onViewingItem(id) {
        this.context.app.showSpinner();
        this.empresaService.getDetailByID(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.empresa = info;
            this.setReadonlyMode();
            this.loadSucursales();
        })
            .catch(error => this.handleError(error));
    }
    onCloningItem(id) {
        this.context.app.showSpinner();
        //
        this.empresaService.clone(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.empresa = info;
        })
            .catch(error => this.handleError(error));
    }
    onLoadingItem(id) {
        this.context.app.showSpinner();
        this.empresaService.getDetailByID(id)
            .then(info => {
            this.context.app.hideSpinner();
            this.empresa = info;
            this.loadSucursales();
        })
            .catch(error => this.handleError(error));
    }
    onSavingItem(args) {
        this.context.app.showSpinner();
        this.empresaService.update(this.empresa)
            .then(info => {
            this.context.app.hideSpinner();
            this.empresa = info;
            this.reset();
            if (args.closeEditor)
                this.location.back();
            else
                this.showAlert('La información ha sido actualizada con éxito', 'success');
        })
            .catch(error => this.handleError(error));
    }
    //Manejo de sucursales
    selectSucursalesTab() {
        wijmo_1.Control.invalidateAll();
    }
    loadSucursales() {
        let request = new index_4.SearchRequest();
        request.paged = false;
        //Agregar condición de empresa actual
        let condicionEmpresa = { field: "idEmpresa", operator: "=", valueType: "int", value: this.empresa.identity.toString() };
        request.conditions.push(condicionEmpresa);
        //
        this.context.app.showSpinner();
        this.sucursalService.search(this.context.app.defaultSite.identity, request)
            .then(response => {
            this.context.app.hideSpinner();
            //
            this.sucursales = response.rows;
        })
            .catch(error => this.handleError(error));
    }
};
__decorate([
    core_1.ViewChild(sucursales_manager_1.SucursalesManager),
    __metadata("design:type", sucursales_manager_1.SucursalesManager)
], EmpresasEditor.prototype, "siteManager", void 0);
EmpresasEditor = EmpresasEditor_1 = __decorate([
    core_1.Component({
        selector: 'azteca-empresas-editor',
        template: `
      <form [formGroup]="catalogForm">

          <azteca-catalog-editor #catalogEditor 
                                 [title]="'Empresa'"
                                 [info]="empresa"
                                 [valid]="catalogForm.valid"
                                 (configureCatalog)="onConfigureCatalog($event)"
                                 (creatingItem)="onCreatingItem()"
                                 (viewingItem)="onViewingItem($event)"
                                 (cloningItem)="onCloningItem($event)"
                                 (savingItem)="onSavingItem($event)"
                                 (loadingItem)="onLoadingItem($event)">

              <div class="row">
                  <div class="col-xs-4 col-md-2">
                      <azteca-form-field>
                          <azteca-image-box formControlName="logo" [(ngModel)]="empresa.logo"></azteca-image-box>
                      </azteca-form-field>                    
                  </div>

                  <div class="col-xs-8 col-md-8">
                      <azteca-form-field [label]="'Código:'">                    
                          <catalog-code formControlName="codigo" [(ngModel)]="empresa.code" [automatic]="autogeneratedCode"></catalog-code>                    
                      </azteca-form-field>

                      <azteca-form-field [label]="'Nombre:'">
                          <az-textbox formControlName="nombre" [(ngModel)]="empresa.nombre"></az-textbox>
                      </azteca-form-field>

                  </div>
              </div>

        
              <div class="row">
                  <div class="col-xs-12 col-md-10 col-lg-10">
                      <tabset>
                          <tab heading="Domicilio">

                              <div class="row">
                                  <div class="col-xs-12 col-md-10">

                                      <azteca-form-field [label]="'Calle:'">
                                          <az-textbox formControlName="calle" [(ngModel)]="empresa.calle"></az-textbox>
                                      </azteca-form-field>

                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-xs-12 col-md-5">
                                      <azteca-form-field [label]="'Número Exterior:'">
                                          <az-textbox formControlName="numExt" [(ngModel)]="empresa.numExt"></az-textbox>                                    
                                      </azteca-form-field>
                                  </div>
                                  <div class="col-xs-12 col-md-5">
                                      <azteca-form-field [label]="'Número Interior:'">
                                          <az-textbox formControlName="numInt" [(ngModel)]="empresa.numInt"></az-textbox>
                                      </azteca-form-field>
                                  </div>
                              </div>

                              <div class="row">
                                  <div class="col-xs-12 col-md-10">

                                      <azteca-form-field [label]="'Colonia:'">
                                          <az-textbox formControlName="colonia" [(ngModel)]="empresa.colonia"></az-textbox>                                    
                                      </azteca-form-field>

                                      <azteca-form-field [label]="'Población:'">
                                          <poblacion-selector formControlName="poblacion" [(ngModel)]="empresa.idPoblacion"></poblacion-selector>
                                      </azteca-form-field>
                                    
                                  </div>
                              </div>

                          </tab>
                          <tab heading="Sucursales" [disabled]="empresa.identity == 0" (select)="selectSucursalesTab()">
                              <azteca-sucursales-manager #sites
                                                         [name]="'sucursales'"
                                                         [sucursales]="sucursales"
                                                         [idEmpresa]="empresa.identity"                                                   
                                                         (searchRequested)="loadSucursales($event)">
                              </azteca-sucursales-manager>
                          </tab>
                      </tabset>
                  </div>
              </div>
            

          </azteca-catalog-editor>
      </form>
    `,
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => EmpresasEditor_1)
            },
            {
                provide: index_1.CatalogService, useExisting: empresa_service_1.EmpresaService
            }
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder, core_1.ChangeDetectorRef,
        index_1.Context, empresa_service_1.EmpresaService, sucursal_service_1.SucursalService, common_1.Location])
], EmpresasEditor);
exports.EmpresasEditor = EmpresasEditor;
var EmpresasEditor_1;

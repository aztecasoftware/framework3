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
const forms_1 = require("@angular/forms");
//Azteca Kernel
const index_1 = require("../../index");
const index_2 = require("../../editors/index");
//
const persona_1 = require("../models/persona");
let PersonaComponent = PersonaComponent_1 = class PersonaComponent extends index_2.CatalogEditor {
    constructor(context, formBuilder, changeDetector) {
        super(context, changeDetector);
        this.context = context;
        this.formBuilder = formBuilder;
        this.changeDetector = changeDetector;
        this.catalogForm = formBuilder.group({
            'codigo': ['', forms_1.Validators.required],
            'nombre': ['', forms_1.Validators.required],
            'apellidoPaterno': [''],
            'apellidoMaterno': [''],
            'telefonoCasa': [''],
            'telefonoOficina': [''],
            'celular': [''],
            'correo': ['']
        });
    }
    onConfigureCatalog(options) {
        this.autogeneratedCode = options.codigoAutogenerado;
    }
    onCreatingItem() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", persona_1.PersonaInfo)
], PersonaComponent.prototype, "persona", void 0);
PersonaComponent = PersonaComponent_1 = __decorate([
    core_1.Component({
        selector: 'general-persona',
        template: `
      <form [formGroup]="catalogForm">

          <div class="row">

              <div class="col-xs-10">

                  <div class="row">
                      <div class="col-xs-10 col-md-8">
                          <azteca-form-field [label]="'Nombre(s):'">
                              <az-textbox formControlName="nombre" [(ngModel)]="persona.nombre"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>  

                  <div class="row">
                      <div class="col-xs-5 col-md-4">
                          <azteca-form-field [label]="'Apellido Paterno:'">
                              <az-textbox formControlName="apellidoPaterno" [(ngModel)]="persona.apellidoPaterno"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-xs-5 col-md-4">
                          <azteca-form-field [label]="'Apellido Materno:'">
                              <az-textbox formControlName="apellidoMaterno" [(ngModel)]="persona.apellidoMaterno"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-xs-5 col-md-4">
                          <azteca-form-field [label]="'Tel. Casa:'">
                              <az-textbox formControlName="telefonoCasa" [(ngModel)]="persona.telefonoCasa"></az-textbox>
                          </azteca-form-field>
                      </div>

                      <div class="col-xs-5 col-md-4">
                          <azteca-form-field [label]="'Tel. Oficina:'">
                              <az-textbox formControlName="telefonoOficina" [(ngModel)]="persona.telefonoOficina"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-xs-5 col-md-4">
                          <azteca-form-field [label]="'Celular:'">
                              <az-textbox formControlName="celular" [(ngModel)]="persona.celular"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-xs-10 col-md-8">
                          <azteca-form-field [label]="'Correo:'">
                              <az-textbox formControlName="correo" [(ngModel)]="persona.correo"></az-textbox>
                          </azteca-form-field>
                      </div>
                  </div>

              </div>

          </div>

      </form>
    `,
        providers: [
            {
                provide: index_1.BaseComponent,
                useExisting: core_1.forwardRef(() => PersonaComponent_1)
            }
        ]
    }),
    __metadata("design:paramtypes", [index_1.Context, forms_1.FormBuilder, core_1.ChangeDetectorRef])
], PersonaComponent);
exports.PersonaComponent = PersonaComponent;
var PersonaComponent_1;
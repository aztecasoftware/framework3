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
//
const index_1 = require("../../index");
//
const index_2 = require("../../editors/index");
const modulo_service_1 = require("../services/modulo.service");
let ModulosManager = ModulosManager_1 = class ModulosManager extends index_2.HierarchyManager {
    constructor(context, moduloService) {
        super();
        this.context = context;
        this.moduloService = moduloService;
    }
    onConfigureCatalog(options) {
        this.loadHierarchy();
    }
    loadHierarchy() {
        this.moduloService.loadHierarchy(this.context.app.defaultCompany.identity)
            .then(nodes => this.modulos = nodes)
            .catch(error => this.handleError(error));
    }
};
ModulosManager = ModulosManager_1 = __decorate([
    core_1.Component({
        selector: 'security-modulos-manager',
        template: `
      <azteca-hierarchy-manager (configureCatalog)="onConfigureCatalog($event)"
                                [title]="'Administración de módulos del sistema'"
                                [nodes]="modulos">

          <!------------------- Menu de acciones adicionales --------------------->
          <azteca-menu-item [name]="'PROCESOS'" [icon]="'glyphicon glyphicon-cog'" [text]="'Procesos'" [smallText]="'editar procesos del módulo'"></azteca-menu-item>

      </azteca-hierarchy-manager>
    `,
        providers: [
            {
                provide: index_1.BaseComponent, useExisting: core_1.forwardRef(() => ModulosManager_1)
            },
            {
                provide: index_1.CatalogService, useExisting: modulo_service_1.ModuloService
            }
        ]
    }),
    __metadata("design:paramtypes", [index_1.Context, modulo_service_1.ModuloService])
], ModulosManager);
exports.ModulosManager = ModulosManager;
var ModulosManager_1;

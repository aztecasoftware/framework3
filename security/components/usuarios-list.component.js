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
const index_1 = require("../../index");
const index_2 = require("../../search/index");
const usuario_service_1 = require("../services/usuario.service");
let UsuariosListComponent = class UsuariosListComponent extends index_2.CatalogListDialog {
    constructor(context, usuarioService) {
        super(context);
        this.context = context;
        this.usuarioService = usuarioService;
    }
    onSearchRequested(request) {
        this.usuarioService.search(this.context.app.defaultSite.identity, request)
            .then(result => {
            this.usuarios = result.rows;
            this.totalRows = result.totalRows;
            this.pageIndex = request.pageIndex;
            this.context.app.hideSpinner();
        })
            .catch(error => this.handleError(error));
    }
};
UsuariosListComponent = __decorate([
    core_1.Component({
        selector: 'security-usuarios-list',
        template: `
      <catalog-list-dialog    (searchRequested)="onSearchRequested($event)"
                              [catalogList]="usuarios"
                              [multiSelect]="multiSelect"
                              [serverSide]="serverSide"
                              [pageSize]="pageSize"
                              [totalRows]="totalRows"
                              [pageIndex]="pageIndex">


          <azteca-grid-column [header]="'ID'" [binding]="'id'" dataType="Number" [width]="'10*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Usuario'" [binding]="'codigo'" [width]="'10*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Nombre'" [binding]="'nombre'" [width]="'60*'"></azteca-grid-column>
          <azteca-grid-column [header]="'Estatus'" [binding]="'estatus'" [width]="'20*'"></azteca-grid-column>


      </catalog-list-dialog>
    `
    }),
    __metadata("design:paramtypes", [index_1.Context, usuario_service_1.UsuarioService])
], UsuariosListComponent);
exports.UsuariosListComponent = UsuariosListComponent;

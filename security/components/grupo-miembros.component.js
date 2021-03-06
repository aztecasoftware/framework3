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
//
const index_1 = require("../../index");
const index_2 = require("../../controls/index");
const grupo_service_1 = require("../services/grupo.service");
const usuarios_list_component_1 = require("../components/usuarios-list.component");
let GrupoMiembrosComponent = class GrupoMiembrosComponent extends index_1.BaseComponent {
    //
    constructor(context, grupoService, router, route, location) {
        super();
        this.context = context;
        this.grupoService = grupoService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        this.route.params.forEach(param => {
            this.idGrupo = +param['id'];
        });
    }
    ngAfterViewInit() {
        setTimeout(_ => this.refreshList());
    }
    onCurrentItemChanged(item) {
        this.currentItem = item;
    }
    onToolbarButtonClick(button) {
        if (button.name == "ADD") {
            this.usuariosDialog.show();
        }
        if (button.name == "REFRESH") {
            this.refreshList();
        }
        if (button.name == "CLOSE") {
            this.location.back();
        }
    }
    refreshList() {
        this.context.app.showSpinner();
        this.grupoService.getMembers(this.idGrupo)
            .then(usuarios => {
            this.usuarios = usuarios;
            this.context.app.hideSpinner();
        })
            .catch(error => this.handleError(error));
    }
    onSelectedUsersChanged(newUsers) {
        this.grupoService.addMembers(this.idGrupo, newUsers)
            .then(_ => {
            this.context.app.hideSpinner();
            this.alerts.showAlert('Los usuarios han sido agregados con éxito.', 'success');
            this.refreshList();
        })
            .catch(error => this.handleError(error));
    }
    onRemoveUser() {
        this.context.app.showSpinner();
        this.grupoService.removeMember(this.idGrupo, this.currentItem.id)
            .then(_ => {
            this.context.app.hideSpinner();
            this.usuarios = this.usuarios.filter(item => item.id != this.currentItem.id);
        })
            .catch(error => this.handleError(error));
    }
    applyPolicy(policy) {
    }
    handleError(error) {
        this.context.app.hideSpinner();
        let message = this.getErrorMessage(error);
        this.alerts.showAlert(message, 'danger');
    }
};
__decorate([
    core_1.ViewChild(usuarios_list_component_1.UsuariosListComponent),
    __metadata("design:type", usuarios_list_component_1.UsuariosListComponent)
], GrupoMiembrosComponent.prototype, "usuariosDialog", void 0);
__decorate([
    core_1.ViewChild(index_2.AlertsBarComponent),
    __metadata("design:type", index_2.AlertsBarComponent)
], GrupoMiembrosComponent.prototype, "alerts", void 0);
GrupoMiembrosComponent = __decorate([
    core_1.Component({
        selector: 'security-grupo-miembros',
        template: `
      <div class="row">
          <div class="col-xs-12 col-md-10">
              <az-panel [header]="'Miembros del grupo -'">
                  <alerts-bar></alerts-bar>
                  <!--Toolbar Principal-->
                  <az-toolbar (buttonClick)="onToolbarButtonClick($event)">
                      <az-toolbar-button [name]="'ADD'" [type]="'primary'" [text]="'Agregar Usuarios'" [icon]="'glyphicon glyphicon-plus'"></az-toolbar-button>
                      <az-toolbar-button [name]="'REFRESH'" [text]="'Actualizar'" [icon]="'glyphicon glyphicon-refresh'" [class]="'hidden-xs'"></az-toolbar-button>
                      <az-toolbar-button [name]="'CLOSE'" [text]="'Regresar'" [icon]="'glyphicon glyphicon-circle-arrow-left'"></az-toolbar-button>
                  </az-toolbar>

                  <!-- Lista de usuarios-->
                  <azteca-catalog-list [catalogList]="usuarios"                                 
                                       [showRowButton]="true"
                                       [rowButtonIcon]="'glyphicon glyphicon-trash'"
                                       (rowButtonClick)="onRemoveUser()"
                                       (currentItemChanged)="onCurrentItemChanged($event)"
                                       [enabled]="enabled"
                                       [pageSize]="15"
                                       [serverSide]="false">

                      <azteca-grid-column [header]="'ID'" [binding]="'id'" [width]="50"></azteca-grid-column>
                      <azteca-grid-column [header]="'Usuario'" [binding]="'codigo'" [width]="'20*'"></azteca-grid-column>
                      <azteca-grid-column [header]="'Nombre'" [binding]="'nombrePersona'" [width]="'40*'"></azteca-grid-column>
                      <azteca-grid-column [header]="'Estatus'" [binding]="'estatus'" [width]="'10*'"></azteca-grid-column>

                  </azteca-catalog-list>


              </az-panel>
          </div>
      </div>

      <security-usuarios-list (selectedItemsChanged)="onSelectedUsersChanged($event)"
                              [excludedItems]="usuarios"
                              [multiSelect]="true" >

      </security-usuarios-list>
    `
    }),
    __metadata("design:paramtypes", [index_1.Context, grupo_service_1.GrupoService, router_1.Router, router_1.ActivatedRoute,
        common_1.Location])
], GrupoMiembrosComponent);
exports.GrupoMiembrosComponent = GrupoMiembrosComponent;

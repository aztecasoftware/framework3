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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
//
const index_1 = require('../../index');
const grupo_service_1 = require('../services/grupo.service');
let GrupoMiembrosComponent = class GrupoMiembrosComponent extends index_1.BaseComponent {
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
    onToolbarButtonClick(button) {
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
    onSearchRequest(request) {
    }
    onDeleteRow(item) {
        this.context.app.showSpinner();
        this.grupoService.removeMember(this.idGrupo, item.id)
            .then(_ => this.context.app.hideSpinner())
            .catch(error => this.handleError(error));
    }
    applyPolicy(policy) {
    }
    handleError(error) {
        this.context.app.hideSpinner();
    }
};
GrupoMiembrosComponent = __decorate([
    core_1.Component({
        selector: 'security-grupo-miembros',
        templateUrl: './grupo-miembros.component.html'
    }), 
    __metadata('design:paramtypes', [index_1.Context, grupo_service_1.GrupoService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
], GrupoMiembrosComponent);
exports.GrupoMiembrosComponent = GrupoMiembrosComponent;
//# sourceMappingURL=grupo-miembros.component.js.map
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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
//Wijmo
const wijmo_1 = require('wijmo/wijmo');
const wijmo_grid_1 = require('wijmo/wijmo.grid');
//Bootstrap
const ng2_bootstrap_1 = require('ng2-bootstrap');
//Azteca Kernel
const index_1 = require('../../index');
const catalog_options_1 = require('../models/catalog-options');
const custom_catalog_service_1 = require('../services/custom-catalog.service');
const ensamblado_service_1 = require('../services/ensamblado.service');
let CustomCatalogManager = class CustomCatalogManager {
    constructor(context, customService, router, location, ensambladoService) {
        this.context = context;
        this.customService = customService;
        this.router = router;
        this.location = location;
        this.ensambladoService = ensambladoService;
        this.alerts = [];
        this.collectionView = new wijmo_1.CollectionView();
        this.currentItem = new catalog_options_1.CatalogOptions();
    }
    ngOnInit() {
        this.collectionView.pageSize = 15;
    }
    ngAfterViewInit() {
        setTimeout(_ => this.loadEnsamblados());
        setTimeout(_ => this.loadData());
    }
    loadData() {
        this.customService.load()
            .then(options => this.collectionView.sourceCollection = options)
            .catch(error => this.handleError(error));
    }
    loadEnsamblados() {
        this.ensambladoService.loadList()
            .then(ensamblados => {
            this.ensamblados = ensamblados;
            this.ensamblados.push({ id: 0, codigo: '0', nombre: '[NO SELECCIONADA]', ensamblado: '', activo: true });
            this.ensambladosMap = new wijmo_grid_1.DataMap(this.ensamblados, 'id', 'nombre');
        })
            .catch(error => this.handleError(error));
    }
    saveData() {
        this.customService.update(this.collectionView.sourceCollection)
            .then(() => this.showAlert('Los cambios han sido guardados con éxito', 'success'))
            .catch(error => this.handleError(error));
    }
    mainToolbarHandler(button) {
        if (button.name == "SAVE") {
            this.saveData();
        }
        if (button.name == "LOAD") {
            this.loadData();
        }
        else if (button.name == "CLOSE") {
            this.location.back();
        }
    }
    detailsToolbarHandler(button) {
        if (button.name == "OK") {
            this.collectionView.commitEdit();
            this.detailsDialog.hide();
        }
        if (button.name == "CANCEL") {
            this.collectionView.cancelEdit();
            this.detailsDialog.hide();
        }
    }
    onRowEdit(item) {
        this.currentItem = item;
        this.collectionView.editItem(this.collectionView.currentItem);
        this.detailsDialog.config.backdrop = false;
        this.detailsDialog.show();
    }
    hideDetailsDialog() {
        this.collectionView.cancelEdit();
        this.detailsDialog.hide();
    }
    showAlert(message, type) {
        let newAlert = { msg: message, type: type, dismissOnTimeout: 5000, closable: true };
        this.alerts.push(newAlert);
    }
    closeAlert(i) {
        this.alerts.splice(i, 1);
    }
    handleError(error) {
        console.error(error);
        this.showAlert('Error al guardar los cambios', 'danger');
    }
};
__decorate([
    core_1.ViewChild('detailsDialog'), 
    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
], CustomCatalogManager.prototype, "detailsDialog", void 0);
__decorate([
    core_1.ViewChild('grid'), 
    __metadata('design:type', wijmo_grid_1.FlexGrid)
], CustomCatalogManager.prototype, "grid", void 0);
CustomCatalogManager = __decorate([
    core_1.Component({
        selector: 'custom-catalog-manager',
        templateUrl: './custom-catalog.manager.html'
    }), 
    __metadata('design:paramtypes', [index_1.Context, custom_catalog_service_1.CustomCatalogService, router_1.Router, common_1.Location, ensamblado_service_1.EnsambladoService])
], CustomCatalogManager);
exports.CustomCatalogManager = CustomCatalogManager;
//# sourceMappingURL=custom-catalog.manager.js.map
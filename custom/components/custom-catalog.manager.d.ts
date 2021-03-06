import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CollectionView } from 'wijmo/wijmo';
import { FlexGrid, DataMap } from 'wijmo/wijmo.grid';
import { ModalDirective } from 'ng2-bootstrap';
import { Context } from '../../index';
import { ToolbarButtonDirective, Alert } from '../../controls/index';
import { CatalogOptions } from '../models/catalog-options';
import { CustomCatalogService } from '../services/custom-catalog.service';
import { EnsambladoService } from '../services/ensamblado.service';
import { EnsambladoItem } from '../models/ensamblado';
export declare class CustomCatalogManager {
    private context;
    private customService;
    private router;
    private location;
    private ensambladoService;
    alerts: Alert[];
    collectionView: CollectionView;
    ensamblados: EnsambladoItem[];
    ensambladosMap: DataMap;
    currentItem: CatalogOptions;
    detailsDialog: ModalDirective;
    grid: FlexGrid;
    constructor(context: Context, customService: CustomCatalogService, router: Router, location: Location, ensambladoService: EnsambladoService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    loadData(): void;
    loadEnsamblados(): void;
    saveData(): void;
    mainToolbarHandler(button: ToolbarButtonDirective): void;
    detailsToolbarHandler(button: ToolbarButtonDirective): void;
    onRowEdit(item: CatalogOptions): void;
    hideDetailsDialog(): void;
    showAlert(message: string, type: string): void;
    closeAlert(i: number): void;
    handleError(error: any): void;
}

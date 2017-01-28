import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../index';
import { CatalogOptions } from '../custom/index';
import { CatalogEditor, EditorEventArgs } from '../editors/index';
import { EmpresaInfo, EmpresaService } from './empresa';
import { SucursalService } from './sucursal';
import { SucursalesManager } from './sucursales.manager';
export declare class EmpresasEditor extends CatalogEditor {
    private router;
    private route;
    protected context: Context;
    private empresaService;
    private sucursalService;
    private location;
    empresa: EmpresaInfo;
    sucursales: any[];
    siteManager: SucursalesManager;
    constructor(router: Router, route: ActivatedRoute, formBuilder: FormBuilder, context: Context, empresaService: EmpresaService, sucursalService: SucursalService, location: Location);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
    selectSucursalesTab(): void;
}

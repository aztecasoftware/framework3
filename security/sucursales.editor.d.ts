import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../context';
import { CatalogEditor } from '../editors/catalog-editor';
import { EditorEventArgs } from '../editors/editor-event-args';
import { CatalogOptions } from '../custom/custom-catalog';
import { SucursalInfo, SucursalService } from './sucursal';
import { EmpresaService } from './empresa';
export declare class SucursalesEditor extends CatalogEditor {
    protected context: Context;
    private router;
    private route;
    private location;
    private sucursalService;
    private empresaService;
    sucursal: SucursalInfo;
    idEmpresa: number;
    constructor(context: Context, router: Router, route: ActivatedRoute, location: Location, formBuilder: FormBuilder, sucursalService: SucursalService, empresaService: EmpresaService);
    ngOnInit(): void;
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
    selectMiembrosTab(): void;
}

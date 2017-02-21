import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogEditor, EditorEventArgs } from '../../editors/index';
import { TipoAsentamientoService } from '../services/tipoasentamiento.service';
import { TipoAsentamientoInfo } from '../models/tipoasentamiento';
export declare class TiposAsentamientoEditor extends CatalogEditor {
    private router;
    private route;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    protected context: Context;
    private location;
    private tipoAsentamientoService;
    tipoasentamiento: TipoAsentamientoInfo;
    constructor(router: Router, route: ActivatedRoute, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef, context: Context, location: Location, tipoAsentamientoService: TipoAsentamientoService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
}

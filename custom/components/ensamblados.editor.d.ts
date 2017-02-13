import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../../index';
import { CatalogOptions } from '../models/catalog-options';
import { CatalogEditor, EditorEventArgs } from '../../editors/index';
import { EnsambladoService } from '../services/ensamblado.service';
import { EnsambladoInfo } from '../models/ensamblado';
export declare class EnsambladosEditor extends CatalogEditor {
    private router;
    private route;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    protected context: Context;
    private location;
    private ensambladoService;
    ensamblado: EnsambladoInfo;
    constructor(router: Router, route: ActivatedRoute, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef, context: Context, location: Location, ensambladoService: EnsambladoService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
}

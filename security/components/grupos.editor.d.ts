import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { MenuItem } from '../../controls/index';
import { CatalogEditor, EditorEventArgs } from '../../editors/index';
import { GrupoInfo } from '../models/grupo';
import { GrupoService } from '../services/grupo.service';
export declare class GruposEditor extends CatalogEditor {
    protected context: Context;
    private router;
    private route;
    private location;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    private grupoService;
    grupo: GrupoInfo;
    constructor(context: Context, router: Router, route: ActivatedRoute, location: Location, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef, grupoService: GrupoService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
    onMenuItemClick(item: MenuItem): void;
}

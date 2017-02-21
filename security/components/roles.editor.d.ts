import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogEditor, EditorEventArgs } from '../../editors/index';
import { RolService } from '../services/rol.service';
import { RolInfo } from '../models/rol';
export declare class RolesEditor extends CatalogEditor {
    private router;
    private route;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    protected context: Context;
    private location;
    private rolService;
    rol: RolInfo;
    constructor(router: Router, route: ActivatedRoute, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef, context: Context, location: Location, rolService: RolService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
}

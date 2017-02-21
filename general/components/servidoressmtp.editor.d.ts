import { ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogEditor, EditorEventArgs } from '../../editors/index';
import { ServidorSMTPService } from '../services/servidorsmtp.service';
import { ServidorSMTPInfo } from '../models/servidorsmtp';
export declare class ServidoresSMTPEditor extends CatalogEditor {
    private router;
    private route;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    protected context: Context;
    private location;
    private servidorSMTPService;
    servidorsmtp: ServidorSMTPInfo;
    metodosAutentificacion: {
        id: string;
        nombre: string;
    }[];
    constructor(router: Router, route: ActivatedRoute, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef, context: Context, location: Location, servidorSMTPService: ServidorSMTPService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
}

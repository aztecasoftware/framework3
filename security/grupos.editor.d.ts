import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Context } from '../index';
import { CatalogOptions } from '../custom/index';
import { CatalogEditor, EditorEventArgs } from '../editors/index';
import { GrupoService, GrupoInfo } from './grupo';
export declare class GruposEditor extends CatalogEditor {
    protected context: Context;
    private router;
    private route;
    private location;
    private grupoService;
    grupo: GrupoInfo;
    constructor(context: Context, router: Router, route: ActivatedRoute, location: Location, formBuilder: FormBuilder, grupoService: GrupoService);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
    onViewingItem(id: number): void;
    onCloningItem(id: number): void;
    onLoadingItem(id: number): void;
    onSavingItem(args: EditorEventArgs): void;
    selectTab(): void;
}

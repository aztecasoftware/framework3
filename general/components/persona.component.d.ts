import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Context } from '../../index';
import { CatalogOptions } from '../../custom/index';
import { CatalogEditor } from '../../editors/index';
import { PersonaInfo } from '../models/persona';
export declare class PersonaComponent extends CatalogEditor {
    protected context: Context;
    private formBuilder;
    protected changeDetector: ChangeDetectorRef;
    persona: PersonaInfo;
    constructor(context: Context, formBuilder: FormBuilder, changeDetector: ChangeDetectorRef);
    onConfigureCatalog(options: CatalogOptions): void;
    onCreatingItem(): void;
}

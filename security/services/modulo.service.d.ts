import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, HierarchyService } from '../../index';
import { ModuloInfo } from '../models/modulo';
import { CategoriaModulos } from '../models/categoria-modulos';
export declare class ModuloService extends HierarchyService<ModuloInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<ModuloInfo>;
    loadCategories(): Promise<CategoriaModulos[]>;
}

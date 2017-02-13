import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { EnsambladoInfo, EnsambladoItem } from '../models/ensamblado';
export declare class EnsambladoService extends CatalogService<EnsambladoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<EnsambladoInfo>;
    loadList(): Promise<EnsambladoItem[]>;
}

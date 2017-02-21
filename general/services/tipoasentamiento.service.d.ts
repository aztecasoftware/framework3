import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { TipoAsentamientoInfo, TipoAsentamientoItem } from '../models/tipoasentamiento';
export declare class TipoAsentamientoService extends CatalogService<TipoAsentamientoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<TipoAsentamientoInfo>;
    loadList(): Promise<TipoAsentamientoItem[]>;
}

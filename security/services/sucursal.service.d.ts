import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { SucursalInfo } from '../models/sucursal';
export declare class SucursalService extends CatalogService<SucursalInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<SucursalInfo>;
}

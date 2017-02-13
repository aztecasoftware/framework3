import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { ProcesoInfo } from '../models/proceso';
export declare class ProcesoService extends CatalogService<ProcesoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<ProcesoInfo>;
}

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, BaseService } from '../../index';
import { CatalogOptions } from '../models/catalog-options';
export declare class CustomCatalogService extends BaseService {
    protected http: Http;
    protected context: Context;
    constructor(http: Http, context: Context);
    load(): Promise<CatalogOptions[]>;
    update(options: CatalogOptions[]): Promise<any>;
}

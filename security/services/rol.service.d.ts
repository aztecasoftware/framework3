import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { RolInfo, RolItem } from '../models/rol';
export declare class RolService extends CatalogService<RolInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<RolInfo>;
    loadList(): Promise<RolItem[]>;
}

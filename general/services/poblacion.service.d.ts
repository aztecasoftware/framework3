import { Http } from '@angular/http';
import { Context, CatalogService } from '../../index';
import { PoblacionInfo } from '../models/poblacion';
export declare class PoblacionService extends CatalogService<PoblacionInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<PoblacionInfo>;
}

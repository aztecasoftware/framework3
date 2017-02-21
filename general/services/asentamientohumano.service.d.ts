import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { AsentamientoHumanoInfo } from '../models/asentamientohumano';
export declare class AsentamientoHumanoService extends CatalogService<AsentamientoHumanoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<AsentamientoHumanoInfo>;
}

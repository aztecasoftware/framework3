import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from '../context';
import { CatalogInfo, CatalogService } from '../entities';
export declare class ProcesoInfo extends CatalogInfo {
    nombre: string;
}
export declare class ProcesoService extends CatalogService<ProcesoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<ProcesoInfo>;
}

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BaseService } from '../entities';
import { Context } from '../context';
export declare class CatalogOptions {
    entidad?: string;
    idEnsamblado?: number;
    ensamblado?: string;
    claseAcciones?: string;
    codigoAutogenerado?: boolean;
    busquedasServidor?: boolean;
    tamanioPagina?: number;
    utilizaCache?: boolean;
    duracionCache?: number;
    logCambios?: boolean;
    tipoSincronizacion?: string;
}
export declare class CustomCatalogService extends BaseService {
    protected http: Http;
    protected context: Context;
    constructor(http: Http, context: Context);
    load(): Promise<CatalogOptions[]>;
}

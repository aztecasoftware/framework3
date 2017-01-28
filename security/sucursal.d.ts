import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from '../context';
import { CatalogInfo, CatalogItem, CatalogService } from '../entities';
import { EmpresaInfo } from './empresa';
export declare class SucursalInfo extends CatalogInfo {
    empresa: EmpresaInfo;
    nombre: string;
    nombreLargo: string;
    calle: string;
    numExt: string;
    numInt: string;
    colonia: string;
    cp: string;
    idPoblacion: number;
    telefono1: string;
    telefono2: string;
    fax: string;
    paginaWeb: string;
    correo: string;
    constructor();
}
export declare class SucursalItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
    idEmpresa: number;
}
export declare class SucursalService extends CatalogService<SucursalInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<SucursalInfo>;
}

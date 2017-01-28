import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from '../context';
import { CatalogInfo, CatalogItem, CatalogService } from '../entities';
import { SucursalItem } from './sucursal';
import { FileInfo } from '../general/file';
export declare class EmpresaInfo extends CatalogInfo {
    nombre: string;
    nombreLargo: string;
    logo: FileInfo;
    calle: string;
    numExt: string;
    numInt: string;
    colonia: string;
    cp: string;
    idPoblacion: number;
    constructor();
}
export declare class EmpresaItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}
export declare class EmpresaService extends CatalogService<EmpresaInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<EmpresaInfo>;
    loadSucursales(idEmpresa: number): Promise<SucursalItem[]>;
}

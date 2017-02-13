import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { EmpresaInfo } from '../models/empresa';
import { SucursalItem } from '../models/sucursal';
export declare class EmpresaService extends CatalogService<EmpresaInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<EmpresaInfo>;
    loadSucursales(idEmpresa: number): Promise<SucursalItem[]>;
}

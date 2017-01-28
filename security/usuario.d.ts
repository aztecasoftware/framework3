import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from '../context';
import { CatalogInfo, CatalogItem, CatalogService } from '../entities';
import { SessionInfo } from './session';
import { EmpresaItem } from './empresa';
import { SucursalItem } from './sucursal';
export declare class UsuarioInfo extends CatalogInfo {
    idPersona: number;
    password: string;
    empresas: EmpresaItem[];
    sucursales: SucursalItem[];
}
export declare class UsuarioItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}
export declare class UsuarioService extends CatalogService<UsuarioInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<UsuarioInfo>;
    login(userName: string, password: string, workStation: string): Promise<SessionInfo>;
}

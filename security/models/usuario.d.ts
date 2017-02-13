import { CatalogInfo, CatalogItem } from '../../index';
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
    nombrePersona: string;
    activo: boolean;
    estatus?: string;
}

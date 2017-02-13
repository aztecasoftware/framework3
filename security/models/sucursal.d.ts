import { CatalogInfo, CatalogItem } from '../../index';
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

import { CatalogInfo, CatalogItem } from '../../index';
export declare class AsentamientoHumanoInfo extends CatalogInfo {
    nombre: string;
    idPoblacion: number;
    idMunicipio: number;
    idTipoAsentamiento: number;
    codigoPostal: string;
    tipoAsentamiento: string;
    constructor();
}
export declare class AsentamientoHumanoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

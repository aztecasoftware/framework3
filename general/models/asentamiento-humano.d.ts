import { CatalogInfo, CatalogItem } from '../../index';
import { PoblacionInfo } from './poblacion';
export declare class AsentamientoHumanoInfo extends CatalogInfo {
    poblacion: PoblacionInfo;
    nombre: string;
    codigoPostal: string;
    idTipoAsentamiento: number;
    tipoAsentamiento: string;
}
export declare class AsentamientoHumanoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

import { CatalogInfo, CatalogItem } from '../../index';
export declare class TipoAsentamientoInfo extends CatalogInfo {
    nombre: string;
    constructor();
}
export declare class TipoAsentamientoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

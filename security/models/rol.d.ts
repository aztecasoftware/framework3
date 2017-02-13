import { CatalogInfo, CatalogItem } from '../../index';
export declare class RolInfo extends CatalogInfo {
    nombre: string;
    url: string;
    constructor();
}
export declare class RolItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    url: string;
    activo: boolean;
    estatus?: string;
}

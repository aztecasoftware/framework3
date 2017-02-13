import { CatalogInfo, CatalogItem } from '../../index';
export declare class PaisInfo extends CatalogInfo {
    nombre: string;
}
export declare class PaisItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

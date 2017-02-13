import { CatalogInfo, CatalogItem } from '../../index';
export declare class GrupoInfo extends CatalogInfo {
    nombre: string;
    constructor();
}
export declare class GrupoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

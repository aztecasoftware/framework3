import { CatalogInfo, CatalogItem } from '../../index';
export declare class EnsambladoInfo extends CatalogInfo {
    nombre: string;
    ensamblado: string;
    constructor();
}
export declare class EnsambladoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    ensamblado: string;
    activo: boolean;
    estatus?: string;
}

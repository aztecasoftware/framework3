import { CatalogInfo, CatalogItem } from '../../index';
import { PaisInfo } from './pais';
export declare class EstadoInfo extends CatalogInfo {
    pais: PaisInfo;
    nombre: string;
}
export declare class EstadoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

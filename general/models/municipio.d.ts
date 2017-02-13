import { CatalogInfo, CatalogItem } from '../../index';
import { EstadoInfo } from './estado';
export declare class MunicipioInfo extends CatalogInfo {
    estado: EstadoInfo;
    nombre: string;
}
export declare class MunicipioItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

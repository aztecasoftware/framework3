import { CatalogInfo, CatalogItem } from '../../index';
import { MunicipioInfo } from './municipio';
export declare class PoblacionInfo extends CatalogInfo {
    municipio: MunicipioInfo;
    nombre: string;
}
export declare class PoblacionItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

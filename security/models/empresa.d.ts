import { CatalogInfo, CatalogItem } from '../../index';
import { FileInfo } from '../../general/models/file';
export declare class EmpresaInfo extends CatalogInfo {
    nombre: string;
    nombreLargo: string;
    logo: FileInfo;
    calle: string;
    numExt: string;
    numInt: string;
    colonia: string;
    cp: string;
    idPoblacion: number;
    constructor();
}
export declare class EmpresaItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}

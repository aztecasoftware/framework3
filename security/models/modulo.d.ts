import { HierarchyInfo, CatalogItem } from '../../index';
export declare class ModuloInfo extends HierarchyInfo<ModuloInfo> {
    descripcion: string;
    imageFile: string;
    idModuloCategoria: number;
    constructor();
}
export declare class ModuloItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    selected: boolean;
    estatus?: string;
}

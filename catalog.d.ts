/**
*Model básico de un catálogo
*/
export declare abstract class CatalogInfo {
    identity: number;
    code: string;
    active: boolean;
    idBranch: number;
    idCompany: number;
    createDate: number;
    lastUpdate: number;
    pcUpdate: string;
    userUpdate: number;
    activateDate: number;
    deactivateDate: number;
    sessionID: string;
    constructor();
}
export interface CatalogItem {
    id: number;
    codigo: string;
    activo: boolean;
    estatus?: string;
    selected?: boolean;
    data?: any;
}

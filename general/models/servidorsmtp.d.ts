import { CatalogInfo, CatalogItem } from '../../index';
export declare class ServidorSMTPInfo extends CatalogInfo {
    nombre: string;
    hostName: string;
    port: number;
    userName: string;
    password: string;
    authMethod: string;
    loginDomain: string;
    sSL: boolean;
    closeConnection: boolean;
    constructor();
}
export declare class ServidorSMTPItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
    selected?: boolean;
}

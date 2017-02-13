/**
 * Modelo básico de un documento con workflow
 */
export declare abstract class DocumentInfo<detail> {
    identity: string;
    fecha: Date;
    idSucursal: number;
    details: detail[];
    createDate: number;
    lastUpdate: number;
    pcUpdate: string;
    userUpdate: number;
    activateDate: number;
    deactivateDate: number;
    sessionID: string;
}
export declare abstract class DocumentDetail {
    id: number;
    state: number;
}

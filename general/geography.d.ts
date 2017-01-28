import { Http } from '@angular/http';
import { Context } from '../context';
import { CatalogInfo, CatalogService } from '../entities';
export declare class PaisInfo extends CatalogInfo {
    nombre: string;
}
export declare class EstadoInfo extends CatalogInfo {
    pais: PaisInfo;
    nombre: string;
}
export declare class MunicipioInfo extends CatalogInfo {
    estado: EstadoInfo;
    nombre: string;
}
export declare class PoblacionInfo extends CatalogInfo {
    municipio: MunicipioInfo;
    nombre: string;
}
export declare class AsentamientoHumanoInfo extends CatalogInfo {
    poblacion: PoblacionInfo;
    nombre: string;
    codigoPostal: string;
    idTipoAsentamiento: number;
    tipoAsentamiento: string;
}
export declare class DomicilioInfo {
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    cruce1: string;
    cruce2: string;
    colonia: string;
    codigoPostal: string;
    poblacion: PoblacionInfo;
    asentamientoHumano: AsentamientoHumanoInfo;
}
export declare class PoblacionService extends CatalogService<PoblacionInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<PoblacionInfo>;
}

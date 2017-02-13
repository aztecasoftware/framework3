import { AsentamientoHumanoInfo } from './asentamiento-humano';
import { PoblacionInfo } from './poblacion';
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

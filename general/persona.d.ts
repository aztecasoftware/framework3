import { CatalogInfo } from '../entities';
import { DomicilioInfo } from './geography';
export declare class PersonaInfo extends CatalogInfo {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefonoCasa: string;
    telefonoOficina: string;
    celular: string;
    correo: string;
    domicilio: DomicilioInfo;
}

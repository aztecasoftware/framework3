import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from './context';
import { SearchResult, SearchRequest } from './search/index';
import { CatalogOptions } from './custom/index';
import { BaseService } from './base-service';
import { CatalogInfo } from './catalog';
/**
*Interface de servicios básicos para un catálogo
*/
export interface ICatalogService<catalog extends CatalogInfo> {
    create(): Promise<catalog>;
    getOptions(): Promise<CatalogOptions>;
    update(info: catalog): Promise<catalog>;
    getDetailByID(itemID: number): Promise<catalog>;
    getDetailByCode(idBranch: number, code: string): Promise<catalog>;
    getDetailFromCache(itemID: number): Promise<catalog>;
    clone(itemID: number): Promise<catalog>;
    delete(itemID: number): Promise<any>;
    exists(itemID: number): Promise<boolean>;
    changeStatus(itemID: Number, active: boolean): Promise<any>;
    sync(lastUpdate: Date): Promise<any>;
    search(idBranch: number, request: SearchRequest): Promise<SearchResult>;
}
/**
 * Clase base para servicios básicos de un catálogo
 */
export declare abstract class CatalogService<catalog extends CatalogInfo> extends BaseService implements ICatalogService<catalog> {
    protected http: Http;
    protected context: Context;
    protected serviceUrl: string;
    options: CatalogOptions;
    constructor(http: Http, context: Context, serviceUrl: string);
    abstract create(): Promise<catalog>;
    /**
     * Carga las opciones de configuración del catálogo
     */
    getOptions(): Promise<CatalogOptions>;
    /**
     * Envía la información al servidor
     * @param info Paquete de información que se enviará al servidor
     */
    update(info: catalog): Promise<catalog>;
    /**
     * Carga la información del ID especificado
     * @param itemID ID del elemento a cargar
     */
    getDetailByID(itemID: number): Promise<catalog>;
    /**
     * Carga la información del elemento especificado a través de su código de usuario
     * @param idBranch En caso del que el código no sea único, se buscará en la sucursal especificada
     * @param code Codigo del elemento
     */
    getDetailByCode(idBranch: number, code: string): Promise<catalog>;
    /**
     * Carga la información del elemento con ID, pero primero lo buscará en la caché del servidor
     * @param itemID ID del elemento a cargar
     */
    getDetailFromCache(itemID: number): Promise<catalog>;
    /**
     * Crea una copia del elemento con el ID especificado
     * @param itemID ID del elemento a clonar
     */
    clone(itemID: number): Promise<catalog>;
    /**
     * Crea una copia del objecto especificado
     * @param info Objeto a clonar
     */
    copy(info: catalog): catalog;
    /**
     * Elimina el elemento con el ID especificado
     * @param itemID ID del elemento a eliminar
     */
    delete(itemID: number): Promise<any>;
    /**
     * Verifica si existe un elemento con el ID especificado
     * @param itemID ID del elemento a verificar
     */
    exists(itemID: number): Promise<boolean>;
    /**
     * Cambia el estado del elemento con el ID especificado
     * @param itemID ID del elemento a cambiar
     * @param active Nuevo estatus
     */
    changeStatus(itemID: Number, active: boolean): Promise<any>;
    /**
     * Obtiene los registros que cambiaron desde la fecha especificada
     * @param lastUpdate Fecha desde la cual se obtendrán los registros modificados
     */
    sync(lastUpdate: Date): Promise<any>;
    /**
     * Realiza una búsqueda de los registros que cumplen con ciertas condiciones
     * @param idBranch ID de la sucursal donde se realizará la busqueda, algunos catálogos ignoran éste parámetro
     * @param request Condiciones de la búsqueda, orden de los resultados y parámetros de paginación
     */
    search(idBranch: number, request: SearchRequest): Promise<SearchResult>;
    protected handleError(error: any): Promise<any>;
}

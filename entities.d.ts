import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WebService } from './webapi';
import { Context } from './context';
import { SearchResult } from './search/search-result';
import { SearchRequest } from './search/search-request';
import { CatalogOptions } from './custom/custom-catalog';
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
    data?: any;
}
/**
 * Modelo básico de una estructura jerárquica
 */
export declare abstract class HierarchyInfo extends CatalogInfo {
    nombre: string;
    idPadre: number;
    orden: number;
    nivel: number;
    path: string;
    namedPath: string;
}
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
 * Interface de servicios básicos para una jerarquía
*/
export interface IHierarchyService<hierarchy extends HierarchyInfo> extends ICatalogService<hierarchy> {
    loadChildren(idCompany: number, idParent: number): Promise<hierarchy[]>;
    moveNode(idNode: number, idTargetParent: number, order: number): Promise<any>;
}
/**
 * Clase base para todos los servicios
 */
export declare abstract class BaseService {
    protected http: Http;
    protected context: Context;
    protected serviceUrl: string;
    apiService: WebService;
    constructor(http: Http, context: Context, serviceUrl: string);
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
    protected handleError(error: any): Promise<any>;
}
export declare abstract class HierarchyService<hierarchy extends HierarchyInfo> extends BaseService implements IHierarchyService<hierarchy> {
    protected http: Http;
    protected context: Context;
    protected serviceUrl: string;
    constructor(http: Http, context: Context, serviceUrl: string);
    abstract create(): Promise<hierarchy>;
    getOptions(): Promise<CatalogOptions>;
    update(info: hierarchy): Promise<hierarchy>;
    getDetailByID(itemID: number): Promise<hierarchy>;
    getDetailByCode(idBranch: number, code: string): Promise<hierarchy>;
    getDetailFromCache(itemID: number): Promise<hierarchy>;
    clone(itemID: number): Promise<hierarchy>;
    delete(itemID: number): Promise<any>;
    exists(itemID: number): Promise<boolean>;
    changeStatus(itemID: Number, active: boolean): Promise<any>;
    search(idBranch: number, request: SearchRequest): Promise<SearchResult>;
    sync(lastUpdate: Date): Promise<any>;
    loadChildren(idCompany: number, idParent: number): Promise<hierarchy[]>;
    moveNode(idNode: number, idTargetParent: number, order: number): Promise<any>;
}
export declare abstract class DocumentService {
}

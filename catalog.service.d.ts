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

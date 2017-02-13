import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { WebService } from './webapi';
import { Context } from './context';
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

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { ServidorSMTPInfo } from '../models/servidorsmtp';
export declare class ServidorSMTPService extends CatalogService<ServidorSMTPInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<ServidorSMTPInfo>;
}

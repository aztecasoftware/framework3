import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { SessionInfo } from '../session';
import { UsuarioInfo } from '../models/usuario';
export declare class UsuarioService extends CatalogService<UsuarioInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<UsuarioInfo>;
    login(userName: string, password: string, workStation: string): Promise<SessionInfo>;
}

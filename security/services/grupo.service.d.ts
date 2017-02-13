import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context, CatalogService } from '../../index';
import { UsuarioItem } from '../models/usuario';
import { GrupoInfo } from '../models/grupo';
export declare class GrupoService extends CatalogService<GrupoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<GrupoInfo>;
    getMembers(idGrupo: number): Promise<UsuarioItem[]>;
    addMembers(idGrupo: number, usuarios: UsuarioItem[]): Promise<any>;
    removeMember(idGrupo: number, idUsuario: number): Promise<any>;
}

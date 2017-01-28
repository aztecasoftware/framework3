import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from '../context';
import { CatalogInfo, CatalogItem, CatalogService } from '../entities';
import { UsuarioItem } from './usuario';
export declare class GrupoInfo extends CatalogInfo {
    nombre: string;
    constructor();
}
export declare class GrupoItem implements CatalogItem {
    id: number;
    codigo: string;
    nombre: string;
    activo: boolean;
    estatus?: string;
}
export declare class GrupoService extends CatalogService<GrupoInfo> {
    constructor(http: Http, context: Context);
    create(): Promise<GrupoInfo>;
    getMembers(idGrupo: number): Promise<UsuarioItem[]>;
}

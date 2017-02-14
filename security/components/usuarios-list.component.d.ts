import { Context } from '../../index';
import { CatalogListDialog, SearchRequest } from '../../search/index';
import { UsuarioItem } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
export declare class UsuariosListComponent extends CatalogListDialog {
    protected context: Context;
    private usuarioService;
    usuarios: UsuarioItem[];
    constructor(context: Context, usuarioService: UsuarioService);
    onSearchRequested(request: SearchRequest): void;
}

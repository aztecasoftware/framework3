import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseComponent, Context } from '../../index';
import { SearchRequest } from '../../search/index';
import { ToolbarButton } from '../../controls/index';
import { PolicyInfo } from '../models/policy';
import { UsuarioItem } from '../models/usuario';
import { GrupoService } from '../services/grupo.service';
export declare class GrupoMiembrosComponent extends BaseComponent {
    private context;
    private grupoService;
    private router;
    private route;
    private location;
    usuarios: UsuarioItem[];
    idGrupo: number;
    constructor(context: Context, grupoService: GrupoService, router: Router, route: ActivatedRoute, location: Location);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onToolbarButtonClick(button: ToolbarButton): void;
    refreshList(): void;
    onSearchRequest(request: SearchRequest): void;
    onDeleteRow(item: UsuarioItem): void;
    applyPolicy(policy: PolicyInfo): void;
    handleError(error: any): void;
}

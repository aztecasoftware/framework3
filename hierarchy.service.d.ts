import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Context } from './context';
import { CatalogService } from './catalog.service';
import { HierarchyInfo, HierarchyChanges } from './hierarchy';
/**
 * Interface de servicios básicos para una jerarquía
*/
export interface IHierarchyService<TNode extends HierarchyInfo<TNode>> {
    loadChildren(idCompany: number, idParent: number): Promise<TNode[]>;
    moveNode(idNode: number, idTargetParent: number, order: number): Promise<any>;
    loadHierarchy(idCompany: number): Promise<TNode[]>;
    saveHierarchy(changes: HierarchyChanges<TNode>): any;
}
export declare abstract class HierarchyService<TNode extends HierarchyInfo<TNode>> extends CatalogService<TNode> implements IHierarchyService<TNode> {
    protected http: Http;
    protected context: Context;
    protected serviceUrl: string;
    constructor(http: Http, context: Context, serviceUrl: string);
    loadChildren(idCompany: number, idParent: number): Promise<TNode[]>;
    moveNode(idNode: number, idTargetParent: number, order: number): Promise<any>;
    loadHierarchy(idCompany: number): Promise<TNode[]>;
    saveHierarchy(changes: HierarchyChanges<TNode>): Promise<TNode[]>;
}

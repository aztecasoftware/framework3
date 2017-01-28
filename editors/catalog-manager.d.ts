import { Context } from '../context';
import { CatalogManagerComponent } from './catalog-manager.component';
import { BaseComponent } from '../base-component';
import { PolicyInfo } from '../security/policy';
export declare abstract class CatalogManager extends BaseComponent {
    protected context: Context;
    errorMessage: string;
    pageIndex: number;
    totalRows: number;
    enabled: boolean;
    allowNew: boolean;
    allowView: boolean;
    allowEdit: boolean;
    allowDelete: boolean;
    allowClone: boolean;
    allowChangeState: boolean;
    manager: CatalogManagerComponent;
    constructor(context: Context);
    refreshList(): void;
    showAlert(message: string, type: string): void;
    handleError(error: any): void;
    applyPolicy(policy: PolicyInfo): void;
}

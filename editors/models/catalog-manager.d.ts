import { Context, BaseComponent } from '../../index';
import { CatalogManagerComponent } from '../components/catalog-manager.component';
import { PolicyInfo } from '../../security/models/policy';
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

import { HierarchyManagerComponent } from '../components/hierarchy-manager.component';
export declare class HierarchyManager {
    errorMessage: string;
    enabled: boolean;
    allowNew: boolean;
    allowEdit: boolean;
    allowDelete: boolean;
    allowCopy: boolean;
    manager: HierarchyManagerComponent;
    showAlert(message: string, type: string): void;
    handleError(error: any): void;
}

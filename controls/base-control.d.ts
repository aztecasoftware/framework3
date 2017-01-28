import { BaseComponent } from '../base-component';
import { PolicyInfo } from '../security/policy';
export declare abstract class BaseControl extends BaseComponent {
    protected isEnabled: boolean;
    protected isVisible: boolean;
    enabled: boolean;
    visible: boolean;
    applyPolicy(policy: PolicyInfo): void;
}

import { FormControlName } from '@angular/forms';
import { BaseComponent } from '../../base-component';
import { PolicyInfo } from '../../security/models/policy';
export declare abstract class BaseControl extends BaseComponent {
    protected isEnabled: boolean;
    protected isVisible: boolean;
    enabled: boolean;
    visible: boolean;
    state: FormControlName;
    ngAfterViewInit(): void;
    applyPolicy(policy: PolicyInfo): void;
}

import { QueryList } from '@angular/core';
import { PolicyInfo } from './security/models/policy';
export declare abstract class BaseComponent {
    appliedPolicies: PolicyInfo[];
    name: string;
    allowPolicies: boolean;
    children: QueryList<BaseComponent>;
    abstract applyPolicy(policy: PolicyInfo): void;
    isPolicyApplied(policyName: string): boolean;
    applyPolicies(policies: PolicyInfo[]): void;
    getErrorMessage(error: any): string;
}

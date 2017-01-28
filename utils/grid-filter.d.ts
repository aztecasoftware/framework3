export declare class GridFilter {
    defaultFilterType: number;
    filters: GridColumnFilter[];
    constructor();
    fromJSON(json: string): void;
    toJSON(): string;
}
export declare class GridColumnFilter {
    binding: string;
    type: string;
    and: boolean;
    condition1: GridFilterCondition;
    condition2: GridFilterCondition;
}
export declare class GridFilterCondition {
    operator: number;
    value: any;
}

import { GridFilter } from '../../utils/grid-filter';
export declare class SearchRequest {
    conditions: SearchCondition[];
    order: SortOrder[];
    paged: boolean;
    pageIndex: number;
    pageSize: number;
    constructor();
    SetGridConditions(gridFilter: GridFilter): void;
    private getOperator(gridOperator);
    private getValueType(value);
}
export declare class SearchCondition {
    field: string;
    operator: string;
    value: any;
    valueType: string;
}
export declare class SortOrder {
    field: string;
    direction: string;
}

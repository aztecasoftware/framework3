"use strict";
class SearchRequest {
    constructor() {
        this.paged = true;
        this.conditions = [];
        this.order = [];
        this.pageIndex = 1;
        this.pageSize = 20;
    }
    SetGridConditions(gridFilter) {
        this.conditions = [];
        gridFilter.filters.forEach(filter => {
            let condition = new SearchCondition();
            condition.field = filter.binding;
            condition.operator = this.getOperator(filter.condition1.operator);
            condition.value = filter.condition1.value;
            condition.valueType = this.getValueType(filter.condition1.value);
            this.conditions.push(condition);
        });
    }
    getOperator(gridOperator) {
        switch (gridOperator) {
            case 0:
                return "=";
            case 1:
                return "<>";
            case 2:
                return ">";
            case 3:
                return ">=";
            case 4:
                return "<";
            case 5:
                return "<=";
            case 6:
                return "STARTS";
            case 7:
                return "ENDS";
            case 8:
                return "CONTAINS";
            case 9:
                return "NOTCONTAINS";
        }
    }
    getValueType(value) {
        if (typeof value === "number")
            return "decimal";
        else if (typeof value === "boolean")
            return "boolean";
        else if (typeof value === "Date")
            return "datetime";
        else
            return "string";
    }
}
exports.SearchRequest = SearchRequest;
class SearchCondition {
}
exports.SearchCondition = SearchCondition;
class SortOrder {
}
exports.SortOrder = SortOrder;

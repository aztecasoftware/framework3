"use strict";
var SearchRequest = (function () {
    function SearchRequest() {
        this.paged = true;
        this.conditions = [];
        this.order = [];
        this.pageIndex = 1;
        this.pageSize = 1;
    }
    SearchRequest.prototype.SetGridConditions = function (gridFilter) {
        var _this = this;
        this.conditions = [];
        gridFilter.filters.forEach(function (filter) {
            var condition = new SearchCondition();
            condition.field = filter.binding;
            condition.operator = _this.getOperator(filter.condition1.operator);
            condition.value = filter.condition1.value;
            condition.valueType = _this.getValueType(filter.condition1.value);
            _this.conditions.push(condition);
        });
    };
    SearchRequest.prototype.getOperator = function (gridOperator) {
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
    };
    SearchRequest.prototype.getValueType = function (value) {
        if (typeof value === "number")
            return "decimal";
        else if (typeof value === "boolean")
            return "boolean";
        else if (typeof value === "Date")
            return "datetime";
        else
            return "string";
    };
    return SearchRequest;
}());
exports.SearchRequest = SearchRequest;
var SearchCondition = (function () {
    function SearchCondition() {
    }
    return SearchCondition;
}());
exports.SearchCondition = SearchCondition;
var SortOrder = (function () {
    function SortOrder() {
    }
    return SortOrder;
}());
exports.SortOrder = SortOrder;

//# sourceMappingURL=search-request.js.map

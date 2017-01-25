"use strict";
var GridFilter = (function () {
    function GridFilter() {
        this.defaultFilterType = 3;
        this.filters = [];
    }
    GridFilter.prototype.fromJSON = function (json) {
        var jsonFilter = JSON.parse(json);
        this.defaultFilterType = jsonFilter.defaultFilterType;
        this.filters = jsonFilter.filters;
    };
    GridFilter.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return GridFilter;
}());
exports.GridFilter = GridFilter;
var GridColumnFilter = (function () {
    function GridColumnFilter() {
    }
    return GridColumnFilter;
}());
exports.GridColumnFilter = GridColumnFilter;
var GridFilterCondition = (function () {
    function GridFilterCondition() {
    }
    return GridFilterCondition;
}());
exports.GridFilterCondition = GridFilterCondition;

//# sourceMappingURL=grid-filter.js.map

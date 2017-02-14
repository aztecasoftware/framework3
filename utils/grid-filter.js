"use strict";
class GridFilter {
    constructor() {
        this.defaultFilterType = 3;
        this.filters = [];
    }
    fromJSON(json) {
        let jsonFilter = JSON.parse(json);
        this.defaultFilterType = jsonFilter.defaultFilterType;
        this.filters = jsonFilter.filters;
    }
    toJSON() {
        return JSON.stringify(this);
    }
}
exports.GridFilter = GridFilter;
class GridColumnFilter {
}
exports.GridColumnFilter = GridColumnFilter;
class GridFilterCondition {
}
exports.GridFilterCondition = GridFilterCondition;

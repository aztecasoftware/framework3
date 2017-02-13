"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
//
let GridButtonCell = class GridButtonCell {
    constructor() {
        //
        this.click = new core_1.EventEmitter();
    }
    onClick(row) {
        this.click.next(row);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], GridButtonCell.prototype, "cell", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], GridButtonCell.prototype, "icon", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], GridButtonCell.prototype, "click", void 0);
GridButtonCell = __decorate([
    core_1.Component({
        selector: 'grid-button-cell',
        templateUrl: './grid-button-cell.html'
    }), 
    __metadata('design:paramtypes', [])
], GridButtonCell);
exports.GridButtonCell = GridButtonCell;
//# sourceMappingURL=grid-button-cell.js.map
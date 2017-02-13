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
let AzPagerComponent = class AzPagerComponent {
    constructor() {
        this.moveToFirst = new core_1.EventEmitter();
        this.moveToLast = new core_1.EventEmitter();
        this.moveToNext = new core_1.EventEmitter();
        this.moveToPrevious = new core_1.EventEmitter();
        this.moveToPage = new core_1.EventEmitter();
    }
    get pageCount() {
        return Math.ceil(this.totalRows / this.pageSize);
    }
    moveFirst() {
        this.moveToFirst.next();
        this.moveToPage.next(0);
    }
    movePrevious() {
        this.moveToPrevious.next();
        this.moveToPage.next(this.pageIndex - 1);
    }
    moveNext() {
        this.moveToNext.next();
        this.moveToPage.next(this.pageIndex + 1);
    }
    moveLast() {
        this.moveToLast.next();
        this.moveToPage.next(this.pageCount);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], AzPagerComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], AzPagerComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], AzPagerComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToFirst", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToLast", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToNext", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToPrevious", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToPage", void 0);
AzPagerComponent = __decorate([
    core_1.Component({
        selector: 'az-pager',
        templateUrl: './az-pager.component.html'
    }), 
    __metadata('design:paramtypes', [])
], AzPagerComponent);
exports.AzPagerComponent = AzPagerComponent;
//# sourceMappingURL=az-pager.component.js.map
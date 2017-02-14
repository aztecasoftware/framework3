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
const core_1 = require("@angular/core");
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
    __metadata("design:type", Number)
], AzPagerComponent.prototype, "pageIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AzPagerComponent.prototype, "totalRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AzPagerComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToFirst", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToLast", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToPrevious", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AzPagerComponent.prototype, "moveToPage", void 0);
AzPagerComponent = __decorate([
    core_1.Component({
        selector: 'az-pager',
        template: `
      <div class="btn-group">
          <button type="button" class="btn btn-default"
                  (click)="moveFirst()"
                  [disabled]="pageIndex <= 0">
              <span class="glyphicon glyphicon-fast-backward"></span>
          </button>
          <button type="button" class="btn btn-default"
                  (click)="movePrevious()"
                  [disabled]="pageIndex <= 0">
              <span class="glyphicon glyphicon-step-backward"></span>
          </button>
          <button type="button" class="btn btn-default" disabled style="width:100px">
              {{pageIndex + 1}} de {{pageCount}}
          </button>
          <button type="button" class="btn btn-default"
                  (click)="moveNext()"
                  [disabled]="pageIndex >= pageCount -1">
              <span class="glyphicon glyphicon-step-forward"></span>
          </button>
          <button type="button" class="btn btn-default"
                  (click)="moveLast()"
                  [disabled]="pageIndex >= pageCount -1">
              <span class="glyphicon glyphicon-fast-forward"></span>
          </button>
      </div>
    `
    })
], AzPagerComponent);
exports.AzPagerComponent = AzPagerComponent;

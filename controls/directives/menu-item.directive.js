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
let MenuItemDirective = class MenuItemDirective {
    constructor() {
        this.enabled = true;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuItemDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuItemDirective.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuItemDirective.prototype, "text", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MenuItemDirective.prototype, "smallText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MenuItemDirective.prototype, "enabled", void 0);
MenuItemDirective = __decorate([
    core_1.Directive({
        selector: 'azteca-menu-item'
    })
], MenuItemDirective);
exports.MenuItemDirective = MenuItemDirective;

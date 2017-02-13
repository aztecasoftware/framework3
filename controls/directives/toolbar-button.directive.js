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
let ToolbarButtonDirective = class ToolbarButtonDirective {
    constructor() {
        this.icon = '';
        this.enabled = true;
        this.type = 'default';
    }
    get buttonClass() {
        if (this.type) {
            return 'btn btn-' + this.type;
        }
        else {
            return 'btn btn-default';
        }
    }
    ngOnChanges(changes) {
        if (changes['enabled']) {
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ToolbarButtonDirective.prototype, "name", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ToolbarButtonDirective.prototype, "text", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ToolbarButtonDirective.prototype, "icon", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], ToolbarButtonDirective.prototype, "enabled", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ToolbarButtonDirective.prototype, "type", void 0);
ToolbarButtonDirective = __decorate([
    core_1.Directive({
        selector: 'az-toolbar-button'
    }), 
    __metadata('design:paramtypes', [])
], ToolbarButtonDirective);
exports.ToolbarButtonDirective = ToolbarButtonDirective;
//# sourceMappingURL=toolbar-button.directive.js.map
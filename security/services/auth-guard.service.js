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
const router_1 = require("@angular/router");
//
const index_1 = require("../../index");
let AuthGuard = class AuthGuard {
    constructor(context, router) {
        this.context = context;
        this.router = router;
    }
    canActivate(route, state) {
        let url = state.url;
        return this.checkLogin(url);
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
    checkLogin(url) {
        if (this.context.session && this.context.app.defaultSite) {
            return true;
        }
        this.context.redirectUrl = url;
        if (this.context.session)
            this.router.navigate(['/select-company']);
        else
            this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.Context, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;

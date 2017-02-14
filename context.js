"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let Context = class Context {
    constructor() {
        this._session = null;
        this._application = new Application();
    }
    get app() {
        return this._application;
    }
    get session() {
        if (this._session != null) {
            return this._session;
        }
        else {
            let storedSession = sessionStorage.getItem('session');
            if (storedSession != null) {
                this._session = JSON.parse(storedSession);
                return this._session;
            }
            else {
                return null;
            }
        }
    }
    get kernelImagesPath() {
        return "img/kernel/";
    }
    get fileServerPath() {
        return 'file-server/';
    }
    setSession(session) {
        this._session = session;
        sessionStorage.setItem('session', JSON.stringify(session));
    }
    clearSession(session) {
        this._session = null;
        sessionStorage.removeItem('session');
    }
};
Context = __decorate([
    core_1.Injectable()
], Context);
exports.Context = Context;
class Application {
    constructor() {
        this._defaultCompany = null;
        this._defaultSite = null;
        this._isLoading = false;
    }
    get isLoading() {
        return this._isLoading;
    }
    get defaultCompany() {
        if (this._defaultCompany != null) {
            return this._defaultCompany;
        }
        else {
            let storedCompany = sessionStorage.getItem('defaultCompany');
            if (storedCompany != null) {
                this._defaultCompany = JSON.parse(storedCompany);
                return this._defaultCompany;
            }
            else {
                return null;
            }
        }
    }
    get defaultSite() {
        if (this._defaultSite != null) {
            return this._defaultSite;
        }
        else {
            let storedSite = sessionStorage.getItem('defaultSite');
            if (storedSite != null) {
                this._defaultSite = JSON.parse(storedSite);
                return this._defaultSite;
            }
            else {
                return null;
            }
        }
    }
    showSpinner() {
        this._isLoading = true;
    }
    hideSpinner() {
        this._isLoading = false;
    }
    setDefaultCompany(company) {
        this._defaultCompany = company;
        sessionStorage.setItem('defaultCompany', JSON.stringify(company));
    }
    setDefaultSite(site) {
        this._defaultSite = site;
        sessionStorage.setItem('defaultSite', JSON.stringify(site));
    }
    get defaultWidth() {
        return "col-xs-12 col-md-10 col-lg-10";
    }
}
exports.Application = Application;

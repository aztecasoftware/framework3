"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Context = (function () {
    function Context() {
        this._session = null;
        this._application = new Application();
    }
    Object.defineProperty(Context.prototype, "app", {
        get: function () {
            return this._application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "session", {
        get: function () {
            if (this._session != null) {
                return this._session;
            }
            else {
                var storedSession = sessionStorage.getItem('session');
                if (storedSession != null) {
                    this._session = JSON.parse(storedSession);
                    return this._session;
                }
                else {
                    return null;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "kernelImagesPath", {
        get: function () {
            return "img/kernel/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "fileServerPath", {
        get: function () {
            return 'file-server/';
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.setSession = function (session) {
        this._session = session;
        sessionStorage.setItem('session', JSON.stringify(session));
    };
    Context.prototype.clearSession = function (session) {
        this._session = null;
        sessionStorage.removeItem('session');
    };
    return Context;
}());
Context = __decorate([
    core_1.Injectable()
], Context);
exports.Context = Context;
var Application = (function () {
    function Application() {
        this._defaultCompany = null;
        this._defaultSite = null;
        this._isLoading = false;
    }
    Object.defineProperty(Application.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "defaultCompany", {
        get: function () {
            if (this._defaultCompany != null) {
                return this._defaultCompany;
            }
            else {
                var storedCompany = sessionStorage.getItem('defaultCompany');
                if (storedCompany != null) {
                    this._defaultCompany = JSON.parse(storedCompany);
                    return this._defaultCompany;
                }
                else {
                    return null;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "defaultSite", {
        get: function () {
            if (this._defaultSite != null) {
                return this._defaultSite;
            }
            else {
                var storedSite = sessionStorage.getItem('defaultSite');
                if (storedSite != null) {
                    this._defaultSite = JSON.parse(storedSite);
                    return this._defaultSite;
                }
                else {
                    return null;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.showSpinner = function () {
        this._isLoading = true;
    };
    Application.prototype.hideSpinner = function () {
        this._isLoading = false;
    };
    Application.prototype.setDefaultCompany = function (company) {
        this._defaultCompany = company;
        sessionStorage.setItem('defaultCompany', JSON.stringify(company));
    };
    Application.prototype.setDefaultSite = function (site) {
        this._defaultSite = site;
        sessionStorage.setItem('defaultSite', JSON.stringify(site));
    };
    Object.defineProperty(Application.prototype, "defaultWidth", {
        get: function () {
            return "col-xs-12 col-md-10 col-lg-10";
        },
        enumerable: true,
        configurable: true
    });
    return Application;
}());
exports.Application = Application;

//# sourceMappingURL=context.js.map

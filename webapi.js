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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WebService = (function () {
    function WebService(http, url, sessionID) {
        this.http = http;
        this.url = url;
        this.sessionID = sessionID;
        this._sessionHeaderTag = 'Azteca-sessionID';
    }
    WebService.prototype.query = function (params) {
        return this.http.get(this.url, { search: params });
    };
    WebService.prototype.getData = function (action, params) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.sessionID !== undefined)
            headers.append(this._sessionHeaderTag, this.sessionID);
        var options = new http_1.RequestOptions({ search: params, headers: headers });
        return this.http.get(this.url + '/' + action, options);
    };
    WebService.prototype.postData = function (action, params, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.sessionID !== undefined)
            headers.append(this._sessionHeaderTag, this.sessionID);
        var options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.post(this.url + '/' + action, JSON.stringify(body), options);
    };
    WebService.prototype.delete = function (action, params) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.sessionID !== undefined)
            headers.append(this._sessionHeaderTag, this.sessionID);
        var options = new http_1.RequestOptions({ search: params, headers: headers });
        return this.http.delete(this.url + '/' + action, options);
    };
    return WebService;
}());
WebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, String, String])
], WebService);
exports.WebService = WebService;

//# sourceMappingURL=webapi.js.map

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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
const context_1 = require("./context");
let WebService = class WebService {
    constructor(http, url, context) {
        this.http = http;
        this.url = url;
        this.context = context;
        this._sessionHeaderTag = 'Azteca-sessionID';
    }
    query(params) {
        return this.http.get(this.url, { search: params });
    }
    getData(action, params) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.context.session)
            headers.append(this._sessionHeaderTag, this.context.session.sessionID);
        let options = new http_1.RequestOptions({ search: params, headers: headers });
        return this.http.get(this.url + '/' + action, options);
    }
    postData(action, params, body) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.context.session)
            headers.append(this._sessionHeaderTag, this.context.session.sessionID);
        let options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.post(this.url + '/' + action, JSON.stringify(body), options);
    }
    putData(action, params, body) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.context.session)
            headers.append(this._sessionHeaderTag, this.context.session.sessionID);
        let options = new http_1.RequestOptions({ headers: headers, search: params });
        return this.http.put(this.url + '/' + action, JSON.stringify(body), options);
    }
    delete(action, params) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        if (this.context.session)
            headers.append(this._sessionHeaderTag, this.context.session.sessionID);
        let options = new http_1.RequestOptions({ search: params, headers: headers });
        return this.http.delete(this.url + '/' + action, options);
    }
};
WebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, String, context_1.Context])
], WebService);
exports.WebService = WebService;

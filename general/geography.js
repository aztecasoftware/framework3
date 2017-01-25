"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var context_1 = require("../context");
var entities_1 = require("../entities");
///////////////////// MODELS //////////////////////////////////////////////////
var PaisInfo = (function (_super) {
    __extends(PaisInfo, _super);
    function PaisInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaisInfo;
}(entities_1.CatalogInfo));
exports.PaisInfo = PaisInfo;
var EstadoInfo = (function (_super) {
    __extends(EstadoInfo, _super);
    function EstadoInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EstadoInfo;
}(entities_1.CatalogInfo));
exports.EstadoInfo = EstadoInfo;
var MunicipioInfo = (function (_super) {
    __extends(MunicipioInfo, _super);
    function MunicipioInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MunicipioInfo;
}(entities_1.CatalogInfo));
exports.MunicipioInfo = MunicipioInfo;
var PoblacionInfo = (function (_super) {
    __extends(PoblacionInfo, _super);
    function PoblacionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoblacionInfo;
}(entities_1.CatalogInfo));
exports.PoblacionInfo = PoblacionInfo;
var AsentamientoHumanoInfo = (function (_super) {
    __extends(AsentamientoHumanoInfo, _super);
    function AsentamientoHumanoInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AsentamientoHumanoInfo;
}(entities_1.CatalogInfo));
exports.AsentamientoHumanoInfo = AsentamientoHumanoInfo;
var DomicilioInfo = (function () {
    function DomicilioInfo() {
    }
    return DomicilioInfo;
}());
exports.DomicilioInfo = DomicilioInfo;
///////////////////// SERVICES //////////////////////////////////////////////////
var PoblacionService = (function (_super) {
    __extends(PoblacionService, _super);
    function PoblacionService(http, context) {
        return _super.call(this, http, context, "api/kernel/general/poblaciones") || this;
    }
    PoblacionService.prototype.create = function () {
        return Promise.resolve(new PoblacionInfo());
    };
    return PoblacionService;
}(entities_1.CatalogService));
PoblacionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, context_1.Context])
], PoblacionService);
exports.PoblacionService = PoblacionService;

//# sourceMappingURL=geography.js.map

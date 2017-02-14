"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/////////////////// MODELS ///////////////////////////////
__export(require("./models/file"));
__export(require("./models/pais"));
__export(require("./models/estado"));
__export(require("./models/municipio"));
__export(require("./models/poblacion"));
__export(require("./models/asentamiento-humano"));
__export(require("./models/domicilio"));
__export(require("./models/persona"));
/////////////////// SERVICES ///////////////////////////////
/*
export * from './services/pais.service';
export * from './services/estado.service';
export * from './services/municipio.service';
*/
__export(require("./services/poblacion.service"));
/*
export * from './services/asentamiento-humano.service';
export * from './services/domicilio.service';
export * from './services/persona.service';
*/
/////////////////// COMPONENTS ///////////////////////////////
__export(require("./components/poblacion-selector.component"));

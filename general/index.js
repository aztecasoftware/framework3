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
__export(require("./models/servidorsmtp"));
//export * from './models/asentamiento-humano';
__export(require("./models/asentamientohumano"));
__export(require("./models/domicilio"));
__export(require("./models/persona"));
__export(require("./models/tipoasentamiento"));
/////////////////// SERVICES ///////////////////////////////
/*
export * from './services/pais.service';
export * from './services/estado.service';
export * from './services/municipio.service';
*/
__export(require("./services/poblacion.service"));
__export(require("./services/asentamientohumano.service"));
__export(require("./services/tipoasentamiento.service"));
__export(require("./services/servidorsmtp.service"));
/*
export * from './services/asentamiento-humano.service';
export * from './services/domicilio.service';
export * from './services/persona.service';
*/
/////////////////// COMPONENTS ///////////////////////////////
__export(require("./components/poblacion-selector.component"));
__export(require("./components/persona.component"));
__export(require("./components/servidoressmtp.editor"));
__export(require("./components/servidoressmtp.manager"));
__export(require("./components/asentamientoshumanos.editor"));
__export(require("./components/asentamientoshumanos.manager"));
__export(require("./components/tiposasentamiento.editor"));
__export(require("./components/tiposasentamiento.manager"));

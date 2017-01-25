"use strict";
var AztecaValiators = (function () {
    function AztecaValiators() {
    }
    AztecaValiators.selected = function (c) {
        if (c.value > 0)
            return null;
        else
            return { error: "Valor no seleccionado" };
    };
    AztecaValiators.validFile = function (c) {
        if (c.value && (c.value.Content != undefined || c.value.FileUri != ''))
            return null;
        else
            return { error: "Archivo no seleccionado" };
    };
    return AztecaValiators;
}());
exports.AztecaValiators = AztecaValiators;

//# sourceMappingURL=validators.js.map

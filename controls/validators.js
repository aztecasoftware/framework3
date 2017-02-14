"use strict";
class AztecaValiators {
    static selected(c) {
        if (c.value > 0)
            return null;
        else
            return { error: "Valor no seleccionado" };
    }
    static validFile(c) {
        if (c.value && (c.value.Content != undefined || c.value.FileUri != ''))
            return null;
        else
            return { error: "Archivo no seleccionado" };
    }
}
exports.AztecaValiators = AztecaValiators;

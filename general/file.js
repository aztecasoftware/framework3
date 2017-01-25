"use strict";
var FileInfo = (function () {
    function FileInfo() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.owner = '';
        this.originalFileName = '';
        this.extension = '';
        this.content = null;
        this.fileUri = '';
        this.contentType = '';
    }
    return FileInfo;
}());
exports.FileInfo = FileInfo;
var FileType = (function () {
    function FileType() {
    }
    return FileType;
}());
FileType.IMAGE = "image";
FileType.PDF = "pdf";
FileType.EXCEL = "excel";
FileType.XML = "xml";
FileType.BINARY = "binary";
FileType.TEXT = "text";
FileType.GENERIC = "generic";
exports.FileType = FileType;

//# sourceMappingURL=file.js.map

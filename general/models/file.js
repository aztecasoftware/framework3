"use strict";
class FileInfo {
    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.owner = '';
        this.originalFileName = '';
        this.extension = '';
        this.content = null;
        this.fileUri = '';
        this.contentType = '';
    }
}
exports.FileInfo = FileInfo;
class FileType {
}
FileType.IMAGE = "image";
FileType.PDF = "pdf";
FileType.EXCEL = "excel";
FileType.XML = "xml";
FileType.BINARY = "binary";
FileType.TEXT = "text";
FileType.GENERIC = "generic";
exports.FileType = FileType;

export declare class FileInfo {
    id: string;
    owner: string;
    contentType: string;
    originalFileName: string;
    extension: string;
    content: string;
    fileUri: string;
    filePath: string;
    constructor();
}
export declare class FileType {
    static readonly IMAGE: string;
    static readonly PDF: string;
    static readonly EXCEL: string;
    static readonly XML: string;
    static readonly BINARY: string;
    static readonly TEXT: string;
    static readonly GENERIC: string;
}

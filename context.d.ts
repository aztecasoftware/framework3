import { SessionInfo } from './security/session';
import { EmpresaInfo } from './security/models/empresa';
import { SucursalInfo } from './security/models/sucursal';
export declare class Context {
    private _session;
    private _application;
    readonly app: Application;
    readonly session: SessionInfo;
    readonly kernelImagesPath: string;
    readonly fileServerPath: string;
    setSession(session: SessionInfo): void;
    clearSession(session: SessionInfo): void;
}
export declare class Application {
    private _defaultCompany;
    private _defaultSite;
    private _isLoading;
    readonly isLoading: boolean;
    readonly defaultCompany: EmpresaInfo;
    readonly defaultSite: SucursalInfo;
    showSpinner(): void;
    hideSpinner(): void;
    setDefaultCompany(company: EmpresaInfo): void;
    setDefaultSite(site: SucursalInfo): void;
    readonly defaultWidth: string;
}

import { UsuarioInfo } from './models/usuario';
export declare class SessionInfo {
    sessionID: string;
    user: UsuarioInfo;
    workStation: string;
    businessDate: Date;
    loginDate: Date;
    timezoneOffset: number;
    constructor();
}
export interface ISession {
    sessionID: string;
    user: UsuarioInfo;
    workStation: string;
    businessDate: Date;
    loginDate: Date;
    timezoneOffset: number;
}

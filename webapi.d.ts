import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
export declare class WebService {
    private http;
    url: string;
    private sessionID;
    private _sessionHeaderTag;
    constructor(http: Http, url: string, sessionID?: string);
    query(params: URLSearchParams): Observable<Response>;
    getData(action: string, params: URLSearchParams): Observable<Response>;
    postData(action: string, params: URLSearchParams, body: any): Observable<Response>;
    putData(action: string, params: URLSearchParams, body: any): Observable<Response>;
    delete(action: string, params: URLSearchParams): Observable<Response>;
}

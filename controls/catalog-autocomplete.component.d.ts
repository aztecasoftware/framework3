import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AutoComplete } from 'wijmo/wijmo.input';
import { Context } from '../context';
import { WebService } from '../webapi';
export declare class CatalogAutocompleteComponent {
    protected http: Http;
    private context;
    apiService: WebService;
    autocomplete: AutoComplete;
    serviceUrl: string;
    parameters: URLSearchParams;
    maxItems: number;
    displayMember: string;
    constructor(http: Http, context: Context);
    ngOnInit(): void;
}

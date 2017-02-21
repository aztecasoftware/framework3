import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IEditor } from '../models/editor';
export declare class EditorDeactivateGuard implements CanDeactivate<IEditor> {
    canDeactivate(component: IEditor, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean;
}

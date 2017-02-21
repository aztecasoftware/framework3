import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Context } from '../../index';
export declare class AuthGuard implements CanActivate, CanActivateChild {
    private context;
    private router;
    constructor(context: Context, router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    checkLogin(url: string): boolean;
}

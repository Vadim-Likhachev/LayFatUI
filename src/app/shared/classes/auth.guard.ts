import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard  implements CanActivate, CanActivateChild {

    constructor(
        private _authService: AuthService,
        private _router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this._authService.isAuthenticated()) {
            return of(true)
        } else {
            this._router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            })

            return of(false)
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return  this.canActivate(childRoute, state)
    }
}
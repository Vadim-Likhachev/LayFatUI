import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptors implements HttpInterceptor {
    constructor(private _authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
        if (this._authService.isAuthenticated()) {
          req = req.clone({
            setHeaders: {
                Authorization: this._authService.getToken()}
          })  
        }

        return next.handle(req)
    }
}
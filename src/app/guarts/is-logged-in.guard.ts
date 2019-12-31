import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {OathService} from '../services/oath.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
    constructor(
        private oathService: OathService,
        private router: Router
    ) {}
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // TODO get real access token and so on
        console.log('TOKEN: ', this.oathService.getUserAccessToken());
        if (this.oathService.getUserAccessToken()) {
            return this.router.navigate(['main']);
        }
        return true;
  }
}

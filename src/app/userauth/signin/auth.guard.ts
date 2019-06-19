import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateService  } from '../authenticate.service';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if ( this.authService.isAuth()) {
return true;
} else {
this.router.navigate(['/auth']);
}


  }




}

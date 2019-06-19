import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateService  } from '../authenticate.service';



@Injectable()
export class Profileguard implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if ( this.authService.isAuth()) {

this.router.navigate(['/farmerpagedashboard']);

} else {
return true;
}


  }




}

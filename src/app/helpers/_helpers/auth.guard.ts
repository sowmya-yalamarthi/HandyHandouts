import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GeneralserviceService } from 'src/app/services/generalservice.service';



@Injectable()
export class AuthGuard implements CanActivate { 
  
  constructor(
      private router:Router,
      private authenticationService: GeneralserviceService
      ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.currentUser;
   if (currentUser) {
     
     return true;
   }
   this.router.navigate(['']);
   return false;
    
  }
  
}

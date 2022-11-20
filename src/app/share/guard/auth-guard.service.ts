import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{
  
  

  constructor(private authService:AuthService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // console.log(state.url);
    if(this.authService.islogin){
    return true
   }
   this.authService.perivousUrl =state.url;
   this.router.navigate(['home'])
   return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |  Observable<boolean > | Promise<boolean > {
   return this.canActivate(childRoute,state)
  }
 
}

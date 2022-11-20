import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  perivousUrl:any;
  private _islogin:boolean|undefined;
  constructor(private router:Router) {}
  toogle() {
    this._islogin = !this._islogin;
    if(this.islogin && this.perivousUrl){
      this.router.navigateByUrl(this.perivousUrl)
      this.perivousUrl = null;
    }
    
  }
  
  get islogin() {
    return this._islogin;
  }
}

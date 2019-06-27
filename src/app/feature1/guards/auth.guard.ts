import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    console.log('auth guards');
    const userName = localStorage.getItem('username')
    if (userName) {
      return true;
    }
    this.router.navigate(['/page1']);
  }
}

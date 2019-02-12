import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("inputName", next.queryParams.username);

    const canActivate = next.queryParams.username === 'allen';
    if (!canActivate) {
      alert("you are not allow into");
    }
    return canActivate;
  }

}

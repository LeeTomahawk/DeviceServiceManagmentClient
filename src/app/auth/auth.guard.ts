import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.getToken()) {
      const routeRoles = route.data['roles'] as string[];

      if (routeRoles) {
        const userRoles = this.authService.getRole() as string;

        if (userRoles) {
          const hasUserAccess = routeRoles.some((routeRole) =>
            userRoles.includes(routeRole)
          );

          if (hasUserAccess) {
            return true;
          } else {
            this.router.navigate(['/forbidden']);
            return false;
          }
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}

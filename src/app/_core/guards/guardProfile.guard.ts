import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ShareCourseService } from '@services/share-course.service';

@Injectable({ providedIn: 'root' })
export class ProfileGuard implements CanActivate {
  constructor(private shareCourseService: ShareCourseService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = this.shareCourseService.getUserLogin.value;
    if (result) {
      return true;
    }

    this.router.navigateByUrl("/");
    return false;
  }

}
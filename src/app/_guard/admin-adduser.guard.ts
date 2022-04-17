import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddUserComponent } from '../pages/admin-template/users/add-user/add-user.component';

@Injectable({
  providedIn: 'root',
})
export class AdminAdduserGuard implements CanDeactivate<AddUserComponent> {
  canDeactivate(component: AddUserComponent) {
    return (
      component.canDiactivateAddUser() ||
      window.confirm('Bạn có chắc muốn rời khỏi trang này?')
    );
  }
}

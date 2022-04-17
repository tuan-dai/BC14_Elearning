import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAdduserGuard } from 'src/app/_guard/admin-adduser.guard';
import { AddUserComponent } from './add-user.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent,
    canDeactivate: [AdminAdduserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserRoutingModule {}

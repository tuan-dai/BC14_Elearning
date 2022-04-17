import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'user-manager',
        loadChildren: () =>
          import('./user-manager/user-manager.module').then(
            (m) => m.UserManagerModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-manager',
      },
      {
        path: 'add-user',
        loadChildren: () =>
          import('./add-user/add-user.module').then((m) => m.AddUserModule),
      },
      {
        path: 'edit-user/:id',
        loadChildren: () =>
          import('./edit-user/edit-user.module').then((m) => m.EditUserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

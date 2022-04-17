import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRoutingModule } from './user-manager-routing.module';
import { UserManagerComponent } from './user-manager.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserManagerComponent],
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class UserManagerModule {}

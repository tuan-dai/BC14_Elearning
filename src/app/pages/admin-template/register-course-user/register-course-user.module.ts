import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCourseUserRoutingModule } from './register-course-user-routing.module';
import { RegisterCourseUserComponent } from './register-course-user.component';
import { PendingComponent } from './pending/pending.component';
import { RegisteredComponent } from './registered/registered.component';
import { UnregisterComponent } from './unregister/unregister.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    RegisterCourseUserComponent,
    PendingComponent,
    RegisteredComponent,
    UnregisterComponent,
  ],
  imports: [CommonModule, RegisterCourseUserRoutingModule, NgxPaginationModule],
})
export class RegisterCourseUserModule {}

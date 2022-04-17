import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterUserCourseRoutingModule } from './register-user-course-routing.module';
import { RegisterUserCourseComponent } from './register-user-course.component';
import { UnregisterComponent } from './unregister/unregister.component';
import { RegisteredComponent } from './registered/registered.component';
import { PendingComponent } from './pending/pending.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    RegisterUserCourseComponent,
    UnregisterComponent,
    RegisteredComponent,
    PendingComponent,
  ],
  imports: [CommonModule, RegisterUserCourseRoutingModule, NgxPaginationModule],
})
export class RegisterUserCourseModule {}

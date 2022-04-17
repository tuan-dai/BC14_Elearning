import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';
import { NavbarAdminComponent } from './_components/navbar-admin/navbar-admin.component';
import { MaterialModule } from 'src/app/_core/material/material.module';

@NgModule({
  declarations: [AdminTemplateComponent, NavbarAdminComponent],
  imports: [CommonModule, AdminTemplateRoutingModule, MaterialModule],
})
export class AdminTemplateModule { }

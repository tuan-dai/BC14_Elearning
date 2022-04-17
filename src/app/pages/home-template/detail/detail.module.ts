import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DirectivesModule } from 'src/app/_core/shared/directives/directives.module';
import { MaterialModule } from 'src/app/_core/shared/material/material.module';
import { HomeComponentModule } from '../_components/home-component.module';
import { PipeModule } from 'src/app/_core/shared/pipe/pipe.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    DirectivesModule,
    MaterialModule,
    HomeComponentModule,
    PipeModule
  ]
})
export class DetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTemplateRoutingModule } from './home-template-routing.module';
import { HomeTemplateComponent } from './home-template.component';
import { NavbarHomeComponent } from './_components/navbar-home/navbar-home.component';
import { FooterHomeComponent } from './_components/footer-home/footer-home.component';
import { MaterialModule } from 'src/app/_core/shared/material/material.module';
import { PipeModule } from 'src/app/_core/shared/pipe/pipe.module';
import { DirectivesModule } from 'src/app/_core/shared/directives/directives.module';
import { HomeComponentModule } from './_components/home-component.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeTemplateComponent,
    FooterHomeComponent,
    NavbarHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeTemplateRoutingModule,
    MaterialModule,
    PipeModule,
    DirectivesModule,
    HomeComponentModule,
    FormsModule,
    HomeComponentModule
  ]
})
export class HomeTemplateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { HomeComponentModule } from '../_components/home-component.module';



@NgModule({
  declarations: [
    SearchPageComponent,

  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    HomeComponentModule
  ]
})
export class SearchPageModule { }

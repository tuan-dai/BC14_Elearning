import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule { }

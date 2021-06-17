import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartComponent } from './chart/chart.component';
import { OrderTotalsComponent } from './tables/order-totals/order-totals.component';
import { IncompleteOrdersComponent } from './tables/incomplete-orders/incomplete-orders.component';
import { LatestOrdersComponent } from './tables/latest-orders/latest-orders.component';
import { PopularSearchKeywordsComponent } from './tables/popular-search-keywords/popular-search-keywords.component';
import { BestsellersComponent } from './tables/bestsellers/bestsellers.component';

export function loadEcharts() {
  return import('echarts');
}

@NgModule({
  declarations: [
    DashboardComponent,
    NewsComponent,
    StatisticsComponent,
    ChartComponent,
    OrderTotalsComponent,
    IncompleteOrdersComponent,
    LatestOrdersComponent,
    PopularSearchKeywordsComponent,
    BestsellersComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgxEchartsModule.forRoot({
      echarts: loadEcharts
    }),
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

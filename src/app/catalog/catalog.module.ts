import { BackendServiceService } from './../services/backend-service.service';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProductTableComponent } from './product-table/product-table.component';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SearchFormComponent,
    ProductTableComponent
  ],
  providers: [
    BackendServiceService
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class CatalogModule { }

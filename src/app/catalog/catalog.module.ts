import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchFormComponent } from './search-form/search-form.component';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule
  ],
  exports: [
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class CatalogModule { }

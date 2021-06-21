import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  formatterChange = formatter;

  @ViewChildren(ProductDetailComponent) productItem!: QueryList<ProductDetailComponent>

  constructor(private backendService: BackendServiceService) { }

  ngOnInit(): void { }

  displayedColumns: string[] = ['checkbox', 'picture', 'pName', 'sku', 'price', 'quantity', 'published', 'edit'];
  dataSource = new MatTableDataSource(this.backendService.getProducts());

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

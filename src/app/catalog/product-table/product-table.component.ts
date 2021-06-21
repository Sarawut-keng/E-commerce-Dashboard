import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/services/backend-service.service';
import { productData } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products!: productData[];

  constructor(private backendService: BackendServiceService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.backendService.getProducts()
  }

}

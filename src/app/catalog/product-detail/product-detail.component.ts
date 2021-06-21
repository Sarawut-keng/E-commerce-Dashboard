import { productData, BackendServiceService } from 'src/app/services/backend-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

const Primary: ThemePalette = 'primary'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: productData;
  productId!: number;
  isAdvanced: boolean = true;
  primaryColor = Primary;

  @ViewChild(MatDatepicker) datepicker!: MatDatepicker<Date>


  constructor(private route: ActivatedRoute, private backend: BackendServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.productId = p.id
    });

    this.product = this.backend.getProductDetail(this.productId);

  }

  isChange() {
    this.isAdvanced = !this.isAdvanced;
  };

}

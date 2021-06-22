import { productData, BackendServiceService } from 'src/app/services/backend-service.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';



const Primary: ThemePalette = 'primary'

interface Inventory {
  value: string;
  show: string;
};

interface Warehouse {
  value: string;
  show: string;
}

interface LowStockActivity {
  value: string;
  show: string;
}

interface Backorders {
  value: string;
  show: string;
}

interface ProductAvailabilityRange {
  value: string;
  show: string;
}


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
  discount: string = "Sample discount with coupon code";
  TaxCategory: string[] = ['None', 'Books', 'Electronics and Software', 'Downloadable products', 'Jewelry', 'Apparel'];
  deliveryDate: string[] = ['None', '1-2 days', '3-5 days', '1 week'];
  inventoryMethod: Inventory[] = [
    {value: "dont-track", show: "Don't track inventory"},
    {value: "track", show: "Track inventory"},
    {value: "track-attr", show: "Track inventory by product attributes"}
  ];
  warehouse: Warehouse[] = [
    {value: 'none', show: 'None'},
    {value: 'w1', show: 'New York'},
    {value: 'w2', show: 'Los Angeles'}
  ];
  lowStockActivity: LowStockActivity[] = [
    {value: 'none', show: 'Nothing'},
    {value: 'disable', show: 'Disable buy button'},
    {value: 'unpublish', show: 'Unpublish'}
  ];
  backorders: Backorders[] = [
    {value: 'none', show: 'No backorders'},
    {value: 'allow-1', show: 'Allow qty below 0'},
    {value: 'allow-2', show: 'Allow aty below 0 and notify customer'}
  ];
  productAvailabilityRange: ProductAvailabilityRange[] = [
    {value: 'none', show: 'None'},
    {value: '2-4', show: '2-4 days'},
    {value: '7-10', show: '7-10 days'},
    {value: '2w', show: '2 weeks'}
  ];
  
  selectedInventoryMethod = this.inventoryMethod[0].value;
  selectedWarehouse = this.warehouse[0].value;
  selectedLowStockActivity = this.lowStockActivity[1].value;
  selectedBackorders = this.backorders[0].value;
  selectedPAR = this.productAvailabilityRange[0].value;

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

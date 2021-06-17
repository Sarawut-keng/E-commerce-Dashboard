import { Component, OnInit } from '@angular/core';

export interface latestOrders {
  order: number;
  status: string;
  customer: string[];
  created: string[];
  view: string;
}

const DATA: latestOrders[] = [
{
  order: 5,
  status: "Complete", 
  customer: ["Victoria Terces", "(victoria_victoria@nopCommerce.com)"], 
  created: ["03/13/2017", "6:20:10 AM"],
  view: "View"
},
{
  order: 4,
  status: "Processing", 
  customer: ["Brenda Lindgren", "(brenda_lindgren@nopCommerce.com)"], 
  created: ["03/13/2017", "6:20:09 AM"],
  view: "View"
},
{
  order: 3,
  status: "Pending", 
  customer: ["James Pan", "(james_pan@nopCommerce.com)"], 
  created: ["03/13/2017", "6:20:09 AM"],
  view: "View"
},
{
  order: 2,
  status: "Pending", 
  customer: ["Arthur Holmes", "(arthur_holmes@nopCommerce.com)"], 
  created: ["03/13/2017", "6:20:09 AM"],
  view: "View"
},
{
  order: 1,
  status: "Processing", 
  customer: ["Steve Gates", "(steve_gates@nopCommerce.com)"], 
  created: ["03/13/2017", "6:20:09 AM"],
  view: "View"
}
]

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.css']
})
export class LatestOrdersComponent implements OnInit {

  displayedColumns: string[] = ['order', 'status', 'customer', 'created', 'view'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

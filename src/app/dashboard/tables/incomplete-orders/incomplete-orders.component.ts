import { Component, OnInit } from '@angular/core';

export interface incompleteOrders {
  item: string;
  total: string;
  count: string;
}

const DATA: incompleteOrders[] = [
  {item: "Total unpaid orders (pending payment status)", total: "$2,468.80", count: ""},
  {item: "Total not yet shipped orders", total: "$4,315.00", count: ""},
  {item: "Total incomplete orders (pending order status)", total: "$2,468.80", count: ""}
]

@Component({
  selector: 'app-incomplete-orders',
  templateUrl: './incomplete-orders.component.html',
  styleUrls: ['./incomplete-orders.component.css']
})
export class IncompleteOrdersComponent implements OnInit {

  displayedColumns: string[] = ['item', 'total', 'count'];
  dataSource = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

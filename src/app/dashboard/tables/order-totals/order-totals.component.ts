import { Component, OnInit } from '@angular/core';


export interface OrderTotals {
  status: string;
  today: string;
  week: string;
  month: string;
  year: string;
  all: string
}

const ELEMENT_DATA: OrderTotals[] = [
  {status: "Pending", today: "$0.00", week: "$0.00", month: "$0.00", year:"$0.00", all: "$2,468.80"},
  {status: "Processing", today: "$0.00", week: "$0.00", month: "$0.00", year:"$0.00", all: "$1,957.00"},
  {status: "Complete", today: "$0.00", week: "$0.00", month: "$0.00", year:"$0.00", all: "$43.50"},
  {status: "Cancelled", today: "$0.00", week: "$0.00", month: "$0.00", year:"$0.00", all: "$0.00"}
];

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {

  displayedColumns: string[] = ['Order Status', 'Today', 'This Week', 'This Month', 'This Year', 'All Time'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

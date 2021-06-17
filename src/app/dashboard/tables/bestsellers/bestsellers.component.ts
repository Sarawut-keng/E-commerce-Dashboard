import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

export interface bestSellers {
  name: string;
  quantity: number;
  amount: number;
  view: string;
}

const DATA: bestSellers[] = [
  {
    name: "Leica T Mirrorless Digital Camera",
    quantity: 3,
    amount: 530.00,
    view: "View"
  },
  {
    name: "Apple iCam",
    quantity: 2,
    amount: 1300.00,
    view: "View"
  },
  {
    name: "Levi's 511 Jeans",
    quantity: 11,
    amount: 43.50,
    view: "View"
  },
  {
    name: "Night Visions",
    quantity: 4,
    amount: 2.80,
    view: "View"
  },
  {
    name: "If You Wait (donation)",
    quantity: 1,
    amount: 3.00,
    view: "View"
  },
  {
    name: "Science & Faith",
    quantity: 5,
    amount: 3.00,
    view: "View"
  },
  {
    name: "Fahrenheit 451 by Ray Bradbury",
    quantity: 5,
    amount: 27.00,
    view: "View"
  },
  {
    name: "First Prize Pies",
    quantity: 9,
    amount: 51.00,
    view: "View"
  },
  {
    name: "Pride and Prejudice",
    quantity: 2,
    amount: 24.00,
    view: "View"
  },
  {
    name: "Flower Girl Bracelet",
    quantity: 3,
    amount: 360.00,
    view: "View"
  },
  {
    name: "Vintage Style Engagement Ring",
    quantity: 1,
    amount: 2100.00,
    view: "View"
  },
  {
    name: "$25 Virtual Gift Card",
    quantity: 4,
    amount: 25.00,
    view: "View"
  }
];

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  @Input() toSort!: string;

  displayedColumns: string[] = ['name', 'quantity', 'amount', 'view'];
  dataSource = new MatTableDataSource(DATA);

  formatterChange = formatter;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) Sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.Sort;
  }

  constructor() {}

  ngOnInit(): void {}

}

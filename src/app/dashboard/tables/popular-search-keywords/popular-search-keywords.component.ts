import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PopularSearchKeywords {
  keyword: string;
  count: number;
}

const DATA: PopularSearchKeywords[] = [
  {
    keyword: "computer",
    count: 34
  },
  {
    keyword: 'camera',
    count: 30
  },
  {
    keyword: 'jewelry',
    count: 27
  },
  {
    keyword: 'shoes',
    count: 26
  },
  {
    keyword: 'jeans',
    count: 19
  },
  {
    keyword: 'gift',
    count: 10
  }
];

@Component({
  selector: 'app-popular-search-keywords',
  templateUrl: './popular-search-keywords.component.html',
  styleUrls: ['./popular-search-keywords.component.css']
})
export class PopularSearchKeywordsComponent implements OnInit {

  displayedColumns: string[] = ['keyword', 'count'];
  dataSource = new MatTableDataSource<PopularSearchKeywords>(DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

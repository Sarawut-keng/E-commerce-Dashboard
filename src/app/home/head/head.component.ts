import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Output() onClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav() {
    this.onClick.emit();
  }

}

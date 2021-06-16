import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('openClose', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('100ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('100ms', style({ opacity: 0 }))
    ])
  ]),]
})

export class AppComponent {
  title = 'e-Commerce-Dashboard';

  isExpanded: boolean = false;

  catalogSelected: boolean = false;
  salesSelected: boolean = false;
  customersSelected: boolean = false;
  promotionsSelected: boolean = false;
  contentSelected: boolean = false;
  configSelected: boolean = false;
  systemSelected: boolean = false;
  reportsSelected: boolean = false;
  helpSelected: boolean = false;

  twice: boolean[] = [this.catalogSelected, this.salesSelected, this.customersSelected, this.promotionsSelected, this.contentSelected,
                      this.configSelected, this.systemSelected, this.reportsSelected, this.helpSelected];

  isTwice(item: boolean) {
    for (let i of this.twice) {
      if (i != item) {
        i = false;
      }
    }
  }

  showNav() {
    this.isExpanded = !this.isExpanded;
  }

  isCatalog() {
    this.catalogSelected = !this.catalogSelected;
    this.isTwice(this.catalogSelected);
  }

  isSales() {
    this.salesSelected = !this.salesSelected;
  }

  isCustomers() {
    this.customersSelected = !this.customersSelected;
  }

  isPromotions() {
    this.promotionsSelected = !this.promotionsSelected;
  }

  isContent() {
    this.contentSelected = !this.contentSelected;
  }
  
  isConfig() {
    this.configSelected = !this.configSelected;
  }

  isSystem() {
    this.systemSelected = !this.systemSelected;
  }

  isReports() {
    this.reportsSelected = !this.reportsSelected;
  }

  isHelp() {
    this.helpSelected = !this.helpSelected;
  }

}

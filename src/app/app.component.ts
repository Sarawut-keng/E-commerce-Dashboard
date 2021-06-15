import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  showNav() {
    this.isExpanded = !this.isExpanded;
  }

  isCatalog() {
    this.catalogSelected = !this.catalogSelected;
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

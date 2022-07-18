import { Component, OnInit } from '@angular/core';
import { ManageOrdersService } from './manage-orders.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css'],
})
export class ManageOrdersComponent implements OnInit {
  sales = <any>[];
  products = <any>[];
  constructor(protected manageOrdersService: ManageOrdersService) {}

  ngOnInit(): void {
    this.manageOrdersService.readSales();
    this.sales = this.manageOrdersService.sales;

    return this.sales;
  }
}

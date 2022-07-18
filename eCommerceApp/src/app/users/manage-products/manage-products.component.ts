import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from './manage-products.service';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  products = <any>[];
  constructor(protected manageProductsService: ManageProductsService) {}

  ngOnInit(): void {
    this.manageProductsService.readProducts();
    this.products = this.manageProductsService.products;
    return this.products;
  }
}

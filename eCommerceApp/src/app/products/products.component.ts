import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = <any>[];
  constructor(protected productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.readProducts();
    this.products = this.productService.products;
    return this.products;
  }
}

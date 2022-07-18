import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from 'src/app/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<any>;
  constructor(
    protected productService: ProductsService,
    protected route: ActivatedRoute,
    protected cartService: CartService
  ) {
    this.productService.readOneProduct();
  }

  ngOnInit(): void {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}

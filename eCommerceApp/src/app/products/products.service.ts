import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = <any>[];
  product: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http.get('http://localhost/PROGETTOFINALE/products');
  }
  readProducts() {
    return this.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
  getOneProductById(id: Number) {
    return this.http.get('http://localhost/PROGETTOFINALE/product?id=' + id);
  }
  readOneProductById(id: Number) {
    return this.getOneProductById(id).subscribe((res: any) => {
      this.product = res;
    });
  }

  getOneProduct() {
    let currentUrl = window.location.href;
    let id = currentUrl.split('/').pop();
    return this.http.get('http://localhost/PROGETTOFINALE/product?id=' + id);
  }
  readOneProduct() {
    return this.getOneProduct().subscribe((res: any) => {
      this.product = res;
    });
  }

  getQuantity() {
    let e = document.getElementById('quantity-select') as HTMLSelectElement;
    let sel = e.selectedIndex;
    let opt = e.options[sel];
    let CurValue = (<HTMLSelectElement>(<unknown>opt)).value;
    let caster: number = +CurValue;

    if (this.product.quantity >= CurValue) {
      return caster;
    } else {
      return false;
    }
  }
}

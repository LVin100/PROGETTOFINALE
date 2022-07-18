import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';
@Injectable({
  providedIn: 'root',
})
export class ManageProductsService {
  products = <any>[];
  product: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getProducts(data: any) {
    data = JSON.stringify({ id_seller: data });
    console.log('get products from manage-products');
    return this.http.post(
      'http://localhost/PROGETTOFINALE/usersProducts',
      data
    );
  }

  readProducts() {
    console.log('dentro manageProducts');
    return this.getProducts(this.authService.getIdUser()).subscribe(
      (res: any) => {
        console.log('dentro manageProducts/.subscribe', res);
        this.products = res;
      }
    );
  }

 modify(data:any){
return this.http.put('http://localhost/PROGETTOFINALE/updateProduct', data);
 }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products/products.service';
import { AuthService } from '../auth/auth.service';
import { ExpressionType } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = <any>[];
  constructor(
    protected http: HttpClient,
    protected productService: ProductsService,
    protected authService: AuthService,
    protected router: Router
  ) {}

  addToCart(product: any) {
    /*  TODO implementare la funzione che controlla se un prodotto è già presente nel carrello e, se sì, andare a
    modificare la quantità da aquistare facendo una somma. Nel caso in cui la sommatoria superi il massimo della quantità disponibile allora effettuare un alert e far coincidere la quantità da acquistare con quella disponibile nel database*/
    let selectedQuantity = this.productService.getQuantity();
    if (selectedQuantity != false) {
      product.quantity = selectedQuantity;
      this.products.push(product);
      window.alert('Your product has been added to cart!');
    } else {
      window.alert('You have selected more than the available quantity!');
    }
  }
  getProducts() {
    return this.products;
  }
  clearCart() {
    //TODO inserire la funzione UPDATE per andare a modificare le quantità dei vari prodotti nel database.
    this.products = [];
    return this.products;
  }

  APICreateCall(data: string) {
    return this.http
      .put('http://localhost/PROGETTOFINALE/sale', data)
      .subscribe((res: any) => {});
  }

  createOrder() {
    if (this.authService.getLogStatus() === true) {
      let order: any[] = [];

      this.products.forEach((prod: any) => {
        let caster: Number = <Number>prod.quantity;
        order.push({
          id_buyer: this.authService.getIdUser(),
          id_product: prod.id,
          id_seller: prod.id_seller,
          quantity: prod.quantity,
        });
      });

      this.APICreateCall(JSON.stringify(order));
      this.clearCart();
      alert('Order sent successfully!');
      this.router.navigate(['dashboard']);
      return;
    } else {
      alert('you have to be Logged In to use the cart');
    }
  }
}

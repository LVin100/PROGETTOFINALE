import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Injectable({
  providedIn: 'root',
})
export class ManageOrdersService {
  sales = <any>[];
  sale: any;
  products = <any>[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private productService: ProductsService
  ) {}

  getSales(data: any) {
    data = JSON.stringify({ id_buyer: data });

    return this.http.post('http://localhost/PROGETTOFINALE/sale', data);
  }

  readSales() {
    return this.getSales(this.authService.getIdUser()).subscribe((res: any) => {
      this.sales = res;
    });
  }

  deleteOrder(data: any) {
    data = JSON.stringify({ id_vendita: data });
    this.router.navigate(['/userDashboard']);
    return this.http
      .delete('http://localhost/PROGETTOFINALE/sale', { body: data })
      .subscribe((ddata: any) => this.router.navigate(['manage-orders']));
  }
}

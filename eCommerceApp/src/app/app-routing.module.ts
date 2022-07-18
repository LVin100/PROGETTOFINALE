import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ManageOrdersComponent } from './users/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './users/manage-products/manage-products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ModifyProductsComponent } from './users/manage-products/modify-products/modify-products.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userDashboard', component: UsersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'manage-products', component: ManageProductsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'modify/:id', component: ModifyProductsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

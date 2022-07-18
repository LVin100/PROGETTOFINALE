import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularEmojisModule } from 'angular-emojis';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { SearchProductComponent } from './products/search-product/search-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ManageProductsComponent } from './users/manage-products/manage-products.component';
import { ManageOrdersComponent } from './users/manage-orders/manage-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ModifyProductsComponent } from './users/manage-products/modify-products/modify-products.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    UsersComponent,
    SearchProductComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    LoginComponent,
    ModifyProductsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularEmojisModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

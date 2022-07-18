import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageProductsService } from '../manage-products.service';
import { ProductsService } from 'src/app/products/products.service';
@Component({
  selector: 'app-modify-products',
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.css']
})
export class ModifyProductsComponent implements OnInit {
form!:FormGroup;
submitted= false;
data:any;
  constructor(protected formBuilder: FormBuilder,private router: Router, protected manageProductService:ManageProductsService,
    protected productService:ProductsService) {
      this.productService.readOneProduct()
    }
    modifyForm(){
      this.form= this.formBuilder.group({
        name:[this.productService.product.name, [Validators.required]],
        quantity:[this.productService.product.quantity, [Validators.required]],
        kg:[this.productService.product.kg, [Validators.required]],
        cost:[this.productService.product.cost, [Validators.required]],
        id:[this.productService.product.id],
      });
    }
  ngOnInit(): void {
    this.modifyForm();
  }

 get f(){
  return this.form.controls;
 }

 submit(){
  this.submitted=true;
  if(this.form.invalid){
    return
  }
  this.manageProductService.modify(JSON.stringify(this.form.value)).subscribe((res)=>{this.data=res;
    alert("Product updated with success");
    this.router.navigate(['userDashboard']);
});

 }
}

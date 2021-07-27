import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product:any = {};

  constructor(private route:ActivatedRoute, private router: Router, 
    private ps: ProductsService, private fb: FormBuilder) { 
    this.createForm();
  }
  /**
   * Formulaire avec la validators
   */
  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }
  /**
   * Methode de la mise à jour d'un produit
   */
  updateProduct(ProductName, ProductDescription, ProductPrice){

    this.route.params.subscribe(params => {
      this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id)
      .subscribe((data) => { 
        this.router.navigate(['products'])
      })
    });
  }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });

  }

}

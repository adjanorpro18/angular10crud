import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.ps
    .getProducts()
    .subscribe((data:Product[]) => {
      this.products = data;
    });
  }
/**
 * Methode  de suppression du produit
 * @param id 
 */
  deleteProduct(id){
    this.ps.deteleProduct(id)
    .subscribe(res => {
      this.products.splice(id, 1);
    });
  }

}

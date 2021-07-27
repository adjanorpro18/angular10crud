import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  /**
   * Methode qui permet d'ajouter un produit
   * @param ProductName : nom du produit
   * @param ProductDescription : description du produit
   * @param ProductPrice : prix du produit
   */
  addProduct(ProductName, ProductDescription, ProductPrice){

    const obj = {
      ProductName, ProductDescription, ProductPrice
    };
    console.log(obj);
    this.http
    .post(`${this.uri}`,obj)
    .subscribe(res => console.log('Done'));

  }
/**
 * Methode de recuperer la liste des produits 
 * @returns 
 */
  getProducts(): Observable<Product[]>{
    return this
      .http
      .get<Product[]>(`${this.uri}`);
  }

  /**
 * Methode d'éditer un produit 
 * @returns 
 */
editProduct(id): Observable<Product>{
  return this
  .http
  .get<Product>(`${this.uri}/${id}`);
}

  /**
 * Methode de mise à jour d'un produit 
 * @returns 
 */
updateProduct(ProductName,ProductDescription,ProductPrice, id): Observable <Product> {
  const obj= {
    id,
    ProductName,
    ProductDescription,
    ProductPrice
  };
  return this
  .http
  .put<Product>(`${this.uri}/${id}`,obj);
}

deteleProduct(id): Observable <Product> {
  return this
  .http
  .get<Product>(`${this.uri}/${id}`);
}
}

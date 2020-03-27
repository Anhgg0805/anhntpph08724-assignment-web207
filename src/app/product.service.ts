import { Injectable } from "@angular/core";
import { Product } from './Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  api='https://5e79b9aa17314d00161334fd.mockapi.io/';

  constructor(
    private http: HttpClient
  ) {}

  getProducts():Observable <Product[]> {
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  getProduct(id):Observable <Product>{
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProduct(id):Observable <Product>{
    // return this.products.filter(product => product.id !== id);
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product):Observable <Product>{
    // let newObj = { id: 11, ...product };
    // this.products.push(newObj);
    return this.http.post<Product>(`${this.api}`,product);
  }
  editProduct(product):Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`,product); 
     }
}

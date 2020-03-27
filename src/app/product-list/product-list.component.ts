import { Component, OnInit } from '@angular/core';
import {Product }from '../Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected : Product;
  products:Product[];
  constructor(
    private productService :ProductService
  ) { }

  ngOnInit(): void {
  }
  detailProduct(product) {
    this.selected = product;
    console.log(this.selected);
  }
  
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      // this.products=data;
    })
  }
}

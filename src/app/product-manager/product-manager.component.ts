import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products:Product[];
  productNew:Product= new Product();
  product:Product;
  constructor(
    private productService:ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    // this.products=this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      // console.log(data);
      this.products=data;
    })
  }
  removeItem(id) {
    // this.products=this.productService.removeProduct(id);
    this.productService.removeProduct(id).subscribe(response =>{
      this.router.navigate(['/product-manager'])
      // console.log(response);
    });
  }
  addProduct(){
    // this.productService.addProduct(this.productNew);
    this.productService.addProduct(this.productNew).subscribe(data => {
    this.router.navigate(['/product-manager'])
    });
    
  }
}
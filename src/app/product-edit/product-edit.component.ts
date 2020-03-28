import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Product} from '../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
     this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data =>{
        // console.log(data);
        this.product=data;
      })
      console.log(param);
    })
  }
  edit(){
    this.productService.editProduct(this.product).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/product-manager']);
    }
    );
    
  }
}
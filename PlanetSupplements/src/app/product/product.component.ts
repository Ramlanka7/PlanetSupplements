import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/services/productService';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  private products = new Array<Product>();

  private categoryName: string;

  private categoryId: number;

  constructor(private sharedService: SharedService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location) {
    this.categoryName = route.snapshot.params["productName"];
    this.categoryId = route.snapshot.params["id"];
  }

  ngOnInit() {
    this.location.go(this.categoryName);
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.productService.getProductsByCategory(this.categoryId))
      .subscribe((data: Array<Product>) => {
        this.products = data;
        
      });
  }

  addToCart() {
    this.sharedService.onAddToCart.emit();
  }
}
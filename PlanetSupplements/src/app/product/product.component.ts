import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/services/productService';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { Category } from 'app/Model/categoryEnum';

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
  }

  ngOnInit() {

    this.route.params
      .switchMap((params: Params): any => {

        this.categoryName = params['productName'];

        if (this.categoryName === undefined) {
          this.router.navigate(['/page-not-found']);
        } else {

          if (+params['id']) {
            this.categoryId = +params['id'];
          } else {
            if (this.categoryName) {
              this.categoryId = Category[this.categoryName.toLowerCase()];
            }
          };

          if (!this.categoryId) {
            this.router.navigate(['/page-not-found']);
          }
          this.location.go(this.categoryName);
        }
        return this.productService.getProductsByCategory(this.categoryId);
      })
      .subscribe((data: Array<Product>) => {
        this.products = data;
      });
  }

  addToCart(productId: number) {
    this.sharedService.onAddToCart.emit(productId);
  }
}
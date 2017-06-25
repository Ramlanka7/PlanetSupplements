import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/services/productService';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

export enum Category {
  Vitamins = 1,
  SportsNutrition = 2,
  MuscleBuilders = 3,
  Protien = 4,
  WeightGain = 5,
  DietEnergey = 6,
  HealthOils = 7
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  private products = new Array<Product>();

  private categoryName: string;

  private categoryId: number;

  //CategoryEnum: typeof Category = Category;

  constructor(private sharedService: SharedService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location) {
    this.categoryName = route.snapshot.params["productName"];
    this.categoryId = route.snapshot.params["id"];
  }

  ngOnInit() {
    // this.location.go(this.categoryName);
    //this.route.params
    // (+) converts string 'id' to a number
    //.switchMap((params: Params) =>
    //TODO: Not the right way, have to revisit this.
    if (this.categoryId === undefined) {
      if (this.categoryName !== undefined) {
        this.categoryId = Category[this.categoryName];
      }
    }

    this.productService.getProductsByCategory(this.categoryId)
      .subscribe((data: Array<Product>) => {
        this.products = data;
      });
  }

  addToCart(productId: number) {
    this.sharedService.onAddToCart.emit(productId);
  }
}
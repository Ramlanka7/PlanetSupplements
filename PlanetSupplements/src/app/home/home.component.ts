import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/services/productService';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { Category } from 'app/Model/categoryEnum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  private products = new Array<Product>();

  private categoryName: string;

  private categoryId: number;

  private isSpinner: boolean = true;

  constructor(private sharedService: SharedService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location) {
  }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe((data: Array<Product>) => {
        this.products = data;
        this.isSpinner = false;
      });
  }

  addToCart(productId: number) {
    this.sharedService.onAddToCart.emit(productId);
  }
}
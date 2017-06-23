import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { ProductService } from 'app/services/productService';
import { SharedService } from 'app/services/sharedService';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  public productIds: number[] = new Array();

  private products = new Array<Product>();

  constructor(private sharedService: SharedService,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.productIds = this.sharedService.retrieveProductIds();

    this.productService.getProductsByIds(this.productIds)
      .subscribe((data: Array<Product>) => {
        this.products = data;
      });
  }
}
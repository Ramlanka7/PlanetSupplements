import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/services/productService';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  public productIds: number[] = new Array();

  private products = new Array<Product>();

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.productIds = route.snapshot.params["productIds"];
  }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.productService.getProductsByIds(this.productIds))
      .subscribe((data: Array<Product>) => {
        this.products = data;

      });
  }

}

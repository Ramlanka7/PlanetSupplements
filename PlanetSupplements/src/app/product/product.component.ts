import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/services/productService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  private newProduct = new Product();

  private products: any;// new Array<Product>();

  categoryId: number;

  constructor(private sharedService: SharedService,
    private productService: ProductService,
    route: ActivatedRoute) {
    this.categoryId = route.snapshot.params["id"];
  }

  ngOnInit() {

    var prods = this.productService.getProductsByCategory(this.categoryId);
    this.products = prods;
    //this.newProduct.name = "Cellucor C4 Ice Blue Razz 30 serving";
    //this.newProduct.productId = 1;
    //this.newProduct.price = "$29.99";

    //this.products.push(this.newProduct);
  }

  addToCart() {
    this.sharedService.onAddToCart.emit();
  }
}

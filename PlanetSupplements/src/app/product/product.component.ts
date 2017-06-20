import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  private newProduct = new Product();

  private products = new Array<Product>();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    
    this.newProduct.name = "Cellucor C4 Ice Blue Razz 30 serving";
    this.newProduct.productId = 1;
    this.newProduct.price = "$29.99";

    this.products.push(this.newProduct);
  }

  addToCart() {
    this.sharedService.onAddToCart.emit();
  }
}

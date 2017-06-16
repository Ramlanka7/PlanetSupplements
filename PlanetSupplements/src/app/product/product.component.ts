import { Component, OnInit } from '@angular/core';
import { Product } from 'app/Model/Product';
import { SharedService } from 'app/services/sharedService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  private product = new Product();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.product.name = "Cellucor C4 Ice Blue Razz 30 serving";
    this.product.productId = 1;
    this.product.price = "$29.99";
  }

  addToCart() {
    this.sharedService.onAddToCart.emit();
  }
}

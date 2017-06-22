import { Component } from '@angular/core';
import { SharedService } from 'app/services/sharedService';
import { ProductService } from 'app/services/productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [SharedService, ProductService]
})
export class AppComponent {
  public cartCount: number = 0;

  public productIds: number[] = new Array();

  onCartUpdate: boolean;

  constructor(sharedService: SharedService, private productService: ProductService) {
    sharedService.onAddToCart.subscribe(
      (productId) => {
        this.cartCount = this.cartCount + 1;
        this.productIds.push(productId);
      }
    );
  }
}
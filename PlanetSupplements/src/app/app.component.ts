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

  onCartUpdate: boolean;

  constructor(sharedService: SharedService, private productService: ProductService) {
    sharedService.onAddToCart.subscribe(
      () => {
        this.cartCount = this.cartCount + 1;
      }
    );
  }

  getProducts(categoryId: number) {
    var products = this.productService.getProductsByCategory(categoryId);
  
  }
}
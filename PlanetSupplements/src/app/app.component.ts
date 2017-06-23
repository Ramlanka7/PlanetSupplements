import { Component } from '@angular/core';
import { SharedService } from 'app/services/sharedService';
import { ProductService } from 'app/services/productService';
import { Router } from '@angular/router';

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

  constructor(private sharedService: SharedService, private productService: ProductService, private router: Router) {
    sharedService.onAddToCart.subscribe(
      (productId) => {
        this.cartCount = this.cartCount + 1;
        this.productIds.push(productId);
      }
    );
  }

  goToCart() {
    this.sharedService.saveProductIds(this.productIds);

    this.router.navigate(['/cart']);
  }
}
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/services/sharedService';
import { ProductService } from 'app/services/productService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [SharedService, ProductService]
})
export class AppComponent implements OnInit {

  public cartCount: number = 0;

  public productIds: number[] = new Array();

  onCartUpdate: boolean;

  constructor(private sharedService: SharedService, private productService: ProductService, private router: Router) {
    sharedService.onAddToCart.subscribe(
      (productId) => {
        this.productIds.push(productId);
        this.cartCount = this.productIds.length;
      }
    );
    sharedService.onRemoveFromCart.subscribe(
      (productId) => {
        var index = this.productIds.indexOf(productId);
        if (index > -1) {
          this.productIds.splice(index, 1);
        }
        this.cartCount = this.productIds.length;
      }
    );
  }

  ngOnInit(): void {
    this.productIds = this.sharedService.retrieveProductIds();
  }

  goToCart() {
    this.sharedService.saveProductIds(this.productIds);

    this.router.navigate(['/cart']);
  }
}
import { Component, OnInit } from '@angular/core';
import { CartViewModel } from 'app/Model/CartViewModel';
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
  
  private cart: CartViewModel;

  constructor(private sharedService: SharedService,
    private productService: ProductService) {
  }

  ngOnInit() {
    this.productIds = this.sharedService.retrieveProductIds();

    this.productService.getProductsByIds(this.productIds)
      .subscribe((data: CartViewModel) => {
        this.cart = data;
      });
  }

  addItem(product: any) {
    product.quantity += 1;
    this.sharedService.onAddToCart.emit(product.productId);
    this.updateCart(product);
  }

  removeItem(product: any) {
    if (product.quantity >= 1) {
      product.quantity = product.quantity - 1;
      this.sharedService.onRemoveFromCart.emit(product.productId);
      this.updateCart(product);
    }
  }

  updateCart(product: any): void {
    product.totalPrice = (product.price * product.quantity).toFixed(2);
    let total: number = 0;
    for (var i = 0; i < this.cart.cart.length; i++) {
      total = parseFloat(total.toString()) + parseFloat(this.cart.cart[i].totalPrice.toString());
    }
    this.cart.subTotal = parseFloat(total.toFixed(2));
    this.cart.total = parseFloat(this.cart.subTotal.toString()) + parseFloat(this.cart.tax.toString());
  }
}
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  onAddToCart: EventEmitter<number> = new EventEmitter();

  onRemoveFromCart: EventEmitter<number> = new EventEmitter();

  cartCount: number;

  productIds: number[] = [];

  saveProductIds(ids: any) {
    this.productIds = ids;
  }

  retrieveProductIds() {
    return this.productIds;
  }

}
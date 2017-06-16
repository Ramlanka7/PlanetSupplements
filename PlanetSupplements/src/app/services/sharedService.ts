import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  onAddToCart: EventEmitter<number> = new EventEmitter();

  cartCount: number;
}
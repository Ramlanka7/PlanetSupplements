import { Component } from '@angular/core';
import { SharedService } from 'app/services/sharedService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [SharedService]
})
export class AppComponent {
  public cartCount: number = 0;

  onCartUpdate: boolean;

  constructor(sharedService: SharedService) {
    sharedService.onAddToCart.subscribe(
      () => {
        this.cartCount = this.cartCount + 1;
      }
    );
  }
}

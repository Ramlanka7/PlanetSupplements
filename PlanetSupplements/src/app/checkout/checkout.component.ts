import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  goToShippingTab() {
    this.selectedIndex = 1;
  }

  goToBillingTab() {
    this.selectedIndex = 0;
  }

  goToReviewTab() {
    this.selectedIndex = 2;
  }

  placeOrder() {
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
  }
}
import {Component, CUSTOM_ELEMENTS_SCHEMA, signal} from '@angular/core';

@Component({
  selector: 'storefront-app',
  templateUrl: './storefront.html',
  styleUrl: './storefront.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Storefront {
  protected readonly cartCount = signal(0);

  protected addToCart(): void {
    this.cartCount.update((count) => count + 1);
  }
}

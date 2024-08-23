import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: Product[] = [];

  constructor (private cartService: CartService) {}

  ngOnInit() {
    this.cartService.selectedCartItem$
    .subscribe(item => {
      this.cartItems = item;
    });
  }

}

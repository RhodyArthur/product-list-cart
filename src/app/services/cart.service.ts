import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  selectedCartItem$ = this.cartItemsSubject.asObservable();

  constructor(private dataService: DataService) { }

  // add item to cart
  addItemToCart(product: Product) {
    // check if item is already in cart
    const itemExist = this.cartItems.find(item => item.name === product.name);

    if(itemExist) {
      itemExist.quantity++;
    }
    else {
      product.quantity = 1;
      product.addedToCart = true;
      this.cartItems.push(product);
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  // get cart items
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // get total price
  getTotalPrice(): number {
    return this.cartItems.reduce((total, current) => total + current.price * current.quantity, 0)
  }

}

import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productData: Product[] = [];
  cartItems: Product[] = []


  constructor (private dataService: DataService,
               private cartService: CartService
  ) {}

  ngOnInit() {
    this.dataService.getProductData()
    .subscribe(data => {
      this.productData = data;
    })
  }

  // add items to cart
  addItemToCart(item: Product) {
    this.cartService.addItemToCart(item);
  }

  // increase quantity
  increment(item: Product) {
    if(!item.quantity) {
      item.quantity = 1;
    }
    item.quantity++;
  }

  // decrease quantity
  decrement(item: Product) {
    if(item.quantity && item.quantity > 1) {
      item.quantity--;
    }
  }


  // filtered image based on screen size


  
}

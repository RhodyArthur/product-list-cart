import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: Product[] = [];
  
  showModal:boolean = false;


  constructor (private cartService: CartService,
              private modalService: ModalService
  ) {}

  ngOnInit() {
    this.cartService.selectedCartItem$
    .subscribe(item => {
      this.cartItems = item;
    });
  }

  // get total price
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  // get all items in cart
  getAllItems(): number {
    return this.cartService.getAllItems();
  }

  // clear item from cart
  clearItemFromCart(item: Product) {
    this.cartService.removeItemFromCart(item);
  }

  // disply confirm modal
  displayOrderModal() {
    this.modalService.show();
  }

  // handle keydown
  @HostListener('window:keydown.enter', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.displayOrderModal();
      event.preventDefault();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  cartItems: Product[] = []

  constructor(public cartService: CartService,
              private modalService: ModalService
  ) {}

  ngOnInit() {
    this.cartService.selectedCartItem$
    .subscribe(item => {
      this.cartItems = item;
    })
  }

  // clear cartItems for new order
  startNewOrder() {
    this.cartService.clearCart();
    this.modalService.hide()
  }
}

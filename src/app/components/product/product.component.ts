import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item, Product } from '../../interface/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productData: Product[] = [];
  cartItems: Item[] = []

  constructor (private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProductData()
    .subscribe(data => {
      this.productData = data;
    })
  }


  // filtered image based on screen size

  // toggle button on click
  toggleAddToCartBtn() {
    return this.productData[0].addedToCart = !this.productData[0].addedToCart;
  }
  
}

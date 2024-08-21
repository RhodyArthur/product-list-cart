import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productData: Product[] = [];
  constructor (private dataService: DataService) {}

  ngOnInit() {
    this.fetchedData();
  }

  fetchedData() {
    this.dataService.getProductData()
    .subscribe(data => {
      this.productData = data;
      console.log(data)
    })
  }

  // filtered image based on screen size
  
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { ModalComponent } from "./components/modal/modal.component";
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'product-lists-cart';

  isModalVisible = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.isModalVisible$.subscribe(isVisible => {
      this.isModalVisible = isVisible;
    });
  }

  hideModal() {
    this.modalService.hide();
  }

}

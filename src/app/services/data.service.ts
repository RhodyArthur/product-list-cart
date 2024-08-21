import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = './assets/data.json'

  constructor(private http: HttpClient) { }

  // get data from json file
  getProductData() {
    return this.http.get<Product>(this.dataUrl);
  }
}

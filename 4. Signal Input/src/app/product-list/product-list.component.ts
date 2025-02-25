import { Component, input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // product list component has the information about product
  // how can we get the information from app component to our product list component -> we can use input
  // input is derived from signal, input is like a signal

  products = input.required<Product[]>();   
}

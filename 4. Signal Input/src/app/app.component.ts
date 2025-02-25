import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  allProducts: Product[] = [
    { id: 1, name: "Milk", price: 60 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Egg", price: 10 }
  ]
}

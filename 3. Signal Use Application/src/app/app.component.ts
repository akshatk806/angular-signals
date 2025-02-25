import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = signal([
    { id: 1, name: "Milk", price: 60 },
    { id: 2, name: "Bread", price: 30 },
    { id: 3, name: "Egg", price: 10 }
  ]);

  // filter products by name
  filterName = signal("");

  filteredProducts = computed(() => {
    return this.products().filter(product => product.name.toLowerCase().includes(this.filterName().toLowerCase()))
  });

  changeFilter(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}

import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  price :number= 19;
  quantity = signal(10);

  // totalPrice should not be changed from outside it is computed and it is uses a signal for calculation (readonly)
  totalPrice = computed(() => this.price * this.quantity()); 
  
  changeQuantity(event: Event) :void {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber)
    // this.quantity.update(currentValue => currentValue = (event.target as HTMLInputElement).valueAsNumber)
  }
}

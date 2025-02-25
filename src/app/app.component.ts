import { Component, OnInit, signal } from '@angular/core';
import { Signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-project';

  // signal for toggle
  theme = signal("light");   // writable signal (we get the value using getter funtion)

  label = this.theme();

  constructor() {
    // creating effect, effect is code that runs when the value of signal changes
    effect(() => {
      this.label = this.theme();   // whenever we change the value of signal from anywhere from code this effect will here runs. This is the dependency we have created
    });
  }

  /*
  ngOnInit(): void {
    // this.theme.set("dark")    // if you set the value directly you simply overrided 

    // updating is another alternative you can use to set the value of signal by using the current value
    this.theme.update(currentValue => currentValue === "light" ? "dark" : "light"); 

    // you can also use current value in set method (but here is two method calls)
    // this.theme.set(this.theme() === "light" ? "dark" : "light");

    document.body.className = this.theme();   // getter funtion of signal
  }
  */

  toggleDarkMode() : void {
    this.theme.update(currentValue => currentValue === "light" ? "dark" : "light"); 
  }
  /* Explanation -

    I click on toggle button that runs the toggleDarkMode() method that will change the value of signal
    and as we created a effect inside our constructor the effects knows we are using the signal 
    so whenever we changes signal we will have to run this effect, so label is updated.
    
    The effect is executed over and over again whenever angular detects that we have the value of signal
  */
}

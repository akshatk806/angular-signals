import { Component, OnInit, signal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-signals-project';

  // signal for toggle
  theme = signal("light");   // writable signal (we get the value using getter funtion)

  ngOnInit(): void {
    // this.theme.set("dark")    // if you set the value directly you simply overrided 

    // updating is another alternative you can use to set the value of signal by using the current value
    this.theme.update(currentValue => currentValue === "light" ? "dark" : "light"); 

    // you can also use current value in set method (but here is two method calls)
    // this.theme.set(this.theme() === "light" ? "dark" : "light");

    document.body.className = this.theme();   // getter funtion of signal
  }
}

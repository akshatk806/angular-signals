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
    document.body.className = this.theme();   // getter funtion of signal
  }
}

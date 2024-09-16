import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'l2-root',
  styles: [],
  template: `
    <l2-header></l2-header>

    <router-outlet></router-outlet>
    `,
  standalone: true,
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent { }

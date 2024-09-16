import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'rsm-root',
  styles: [],
  template: `
    <rsm-header></rsm-header>
    <router-outlet></router-outlet>
    `,
  standalone: true,
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'angular-shop';
}

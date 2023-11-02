import { Component } from '@angular/core';

@Component({
  selector: 'hallpass-header',
  templateUrl: './header.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HeaderComponent {}

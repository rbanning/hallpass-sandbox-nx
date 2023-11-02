import { Component } from '@angular/core';

@Component({
  selector: 'hallpass-shared-header',
  templateUrl: './header.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HeaderComponent {

}

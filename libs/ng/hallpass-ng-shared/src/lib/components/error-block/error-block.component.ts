import { Component, Input } from '@angular/core';

@Component({
  selector: 'hallpass-shared-error-block',
  templateUrl: './error-block.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ErrorBlockComponent {
  @Input()
  heading: string = 'Error';
}

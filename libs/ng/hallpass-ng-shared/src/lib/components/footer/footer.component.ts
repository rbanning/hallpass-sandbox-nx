import { Component, Input } from '@angular/core';
import { Nullable, ThemeColor } from '@hallpass/common';

@Component({
  selector: 'hallpass-shared-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FooterComponent {
  @Input()
  coffee: Nullable<ThemeColor>;

  @Input()
  startYear: Nullable<number>;

  @Input()
  company: string = "Hallpass and Friends";

  get year(): string {
    const currentYear = new Date().getFullYear();
    if (this.startYear) {
      return `${this.startYear}` + (currentYear > this.startYear ? `-${currentYear}` : '');
    }
    //else
    return `${currentYear}`;
  }
}

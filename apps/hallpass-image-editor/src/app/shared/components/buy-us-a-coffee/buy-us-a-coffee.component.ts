import { Component, Input } from '@angular/core';
import { Nullable, ThemeColor } from '@hallpass/common';

@Component({
  selector: 'hallpass-buy-us-a-coffee',
  templateUrl: './buy-us-a-coffee.component.html',
  styles: [],
})
export class BuyUsACoffeeComponent {
  @Input()
  action: string = 'Buy us a coffee';

  @Input()
  color: ThemeColor = 'neutral';

  @Input()
  imageSize: Nullable<number>;

  //note: Tailwind requires us to use the whole class and not build it.  E.g. - `link-${this.color}` will not allow Tailwind to discover the class and thus apply it, thus we resort to a switch statement
  get css() {
    switch(this.color) {
      case 'neutral':
        return 'link-neutral';
      case 'primary':
        return 'link-primary';
      case 'secondary':
        return 'link-secondary';
      case 'accent':
        return 'link-accent';
      case 'warn':
        return 'link-warn';
      default:
        return 'link';
    }
  }
}

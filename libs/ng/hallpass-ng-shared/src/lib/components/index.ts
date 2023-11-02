import { AboutHallpassComponent } from "./about-hallpass/about-hallpass.component";
import { BuyUsACoffeeComponent } from "./buy-us-a-coffee/buy-us-a-coffee.component";
import { ErrorBlockComponent } from "./error-block/error-block.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

export const sharedComponents = [
  BuyUsACoffeeComponent,
  FooterComponent,
  HeaderComponent,
  AboutHallpassComponent,
  ErrorBlockComponent
];

export * from './buy-us-a-coffee/buy-us-a-coffee.component';
export * from './footer/footer.component';
export * from './header/header.component';
export * from './about-hallpass/about-hallpass.component';
export * from './error-block/error-block.component';
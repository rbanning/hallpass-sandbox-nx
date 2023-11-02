import { AboutHallpassComponent } from "./about-hallpass/about-hallpass.component";
import { BuyUsACoffeeComponent } from "./buy-us-a-coffee/buy-us-a-coffee.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

export const sharedComponents = [
  BuyUsACoffeeComponent,
  FooterComponent,
  HeaderComponent,
  AboutHallpassComponent,
];

export * from './buy-us-a-coffee/buy-us-a-coffee.component';
export * from './footer/footer.component';
export * from './header/header.component';
export * from './about-hallpass/about-hallpass.component';
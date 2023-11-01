import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './about-page.component';
import { AboutHallpassComponent } from './about-hallpass/about-hallpass.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [AboutPageComponent, AboutHallpassComponent],
  imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}

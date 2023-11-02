import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './about-page.component';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}

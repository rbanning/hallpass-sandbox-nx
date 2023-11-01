import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { SharedModule } from './shared';

import { pageComponents } from './pages';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, pageComponents],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

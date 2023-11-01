import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { coreComponents } from './components';
import { SharedModule } from '../shared';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    coreComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    //these should only be imported into the AppModule
    BrowserModule,
    HttpClientModule,
    coreComponents
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}

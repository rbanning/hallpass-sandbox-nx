import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard, HallpassNgCoreModule, coreComponents as hallpassCoreComponents } from '@hallpass/hallpass-ng-core';
import { coreComponents } from './components';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    coreComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HallpassNgCoreModule,
    SharedModule
  ],
  exports: [
    //these should only be imported into the AppModule
    BrowserModule,
    HttpClientModule,
    hallpassCoreComponents,
    coreComponents
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}

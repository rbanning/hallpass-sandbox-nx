import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './helpers';
import { coreComponents } from './components';


@NgModule({
  imports: [CommonModule],
  declarations: [coreComponents],
  exports: [coreComponents]
})
export class HallpassNgCoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: HallpassNgCoreModule) {
    super(parentModule);
  }

}


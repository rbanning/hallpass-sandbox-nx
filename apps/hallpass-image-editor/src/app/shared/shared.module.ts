import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedComponents } from './components';
import { HallpassNgSharedModule } from '@hallpass/hallpass-ng-shared';



@NgModule({
  declarations: [
    sharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    HallpassNgSharedModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HallpassNgSharedModule,
    sharedComponents
  ]
})
export class SharedModule { }

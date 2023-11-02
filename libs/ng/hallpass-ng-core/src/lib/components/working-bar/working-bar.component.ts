import { Observable, of } from 'rxjs';
import { Nullable } from './../../../../../../common/src/lib/types/nullable';
import { Component, Input, OnInit } from '@angular/core';
import { TaskId, WorkingService } from '../../services';
import { primitive } from '@hallpass/common';

@Component({
  selector: 'hallpass-core-working-bar',
  templateUrl: './working-bar.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class WorkingBarComponent implements OnInit {
  @Input()
  filter: Nullable<TaskId>;

  working$: Observable<boolean> = of(false);

  constructor(private service: WorkingService) {}

  ngOnInit(): void {
    this.working$ = primitive.isNullish(this.filter) ? this.service.getState$() : this.service.getState$(this.filter);
  }
}

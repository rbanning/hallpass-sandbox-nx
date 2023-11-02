import { Component } from '@angular/core';
import { RemoveBackgroundService } from '../../core/services/remove-background.service';
import { Nullable, strHelp } from '@hallpass/common';

@Component({
  selector: 'hallpass-home',
  templateUrl: './home.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class HomeComponent {

  images: string[] = [
    'https://media.hallpassandfriends.com/media/bannapps/photos/photo-dog.jpg',
    'https://media.hallpassandfriends.com/media/bannapps/photos/photo-ducks.jpg',
    'https://media.hallpassandfriends.com/media/bannapps/photos/photo-flower.jpg',
    'https://media.hallpassandfriends.com/media/bannapps/photos/photo-golfer.jpg',
  ]

  result: Nullable<string>;
  error: Nullable<string>;

  constructor(private service: RemoveBackgroundService) {}

  async process(what: string) {    
    this.result = null;
    this.error = null;
    try {
      this.result = await this.service.process(what);      
    } catch (error: unknown) {
      this.error = `Unable to process the photo. ${strHelp.fromError(error)}`;
    }
  }
}

import { Injectable } from "@angular/core";
import { WorkingService } from "@hallpass/hallpass-ng-core";

import removeBackground, { ImageSource } from "@imgly/background-removal";

// type ImageSource =
//     ImageData     //https://developer.mozilla.org/en-US/docs/Web/API/ImageData
//   | ArrayBuffer   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer 
//   | Uint8Array    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
//   | Blob          //https://developer.mozilla.org/en-US/docs/Web/API/Blob
//   | URL           //https://developer.mozilla.org/en-US/docs/Web/API/URL
//   | string;       //e.g. DataUrl

@Injectable({
  providedIn: 'root'
})
export class RemoveBackgroundService {
  private readonly SERVICE_ID = 'remove-background-service';

  constructor( private workingService: WorkingService) {}


  async process(source: ImageSource): Promise<string> {
    this.workingService.setWorking(this.SERVICE_ID, true);
    
    try {
      const blob = await removeBackground(source, {
        //publicPath: 'http://localhost:4200/',
        progress: (key: string, current: number, total: number) => {
          console.log("RemoveBackground progress", {key,current,total});
        }
      });

      const url = URL.createObjectURL(blob);  
      return url;        

    } catch (error) {
      console.warn("Error processing RemoveBackground", {source, error});
      throw new Error("There was a problem processing your photo.");
    } 
    finally {
      this.workingService.setWorking(this.SERVICE_ID, false);
    }
  }
}
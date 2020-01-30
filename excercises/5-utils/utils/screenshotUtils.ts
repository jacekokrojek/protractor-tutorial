import * as fs from 'fs';
import { WriteStream } from 'fs';
import { browser } from 'protractor';

export class ScreenshotUtils {

  takeScreenShot(): any {
    return browser.takeScreenshot().then((image: string) => {
      let now: Date = new Date();
      let filename: string = now.getTime() + '.png';
      let stream: WriteStream = fs.createWriteStream(filename);
      stream.write(new Buffer(image, 'base64'));
      stream.end();
    });
  }
}
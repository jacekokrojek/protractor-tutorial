import { browser } from 'protractor';

export class Home {

  async get () {
    await browser.get(`/jak-to-zrobic-w-js/`);
    await browser.sleep(5000);
  }
  
};

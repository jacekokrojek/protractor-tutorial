import { browser } from 'protractor';

export class Admin {

  async isLoaded(){
    return await browser.getTitle() === 'Protractor workshop | Admin'
  }
  
};

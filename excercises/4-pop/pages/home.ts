import { browser, element, by, ElementArrayFinder } from 'protractor';

export class HomePage {

  menuItems: ElementArrayFinder; 

  constructor () {
    this.menuItems = element.all(by.css('ul.nav > li > a'))
  }
  async get() {
    await browser.get('/jak-to-zrobic-w-js');
  };

  async getTitle () {
    return await browser.getTitle();
  };
  getAllFeatures(){
  return element.all(by.xpath("//h2")).map((el) => {
		 return el.getText();
		});
  }
  async openContact(){
    await  element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  };
};

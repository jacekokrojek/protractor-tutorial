import { browser, element, by, protractor } from "protractor";

export class ContactPage {
  async get() {
    await browser.get("/jak-to-zrobic-w-js/contact.html");
  }
  async fillUpFormAndSubmitt(name, email, content) {
    await element(by.id("name")).sendKeys(name);
    await element(by.id("email")).sendKeys(email);
    await element(by.id("content")).sendKeys(content);
    await element(by.css(".test")).click();
  }

  async getSuccessInformation() {
    const success = "Your message has been sent.";
    let ec = protractor.ExpectedConditions;
    const getkSuccess = element(by.xpath("//h4[contains(text(), 'Your message has been sent.')]"));
    await browser.wait(ec.textToBePresentInElement(getkSuccess, success), 6000);
    return getkSuccess.getText();
  }

  async getSectionTitles(){
    return await element.all(by.xpath("//h3")).getText()

  };
  async openContact() {
    await element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  }
}

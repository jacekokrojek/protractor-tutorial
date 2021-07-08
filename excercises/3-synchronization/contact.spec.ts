import { browser, element, by, protractor } from "protractor";

describe("Protractor Workshop app", function () {
  beforeEach(async function () {
    await browser.get(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html"
    );
  });

  it('should display text "Your message has been sent." when user sends a message', async function () {
    const name = "name noname";
    const email = "namenoname@gmail.com";
    const content = "check content";
    const success = "Your message has been sent.";
    await element(by.id("name")).sendKeys(name);
    await element(by.id("email")).sendKeys(email);
    await element(by.id("content")).sendKeys(content);
    await element(by.css(".test")).click();
    const getkSuccess = await  element(by.xpath("//h4[contains(text(), 'Your message has been sent.')]"));
    let ec = protractor.ExpectedConditions;
    await browser.wait(ec.visibilityOf(getkSuccess), 5000);
    expect(await getkSuccess.getText()).toEqual(success);
  });
});

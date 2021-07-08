import { browser, element, by, ProtractorExpectedConditions, ExpectedConditions } from 'protractor'

describe('angularjs homepage', function () {

  const until: ProtractorExpectedConditions = ExpectedConditions;
  const timeout: number = 10000;
  const coveredElementSelector = by.css('#datasets');
  const notExistingElementSelector = by.css('#notExist');

  beforeAll(async function(){
    await browser.get("/jak-to-zrobic-w-js/admin");
  })

  xit('should not fail if element is not present', async function () {
    let err = ()=>{
        throw new TypeError("Element is  present");
    }
    const notExistingElement = element(notExistingElementSelector);
    let presentElement = await notExistingElement.isPresent()
    
    expect(async function() {presentElement}).toThrowError(err());
  });
  xit('should allow handling errors', async function () {
    const notExistingElement = element(notExistingElementSelector);
    let err = ()=>{
      throw new TypeError("Fail");
  }
    expect(async function() {  await notExistingElement.getText();}).toThrowError(err());
  });

  xit('should fail if the element is covered', async function () {
    let err = ()=>{
      throw new TypeError("Element is covered");
  }
    expect(async function() {await element(coveredElementSelector).click()}).toThrowError(err());
  });

  xit('should fail if the element is covered and you expect it is clickable', async function () {
    browser.wait(until.elementToBeClickable(element(coveredElementSelector)), timeout);
    let err = ()=>{
      throw new TypeError("Element is not present");
  }
    expect(async function() { await element(coveredElementSelector).click()}).toThrowError(err());
  });

  it('should pass if you wait for covering element to disapear', async function () {
    let coveringElement = element(by.css("#loading"));
    await browser.wait(until.invisibilityOf(coveringElement), timeout);
    await element(coveredElementSelector).click();
    expect(coveringElement).toBeTruthy();
  });

  it('should click if you really want to, but nothing might happen', async function () {
    await browser.actions().mouseMove(element(coveredElementSelector)).click().
    perform();
    expect(true).toBe(true);

  });

  it('should be usable in WebDriver functions', async function () {
    await browser.get("/jak-to-zrobic-w-js/blog.html")
    const lastBlogReadMore = element.all(by.css('.btn.btn-primary')).last();
    await browser.executeScript('arguments[0].click()', lastBlogReadMore);
    expect(true).toBe(true);
  });

});
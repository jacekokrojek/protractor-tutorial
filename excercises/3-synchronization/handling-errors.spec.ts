import { browser, element, by, ProtractorExpectedConditions, ExpectedConditions } from 'protractor'

describe('angularjs homepage', function () {

  const until: ProtractorExpectedConditions = ExpectedConditions;
  const timeout: number = 10000;
  const coveredElementSelector = by.css('#datasets');
  const notExistingElementSelector = by.css('#notExist');

  beforeAll(async function(){
    await browser.get("/jak-to-zrobic-w-js/admin");
  })

  it('should not fail if element is not present', async function () {
    const notExistingElement = element(notExistingElementSelector);
    expect(await notExistingElement.isPresent()).toEqual(false);
  });

  it('should allow handling errors', async function () {
    const notExistingElement = element(notExistingElementSelector);
    try {
      await notExistingElement.getText();
      // The above line should have throw an error. Fail.
      expect(true).toEqual(false);
    } catch (e) {
      expect(true).toEqual(true);
    }
  });

  it('should fail if the element is covered', async function () {
    try {
      await element(coveredElementSelector).click();
      expect(false).toBe(true);
    } catch (e){
      expect(true).toBe(true);
    }
  });

  it('should fail if the element is covered and you expect it is clickable', async function () {
    // https://www.protractortest.org/#/api?view=ProtractorExpectedConditions.prototype.elementToBeClickable
    browser.wait(until.elementToBeClickable(element(coveredElementSelector)), timeout);
    try {
      await element(coveredElementSelector).click();
      expect(false).toBe(true);
    } catch (e){
      expect(true).toBe(true);
    }
  });

  it('should pass if you wait for covering element to disapear', async function () {
    let coveringElement = element(by.css("#loading"));
    await browser.wait(until.invisibilityOf(coveringElement), timeout);
    await element(coveredElementSelector).click();
  });

  it('should click if you really want to, but nothing might happen', async function () {
    await browser.actions().
      mouseMove(element(coveredElementSelector)).
      click().
      perform();
  });

  it('should be usable in WebDriver functions', async function () {
    await browser.get("/jak-to-zrobic-w-js/blog.html")
    const lastBlogReadMore = element.all(by.css('.btn.btn-primary')).last();
    await browser.executeScript('arguments[0].click()', lastBlogReadMore);
    expect(true).toBe(true);
  });

});
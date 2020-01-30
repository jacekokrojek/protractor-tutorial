import { browser, ElementFinder } from 'protractor';
import { logThisMethod } from "./logger-decorators"

export class BrowserUtils {

    @logThisMethod
    public static async sendKeys(targetElement: ElementFinder, text: string) {
        await targetElement.clear();
        await targetElement.sendKeys(text);
    }

    @logThisMethod
    public static async click(targetElement: ElementFinder) {
        
        await targetElement.click();
    }

    public static scrollToElement = function(el){
        var windowHeight;
        browser.driver.manage().window().getSize()
            .then(function (windowSize) {
                windowHeight = windowSize.height;
                return el.getWebElement().getLocation();
            })
            .then(function (location) {
                return browser.executeScript('window.scrollTo(0, ' + (location.y - Math.floor(windowHeight / 2)) +');');
            });
            return browser.sleep(3000);
      };
}


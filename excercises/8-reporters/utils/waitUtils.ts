import {browser, element, by, ProtractorExpectedConditions, ExpectedConditions} from 'protractor';

const timeout: number = 10000;
const until: ProtractorExpectedConditions = ExpectedConditions;

export class WaitUtils {
    
    public static async waitLoaderInvisible (){
        let coveringElement = element(by.css("#loading"));
        await browser.wait(until.invisibilityOf(coveringElement), timeout);
    }
}


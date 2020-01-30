import { browser, element, by, ElementArrayFinder } from 'protractor';
import { WaitUtils } from '../utils/waitUtils';
import { User } from '../utils/users/user';
import { BrowserUtils } from '../utils/browserUtils';

export class SignIn {

  async get () {
    await browser.get(`/jak-to-zrobic-w-js/signin.html`);
  }

  async as(user: User){
		await BrowserUtils.sendKeys(element(by.id('usernamesignin')), user.login);
		await BrowserUtils.sendKeys(element(by.id('passwordsignin')),user.pass);
		await BrowserUtils.click(element(by.id('admin')));
    await WaitUtils.waitLoaderInvisible();
	};
  
};

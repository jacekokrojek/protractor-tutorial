import { browser, element, by } from 'protractor'
describe('Protractor workshop app', function () {
	beforeEach(async function () {
		await browser.get("/jak-to-zrobic-w-js/signin.html")
	});
	it('should have admin page with title Protractor workshop | Admin', async function () {
		await element(by.id('usernamesignin')).sendKeys(browser.params.username);
		await element(by.id('passwordsignin')).sendKeys(browser.params.password);
		await element(by.id('admin')).click();
		var pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Admin");
	});
});

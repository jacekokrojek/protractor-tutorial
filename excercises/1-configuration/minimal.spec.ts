import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	// beforeEach(function () {
	//
	// });

	it('should have home page with title Protractor workshop | Home', async function () {
		await browser.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js");
		const pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have admin page with title Protractor workshop | Admin', async function () {
		await browser.get(`/jak-to-zrobic-w-js/signin.html`);
		await element(by.id('usernamesignin')).sendKeys(browser.params.username);
		await element(by.id('passwordsignin')).sendKeys(browser.params.password);
		await element(by.id('admin')).click();
		var pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Admin");
	});

	// Zadanie: Podziel specyfikację na dwi w zalażności od testowanej strony, przenieś otwarcie strony 
	// do funkcji before, wykorzystaj parametry baseUrl

});

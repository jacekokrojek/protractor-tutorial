import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', async function () {
		await browser.get('/jak-to-zrobic-w-js');
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(await footerCopyright.getText()).toContain(expectedHTML)
	});


	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	xit('should have "Example headline 1" carousel item after entering site', function () {
		//Zadaie : Zlokalizuj i sprawdź element wykorzystując lokatory css
	});

	xit('should have correct feature header', function () {
		//Zadaie : Zlokalizuj i sprawdź element wykorzystując lokator XPath
	});
	
});

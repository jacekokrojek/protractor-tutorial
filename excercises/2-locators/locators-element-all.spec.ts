import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', async function () {
		const menuText = ["Home", "About", "Services", "Blog", "Contact"]
		await browser.get("/jak-to-zrobic-w-js");
		var menuItems = element.all(by.css('ul.nav > li > a'));
		expect(await menuItems.get(0).getText()).toEqual(menuText[0]);
	});

	/**
	* Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	* to see how map function can be used to verify content of multiple elements
	*/

	xit('should have Feature A, Feature B, Feature C sections ...', function () {
		//TODO: User map function to verify feature names
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */
	xit('should route to "Blog" pages after selecting link', function () {
		//TODO: User filter function to verify feature names
	});

});

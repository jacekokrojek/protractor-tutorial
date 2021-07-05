import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', async function () {
		const menuText = ["Home", "About", "Services", "Blog", "Contact"]
		var menuItems = element.all(by.css('ul.nav > li > a'));
		expect(await menuItems.get(0).getText()).toEqual(menuText[0]);
	});

	it('should have Feature A, Feature B, Feature C sections ...', async function () {
		const FeatureArray = ["Feature A", "Feature B", "Feature C"];
		let featureElements = element.all(by.xpath("//h2")).map((el) => {
		  return el.getText();
		});
		expect( await featureElements).toEqual(FeatureArray);
	});

	it('should route to "Blog" pages after selecting link', async function () {
		await element.all(by.css('ul.nav > li > a')).get(3).click()
		element.all(by.css('.postmetadata ul li a')).filter(
			autor =>  autor.name === 'Author Name')
	});

});

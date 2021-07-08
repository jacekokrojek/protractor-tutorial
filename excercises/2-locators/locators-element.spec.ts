import { browser, element, by } from 'protractor'

describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', async function () {
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(await footerCopyright.getText()).toContain(expectedHTML)
	});

	it('should have "Example headline 1" carousel item after entering site', async function () {
		let findHeadlineWithCss = element(by.css('.active  div.carousel-caption > h1')).getText();
		expect(await findHeadlineWithCss).toEqual("Example Headline 1");
	});

	it('should have correct feature header', async function () {
		let findHeadlineWithXpath = element(by.xpath("//h1[contains(text(), 'Example headline 1')]")).getText();
		expect(await findHeadlineWithXpath).toEqual("Example Headline 1");
	});
	
});

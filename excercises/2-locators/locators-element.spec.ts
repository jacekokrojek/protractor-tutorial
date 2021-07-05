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

	it('should have "Example headline 1" carousel item after entering site', async function () {
		let headlineWithCss = element(by.css('.active  div.carousel-caption > h1')).getText();
		expect(await headlineWithCss).toEqual("Example Headline 1");
	});

	it('should have correct feature header', async function () {
		let headlineWithXpath = element(by.xpath('//*[@id="myCarousel"]/div/div[1]/div/div/div[1]/div/h1')).getText();
		expect(await headlineWithXpath).toEqual("Example Headline 1");
	});
	
});

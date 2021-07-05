import { browser, element, by,protractor } from 'protractor';

describe('Protractor Workshop app', function() {
	beforeEach(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	it('should hide GDRP popup after clicking Accept',function(){
		let EC = protractor.ExpectedConditions;
		const gdrp = element(by.xpath('//*[@id="cookieConsentContainer"]'));
		browser.wait(EC.elementToBeClickable(gdrp), 5000);
		element(by.css("div.cookieButton a")).click();
		expect(browser.driver.wait(EC.invisibilityOf(gdrp)));
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', async function(){
		const expectedHeader = 'Example Headline 2'
		const activeCarouselHeader = element(by.xpath("//h1[contains(text(), 'Example headline 2')]"));
		const nextButton = element(by.css('a.right'));
		let EC = protractor.ExpectedConditions;
		await nextButton.click();	
		//const activeCarouselHeader = element(by.xpath('//*[@id="myCarousel"]/div/div[2]/div/div/div[1]/div/h1'));
		await browser.wait(EC.visibilityOf(activeCarouselHeader),5000);
		expect(await activeCarouselHeader.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', async function(){
		let dropdown = element.all(by.css('ul.nav > li > a'));
		await dropdown.get(1).click();
		let checkDropdown = element.all(by.css('ul.dropdown-menu > li > a'));
		checkDropdown.get(2).click();
    expect(browser.getCurrentUrl()).toEqual("http://jacekokrojek.github.io/jak-to-zrobic-w-js/about.html");
});

});

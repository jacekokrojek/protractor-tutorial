import { browser, element, by,protractor, until } from 'protractor';

describe('Protractor Workshop app', function() {
	beforeEach(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	
	it('should hide GDRP popup after clicking Accept', async function(){
		let EC = protractor.ExpectedConditions;
		let accpetGDRP = element(by.css("div.cookieButton a"))
		await accpetGDRP .isPresent();
		const gdrp = element(by.xpath('//*[@id="cookieConsentContainer"]'));
		await browser.driver.wait(EC.presenceOf(gdrp), 7000);
		await accpetGDRP.click()
		expect(await gdrp.isDisplayed()).toBe(true);
		
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', async function(){
		const expectedHeader = 'Example Headline 2'
		const nextButton = element(by.css('a.right'));
		let EC = protractor.ExpectedConditions;
		await nextButton.click();	
		const activeCarouselHeader = element(by.xpath("//h1[contains(text(), 'Example headline 2')]"));
		await browser.wait(EC.visibilityOf(activeCarouselHeader),5000);
		expect(await activeCarouselHeader.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', async function(){
		const dropDownMenuItems = ['Company','History','Team']
			await element(by.xpath("//a[contains(text(), 'About')]")).click();
			let getItemsFromDropDown = await element.all(by.xpath("//*[contains(@class, 'dropdown-menu')]/li/a")).map((el) => {
			  return el.getText();
			});
	
			expect(getItemsFromDropDown).toEqual(dropDownMenuItems);
		  });
	
		
});



import { browser, element, by } from 'protractor';

describe('Protractor Workshop app', function() {

	beforeEach(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});

	xit('should hide GDRP popup after clicking Accept', function(){
		
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', async function(){
		const expectedHeader = 'Example Headline 2'
		const activeCarouselHeader = element(by.css('div.active h1'));
		const nextButton = element(by.css('a.right'));
		await nextButton.click();
		//TODO: Replace sleep with ExpectedCondition 
		await browser.sleep(1000);
		expect(await activeCarouselHeader.getText()).toEqual(expectedHeader)
	});
	
	xit('should display drop down after clicking on About menu item', function(){
		
	});

});

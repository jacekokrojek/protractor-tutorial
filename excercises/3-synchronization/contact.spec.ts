import { browser, element, by, protractor} from 'protractor';

describe('Protractor Workshop app', function() {

	beforeEach(async function () {
		await browser.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html");
	});

	it('should display text "Your message has been sent." when user sends a message', async function(){
		const name ="name noname";
		const email = "namenoname@gmail.com";
		const content = "check content";
		const succes = "Your message has been sent."
		const findkSuccessInformation = element(by.xpath("//h4[contains(text(), 'Your message has been sent.')]"));
			await element(by.id("name")).sendKeys(name)
    		await element(by.id("email")).sendKeys(email)
    		await element(by.id("content")).sendKeys(content)
			await element(by.css(".test")).click();
			let EC = protractor.ExpectedConditions;
			await browser.wait(EC.visibilityOf(findkSuccessInformation),5000);
			let getSuccess = await element(by.css(".alert-success"))	
			expect(getSuccess.isPresent()).toBe(true);	

		});

});

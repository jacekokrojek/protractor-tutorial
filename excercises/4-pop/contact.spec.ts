import { ContactPage } from './pages/contact';
import { browser, element, by,protractor} from 'protractor';
describe('Protractor Workshop app', function() {
	const contactPage: ContactPage = new ContactPage();
	beforeEach(function () {
		contactPage.get();
	});

	it('should display text "Your message has been sent." when user sends a message', async function(){
		const success = "Your message has been sent."
		await contactPage.fillUpFormAndSubmitt("name noname","name.noname@gmail.com","content");		
		const findkSuccessInformation = element(by.xpath("//h4[contains(text(), 'Your message has been sent.')]"));
		let EC = protractor.ExpectedConditions;
		await browser.wait(EC.visibilityOf(findkSuccessInformation),5000);
		expect(findkSuccessInformation.isDisplayed()).toBe(true);

	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', async function(){
		await contactPage.openContact()
		const contactPageItems = ["Get in Touch","Address"];
		expect(await contactPage.getSectionTitles()).toEqual(contactPageItems);
	});

});

import { ContactPage } from './pages/contact';
import { browser, element, by,protractor} from 'protractor';
describe('Protractor Workshop app', function() {
	const contactPage: ContactPage = new ContactPage();
	beforeEach(function () {
		contactPage.get();
	});

	it('should display text "Your message has been sent." when user sends a message', async function(){
		const success = "Your message has been sent."
<<<<<<< HEAD
		await contactPage.fillUpFormAndSubmitt("name noname","name.noname@gmail.com","content");		
		expect(contactPage.getSuccessInformation()).toEqual(success);

=======
		await contactPage.fillUpFormAndSubmitt("name noname","name.noname@gmail.com","content");
		let getSuccess = await element(by.css(".alert-success"))	
		expect(getSuccess.isPresent()).toBe(true);	
>>>>>>> 522a6ffe0993597c0e9d65a63cf7f665690e3a30
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', async function(){
		await contactPage.openContact()
		const contactPageItems = ["Get in Touch","Address"];
		expect(await contactPage.getSectionTitles()).toEqual(contactPageItems);
	});

});

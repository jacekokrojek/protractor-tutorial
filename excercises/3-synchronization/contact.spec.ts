import { browser } from 'protractor';

describe('Protractor Workshop app', function() {

	beforeEach(async function () {
		await browser.get("jak-to-zrobic-w-js/contact.html");
	});

	xit('should display text "Your message has been sent." when user sends a message', function(){
	});

});

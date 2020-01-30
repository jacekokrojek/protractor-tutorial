import { HomePage } from './pages';

describe('Protractor Workshop app', function() {

	const homePage: HomePage = new HomePage();
	beforeEach(async function () {
		await homePage.get();
	});

	it('hould have home page with title Protractor workshop | Home', async function(){
		expect(await homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	xit('should have Feature A, Feature B, Feature C sections ...', function () {
		//TODO: add new function to homePage class and implement the test
	});

	xit('should have Contact menu item that redirects to correct link to Contact us page', async function(){
		//TODO: implement menu class and implement the test
	});

});

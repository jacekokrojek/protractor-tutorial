import { HomePage} from './pages';
import {browser} from 'protractor'
describe('Protractor Workshop app', function() {

	const homePage: HomePage = new HomePage();
	beforeEach(async function () {
		await homePage.get();
	});

	it('hould have home page with title Protractor workshop | Home', async function(){
		expect(await homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have Feature A, Feature B, Feature C sections ...', async function () {
		const FeatureArray = ["Feature A", "Feature B", "Feature C"];
		expect(await homePage.getAllFeatures()).toEqual(FeatureArray);
	});

	it('should have Contact menu item that redirects to correct link to Contact us page', async function(){
		await homePage.openContact();
		expect((await browser.getCurrentUrl())).toEqual('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html')
	});

});

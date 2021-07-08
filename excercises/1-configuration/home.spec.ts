import { browser} from 'protractor'
describe('Protractor workshop app', function () {
	beforeEach(async function () {
	await browser.get("/jak-to-zrobic-w-js")
	});

	it('should have home page with title Protractor workshop | Home', async function () {
		const pageTitle = await browser.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});
})
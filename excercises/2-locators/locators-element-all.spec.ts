import { browser, element, by } from 'protractor'


describe('Protractor workshop app', function () {

	beforeAll(async function () {
		await browser.get("/jak-to-zrobic-w-js");
	});
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', async function () {
		const menuText = ["Home", "About", "Services", "Blog", "Contact"]
		let menuItems = element.all(by.css('ul.nav > li > a')).map((el)=>{
			return el.getText();
		})
		expect(await menuItems).toEqual(menuText);
	});

	it('should have Feature A, Feature B, Feature C sections ...', async function () {
		const FeatureArray = ["Feature A", "Feature B", "Feature C"];
		let featureElements = element.all(by.xpath("//h2")).map((el) => {
		  return el.getText();
		});
		expect( await featureElements).toEqual(FeatureArray);
	});

	it('should route to "Blog" pages after selecting link', async function () {
		const authorList = [ 'Author Name', 'Author Name'] 
		await element(by.xpath("//a[contains(text(), 'Blog')]")).click();
		let getauthorNames = await element.all(by.css(".postmetadata>ul>li")).map(async (el) => await el.getText())
		let  filterAuthorNames = getauthorNames.filter((el) => el == 'Author Name')
		expect(filterAuthorNames).toEqual(authorList);
	});

});
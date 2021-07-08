import { browser, element, by } from 'protractor'
import { getLeadingCommentRanges } from 'typescript';

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
		const allAuthorNames = [ 'Author Name', 'Author Name', 'Author Name', 'Author Name', 'Author Name' ] 
		await element(by.xpath("//a[contains(text(), 'Blog')]")).click();
		function onlynames(autor){
			return autor === 'Author Name' 
		}
		let getAuthorNames = await element.all(by.xpath("//*/a[contains(text(), 'Author Name')]")).map((autor)=>{
			return autor.getText();
		})
		getAuthorNames.filter(onlynames);
				
		expect(getAuthorNames).toEqual(allAuthorNames);
	
	});

});

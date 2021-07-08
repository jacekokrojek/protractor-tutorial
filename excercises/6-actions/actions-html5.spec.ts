import { browser, element, by, protractor } from 'protractor'
import * as fs from 'fs';


let script = fs.readFileSync('excercises/6-actions/dnd.js')

describe('Protractor workshop app', function () {

	it('should drag and drop but this does not works!',async function () {
		browser.get('https://the-internet.herokuapp.com/drag_and_drop');

		let a = element(by.css('#column-a'))
		let b = element(by.css('#column-b'))
		browser.actions().dragAndDrop(await b.getWebElement(), await a.getWebElement()).perform();
		await browser.sleep(5000);
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});

	it('should allow for drag and drop workaround', async function () {
		await browser.get('https://the-internet.herokuapp.com/drag_and_drop');
		await browser.executeScript(script.toString() + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});


});

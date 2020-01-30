import { browser, element, by } from 'protractor'
import * as fs from 'fs';

// Based on http://elementalselenium.com/tips/39-drag-and-drop
let script = fs.readFileSync('excercises/6-actions/dnd.js')

describe('Protractor workshop app', function () {

	xit('should drag and drop but this does not works!', async function () {
		await browser.get('https://the-internet.herokuapp.com/drag_and_drop');
		let a = element(by.css('#column-a'))
		let b = element(by.css('#column-b'))
		await browser.actions().dragAndDrop(a,b).perform();
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});

	it('should allow for drag and drop workaround', async function () {
		await browser.get('https://the-internet.herokuapp.com/drag_and_drop');
		await browser.executeScript(script.toString() + "$('#column-a').simulateDragDrop({ dropTarget: '#column-b'});")
		let a = element(by.css('#column-a'))
		expect( await element(by.css('#column-a')).getText()).toBe ("B")
	});


});

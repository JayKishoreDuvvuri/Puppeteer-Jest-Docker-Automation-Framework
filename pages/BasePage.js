import { baseUrl, timeout } from "../config";
import { homePageImage } from "../utils/locators";

export default class BasePage {
	constructor(path, timeout) {
		this.path = path;
		this.timeout = timeout;
	}

	async wait(time) {
		await page.waitFor(time);
	}

	async getTitle() {
		return await page.title();
	}

	async open() {
		if (!this.path) {
			await page.goto(baseUrl);
		} else {
			await page.goto(this.path);
		}
	}

	async getUrl() {
		return await page.url();
	}

	//Wait for the Page to Load
	async waitForPageLoad() {
		const isVisible = await page.waitForSelector(homePageImage, { timeout: timeout, visible: true });
		return isVisible;
	}

	//wait and find a specific element with it's Selector and return Visible
	async isElementVisible(selector) {
		let isVisible = true;
		await page
			.waitForSelector(selector, { visible: true, timeout: timeout })
			.catch(() => {
				isVisible = false;
			});
		return isVisible;
	}

	// wait and find a specific element with it's XPath and return Visible
	async isXPathVisible(selector) {
		let isVisible = true;
		await page
			.waitForXPath(selector, { visible: true, timeout: timeout })
			.catch(() => {
				isVisible = false;
			});
		return isVisible;
	}

	// wait and type for the element
	async waitAndType(Selector, text) {
		await page.waitForSelector(Selector);
		await page.click(Selector, { clickCount: 3 });
		await page.keyboard.press('Backspace');
		await page.type(Selector, text);
	}

	// wait and click the element 
	async waitAndClick(Selector) {
		await page.waitForSelector(Selector);
		return page.click(Selector);
	}

	// wait and click for the xpath selector
	async waitAndClickXpath(Selector) {
		await page.waitForXPath(Selector);
		await page.click(Selector);
	}

	// Get text of the element
	async getText(Selector) {
		await page.waitForSelector(Selector);
		const text = await page.$eval(Selector, element => element.innerHTML);
		return text;
	}

	// Get Count of the elements
	async getCount(Selector) {
		await page.waitForSelector(Selector);
		const count = await page.$$eval(Selector, elements => elements.length);
		return count;
	}


}

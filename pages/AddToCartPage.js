import BasePage from './BasePage';
import { addToCartButton, successMessage, cartAddedMessage, closeBtn, itemCount, productCount, printedChiffonDress } from '../utils/locators';


class AddToCartPage extends BasePage {
	async printedChiffonDress() {
		await this.isElementVisible(printedChiffonDress);
	}

	async clickChiffonDress() {
		await this.waitAndClick(printedChiffonDress);
	}

	async clickAddToCart() {
		return await this.waitAndClick(addToCartButton);
	}

	async  cartAddedMessage() {
		return await this.isXPathVisible(cartAddedMessage);
	}

	async cartSuccessMessage() {
		return await this.isElementVisible(successMessage);
	}

	async cartCount() {
		await this.waitAndClick(closeBtn);
		return await this.getText(itemCount);
	}
}
export default new AddToCartPage();
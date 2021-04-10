import ProductPage from '../pages/ProductPage';
import LandingPage from '../pages/LandingPage';
import { jestTimeout, timeout } from '../config';
import { productPageTitle, productPageUrl, totalProductPrice } from '../utils/locators';

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Add quantity as 5 items to the Cart
// ### 4. Check the Total Price of the products selected

describe('Add the product quantity as five to the cart and check the total price', () => {
    beforeAll(async () => {
        jest.setTimeout(jestTimeout);
        await LandingPage.open();
        await LandingPage.wait(timeout);
    });

    it('Check the title and url on the Landing Page', async () => {
        await LandingPage.getTitle();
        await LandingPage.getUrl();
        await LandingPage.waitForPageLoad();
    });

    it('Click on the 5th Product with 5% discount on the Landing Page', async () => {
        await ProductPage.printedSummerDress();
        await ProductPage.verifyTitle();
        expect(await ProductPage.getTitle()).toEqual(productPageTitle);
        expect(await ProductPage.getUrl()).toEqual(productPageUrl);
    });

    it('Add quantity as 5 for the product', async () => {
        await ProductPage.addQuantity();
    });

    it('Check whether the Total price is accurate from the Cart', async () => {
        const result = await ProductPage.verifyTotalPrice();
        expect(result).toEqual(totalProductPrice)
    });
});
